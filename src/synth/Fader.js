export default function Fader() {
  return(
    <div className="flex justify-end content-center border border-red-600 h-32 w-10 p-1">
      <p className="flex my-auto text-xs text-green-600 m-1">
        C<br />U<br />T<br />O<br />F<br />F
      </p>
      <div className="flex h-9/10 w-3 border border-green-600 p-1">
        <div className="flex h-3/5 w-1 mt-auto bg-green-600" />
      </div>
    </div>
  )
}