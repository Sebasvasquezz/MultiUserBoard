import { useState } from 'react';
import Board from './Board';
import ActionFetcher from './ActionFetcher';

/**
 * Functional component representing the main application.
 * Manages state for actions and color using React hooks.
 */
function App() {
  const [clicks, setClicks] = useState([]);
  const [color] = useState(getRandomColor());

  return (
    <div>
      <ActionFetcher setActions={setClicks} />
      <Board clicks={clicks} color={color} />
    </div>
  );
}

// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default App;
