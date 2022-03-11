import GuessPeg from "./GuessPeg"
import ColorPicker from "./ColorPicker"

export default function PegGridRow(props) {
  return(
    <div className="flex">
      <div>{props.blackPegs[props.rowNum]}B<br />{props.whitePegs[props.rowNum]}W</div>
      <div><GuessPeg handleGuessPegColorChange={props.handleGuessPegColorChange} guessPegColors={props.guessPegColors} rowNum={props.rowNum} colNum="0" /></div>
      <div><GuessPeg handleGuessPegColorChange={props.handleGuessPegColorChange} guessPegColors={props.guessPegColors} rowNum={props.rowNum} colNum="1" /></div>
      <div><GuessPeg handleGuessPegColorChange={props.handleGuessPegColorChange} guessPegColors={props.guessPegColors} rowNum={props.rowNum} colNum="2" /></div>
      <div><GuessPeg handleGuessPegColorChange={props.handleGuessPegColorChange} guessPegColors={props.guessPegColors} rowNum={props.rowNum} colNum="3" /></div>
      <div><GuessPeg handleGuessPegColorChange={props.handleGuessPegColorChange} guessPegColors={props.guessPegColors} rowNum={props.rowNum} colNum="4" /></div>
      <div><ColorPicker handleColorPick={props.handleColorPick} color={props.color} /></div>
    </div>
  )
}
