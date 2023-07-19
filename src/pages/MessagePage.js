import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  Page,
  Messages,
  MessagesTitle,
  Message,
  Messagebar,
  Link,
  f7ready,
  f7,
} from "framework7-react";

export default () => {
  const [typingMessage, setTypingMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messagesData, setMessagesData] = useState([
    {
      type: "sent",
      text: "How are you?",
    },
    {
      name: "ChatGPT",
      type: "received",
      text: "Hi, I am good!",
    },
  ]);

  useEffect(() => {
    f7ready(() => {
      /*    */
    });
  }, []);

  const isFirstMessage = (message, index) => {
    const previousMessage = messagesData[index - 1];
    if (message.isTitle) return false;
    if (
      !previousMessage ||
      previousMessage.type !== message.type ||
      previousMessage.name !== message.name
    )
      return true;
    return false;
  };

  const isLastMessage = (message, index) => {
    const nextMessage = messagesData[index + 1];
    if (message.isTitle) return false;
    if (
      !nextMessage ||
      nextMessage.type !== message.type ||
      nextMessage.name !== message.name
    )
      return true;
    return false;
  };

  const isTailMessage = (message, index) => {
    const nextMessage = messagesData[index + 1];
    if (message.isTitle) return false;
    if (
      !nextMessage ||
      nextMessage.type !== message.type ||
      nextMessage.name !== message.name
    )
      return true;
    return false;
  };

  const sendMessage = () => {
    const text = messageText.replace(/\n/g, "<br>").trim();
    const messagesToSend = [];

    if (text.length) {
      messagesToSend.push({
        type: "sent",
        text: text,
      });
    }
    if (messagesToSend.length === 0) {
      return;
    }

    setMessagesData([...messagesData, ...messagesToSend]);
    setMessageText("");

    //Show loading indicator
    setTypingMessage(true);
    //ChatGPT API

    fetch(`https://api.openai.com/v1/chat/completions`, {
      method: "post",
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        messages: messageText,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
    });

    setMessagesData((prevMessagesData) => {
      return [
        ...prevMessagesData,
        {
          type: "received",
          text: "suppose this is the response from GhatGPT",
        },
      ];
    });
    /*  setTimeout(() => {
      

      setTypingMessage(false);
    }, 3000);*/
  };

  return (
    <Page>
      <Navbar title="Messages"></Navbar>

      <Messagebar
        value={messageText}
        onInput={(e) => setMessageText(e.target.value)}
      >
        <Link slot="inner-end" onClick={sendMessage}>
          Send
        </Link>
      </Messagebar>

      <Messages>
        <MessagesTitle>Conversation</MessagesTitle>

        {messagesData.map((message, index) => (
          <Message
            key={index}
            type={message.type}
            name={message.name}
            first={isFirstMessage(message, index)}
            last={isLastMessage(message, index)}
            tail={isTailMessage(message, index)}
          >
            {message.text}
          </Message>
        ))}
        {typingMessage && (
          <Message
            type="received"
            typing={true}
            first={true}
            last={true}
            tail={true}
            header={`ChatGPT is typing`}
          />
        )}
      </Messages>
    </Page>
  );
};
