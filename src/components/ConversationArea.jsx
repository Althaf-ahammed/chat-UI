import Message from "./Message";

const ConversationArea = ({ messages, icon }) => (
  <div className="flex-1 flex flex-col justify-end p-4 overflow-y-auto bg-white">
  <div>
    {messages.map((msg, index) => (
    <Message key={index} {...msg} icon={icon} />
    ))}
  </div>
</div>
  );
  export default ConversationArea