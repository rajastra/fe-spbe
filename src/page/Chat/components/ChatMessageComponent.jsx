import propTypes from 'prop-types';

const ChatMessageComponent = ({ userId, message }) => {
  let isCurrentUser = message.user_id == userId;
  const bubbleStyle = isCurrentUser
    ? 'current-user-bubble'
    : 'other-user-bubble';
  const justifyContent = isCurrentUser ? 'flex-end' : 'flex-start';

  return (
    <div className="chat-message" style={{ justifyContent: justifyContent }}>
      <img src={message.avatar} alt="User Avatar" className="avatar" />
      <div className={`message-bubble ${bubbleStyle}`}>
        <div className="message-content" style={{ fontSize: '12px' }}>
          {message.name}
        </div>
        <div className="message-content">{message.message}</div>
        <div className="timestamp">{new Date(message.created_at).toLocaleString()}</div>
      </div>
    </div>
  );
};

ChatMessageComponent.propTypes = {
  userId: propTypes.number.isRequired,
  message: propTypes.object.isRequired,
};


export default ChatMessageComponent;
