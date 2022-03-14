import './App.css';
import AlbumFeature from './features/Album';
import TotoFeature from './features/Todo';
import RadioButtonFeature from './features/radiobutton';
import CheckboxFeature from './features/Checkbox';
import TodoListState from './features/TodoListUseState';
function App() {
  return (
    <div className="App">
      <TotoFeature />
      <AlbumFeature />
      <RadioButtonFeature />
      <CheckboxFeature />
      <TodoListState />
    </div>
  );
}

export default App;
