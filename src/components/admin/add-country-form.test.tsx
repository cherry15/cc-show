import { fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from '../../test/test-utils'
import { ICountry } from '../countries/countries-api'
import AddCountryForm from './add-country-form'

afterAll(() => {
  jest.clearAllMocks()
})

describe('Adding a country, happy path', () => {
  const testName = 'test name'
  const testDescription = 'test description'
  const testSummary = 'test summary'
  test('clicking on the Add country button adds the country', async () => {
    renderWithProviders(<AddCountryForm />)
    const nameInput = screen.getByLabelText(/name/i)
    fireEvent.change(nameInput, { target: { value: testName } })

    const descriptionInput = screen.getByLabelText(/description/i)
    fireEvent.change(descriptionInput, { target: { value: testDescription } })

    const summaryInput = screen.getByLabelText(/summary/i)
    fireEvent.change(summaryInput, { target: { value: testSummary } })

    await screen.findByDisplayValue(testName)
    await screen.findByDisplayValue(testDescription)
    await screen.findByDisplayValue(testSummary)

    expect(screen.getByDisplayValue(testName)).toBeInTheDocument()
    expect(screen.getByDisplayValue(testSummary)).toBeInTheDocument()
    expect(screen.getByDisplayValue(testDescription)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: "Add Country" }))

    await waitFor(() => screen.getByText('Success, the country has been added!'))
  })
})

