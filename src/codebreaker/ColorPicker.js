import { VscCircleLargeFilled } from "react-icons/vsc";

export default function ColorPicker(props) {
  return(
    <VscCircleLargeFilled onClick={ () => props.handleColorPick(props.color) } className="w-10 h-10 ml-5" style={{color: props.color}} />
  )
}
