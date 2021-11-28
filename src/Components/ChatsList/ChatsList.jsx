import faker from "faker";

export const ChatsList = () => {
  const AllChatList = [
    { name: "Chat-1", id: faker.datatype.uuid() },
    { name: "Chat-2", id: faker.datatype.uuid() },
    { name: "Chat-3", id: faker.datatype.uuid() },
  ];

  return <div className="chatList">
      {AllChatList.map((chat) => (
          <div key={chat.id}>{chat.name}</div>
      ))}
  </div>;
};
