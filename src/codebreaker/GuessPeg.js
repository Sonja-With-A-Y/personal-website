import { VscCircleLargeFilled } from "react-icons/vsc";

export default function GuessPeg(props) {
  const rowNum = props.rowNum
  const colNum = props.colNum
  const pegColor = (props) ? props.guessPegColors[rowNum][colNum] : "grey"

  return(
    <VscCircleLargeFilled onClick={ () => props.handleGuessPegColorChange(rowNum, colNum) } className="w-10 h-10" style={{color: pegColor }} />
  )
}
