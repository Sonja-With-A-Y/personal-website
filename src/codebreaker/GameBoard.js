import React, { useState } from 'react';
import PegGridRow from "./PegGridRow"
import { VscCircleLargeFilled } from "react-icons/vsc";

export default function GameBoard() {
  const colors = ["red", "green", "blue", "yellow", "purple", "pink"]
  const [answer, setAnswer] = useState([])

  
  if (answer.length !== 5) {
    let temp = []
    for (let i=0;i<5;i++) {
      let rand = Math.floor(Math.random() * 6)
      temp[i] = colors[rand]
    }
    setAnswer(temp)
  }
  

  const [blackPegs, setBlackPegs] = useState([0, 0, 0, 0, 0, 0])
  const [whitePegs, setWhitePegs] = useState([0, 0, 0, 0, 0, 0])

  const [turnNum, setTurnNum] = useState(1)
  const [chosenColor, setChosenColor] = useState("red")
  const [guessPegColors, setGuessPegColors] = useState([
    ["grey", "grey", "grey", "grey", "grey"],
    ["grey", "grey", "grey", "grey", "grey"],
    ["grey", "grey", "grey", "grey", "grey"],
    ["grey", "grey", "grey", "grey", "grey"],
    ["grey", "grey", "grey", "grey", "grey"],
    ["grey", "grey", "grey", "grey", "grey"],
  ]);
  const [turnDisplay, setTurnDisplay] = useState("Turn: 1")
  const [gameOver, setGameOver] = useState(false)

  const handleColorPick = color => {
    setChosenColor(color)
  }

  const handleGuessPegColorChange = (rowNum, colNum) => {
    if (rowNum == (turnNum-1)) {
      setGuessPegColors((prevState) => {
        prevState[rowNum][colNum] = chosenColor
        return {
          ...prevState
        }
      })
    }
  }

  const handleSubmit = () => {
    console.log(answer)
    if (gameOver == false && ! guessPegColors[turnNum-1].includes("grey")) {
      let win = false
      if (JSON.stringify(guessPegColors[turnNum-1]) === JSON.stringify(answer)) {
        win = true
        setGameOver(true)
      } else {
          let tempAnswer = answer.slice()
          let whiteCheck = []
          let blackCount = 0
          for (let i=0;i<5;i++) {
            if (guessPegColors[turnNum-1][i] == answer[i]) {
                tempAnswer[i] = "tan"
                blackCount += 1
            } else {
              whiteCheck.push(guessPegColors[turnNum-1][i]);
            }                  
          }

          let whiteCount = 0
          for (let i=0;i<tempAnswer.length;i++) {
            if (whiteCheck.includes(tempAnswer[i])) {
              whiteCheck[whiteCheck.indexOf(tempAnswer[i])] = 0
              whiteCount += 1
            }
          }

          setBlackPegs((prevState) => {
            prevState[turnNum-1] = blackCount
            return {
              ...prevState
            }
          })

          setWhitePegs((prevState) => {
            prevState[turnNum-1] = whiteCount
            return {
              ...prevState
            }
          })
        }

        setTurnDisplay(() => {
          if (win === true) {
            return ( "You won on turn "  + (turnNum).toString() )
          } else if (turnNum == 6) {
            return ( "You lost. Answer was: " + answer)
          } else {
            return ( "Turn: " + (turnNum+1).toString() )
          }
        })

        if (turnNum == 6) {
          setGameOver(true)
        }

        setTurnNum(turnNum+1)
    }
  }

  const handleReset = () => {
    setAnswer([]);
    setBlackPegs([0, 0, 0, 0, 0, 0]);
    setWhitePegs([0, 0, 0, 0, 0, 0]);
    setTurnNum(1);
    setChosenColor("red");
    setGuessPegColors([
      ["grey", "grey", "grey", "grey", "grey"],
      ["grey", "grey", "grey", "grey", "grey"],
      ["grey", "grey", "grey", "grey", "grey"],
      ["grey", "grey", "grey", "grey", "grey"],
      ["grey", "grey", "grey", "grey", "grey"],
      ["grey", "grey", "grey", "grey", "grey"],
    ]);
    setTurnDisplay("Turn: 1");
    setGameOver(false)
  }


  return(
    <div className="flex flex-col bg-blue-400 h-3/5 gap-y-4 mt-20 p-2 rounded-3xl">
        
      <PegGridRow handleGuessPegColorChange={handleGuessPegColorChange} guessPegColors={guessPegColors} handleColorPick={handleColorPick} blackPegs={blackPegs} whitePegs={whitePegs} rowNum="5" color="red" />
      <PegGridRow handleGuessPegColorChange={handleGuessPegColorChange} guessPegColors={guessPegColors} handleColorPick={handleColorPick} blackPegs={blackPegs} whitePegs={whitePegs} rowNum="4" color="green" />
      <PegGridRow handleGuessPegColorChange={handleGuessPegColorChange} guessPegColors={guessPegColors} handleColorPick={handleColorPick} blackPegs={blackPegs} whitePegs={whitePegs} rowNum="3" color="blue" />
      <PegGridRow handleGuessPegColorChange={handleGuessPegColorChange} guessPegColors={guessPegColors} handleColorPick={handleColorPick} blackPegs={blackPegs} whitePegs={whitePegs} rowNum="2" color="yellow" />
      <PegGridRow handleGuessPegColorChange={handleGuessPegColorChange} guessPegColors={guessPegColors} handleColorPick={handleColorPick} blackPegs={blackPegs} whitePegs={whitePegs} rowNum="1" color="purple" />
      <PegGridRow handleGuessPegColorChange={handleGuessPegColorChange} guessPegColors={guessPegColors} handleColorPick={handleColorPick} blackPegs={blackPegs} whitePegs={whitePegs} rowNum="0" color="pink" />

      <div className="flex justify-between items-center">
        <label className="flex-grow">{turnDisplay}</label>

        <button type="reset"
           onClick={() => {handleReset();}} className="bg-blue-500 mx-1 flex-grow rounded-2xl">
        Reset
        </button>

        <button type="submit"
          onClick={() => {handleSubmit();}} className="bg-blue-500 mx-1 flex-grow rounded-2xl">
        Submit
        </button>

        <VscCircleLargeFilled color={chosenColor} className="h-10 w-10 flex-grow"/>

      </div>          
    </div>
  )
}