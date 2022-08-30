import React from "react"
import { VscCircleLargeFilled } from "react-icons/vsc";

interface Props {
  rowNum: number;
  colNum: number;
  guessPegColors: string[];
  handleGuessPegColorChange: any;
}

export default function GuessPeg(props: Props) {
  const rowNum = props.rowNum
  const colNum = props.colNum
  const pegColor = (props) ? props.guessPegColors[rowNum][colNum] : "grey"

  return(
    <VscCircleLargeFilled onClick={ () => props.handleGuessPegColorChange(rowNum, colNum) } className="w-10 h-10" style={{color: pegColor }} />
  )
}
