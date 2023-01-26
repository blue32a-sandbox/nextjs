import { render, screen } from '@testing-library/react'
import HomePage from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    const props = [
      { id: 'hoge', title: 'Hoge page', date: '2023-01-24' },
      { id: 'fuga', title: 'Fuga page', date: '2023-01-23' },
    ];
    render(<HomePage allPostsData={props} />)

    const listitems = screen.getAllByRole('listitem')

    expect(listitems).toHaveLength(2);
  })
})
