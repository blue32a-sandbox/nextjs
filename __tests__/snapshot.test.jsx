import { render } from '@testing-library/react'
import Snapshot from '../pages/snapshot'
import '@testing-library/jest-dom'

describe('Snapshot', () => {
  it('renders page unchanged', () => {
    const { container } = render(<Snapshot />)
    expect(container).toMatchSnapshot()
  })
})
