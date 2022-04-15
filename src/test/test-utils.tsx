import { PreloadedState } from '@reduxjs/toolkit'
import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RootState, AppStore, setupStore } from '../app/store'
import { Provider } from 'react-redux'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export const renderWithRouter = (
  ui: React.ReactElement,
  { route = '/' } = {}
) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  }
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
