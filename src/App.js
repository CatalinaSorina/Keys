import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Highlighter from './components/Highlighter/Highlighter';

const App = () => {
  return (
    <Wrapper alignItems="center" fontFamily="Arial">
      <header>Header, in work</header>
      <main>
        <Highlighter code="function(){let test = ['test', 'test 2']}" />
      </main>
      <footer>bottom</footer>
    </Wrapper>
  );
};

export default App;
