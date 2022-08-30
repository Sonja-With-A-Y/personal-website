import React from "react"
import { VscCircleLargeFilled } from "react-icons/vsc";

interface Props {
  color: string;
  handleColorPick: any;
}

export default function ColorPicker(props: Props) {
  return(
    <VscCircleLargeFilled onClick={ () => props.handleColorPick(props.color) } className="w-10 h-10 ml-5" style={{color: props.color}} />
  )
}
