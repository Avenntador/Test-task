import './SearchPage.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchName } from '../../redux/reducers/searchOrderSlice';
import { selectOrders } from '../../redux/reducers/ordersSlice';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const orders = useSelector(selectOrders);
    const searchName = useSelector(selectSearchName);

    let foundOrder = null;

    orders.map(order => {
        if (order.title === searchName) {
            foundOrder = { ...order };
        }
    })

    return (
        <div className='search-page__container'>
            {foundOrder ?
                <div className="selected-order">
                    <div onClick={() => navigate('/')} className="back">Back to Main</div>
                    <h1>{foundOrder.title}</h1>
                    <div className="selected-order__desc">
                        {foundOrder.desc}
                    </div>
                    <div className="selected-order__comments">
                        <h3>Comments:</h3>
                        {foundOrder.comments.map(comment => {
                            return (
                                <div key={comment.id}>-{comment.comment}</div>
                            )
                        })}
                    </div>
                </div>
                :
                <div className="selected-order">
                    <div onClick={() => navigate('/')} className="back">Back to Main</div>
                    <h3>Order not found</h3>
                </div>
            }
        </div>
    )
}

export default SearchPage;