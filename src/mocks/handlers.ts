import { rest } from 'msw'

export const handlers = [
  rest.get('///users', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { name: 'Tony Stark' },
        { name: 'Bruce Wayne' },
        { name: 'Princess Diana' },
      ])
    )
  }),
]
