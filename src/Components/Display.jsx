import { useSelector } from "react-redux"

const Display = () => {
    const counterValue = useSelector(
        (state)=> state.counter
    )
    return (
    <>
        <p className="fw-bold fs-4 text-primary fst-italic">VALUE OF COUNTER : {counterValue}</p>
    </>
  )
}

export default Display