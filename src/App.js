import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {Expenses} from './components/Expenses';
import {SpendedList} from './components/SpendedList';
import {AddSpend} from './components/AddSpend';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <Expenses />
        <SpendedList />
        <AddSpend />
      </div>
    </div>


  );
}

export default App;
