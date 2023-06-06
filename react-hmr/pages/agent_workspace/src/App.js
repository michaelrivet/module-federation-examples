import React, { useState, useEffect } from 'react';
import caseLog from 'cases/caseLog';
import Layout from 'layout/Layout';

const App = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
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
