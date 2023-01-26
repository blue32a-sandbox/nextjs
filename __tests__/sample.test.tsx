import { render, screen } from '@testing-library/react'
import SamplePage from '../pages/sample'
import '@testing-library/jest-dom'

describe('Sample', () => {
  it('renders a heading', () => {
    render(<SamplePage />)

    const heading = screen.getByRole('heading', {
      name: 'This is Sample page',
    })

    expect(heading).toBeInTheDocument()
  })
})
