import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import SelectedOrderContainer from './components/SelectedOrder/SelectedOrderContainer';
import AddOrder from './components/AddOrder/AddOrder';
import SearchPage from './components/SearchPage/SearchPage';
import SendedOrders from './components/SendedOrders/SendedOrders';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} >
          <Route path='/:id' element={<SelectedOrderContainer />} />
        </Route>
        <Route path='/add-order' element={<AddOrder />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/sended-orders' element={<SendedOrders />} />
      </Routes>
    </>
  );
}

export default App;
