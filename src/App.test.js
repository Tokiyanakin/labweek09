import { render, screen } from '@testing-library/react';
import App from './App';

test('displays the lab heading and student details', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Welcome to Fullstack Development - I'
  );
  expect(screen.getByText('Akin Eludoyin')).toBeInTheDocument();
  expect(screen.getByText('101567797')).toBeInTheDocument();
});
