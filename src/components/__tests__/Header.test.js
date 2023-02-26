import Header from '../Header'
import { renderWithProviders } from '../../tests/test-utils'

it('Header renders correctly', () => {
  const { asFragment } = renderWithProviders(<Header />)
  expect(asFragment()).toMatchSnapshot()
})



