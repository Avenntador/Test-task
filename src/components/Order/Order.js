import './Order.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendOrder } from '../../redux/reducers/sendOrderSlice';
import { deleteOrder } from '../../redux/reducers/ordersSlice';
import { useState } from 'react';

const Order = ({ id, title, desc, comments, orders }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [sendStatus, setSendStatus] = useState(false);

    const clickHanlder = (e) => {
        if (e.target.classList.contains('order')) {
            navigate(`/${id}`);
        }
    }

    const sendHandler = (e) => {
        e.preventDefault();

        let order = {
            id,
            title,
            desc,
            comments
        }

        dispatch(deleteOrder(order.id));
        dispatch(sendOrder(order));
        
        setSendStatus(true);
    }

    return (
        <div className='order' onClick={clickHanlder}>
            <div className="order__info">
                <h3>{title}</h3>
                {desc}
                <div className="order__status">
                    {sendStatus && 'Sended'}
                </div>
            </div>
            <div className="order__send-btn">
                <Button onClick={sendHandler} variant="contained" size='small' disabled={sendStatus}>Send to server</Button>
            </div>
        </div>
    )
}

export default Order;