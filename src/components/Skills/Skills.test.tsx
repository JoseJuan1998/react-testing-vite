import { cleanup, render, screen } from '@testing-library/react'
import { describe, afterEach, it, expect, assert } from 'vitest'
import Skills from '.'

const skills = [
  'programming',
  'learning',
  'mentoring',
  'swimming',
  'explaining',
]

describe('Skills', () => {
  afterEach(cleanup)

  it('renders the component correctly no props', () => {
    render(<Skills />)

    const empty = screen.getByRole('heading')

    expect(empty).toBeInTheDocument()
  })

  it('renders a list when props passed', () => {
    render(<Skills skills={skills} />)

    const list = screen.getByRole('list')

    expect(list).toBeInTheDocument()
  })

  it('renders many skills when passed in props', () => {
    render(<Skills skills={skills} />)

    const skillsRendered = screen.getAllByRole('listitem')

    assert(skills.length === skillsRendered.length) // expect(skillsRendered).toHaveLength(skills.length)
  })

  it('renders an error when not found a list', () => {
    render(<Skills />)

    const error = () => {
      screen.getByRole('list')
    }

    expect(error).toThrow(Error)
  })

  it('renders login button', () => {
    render(<Skills skills={skills} />)

    const btnLogin = screen.getByRole('button', { name: 'Login' })

    expect(btnLogin).toBeInTheDocument()
  })

  it('not render start button', () => {
    render(<Skills skills={skills} />)

    const btnStart = screen.queryByRole('button', { name: 'Start learning' })

    expect(btnStart).not.toBeInTheDocument()
  })

  it('renders start button when logged in', async () => {
    render(<Skills skills={skills} />)

    const btnStart = await screen.findByRole(
      'button',
      { name: 'Start learning' },
      { timeout: 2000 }
    )

    expect(btnStart).toBeInTheDocument()
  })
})
