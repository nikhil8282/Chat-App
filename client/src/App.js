import logo from './logo.svg';
import './App.css';
import Left from './components/leftSection/Left.jsx'
import Right from './components/rightSection/Right'
function App() {
  return (
    <div className="App">
      <div className='left'>
        <Left/>
      </div>
      <div className='right'>
        <Right/>
      </div>
    </div>
  );
}

export default App;
