import React, { useState } from 'react';
import './App.scss';
import LocalStorage from './containers/localStorage';
import useDocumentTitle from './hooks/documentTitle';
import Todo from './containers/todo';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import HookSelector from './containers/hookSelector';
import ScrollingList from './containers/scrollingList';
import FancyCanvas from './containers/fancyCanvas';
import DebounceSetter from './containers/debounceSetter';
import SyncElements from './containers/syncElements';

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
  },
  {
    title: 'Broadcast event',
    component: <SyncElements />
  },
  {
    title: 'Debouncer',
    component: <DebounceSetter />
  }
];

const App: React.FC = () => {
  const initial = 4;

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
