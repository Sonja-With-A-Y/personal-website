import NavBar from "../NavBar";
import GameBoard from "../codebreaker/GameBoard";

export default function Profile() {
  return (
    <div className="flex justify-center align-middle bg-gray-400 h-screen">
      <NavBar />
      <GameBoard />
    </div>
  )
}