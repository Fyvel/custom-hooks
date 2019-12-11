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

const hookList = [
  {
    title: 'Storage hook',
    component: <LocalStorage />
  },
  {
    title: 'Array hook',
    component: <Todo />
  },
  {
    title: 'Virtualized scroll',
    component: (<div>Coming next...</div>)
  }
];

const App: React.FC = () => {
  const initial = 0;

  const [selectedHook, setSelectedHook] = useState(initial);

  const hookOptions = hookList.map((x, i) => ({ id: i, name: x.title }));

  useDocumentTitle(hookList[selectedHook].title);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>REACT CUSTOM HOOKS</h1>
          <HookSelector
            list={hookOptions}
            initial={selectedHook}
            changeHandler={setSelectedHook}
          />
        </header>
        <div className="App-content">
          {hookList[selectedHook].component}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
