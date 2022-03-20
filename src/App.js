import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {ExpensesCard} from './components/ExpensesCard';
import {SpendedList} from './components/SpendedList';
import {AddSpend} from './components/AddSpend';

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <ExpensesCard />
        <SpendedList />
        <AddSpend />
      </div>
    </GlobalProvider>


  );
}

export default App;
