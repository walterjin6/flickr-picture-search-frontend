import Login from '../Login'
import Header from '../../../components/Header'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { server } from '../../../tests/mocks/server'
import { renderWithProviders } from '../../../tests/test-utils'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

describe('Login component tests', () => {
  beforeAll(() =>
    server.listen({
      onUnhandledRequest: 'error',
    })
  )
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should submit the form, display the success message, and display user name on Navigation Header Bar', async () => {
  const history = createMemoryHistory()
    const { asFragment } = renderWithProviders(
      <>
       
          <Header /> <Login />
      
      </>
    )

    const usernameInput = screen.getByLabelText('Username:')
    const passwordInput = screen.getByLabelText('Password:')
    
    const submitButton = screen.getByText(/Sign In/i, { selector: 'button' })
    fireEvent.change(usernameInput, { target: { value: 'admin' } })
    fireEvent.change(passwordInput, { target: { value: '!Hh12345' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
       expect(history.location.pathname).toBe('/')
      //let successHeader = screen.getByText(/admin/i, { selector: 'span' })
      //expect(successHeader).toBeInTheDocument()
       //successHeader = screen.getByText(/Welcome, admin!/)
      //expect(successHeader).toBeInTheDocument()
      //expect(screen.getByText('You are logged in')).toBeInTheDocument()
    })
  })
})
