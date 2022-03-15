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

function App() {
  const [showCountDown, setShowCountDown] = useState(false);
  return (
    <div className="App">
      <TotoFeature />
      <AlbumFeature />
      <RadioButtonFeature />
      <CheckboxFeature />
      <TodoListState />

      <button
        onClick={() => setShowCountDown(!showCountDown)}
      >Toggle CountDown</button>
      {
        showCountDown && (
          <CountDown />
        )
      }

      <UploadImage />
      <TimeStartStop />
    </div>
  );
}

export default App;
