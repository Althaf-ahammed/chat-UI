import { useState } from "react";
import { Smile, Send } from "lucide-react";
import ConversationList from "./ConversationList";
import ConversationArea from "./ConversationArea";
import icon from "../assets/profile-circle.png"

const ConversationUI = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "+971 432 342",
      lastMessage: "We've informed our team met consectetur. Scelerisque a aenean luctus ut libero etiam accumsan vitae vulpu",
      color: "bg-purple-600",
      icon: icon,
      time: "Monday",
      unreadCount: 0
    },
    {
      id: 2,
      name: "Salton Morris",
      lastMessage: "Thank you",
      color: "bg-purple-400",
      icon: icon,
      time: "Monday",
      unreadCount: 2
    },
    {
      id: 3,
      name: "+971 432 342",
      lastMessage: "We've informed our team met consectetur. Scelerisque a aenean luctus ut libero etiam accumsan vitae vulpu",
      color: "bg-green-600",
      icon: icon,
      time: "Monday",
      unreadCount: 0
    },
    {
      id: 4,
      name: "+971 432 342",
      lastMessage: "We've informed our team met consectetur. Scelerisque a aenean luctus ut libero etiam accumsan vitae vulpu",
      color: "bg-purple-400",
      icon: icon,
      time: "Monday",
      unreadCount: 0
    },
    {
      id: 5,
      name: "+971 432 342",
      lastMessage: "We've informed our team met consectetur. Scelerisque a aenean luctus ut libero etiam accumsan vitae vulpu",
      color: "bg-teal-500",
      icon: icon,
      time: "Monday",
      unreadCount: 0
    },
    {
      id: 6,
      name: "+971 432 342",
      lastMessage: "We've informed our team met consectetur. Scelerisque a aenean luctus ut libero etiam accumsan vitae vulpu",
      color: "bg-pink-500",
      icon: icon,
      time: "Monday",
      unreadCount: 0
    },
    {
      id: 7,
      name: "+971 432 342",
      lastMessage: "We've informed our team met consectetur. Scelerisque a aenean luctus ut libero etiam accumsan vitae vulpu",
      color: "bg-amber-700",
      icon: icon,
      time: "Monday",
      unreadCount: 0
    },
    {
      id: 8,
      name: "+971 432 342",
      lastMessage: "We've informed our team met consectetur. Scelerisque a aenean luctus ut libero etiam accumsan vitae vulpu",
      color: "bg-indigo-700",
      icon: icon,
      time: "Monday",
      unreadCount: 0
    },
  ]);

  const [activeConversationId, setActiveConversationId] = useState(2);
  const [messages, setMessages] = useState({
    2: [
      { sender: "user", attachment: "INVOICE-0001", time: "9:54 PM" },
      {
        sender: "other",
        content:
          "We've a query on asdakfnsdjnfd, ffs knasdfа. Let us know more about it",
        time: "9:54 PM",
      },
      {
        sender: "user",
        content:
          "Lorem ipsum dolor sit amet consectetur. Scelerisque a aenean luctus ut libero etiam accumsan vitae vulputate.",
        time: "9:54 PM",
      },
      {
        sender: "other",
        content: "Okay, We'll discuss with the team",
        time: "9:54 PM",
      },
      {
        sender: "user",
        content:
          "Etiam integer accumsan at feugiat porttitor facilisi. Duis quam sollicitudin blandit cras luctus id urna.",
        time: "9:54 PM",
      },
    ],
  });

  const [newMessage, setNewMessage] = useState("");

  const activeConversation = conversations.find(
    (conv) => conv.id === activeConversationId
  );

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const updatedMessages = {
        ...messages,
        [activeConversationId]: [
          ...(messages[activeConversationId] || []),
          {
            sender: "user",
            content: newMessage,
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      };
      setMessages(updatedMessages);
      setNewMessage("");

      // Update last message in conversations list
      const updatedConversations = conversations.map((conv) =>
        conv.id === activeConversationId
          ? { ...conv, lastMessage: newMessage }
          : conv
      );
      setConversations(updatedConversations);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <ConversationList
        conversations={conversations}
        setActiveConversation={setActiveConversationId}
        activeConversationId={activeConversationId}
      />
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4 flex items-center">
          <div className={`w-10 h-10 rounded-lg ${activeConversation?.color} flex items-center justify-center text-white text-xl font-bold`}>
          <img src={activeConversation?.icon} alt=''/>
          </div>
          <h2 className="ml-3 text-xl font-bold">{activeConversation?.name}</h2>
        </div>
        <ConversationArea messages={messages[activeConversationId] || [] } icon={activeConversation?.icon} />
        <div className="flex bg-gray-100 p-5">
          <div className="flex-1 flex items-center">
            <div className="flex-1 bg-white rounded-lg border flex items-center">
              <Smile className="ml-3 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Type your message"
                className="flex-1 p-3 focus:outline-none rounded-r-lg"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
            </div>
          </div>
          <button
            className="ml-3 text-white p-3 rounded-lg bg-white border"
            onClick={handleSendMessage}
          >
            <Send className="text-blue-500" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversationUI;
