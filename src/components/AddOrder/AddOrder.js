import './AddOrder.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders, selectOrders, postOrder } from '../../redux/reducers/ordersSlice';

const AddOrder = () => {

    const currentOrders = useSelector(selectOrders);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])


    const submitHandler = (e) => {
        e.preventDefault();
        let title = e.target[0].value;
        let desc = e.target[2].value;
        let newOrder = {
            id: currentOrders.length + 1,
            title,
            desc,
            comments: []
        }
        let temp = [...currentOrders];
        temp.push(newOrder);
        dispatch(postOrder(newOrder));
        // window.location.assign('http://localhost:3000');
        navigate('/')
    }

    return (
        <div className='add-order__container'>
            <div onClick={() => navigate('/')} className="back">Back</div>
            <h1>Add order</h1>
            <form className='add-order__form' onSubmit={submitHandler}>
                <TextField id="outlined-multiline-flexible" label="Name" variant="outlined" size='small' sx={{ width: '500px' }} />
                <TextField id="outlined-multiline-flexible" label="Description" variant="outlined" size='small' sx={{ width: '500px' }} />
                <Button type='submit' variant="contained" sx={{ width: '300px' }}>Add order</Button>
            </form>
        </div>
    )
}

export default AddOrder;