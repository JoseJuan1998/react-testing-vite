import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Users from '.'
import { server } from '../../mocks/server'
import { rest } from 'msw'

describe('Users', () => {
  it('renders correctly no users', () => {
    render(<Users />)

    const loadingText = screen.getByText('Loading...')

    expect(loadingText).toBeInTheDocument()
  })

  it('renders a list of users', async () => {
    render(<Users />)

    const users = await screen.findAllByRole('listitem')

    expect(users).toHaveLength(3)
  })

  it('renders error message', async () => {
    server.use(rest.get('///users', (_req, res, ctx) => res(ctx.status(500))))

    render(<Users />)

    const error = await screen.findByText('Error fetching users')

    expect(error).toBeInTheDocument()
  })
})
