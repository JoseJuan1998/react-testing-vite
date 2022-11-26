import { render, screen } from '../../test-utils'
import { describe, expect, it } from 'vitest'
import MuiMode from '.'

describe('MuiMode', () => {
  it('renders correctly the component and the default theme', () => {
    render(<MuiMode />)

    const headingTheme = screen.getByRole('heading', { level: 1 })

    expect(headingTheme).toHaveTextContent('dark mode')
  })
})
