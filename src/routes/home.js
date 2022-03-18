import NavBar from "../NavBar";

export default function Home() {

  return (
    <div className="light">
      <div className="flex justify-center align-middle bg-lmbackground dark:bg-dmbackground h-screen">
        <NavBar />
        <h1 className="text-3xl text-lmtext dark:text-dmtext">Home</h1>
      </div>
    </div>
  );
  }