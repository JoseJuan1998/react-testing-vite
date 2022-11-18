import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  afterEach(cleanup)

  it('should render the App correctly', () => {
    render(<App />)
  })

  it('should render the h1 correctly', () => {
    render(<App />)
    const title = screen.getByText('Vite + React')
    expect(title).toBeInTheDocument()
  })

  it('should render the button correctly', () => {
    render(<App />)
    const button = screen.getByRole('button').textContent
    expect(button).toBe('count is 0')
  })
})
