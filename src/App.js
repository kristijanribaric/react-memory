import Header from "./components/Header";
import Card from "./components/card";
import Controls from "./controls";
import Footer from "./footer";
import { useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle
} from "@material-ui/core";

// Icons
import { DiAndroid } from "react-icons/di";
import { DiApple } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiFirefox } from "react-icons/di";
import { DiIe } from "react-icons/di";
import { DiPython } from "react-icons/di";

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

const uniqueElementsArray  = [<DiAndroid className="w-full h-2/3"/>,<DiApple className="w-full h-2/3"/>, <DiGithubBadge className="w-full h-2/3"/>, <DiFirefox className="w-full h-2/3"/>,<DiIe className="w-full h-2/3"/>,<DiPython className="w-full h-2/3"/>];


function App() {
 
  const [cards, setCards] = useState(
    shuffleCards.bind(null, uniqueElementsArray.concat(uniqueElementsArray))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };

  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === uniqueElementsArray.length) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };
  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 600);
  };
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    setCards(shuffleCards(uniqueElementsArray.concat(uniqueElementsArray)));
  };


  return (
    <div className="App">
      <Header />
      <div className="grid grid-cols-4 grid-rows-3 w-4/5 md:w-2/3 lg:w-1/3 h-[520px] m-auto my-6 gap-4">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
      <Controls moves={moves} bestScore={bestScore} handleRestart={handleRestart}/>
      <Footer />
      <Dialog
        open={showModal}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="animate-bounce text-center">
          Congrats!!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="text-center">
            You completed the game in {moves} moves.
             {/* Your best score is 
            {" " + bestScore} moves. */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} color="primary" variant="contained">
            Restart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
