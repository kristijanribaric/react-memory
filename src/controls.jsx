import React from 'react'
import { Button } from "@material-ui/core";

const Controls = ({moves, bestScore, handleRestart}) => {
  return (
    <div className="text-center bg-gray-100 py-6 shadow-md">
        <div className="flex justify-center" >
          <div className="px-2">
             Moves: {moves}
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="px-2" >
              Best Score: {bestScore}
            </div>
          )}
        </div>
        <div className="my-3" >
          <Button onClick={handleRestart} color="primary" variant="contained">
            Restart
          </Button>
        </div>
      </div>
  )
}

export default Controls