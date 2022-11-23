import { cleanup, render, screen } from '@testing-library/react'
import { describe, it, afterEach, expect } from 'vitest'
import Application from '.'

/*
  Priority of query methods for testing
  1. getByRole
  2. getByLabelText
  3. getByPlaceholderText
  4. getByText
  5. getByDisplayValue
  6. getByAltText
  7. getByTitle
  8. getByTestId
*/

describe('Application', () => {
  afterEach(cleanup)

  it('renders correctly the Application component', () => {
    render(<Application />)
  })

  it('renders the form correctly', () => {
    render(<Application />)

    // const imgLogo = screen.getByAltText('logo image')
    const imgLogo = screen.getByTitle('logo')
    const heading1 = screen.getByRole('heading', { level: 1 }) // When there is more than one with the same role, 'level' is just for heading
    const heading2 = screen.getByRole('heading', { level: 2 })
    const smallText = screen.getByText(/All fields are mandatory/, {
      selector: 'small',
    }) // When there is more than one with the same text
    const divCustom = screen.getByTestId('custom-element')
    // const inputText = screen.getByRole('textbox', {name: 'Name'})
    // const inputText = screen.getByLabelText('Name', { selector: 'input' })
    const inputText = screen.getByDisplayValue('Juan', { exact: true })
    // const inputArea = screen.getByRole('textbox', { name: 'Bio' })
    const inputArea = screen.getByPlaceholderText('Write your bio')
    const inputSelect = screen.getByRole('combobox')
    // const inputCheck = screen.getByRole('checkbox')
    const inputCheck = screen.getByLabelText(
      'I agree to the terms and conditions',
      {
        selector: 'input', // When there is more than one with the same label
      }
    )
    const btnSubmit = screen.getByRole('button')
    const inputsText = screen.getAllByRole('textbox')

    expect(imgLogo).toBeInTheDocument()
    expect(heading1).toBeInTheDocument()
    expect(heading2).toBeInTheDocument()
    expect(smallText).toBeInTheDocument()
    expect(divCustom).toBeInTheDocument()
    expect(inputText).toBeInTheDocument()
    expect(inputArea).toBeInTheDocument()
    expect(inputSelect).toBeInTheDocument()
    expect(inputCheck).toBeInTheDocument()
    expect(btnSubmit).toBeInTheDocument()

    expect(inputsText.length).toBe(2)
  })
})
