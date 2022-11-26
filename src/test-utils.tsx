import { render, RenderOptions } from '@testing-library/react'
import { AppProviders } from './providers/app-providers'

const customRender = (
  ui: JSX.Element,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AppProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
