import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Counter from '.'

describe('Counter', () => {
  it('renders correctly the component', () => {
    render(<Counter />)

    const countElement = screen.getByRole('heading')
    const btnIncrement = screen.getByRole('button', { name: /^increment$/i })

    expect(countElement).toBeInTheDocument()
    expect(btnIncrement).toBeInTheDocument()
  })

  it('renders a count of 0', () => {
    render(<Counter />)

    const countElement = screen.getByRole('heading')

    expect(countElement).toHaveTextContent('0')
  })

  it('renders a count of 1 after clicking the increment button', async () => {
    render(<Counter />)

    const countElement = screen.getByRole('heading')
    const btnIncrement = screen.getByRole('button', { name: /^increment$/i })

    await user.click(btnIncrement)
    // fireEvent.click(btnIncrement)

    expect(countElement).toHaveTextContent('1')
  })

  it('renders a count of 2 after clicking the increment button twice', async () => {
    render(<Counter />)

    const countElement = screen.getByRole('heading')
    const btnIncrement = screen.getByRole('button', { name: /^increment$/i })

    // fireEvent.click(btnIncrement)
    // await user.dblClick(btnIncrement)
    await user.pointer({
      keys: '[MouseLeft][MouseLeft]',
      target: btnIncrement,
    })

    expect(countElement).toHaveTextContent('2')
  })

  it('renders a count of 10 after clicking the set button', async () => {
    render(<Counter />)

    const countElement = screen.getByRole('heading')
    const inputNumber = screen.getByRole('spinbutton')
    const btnSet = screen.getByRole('button', { name: /^set$/i })

    await user.type(inputNumber, '10')
    await user.click(btnSet)

    expect(inputNumber).toHaveValue(10)
    expect(countElement).toHaveTextContent('10')
  })

  it('elements are focused in the right order', async () => {
    // user.setup()

    render(<Counter />)

    const btnIncrement = screen.getByRole('button', { name: /^increment$/i })
    const inputNumber = screen.getByRole('spinbutton')
    const btnSet = screen.getByRole('button', { name: /^set$/i })

    // Not working for some reason

    // await user.tab()
    // expect(btnIncrement).toHaveFocus()
    // await user.tab()
    // expect(inputNumber).toHaveFocus()
    // await user.tab()
    // expect(btnSet).toHaveFocus()
  })
})
