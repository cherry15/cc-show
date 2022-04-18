import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import App from './App'
import { renderWithProviders, renderWithRouter } from './test/test-utils'
import Header from './components/header/header'

describe('App navigation', () => {

  beforeEach(() => {
    renderWithRouter(
      <>
       <Header />
        <App />
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

  // it.only('clicking on the countries link should go to the countries page', async () => {
  //   renderWithProviders(<App />)
  //   const link = screen.getByRole('link', { name: "Countries" })
  //   fireEvent.click(link)
  //   await screen.findByRole('heading', { name: /angola/i })
  // })

  // it('clicking on the admin link should go to the admin page', async () => {
  //   const link = screen.getByRole('link', { name: "Admin" })
  //   fireEvent.click(link)
  //   await screen.findByRole('heading', { name: /admin/i })
  // })

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

