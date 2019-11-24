import React, { useState } from 'react';
import './App.scss';
import LocalStorage from './components/localStorage';
import useDocumentTitle from './hooks/documentTitle';
import Todo from './components/todo';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import HookSelector from './components/hookSelector';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App: React.FC = () => {
  const [hookIndex, setHookIndex] = useState(1);

  const hooks = [
    {
      title: 'Storage hook',
      component: <LocalStorage />
    },
    {
      title: 'Array hook',
      component: <Todo />
    }
  ];

  const hookOptions = hooks.map(
    (x, i) => ({ id: i, name: x.title }));

  useDocumentTitle(hooks[hookIndex].title);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>REACT CUSTOM HOOKS</h1>
          <HookSelector
            list={hookOptions}
            initial={0}
            changeHandler={(val) => setHookIndex(val)}
          />
        </header>
        <div className="App-content">
          {hooks[hookIndex].component}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
