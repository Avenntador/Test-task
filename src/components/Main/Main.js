import './Main.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import OrderContainer from '../Order/OrderContainer';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveSearchToken } from '../../redux/reducers/searchOrderSlice';
import { useNavigate } from 'react-router-dom';

const Main = () => {

    const param = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(saveSearchToken(e.target[0].value));
        navigate('/search-page');
    }

    return (
        <>
            <header className='header'>
                <div><Link to={{ pathname: '/' }}>Main Page</Link></div>
                <div><Link to={{ pathname: '/sended-orders' }}>Sended Orders</Link></div>
            </header>
            <div className='main-container'>
                <form className='search-form' onSubmit={submitHandler}>
                    <TextField id="outlined-basic" label="Search order..." variant="outlined" size='small' />
                    <Button type='submit' variant="contained">Search</Button>
                </form>
                <div className="add-order">
                    <Link className='link' to={{ pathname: '/add-order' }}>Add order</Link>
                </div>
                {Object.entries(param).length !== 0
                    ? <Outlet />
                    : <div className='orders-container'>
                        <OrderContainer />
                    </div>}
            </div>
        </>

    )
}

export default Main;