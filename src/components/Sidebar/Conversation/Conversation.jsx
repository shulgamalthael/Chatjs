import React from 'react';
import { Link } from 'react-router-dom';

const Conversation = ({ conversation }) => {
    return (
        <div className="sidebar-container-conversation-item"><Link to={`/conversation/${conversation}`}><p className="sidebar-container-conversation-item-message">{`${conversation} convarsation`}</p></Link></div>
    )
}

export default Conversation;