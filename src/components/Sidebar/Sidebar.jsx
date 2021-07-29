import React from 'react';
import Conversation from './Conversation/Conversation.jsx';

const Sidebar = ({ conversationsList }) => {
    return(
        <>
            <div className="sidebar-navigation">
                <input className="sidebar-navigation-input" type="text" placeholder="Search on the conversations"/>
            </div>
            <div className="sidebar-container-conversation">
                {conversationsList.map( conversation => {
                    return(
                        <Conversation key={conversation} conversation={conversation} />
                    )
                })}
            </div>
        </>
    )
}

export default Sidebar;