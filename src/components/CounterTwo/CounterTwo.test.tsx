import { render, screen } from '@testing-library/react'
import { describe, expect, it, vitest } from 'vitest'
import user from '@testing-library/user-event'
import CounterTwo from '.'

describe('CounterTwo', () => {
  it('renders correctly', () => {
    render(<CounterTwo count={0} />)

    const headingTitle = screen.getByRole('heading')

    expect(headingTitle).toBeInTheDocument()
  })

  it('handlers are called', async () => {
    const incrementHandler = vitest.fn()
    const decrementHandler = vitest.fn()

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    )

    const btnIncrement = screen.getByRole('button', { name: /increment/i })
    const btnDecrement = screen.getByRole('button', { name: /decrement/i })

    expect(btnIncrement).toBeInTheDocument()
    expect(btnDecrement).toBeInTheDocument()

    await user.click(btnIncrement)
    await user.click(btnDecrement)

    expect(incrementHandler).toBeCalled()
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})
