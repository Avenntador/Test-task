import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { selectOrder, fetchOrderById } from '../../redux/reducers/orderByIdSlice';
import SelectedOrder from "./SelectedOrder";

const SelectedOrderContainer = () => {

    const dispatch = useDispatch();
    const selectedOrder = useSelector(selectOrder);
    const orderId = useParams().id;

    useEffect(() => {
        dispatch(fetchOrderById(orderId));
    }, [orderId, dispatch])


    return (
        (Object.entries(selectedOrder).length !== 0 && 
        <SelectedOrder
            id={selectedOrder.id}
            title={selectedOrder.title}
            desc={selectedOrder.desc}
            comments={selectedOrder.comments}
        />)
    )
}

export default SelectedOrderContainer;
