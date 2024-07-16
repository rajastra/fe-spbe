import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import {
  query,
  collection,
  onSnapshot,
  where,
  doc,
  updateDoc,
  or,
} from 'firebase/firestore';
import ModalLoadingComponent from '../../component/loader/ModalLoadingComponent.jsx';
import ChatMessageComponent from './components/ChatMessageComponent.jsx';
import './ChatListPage.css';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const ChatListPage = () => {
  const userId = Cookies.get('id');
  const [isLoading, setIsLoading] = useState(false);
  // const [userId2, setUserId2] = useState('');
  const [chats, setChats] = useState([]);
  const [chat, setChat] = useState({});
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const getChatByFilter = () => {
    setIsLoading(true);
    const q = query(
      collection(db, 'chats'),
      where('user_id_1', '==', '6568704108fbbfb4eaac4019'),
      where('user_id_2', '==', '656955650b76f26432a41b5d')
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      QuerySnapshot.forEach((doc) => {
        setChat({
          id: doc.id,
          user_id_1: doc.data().user_id_1,
          user_id_2: doc.data().user_id_2,
        });
        setMessages(doc.data().messages);
      });
    });
    setIsLoading(false);
    return () => unsubscribe;
  };

  const getChatsList = () => {
    setIsLoading(true);
    const q = query(
      collection(db, 'chats'),
      or(where('user_id_1', '==', userId), where('user_id_2', '==', userId))
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chats = [];
      querySnapshot.forEach((doc) => {
        const chatData = doc.data();
        chats.push({
          id: doc.id,
          user_id_1: chatData.user_id_1,
          user_id_2: chatData.user_id_2,
        });
      });
      setChats(chats);
    });
    setIsLoading(false);
    return () => unsubscribe();
  };

  // const createNewChat = async () => {
  //   const chatQuery = query(
  //     collection(db, 'chats'),
  //     where('user_id_1', '==', userId),
  //     where('user_id_2', '==', '656955650b76f26432a41b5d')
  //   );

  //   const chatSnapshot = await getDocs(chatQuery);

  //   if (!chatSnapshot.empty) {
  //     console.log('Chat already exists');
  //     return;
  //   }

  //   const docRef = await addDoc(collection(db, 'chats'), {
  //     user_id_1: userId,
  //     user_id_2: '656955650b76f26432a41b5d',
  //     messages: [],
  //   });

  //   console.log('Document written with ID: ', docRef.id);
  // };

  useEffect(() => {
    getChatsList();
  }, []);

  useEffect(() => {
    getChatByFilter();
  }, []);

  const sendMessageToFirestore = async () => {
    const refDoc = doc(db, 'chats', chat.id);
    await updateDoc(refDoc, {
      messages: [
        ...messages,
        {
          user_id: userId,
          name: Cookies.get('name'),
          avatar:
            userId == '6568704108fbbfb4eaac4019'
              ? 'https://i.pravatar.cc/150?img=1'
              : 'https://i.pravatar.cc/150?img=2',
          message: inputMessage,
          created_at: new Date().toISOString(),
        },
      ],
    });
    setInputMessage('');
  };

  return (
    <div className='container mt-5 mb-5'>
      {/* <button className="btn btn-primary" onClick={() => createNewChat()}>
        new chat
      </button> */}
      <div className='chatting row'>
        <div className='col-3'>
          <div className='list-group'>
            {chats.map((chat, index) => (
              <button
                key={index}
                type='button'
                className='list-group-item list-group-item-action'
                // onClick={() =>
                //   setUserId2(chat.user_id_2)
                // }
              >
                Chat konsultasi {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className='col-9'>
          <ModalLoadingComponent isShow={isLoading} message='Get Data...' />
          <div className='chat-container'>
            <div className='row'>
              <div className='col-12'>
                <div className='row'>
                  <div className='col-12'>
                    <h2>Konsultasi</h2>
                  </div>
                </div>
                <div
                  className='row '
                  style={{ height: '300px', overflow: 'auto' }}
                >
                  <div className='col-12'>
                    {messages.map((message, index) => {
                      return (
                        <ChatMessageComponent
                          key={`msg-${index}`}
                          userId={userId}
                          message={message}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-group'>
                      <label htmlFor='content'>Message</label>
                      <textarea
                        className='form-control'
                        id='content'
                        rows='3'
                        onChange={(e) => {
                          setInputMessage(e.target.value);
                        }}
                        value={inputMessage}
                      ></textarea>
                    </div>
                    <button
                      type='button'
                      className='btn btn-primary mt-2 me-3'
                      onClick={sendMessageToFirestore}
                    >
                      Send
                    </button>
                    <Link to='/review'>
                      <button className='btn btn-outline-primary text-center mt-2 '>
                        Akhiri Chat
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListPage;
