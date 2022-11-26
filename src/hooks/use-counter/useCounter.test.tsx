import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  it('should render the initial count', () => {
    const { result } = renderHook(useCounter)

    const { count } = result.current

    expect(count).toBe(0)
  })

  it('should render the initial count when passed as parameter', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 2 },
    })

    const { count } = result.current

    expect(count).toBe(2)
  })

  it('should increment the count', () => {
    const { result } = renderHook(useCounter)

    act(() => result.current.increment())

    expect(result.current.count).toBe(1)
  })

  it('should decrement the count', () => {
    const { result } = renderHook(useCounter)

    act(() => result.current.decrement())

    expect(result.current.count).toBe(-1)
  })
})
