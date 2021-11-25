import React, { useCallback, useRef, useState, useEffect } from "react";
import faker from "faker";
import { Button, TextField } from "@mui/material";
import "./MessageList.css";
import { Message } from "../../Message.jsx";

export const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (messages[messages.length - 1]?.author === "man") {
      let timer = setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Hello from React bot",
            author: "bot",
            id: faker.datatype.uuid(),
          },
        ]);
        inputRef.current.focus();
      }, 1500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [messages]);

  const addMessage = (event) => {
    event.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: value,
        author: "man",
        id: faker.datatype.uuid(),
      },
    ]);

    setValue("");
    inputRef.current.focus();
  };

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return (
    <div className="message_list">
      {messages.map((message) => (
        <Message key={message.id} text={message.text} id={message.id} />
      ))}

      <form onSubmit={addMessage}>
        <TextField
          placeholder="Enter a message"
          label="Message"
          inputRef={inputRef}
          value={value}
          onChange={handleChange}
          autoFocus
        />
        <Button type="submit" variant="contained">
          Press
        </Button>
      </form>
    </div>
  );
};
