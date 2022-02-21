import React from 'react';
import './App.css';
import styled from 'styled-components';
import PrimeButton from './UI/PrimeButton';

function App() {
  const style = 'width: 234px; height: 46px';
  return (
    <div className="App">
      <header className="App-header">
        <TestContain>
          My code
          <PrimeButton label="test LABEL" containerStyle={style} />
        </TestContain>
      </header>
    </div>
  );
}

export default App;

const TestContain = styled.div`
  background-color: #c06464;
  width: 600px;
  height: 800px;
  font-size: 1.5em;
  text-align: center;
  color: #29b668;
`;
