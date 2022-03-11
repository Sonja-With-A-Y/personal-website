import PegGridRow from "./PegGridRow"

export default function PegGrid(props) {
  return(
      <tablebody>
        <PegGridRow handleGuessPegColorChange={props.handleGuessPegColorChange} guessPegColors={props.guessPegColors} handleColorPick={props.handleColorPick} blackPegs={props.blackPegs} whitePegs={props.whitePegs} rowNum="5" color="red" />
        <PegGridRow handleGuessPegColorChange={props.handleGuessPegColorChange} guessPegColors={props.guessPegColors} handleColorPick={props.handleColorPick} blackPegs={props.blackPegs} whitePegs={props.whitePegs} rowNum="4" color="green" />
        <PegGridRow handleGuessPegColorChange={props.handleGuessPegColorChange} guessPegColors={props.guessPegColors} handleColorPick={props.handleColorPick} blackPegs={props.blackPegs} whitePegs={props.whitePegs} rowNum="3" color="blue" />
        <PegGridRow handleGuessPegColorChange={props.handleGuessPegColorChange} guessPegColors={props.guessPegColors} handleColorPick={props.handleColorPick} blackPegs={props.blackPegs} whitePegs={props.whitePegs} rowNum="2" color="yellow" />
        <PegGridRow handleGuessPegColorChange={props.handleGuessPegColorChange} guessPegColors={props.guessPegColors} handleColorPick={props.handleColorPick} blackPegs={props.blackPegs} whitePegs={props.whitePegs} rowNum="1" color="purple" />
        <PegGridRow handleGuessPegColorChange={props.handleGuessPegColorChange} guessPegColors={props.guessPegColors} handleColorPick={props.handleColorPick} blackPegs={props.blackPegs} whitePegs={props.whitePegs} rowNum="0" color="pink" />
      </tablebody>
  )
}