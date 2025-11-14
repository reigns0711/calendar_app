import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Calendar from '../components/Calendar'

test('renders month and year header', () => {
  render(<Calendar date={new Date(2022,9,3)} />)
  expect(screen.getByText('October 2022')).toBeInTheDocument()
})

test('highlights selected date', () => {
  render(<Calendar date={new Date(2022,9,3)} />)
  const selected = screen.getByText('3')
  expect(selected).toHaveClass('bg-white')
})
