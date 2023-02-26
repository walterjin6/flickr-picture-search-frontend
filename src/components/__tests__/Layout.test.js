import Layout from '../Layout'
import { renderWithProviders } from '../../test/test-utils'

it('Layout renders correctly', () => {
  const { asFragment } = renderWithProviders(<Layout />)
  expect(asFragment()).toMatchSnapshot()
})



