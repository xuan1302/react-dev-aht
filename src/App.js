import './App.css';
import AlbumFeature from './features/Album';
import TotoFeature from './features/Todo';
import RadioButtonFeature from './features/radiobutton';
import CheckboxFeature from './features/Checkbox';
import TodoListState from './features/TodoListUseState';
import CountDown from './features/CountDown';
import UploadImage from './features/UploadImage';
import TimeStartStop from './features/TimeStartStop';
import { useState } from 'react';
import { Link, NavLink, Route, Router, Routes, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  const [showCountDown, setShowCountDown] = useState(false);
  return (
    <div className="App">
      <div className='menu-global'>
        Link
        <Link to='/'>Home</Link>
        <Link to='/todo'>Todo</Link>
        <Link to='/album'>Album</Link>
        <Link to='/radio'>Radio</Link>
        <Link to='/chekbox'>Checkbox</Link>
        <Link to='/todolist'>TodoLít</Link>
        <Link to='/upload'>Upload</Link>
        <Link to='/time'>Time</Link>
      </div>

      <div className='menu-global'>
        NavLink
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/todo'>Todo</NavLink>
        <NavLink to='/album'>Album</NavLink>
        <NavLink to='/radio'>Radio</NavLink>
        <NavLink to='/chekbox'>Checkbox</NavLink>
        <NavLink to='/todolist'>TodoLít</NavLink>
        <NavLink to='/upload'>Upload</NavLink>
        <NavLink to='/time'>Time</NavLink>
      </div>
      <Switch>

        <Route path='/todo' component={TotoFeature} />
        <Route path='/album' component={AlbumFeature} />
        <Route path='/radio' component={RadioButtonFeature} />
        <Route path='/chekbox' component={CheckboxFeature} />
        <Route path='/todolist' component={TodoListState} />
        <Route path='/upload' component={UploadImage} />
        <Route path='/time' component={TimeStartStop} />
        <Route component={NotFound} />

      </Switch>

      <button
        onClick={() => setShowCountDown(!showCountDown)}
      >Toggle CountDown</button>
      {
        showCountDown && (
          <CountDown />
        )
      }

    </div>
  );
}

export default App;
