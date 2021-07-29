import React, { useEffect, useState } from 'react';
import { postUserConvarsation, getUserConversation } from '../../utils/ws.js';
import { userData } from '../../users/shulgamalthael.js';
import Chat from '../Chat/Chat.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

const Messanger = ({ CompanionData }) => {

    const [ message, setMessage ] = useState('');
    const [ serverMessages, setServerMessages ] = useState([]);
    const [ currentUser, setCurrentUser ] = useState(userData.id);

    const conversationsList = Object.keys(userData.companions);
    // console.log(conversationsList);

    useEffect( () => {
        return getUserConversation(CompanionData.url).then(res => setServerMessages([...res]))
    }, [serverMessages.length])

    const handleChange = e => {
        setMessage(e.target.value);
    }

    const onEnterPress = e => {
        if ( e.keyCode === 13 ) {
            sender();
        }
    }

    const sender = () => {
        // if (ws.readyState !== 1) {
        //     setTimeout(() => {
        //         sender();
        //     }, 0.001)
        // } else {
        //     ws.send(message);
        // }
        if (message.split('').length > 0) {
            setServerMessages(prev => ([...prev, { id: Math.random() * 10, message: message, user: currentUser }]));
            setMessage('');
        }
    }

    const postChatData = conv_url => {
        sender();
        postUserConvarsation(conv_url, {message: message, currentUser: currentUser});
    }

    const toggleUser = () => {
        const user = currentUser === userData.id ? CompanionData.id : userData.id
        setCurrentUser(user);
    }

    if ( serverMessages.length < 0 ) {
        return null;
    }

    return(
        <>
            <div className="messanger">
                <div className="sidebar">
                    <Sidebar conversationsList={conversationsList}/>
                </div>
                <div className="currentChat">
                    <Chat 
                        serverMessages={serverMessages}
                        currentUser={currentUser}
                        message={message}
                        CompanionData={CompanionData}
                    />
                    <div className="navigation">
                        <button className="navigation-btn left" onClick={() => toggleUser()}>Toggle User</button>
                        <input className="navigation-input" type="text" onKeyDown={onEnterPress} onChange={handleChange} value={message} maxLength="120" placeholder="Put your message" />
                        <button className="navigation-btn right" onClick={() => postChatData(CompanionData.url)}>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messanger;