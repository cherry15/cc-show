import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { renderWithProviders } from '../../test/test-utils'
import { server } from '../../mocks/server'
import { getCountriesException } from '../../mocks/handlers'
import AdminHome from '../../pages/admin-home'
import CountryDetail from '../countries/country-detail'
import { ICountry } from '../countries/countries-api'
import { BrowserRouter } from 'react-router-dom'

afterAll(() => {
  jest.clearAllMocks()
})

const country: ICountry = {
  id: 'angola',
  name: 'angola',
  imageUrl: 'angola',
  description: 'description',
  summary: 'summary'
}

describe('AdminHome', () => {
  test('gets the countries', async () => {
    renderWithProviders(<BrowserRouter><AdminHome /></BrowserRouter>)
    await screen.findByRole('heading', { name: /angola/i })
  })
})

describe('CountryDetail', () => {
  test('returns an country when the country exists', async () => {
    renderWithProviders(<BrowserRouter><CountryDetail country={country} /></BrowserRouter>)
    await screen.findByRole('heading', { name: /angola/i })
    expect(screen.getByText(/angola/)).toBeDefined()
  })

  // test('returns an error when the country does not exist', async () => {
  //   country.name = 'bad-name'
  //   renderWithProviders(<BrowserRouter><CountryDetail country={country} /></BrowserRouter>)
  //   await screen.findByText('Sorry, country not found')
  // })
})

describe('Delete country modal', () => {
  test('clicking on the delete country button shows the confirm delete modal', async () => {
    renderWithProviders(<BrowserRouter><AdminHome /></BrowserRouter>)
    await screen.findByRole('heading', { name: /angola/i })
    await screen.findAllByRole('button', { name: 'Delete country' })

    fireEvent.click(
      screen.getAllByRole('button', { name: 'Delete country' })[0]
    )

    expect(
      screen.getByText(/Are you sure you want to delete the country/)
    ).toBeDefined()
  })

  test('clicking on the cancel button hides the confirm delete modal', async () => {
    renderWithProviders(<BrowserRouter><AdminHome /></BrowserRouter>)
    await screen.findByRole('heading', { name: /angola/i })
    await screen.findAllByRole('button', { name: 'Delete country' })

    fireEvent.click(
      screen.getAllByRole('button', { name: 'Delete country' })[0]
    )

    expect(
      screen.getByText(/Are you sure you want to delete the country/)
    ).toBeDefined()

    fireEvent.click(screen.getByText('Cancel'))

    expect(
      screen.queryByText(/Are you sure you want to delete the country/)
    ).toBeNull()
  })
})

describe('Delete country', () => {
  test('clicking on the OK button deletes the country', async () => {
    renderWithProviders(<BrowserRouter><AdminHome /></BrowserRouter>)
    await screen.findByRole('heading', { name: /angola/i })

    expect(screen.queryByText(/angola/i)).toBeInTheDocument()
    
    await screen.findAllByRole('button', { name: 'Delete country' })

    fireEvent.click(
      screen.getAllByRole('button', { name: 'Delete country' })[0]
    )

    fireEvent.click(await screen.findByText('OK'))
    await waitForElementToBeRemoved(() => screen.queryByRole('heading', { name: /angola/i }))

    expect(screen.queryByText(/angola/i)).toBeNull()
  })
})

describe('Bad network', () => {
  test('shows error', async () => {
    server.use(getCountriesException)
    renderWithProviders(<BrowserRouter><AdminHome /></BrowserRouter>)

    const errorDisplay = await screen.findByText('Sorry there are no countries to display')
    expect(errorDisplay).toBeInTheDocument()

    const displayedEmployees = screen.queryAllByRole('heading')
    expect(displayedEmployees).toEqual([])
  })
})
