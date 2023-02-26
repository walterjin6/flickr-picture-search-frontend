import Header from '../Header'
import { renderWithProviders } from '../../test/test-utils'

it('Header renders correctly', () => {
  const { asFragment } = renderWithProviders(<Header />)
  expect(asFragment()).toMatchSnapshot()
})



