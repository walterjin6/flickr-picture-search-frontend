import SearchBar from '../SearchBar'
import { renderWithProviders } from '../../tests/test-utils'

it('SearchBar renders correctly', () => {
  const { asFragment } = renderWithProviders(<SearchBar />)
  expect(asFragment()).toMatchSnapshot()
})



