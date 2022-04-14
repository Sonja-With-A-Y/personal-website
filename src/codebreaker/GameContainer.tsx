import React from 'react';
import GameBoard from "./GameBoard"

export default function GameContainer() {
  return(
    <div className="container">
      <h1>Codebreaker</h1>
      <GameBoard />
    </div>
  )
}