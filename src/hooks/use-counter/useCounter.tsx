import { useState } from 'react'
import { UserCounterProps } from './useCounter.types'

export const useCounter = ({ initialCount = 0 }: UserCounterProps = {}) => {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)

  return { count, increment, decrement }
}
