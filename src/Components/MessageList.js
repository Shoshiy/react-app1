import React, { useCallback, useRef, useState, useEffect } from "react";
import faker from "faker";
import { Button, TextField } from "@mui/material";
import { Message } from "../Message.js";

// const initMess = [
//   { author: "man", text: "mess1", id: faker.datatype.uuid() },
//   { author: "man", text: "mess2", id: faker.datatype.uuid() },
//   { author: "man", text: "mess3", id: faker.datatype.uuid() },
// ];

export const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (messages[messages.length - 1]?.author === "man") {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Hello", author: "bot", id: faker.datatype.uuid() },
        ]);
        inputRef.current.focus();
      }, 1500);
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
    console.log(messages);
  };

  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value);
    },
    [messages]
  );

  return (
    <div>
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
        />
        <Button variant="contained">Press</Button>
      </form>
    </div>
  );
};
