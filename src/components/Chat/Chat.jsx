import React from 'react';
import Message from './Message/Message.jsx';

const Chat = ({ serverMessages, message, CompanionData }) => {

    // console.log(serverMessages)

    return(
        <>
            <header className="currentChat-header">
                    <img className="companion-avatar" src={CompanionData.avatar} alt="Companion avatar" />
                    <div className="companion-name"><p className="companion-name-text">{CompanionData.id}</p></div>
            </header>
            <div className="currentChat-container">
                {serverMessages.map(mess => {

                    const iD = Math.random() * 10;
                    const newId = iD !== mess.id ? mess.id : iD;
                    const toggleUserStyle = mess.currentUser === CompanionData.id ? "user2": "user1";

                    return(
                        <Message 
                            {...mess}
                            key={newId}
                            mess = {message}
                            toggleUserStyle={toggleUserStyle}
                        />
                    )

                })}
            </div>
        </>
    )   
}

export default Chat;