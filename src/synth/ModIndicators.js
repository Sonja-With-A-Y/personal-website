export default function ModIndicators() {
  return(
    <div className="flex flex-col h-32 justify-evenly">

      <div className="flex items-center">
      <p className="text-xs text-green-600 mr-1">A</p>
      <div className="h-2 w-2 border border-green-600" />
      </div>

      <div className="flex items-center">
      <p className="text-xs text-green-600 mr-1">F</p>
      <div className="h-2 w-2 border border-green-600" />
      </div>

      <div className="flex items-center">
      <p className="text-xs text-green-600 mr-1">P</p>
      <div className="h-2 w-2 border border-green-600" />
      </div>

    </div>
  )
}