import React from 'react';

const Message = ({ message, toggleUserStyle }) => {

    return(
        <div className={`messages-container_item`}><p className={`message ${toggleUserStyle}`}>{message}</p></div>
    )

}

export default Message;