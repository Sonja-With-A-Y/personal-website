import React from "react"

export default function Key(props) {

  return(
    <div>
      <div className="h-8 w-8 items-middle border border-green-600 m-1">
        <p className="text-green-600 text-center align-middle">{props.note}</p>
      </div>
    </div>
  )
}