import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import Greet from '.'

describe('Greet', () => {
  afterEach(cleanup)

  it('renders Greet component correctly', () => {
    render(<Greet />)
  })

  it('renders Greet component and the text Greet', async () => {
    render(<Greet />)

    const text = await screen.findByText(/Greet/)
    expect(text).toBeInTheDocument()
  })

  it('should return the word Hello, and if a name is passed, must follow with the name', async () => {
    render(<Greet name='Juan' />)

    const greet = await screen.findByText(/Hello/)
    const name = greet.textContent?.split(' ')[1]

    expect(greet).toBeInTheDocument()
    expect(name).toBe('Juan')
  })

  it("should return the word Hello, and if a name isn't passed, don't write anything else", async () => {
    render(<Greet />)

    const greet = await screen.findByText(/Hello/)
    const text = greet.textContent?.trim()

    expect(greet).toBeInTheDocument()
    expect(text).toBe('Hello')
  })
})
