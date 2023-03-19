import { fireEvent, render, screen } from '@testing-library/react'
import NavbarLogo from './NavbarLogo';

test('NavbarLogo', () => {
  render(<NavbarLogo />)
  let visible = false;
  const logo = screen.getByTestId('logo')
  const click = jest.fn(() => {visible = true})

  expect(visible).toBeFalsy()
  expect(logo).toBeInTheDocument()
  fireEvent.click(logo)
  click()
  expect(visible).toBeTruthy()
})
