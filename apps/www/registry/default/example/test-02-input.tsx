import { ChangeEvent, useState } from "react"

type Props = {
  min: number
  max: number
}

FavoriteNumber.defaultProps = {
  min: 1,
  max: 9,
}

export default function FavoriteNumber({ min, max }: Props) {
  const [number, setNumber] = useState(0)
  const [numberEntered, setNumberEntered] = useState(false)
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNumber(Number(event.target.value))
    setNumberEntered(true)
  }
  const isValid = !numberEntered || (number >= min && number <= max)
  return (
    <div>
      <label htmlFor="favorite-number">Favorite Number</label>
      <input
        id="favorite-number"
        type="number"
        value={number}
        onChange={handleChange}
      />
      {isValid ? null : <div role="alert">The number is invalid</div>}
    </div>
  )
}
