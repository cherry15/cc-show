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

describe('Adding a country, unhappy paths', () => {
  test('clicking on the Add country button does not add the country when there is no name', async () => {
    const testDescription = 'test description'
    const testSummary = 'test summary'

    renderWithProviders(<AddCountryForm />)

    const descriptionInput = screen.getByLabelText(/description/i)
    fireEvent.change(descriptionInput, { target: { value: testDescription } })

    const summaryInput = screen.getByLabelText(/summary/i)
    fireEvent.change(summaryInput, { target: { value: testSummary } })

    await screen.findByDisplayValue(testDescription)
    await screen.findByDisplayValue(testSummary)

    expect(screen.getByDisplayValue(testSummary)).toBeInTheDocument()
    expect(screen.getByDisplayValue(testDescription)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: "Add Country" }))

    await waitFor(() => screen.getByText('Name is required and must contain only letters and spaces'))
  })

  test('clicking on the Add country button does not add the country when the name is invalid', async () => {
    const testName = 'test name 123'
    const testDescription = 'test description'
    const testSummary = 'test summary'

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

    await waitFor(() => screen.getByText('Name is required and must contain only letters and spaces'))
  })

  test('clicking on the Add country button does not add the country when there is no description', async () => {
    const testName = 'test name'
    const testSummary = 'test summary'

    renderWithProviders(<AddCountryForm />)

    const nameInput = screen.getByLabelText(/name/i)
    fireEvent.change(nameInput, { target: { value: testName } })

    const summaryInput = screen.getByLabelText(/summary/i)
    fireEvent.change(summaryInput, { target: { value: testSummary } })

    await screen.findByDisplayValue(testName)
    await screen.findByDisplayValue(testSummary)

    expect(screen.getByDisplayValue(testName)).toBeInTheDocument()
    expect(screen.getByDisplayValue(testSummary)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: "Add Country" }))

    await waitFor(() => screen.getByText('Description is required'))
  })

  test('clicking on the Add country button does not add the country when there is no summary', async () => {
    const testName = 'test name'
    const testDescription = 'test description'

    renderWithProviders(<AddCountryForm />)

    const nameInput = screen.getByLabelText(/name/i)
    fireEvent.change(nameInput, { target: { value: testName } })

    const descriptionInput = screen.getByLabelText(/description/i)
    fireEvent.change(descriptionInput, { target: { value: testDescription } })

    await screen.findByDisplayValue(testName)
    await screen.findByDisplayValue(testDescription)

    expect(screen.getByDisplayValue(testName)).toBeInTheDocument()
    expect(screen.getByDisplayValue(testDescription)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: "Add Country" }))

    await waitFor(() => screen.getByText('Summary is required'))
  })
})


