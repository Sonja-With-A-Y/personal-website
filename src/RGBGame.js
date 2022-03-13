export default function RGBGame() {
  const guessColor = [23, 187, 210]

  return(
      <div className="flex flex-col h-2/3 w-2/5 bg-black mb-auto">
        <div className="m-5 h-4/5 w-auto bg-red-700" />
        <form classname="flex flex-wrap">

          <label className="mx-2 text-text">Guess Form:</label>
          <div className="h-1" />

          <label className="mx-2 text-red-700">Red</label>
          <input type="text" className="bg-text" />
          <div className="h-1" />

          <label className="mx-2 text-blue-700">Blue</label>
          <input type="text" className="bg-text" />
          <div className="h-1" />

          <label className="mx-2 text-green-700">Green</label>
          <input type="text" className="bg-text" />

        </form>
      </div>
  )
}