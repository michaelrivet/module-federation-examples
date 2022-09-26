import React, { useState } from 'react';
import { ThemeProvider, Button } from '@sproutsocial/racine';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <ThemeProvider>
      <main>
        <h1>Remote 1's counter: {counter}</h1>
        <Button appearance='primary' onClick={() => setCounter(counter => counter + 1)}>increment</Button>
      </main>
    </ThemeProvider>
  );
};

export default App;
