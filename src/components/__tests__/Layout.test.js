import Layout from '../Layout'
import { renderWithProviders } from '../../tests/test-utils'

it('Layout renders correctly', () => {
  const { asFragment } = renderWithProviders(<Layout />)
  expect(asFragment()).toMatchSnapshot()
})



