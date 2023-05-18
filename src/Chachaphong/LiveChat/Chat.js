//อ๋อง
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./style.css";
import { v4 as uuidv4 } from 'uuid';


function Chat({socket, username, room}) {
    const [currentMessage, setCurrentMessage] = useState("")
    const [messageList, setMessageList] = useState([])

    const sendMessage = async () => {
        if (currentMessage !== ""){
            const messageData = {
                id: uuidv4(), // add unique id
                room: room,
                author: username,
                message: currentMessage,
                time: 
                    new Date(Date.now()).getHours() + 
                    ":" +
                    new Date(Date.now()).getMinutes(),
            }
            await socket.emit("send_message", messageData)
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage(""); // Clear input field
        }
    }

    useEffect(() => {
        if (socket) {
        socket.on("receive_message", (data) => {
            // console.log(data)
            setMessageList((list) => [...list, data]);
        })
    }
    }, [socket])

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>All Support</p>
            </div>
            <div className="chat-body">
                <ScrollToBottom className="message-container">
                {messageList.map((messageContent) => {
                    return <div className="message" id={username === messageContent.author ? "other" : "you"}
                    key={messageContent.id}>
                        <div>
                            <div className="message-content">
                                <p>{messageContent.message}</p>
                            </div>
                            <div className="message-meta">
                            <p id="time">{messageContent.time}</p>
                            <p id="author">{messageContent.author}</p>
                            </div>
                        </div>
                    </div>
                })}
                </ScrollToBottom>
            </div>
            <div className="chat-footer">
                <input 
                type="text" 
                value={currentMessage}
                placeholder="พิมพ์ข้อความ..."
                onChange={(event) => {
                    setCurrentMessage(event.target.value);
                }}
                onKeyPress={(event) => {event.key === "Enter" && sendMessage();
            }}
                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    )
}

export default Chat
