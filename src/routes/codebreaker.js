import NavBar from "../NavBar";
import GameBoard from "../codebreaker/GameBoard";

export default function Profile() {
  return (
    <div className="flex justify-center align-middle bg-background h-screen">
      <NavBar />
      <GameBoard />
    </div>
  )
}