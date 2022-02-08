import './SelectedOrder.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postComment } from '../../redux/reducers/commentSlice';
import { useNavigate } from 'react-router-dom';

const SelectedOrder = ({ id, title, desc, comments }) => {

    const navigate = useNavigate();
    const currentComments = [...comments];
    const dispatch = useDispatch();
    const [commentInput, setCommentInput] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        let newComment = {
            id: currentComments.length + 1,
            comment: commentInput
        }
        currentComments.push(newComment);
        let payload = {
            id,
            currentComments
        }
        dispatch(postComment(payload));
    }


    return (
        <div className="selected-order">
            <div onClick={() => navigate('/')} className="back">Back</div>
            <h1>{title}</h1>
            <div className="selected-order__desc">
                {desc}
            </div>
            <div className="selected-order__comments">
                <h3>Comments:</h3>
                {comments.map(comment => {
                    return (
                        <div key={comment.id}>-{comment.comment}</div>
                    )
                })}
            </div>
            <form className="comments-form" onSubmit={submitHandler}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Please leave a review"
                    multiline
                    maxRows={10}
                    sx={{ width: '500px' }}
                    onChange={(e) => setCommentInput(e.target.value)}

                />
                <Button type='submit' variant="contained">Send feedback</Button>
            </form>

        </div>
    )
}

export default SelectedOrder;