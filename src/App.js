import Cards from "./components/Cards";
import Header from "./components/Header";
import { useEffect, useState } from "react"
import { DiAndroid } from "react-icons/di";
import { DiApple } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiFirefox } from "react-icons/di";
import { DiIe } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { CgFormatJustify } from "react-icons/cg";


function App() {
  const BLANK_CARD = <CgFormatJustify className="w-full h-20"/>
  const [imagesArray, setImagesArray] = useState([])    
  const [cardsChosen, setCardsChosen] = useState([])    
  const [cardsChosenIds, setCardsChosenIds] = useState([])    
  const [points, setPoints] = useState(0)
  const [openCards, setOpenCards] = useState([])

  const imagesss = ["https://progitek.no/privat/bp/wp-content/uploads/2021/09/pexels-cottonbro-4910769.jpg","https://progitek.no/privat/bp/wp-content/uploads/2021/09/pexels-rachel-claire-5490707.jpg", "https://progitek.no/privat/bp/wp-content/uploads/2021/09/pexels-helena-lopes-2253275.jpg","https://progitek.no/privat/bp/wp-content/uploads/2021/09/pexels-kendra-coupland-2642167.jpg","https://progitek.no/privat/bp/wp-content/uploads/2021/09/pexels-funny-foxy-pride-6244506.jpg","https://progitek.no/privat/bp/wp-content/uploads/2021/09/pexels-marko-blazevic-774731.jpg"];
  const images = [<DiAndroid className="w-full h-20"/>,<DiApple className="w-full h-20"/>, <DiGithubBadge className="w-full h-20"/>, <DiFirefox className="w-full h-20"/>,<DiIe className="w-full h-20"/>,<DiPython className="w-full h-20"/>];

  function createCardBoard() {
    const imagesGenerated = images?.concat(...images)
    console.log(imagesGenerated)
    const shuffledArray = shuffleArray(imagesGenerated)
    setImagesArray(shuffledArray)
}

function flipImage(image, index) {
    // CHECK IF IMAGE IS SELECTED
    console.log(image, index)

    if (cardsChosenIds?.length === 1 && cardsChosenIds[0] === index) {
        return
    }

    // Check if 
    if (cardsChosen?.length < 2) {

        setCardsChosen(cardsChosen => cardsChosen?.concat(image))
        setCardsChosenIds(cardsChosenIds => cardsChosenIds?.concat(index))

        if (cardsChosen?.length === 1) {
            // Check if images are the same
            if (cardsChosen[0] === image) {
                setPoints(points => points + 2)
                setOpenCards(openCards => openCards?.concat([cardsChosen[0], image]))
            }
            setTimeout(() => {
                setCardsChosenIds([])
                setCardsChosen([])
            }, 700)
            
        } 
    }
}

function isCardChosen(image, index) {
    return cardsChosenIds?.includes(index) || openCards?.includes(image)
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array)
    return array
}

function startOver() {
    setCardsChosenIds([])
    setCardsChosen([])
    setPoints(0)
    setOpenCards([])
}

useEffect(() => {
    createCardBoard()
}, [])

  return (
    <div>
            <h2>MemoryGame</h2>
            <h3>Points: {points}</h3>
            <button onClick={startOver}>Start over</button>
            <div className="grid grid-cols-4 gap-3">
                {imagesArray?.map((image, index) => {
                    return (
                        // <div className="" key={index} onClick={() => flipImage(image, index)}>
                        //     <img src={isCardChosen(image, index) ? image : BLANK_CARD} alt="" className={`img-fluid img-fixed`} />
                        // </div>
                        <div className= {isCardChosen(image,index) ? "bg-blue-200" : "bg-red-200"} key={index} onClick={() => flipImage(image, index)}>
                          
                          <span className="">{isCardChosen(image,index) ? image : BLANK_CARD}</span>
                        </div>
                    )
                })}
            </div>
      </div>
  );
}

export default App;
