import NavBar from "../NavBar";
import RGBGame from "../RGBGame";

export default function Profile() {
  return (
    <div className="flex flex-wrap justify-center items-start bg-background h-screen w-auto">
      <NavBar />
      <h1 className="text-3xl text-text text-center w-screen">Werewolf</h1>
      <RGBGame />
    </div>
  )
}