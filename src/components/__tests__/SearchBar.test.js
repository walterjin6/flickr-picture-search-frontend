import SearchBar from '../SearchBar'
import { renderWithProviders } from '../../test/test-utils'

it('SearchBar renders correctly', () => {
  const { asFragment } = renderWithProviders(<SearchBar />)
  expect(asFragment()).toMatchSnapshot()
})



