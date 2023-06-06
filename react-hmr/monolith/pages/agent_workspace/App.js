import React, { useState, useEffect } from 'react';
import {caseLog} from 'cases';
import {Layout} from 'layout';
import { pollinate } from '../../core/pollinator';

const App = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    pollinate();
    caseLog();
  }, []);

  return (
    <main>
      <Layout>
        <h1>Remote 2's counter: {counter}</h1>
        <button onClick={() => setCounter(counter => counter + 1)}>increment</button>
      </Layout>
    </main>
  );
};

export default App;
