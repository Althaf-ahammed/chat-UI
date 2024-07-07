import { CheckCheck, LogOut, Search } from "lucide-react";

const ConversationList = ({
  conversations,
  setActiveConversation,
  activeConversationId,
}) => {
  const truncateMessage = (message, maxLength = 23) => {
    if (message.length <= maxLength) return message;
    return message.slice(0, maxLength) + '...';
  };
  return (
    <div className="w-1/4 bg-gray-200 border-r border-gray-300 overflow-y-auto">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">Conversations</h2>
        <LogOut className="text-red-500 cursor-pointer" size={20} />
      </div>
      <div className="p-4 border-b border-gray-300">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-8 border border-gray-300 rounded-md bg-gray-100"
          />
          <Search className="absolute left-2 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
      {conversations.map((conv) => (
        <div className="border-b border-gray-300 mx-2 py-1" key={conv.id}>
          <div
            className={`flex items-center p-4 hover:bg-gray-300 cursor-pointer ${
              conv.id === activeConversationId ? "bg-customBlack-10" : ""
            }`}
            onClick={() => setActiveConversation(conv.id)}
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${conv.color}`}
            >
              <img src={conv.icon} alt=''/>
            </div>
            <div className="ml-3 flex-1">
              <div
                className={`${
                  conv.id === activeConversationId ? "font-semibold" : ""
                }`}
              >
                {conv.name}
              </div>

              <div className="text-sm text-gray-600 flex items-center">
                <CheckCheck className="text-blue-500 mr-1" size={14} />
                <span className="truncate">
                  {truncateMessage(conv.lastMessage)}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className={`text-xs ${
                  conv.id === activeConversationId
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                {conv.time}
              </div>
              {conv.unreadCount > 0 && (
                <span className="flex justify-center bg-blue-500 w-8 text-white text-xs rounded-l-[50%] rounded-r-[50%] px-2 py-1">
                  {conv.unreadCount}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
