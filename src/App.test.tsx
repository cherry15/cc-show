import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import App from './App'
import { renderWithRouter } from './test/test-utils'
import Header from './components/header/header'

describe('App navigation', () => {

  beforeEach(() => {
    renderWithRouter(
      <>
        <App />
        <Header />
      </>
    )
  })

  it('should default to the home page', async () => {
    await screen.findByRole('heading', { name: /home/i })
  })

  it('clicking on the about link should go to the about page', async () => {
    const link = screen.getByRole('link', { name: "About" })
    fireEvent.click(link)
    await screen.findByRole('heading', { name: /about/i })
  })

  it('clicking on the countries link should go to the countries page', async () => {
    const link = screen.getByRole('link', { name: "Countries" })
    fireEvent.click(link)
    await screen.findByRole('heading', { name: /countries/i })
  })

  it('clicking on the dogs link should go to the dogs page', async () => {
    const link = screen.getByRole('link', { name: "Dogs" })
    fireEvent.click(link)
    await screen.findByRole('heading', { name: /dogs/i })
  })

  it('clicking on the contact link should go to the contact page', async () => {
    const link = screen.getByRole('link', { name: "Contact" })
    fireEvent.click(link)
    await screen.findByRole('heading', { name: /contact/i })
  })

  it('clicking on the home link should go to the home page', async () => {
    const link = screen.getByRole('link', { name: "Home" })
    fireEvent.click(link)
    await screen.findByRole('heading', { name: /home/i })
  })
})

