import { CheckCheck, FileText } from "lucide-react";

const Message = ({ sender, content, time, attachment, icon }) => (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      {sender !== 'user' && (
        <div className="w-8 h-8 rounded-lg bg-purple-400 self-end flex items-center justify-center text-white text-sm mr-2 ">
          <img src={icon} alt=''/>
        </div>
      )}
      <div className={`max-w-[70%] bg-gray-100  ${sender === 'user' ? 'rounded-t-2xl rounded-bl-[20px]' : 'rounded-t-2xl rounded-br-[20px]'} p-3`}>
        {content && <p className="mb-1">{content}</p>}
        {attachment && (
          <div className="flex items-center bg-gray-50 p-2 rounded mb-1">
            <FileText className="text-red-500 mr-2" size={20} />
            <span className="text-sm text-red-500">{attachment}</span>
          </div>
        )}
        <div className="flex justify-end items-center">
          <span className="text-xs text-gray-500 mr-1">{time}</span>
          {sender === 'user' && <CheckCheck className="text-blue-500" size={14} />}
        </div>
      </div>
    </div>
  );
  export default Message