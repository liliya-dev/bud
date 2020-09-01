import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { Navigation } from './components/Navigation/Navigation';
import { EnterForm } from './components/EnterForm';
import { LeftNav } from './components/Navigation/LeftNav'
import { First } from './components/Pages/First';
import { Second } from './components/Pages/Second';
import { Third } from './components/Pages/Third';
import { useState } from 'react';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState('');
  const [activeList, setActiveList] = useState<number[]>([]);

  const setAll = (list: number[]) => {
    setActiveList(list);
  }

  const cancelAll = () => {
    setActiveList([]);
  }

  const setSelectedItem = (number: number) => {
    setActiveList([...activeList, number]);
  }

  const removeSelectedItem = (number: number) => {
    setActiveList(activeList.filter(num => num !== number));
  }

  useEffect(() => {
    const name = localStorage.getItem('user');
    if (name) {
      setIsLogged(true);
      setUserName(name);
    }
  }, [setIsLogged, setUserName]);

  const handleLogin = (value: boolean) => {
    setIsLogged(value);
  }

  return (
      <div className="App">
        <Navigation handleLogin={handleLogin} isAuthorized={isLogged} name={userName} />
        {
          isLogged && <LeftNav />
        }
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/home"><Redirect to="/" /></Route>
          <Route path="/page1" exact render={() => <First activeList={activeList} />} />
          <Route path="/page2" exact render={() => 
            <Second 
              setAll={setAll} 
              cancelAll={cancelAll} 
              activeList={activeList}
              setSelectedItem={setSelectedItem}
              removeSelectedItem={removeSelectedItem}
            />}  
          />
          <Route path="/page3" exact component={Third} />
          <Route path="/enter" exact render={() => <EnterForm handleLogin={handleLogin} /> } />
        </Switch>
      </div>
  );
}

export default App;