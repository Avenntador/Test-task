import './SendedOrder.css';

const SendedOrder = ({ title, desc }) => {
    return (
        <>
            <div className="sended-order">
                <h3>{title}</h3>
                {desc}
            </div>
        </>

    )
}

export default SendedOrder;