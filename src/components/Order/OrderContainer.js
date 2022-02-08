import Order from "./Order";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders, selectOrders } from './../../redux/reducers/ordersSlice';


const OrderContainer = () => {

    const dispatch = useDispatch();
    const ordersArray = useSelector(selectOrders);

    useEffect(() => {
        dispatch(fetchOrders())
    }, [dispatch])


    return (
        (ordersArray.length !== 0 && ordersArray.map(order => {
            return <Order
                key={order.id}
                id={order.id}
                title={order.title}
                comments={order.comments}
                desc={order.desc}
                orders={ordersArray}
            />
        }))
    )
}

export default OrderContainer;