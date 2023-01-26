import { render, screen } from '@testing-library/react'
import Sample from '../pages/sample'
import '@testing-library/jest-dom'

describe('Sample', () => {
  it('renders a heading', () => {
    render(<Sample />)

    const heading = screen.getByRole('heading', {
      name: 'This is Sample page',
    })

    expect(heading).toBeInTheDocument()
  })
})
