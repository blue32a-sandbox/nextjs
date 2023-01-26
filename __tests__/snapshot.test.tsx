import { render } from '@testing-library/react'
import SnapshotPage from '../pages/snapshot'
import '@testing-library/jest-dom'

describe('Snapshot', () => {
  it('renders page unchanged', () => {
    const { container } = render(<SnapshotPage />)
    expect(container).toMatchSnapshot()
  })
})
