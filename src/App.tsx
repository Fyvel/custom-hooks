import React, { useState } from 'react';
import './App.scss';
import LocalStorage from './components/localStorage';
import useDocumentTitle from './hooks/documentTitle';
import Todo from './components/todo';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import HookSelector from './components/hookSelector';
import ScrollingList from './components/scrollingList';
import FancyCanvas from './components/fancyCanvas';

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
    component: <ScrollingList />
  },
  {
    title: 'Fancy canvas',
    component: <FancyCanvas />
  }
];

const App: React.FC = () => {
  const initial = 3;

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
