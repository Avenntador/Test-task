import './SendedOrders.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendedOrders, fetchSendedOrders } from '../../redux/reducers/sendOrderSlice';
import SendedOrder from './SendedOrder/SendedOrder';

const SendedOrders = () => {

    const dispatch = useDispatch();
    const sendedOrders = useSelector(selectSendedOrders);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchSendedOrders())
    }, [dispatch])


    return (
        <div className='sended-orders'>
            <div onClick={() => navigate('/')} className="back">Back</div>
            <h1>Sended orders</h1>
            {(sendedOrders.length !== 0 && sendedOrders.map(order => {
                return <SendedOrder
                    key={order.id}
                    title={order.title}
                    desc={order.desc}
                />
            }))}
        </div>
    )
}

export default SendedOrders;