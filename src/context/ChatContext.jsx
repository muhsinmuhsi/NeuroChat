import  { createContext, useState, useContext } from 'react';
import { initialContacts, initialMessages } from '../data/mockData';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [contacts, setContacts] = useState(initialContacts);
  const [messages, setMessages] = useState(initialMessages);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sendMessage = (text) => {
    const newMsg = {
      id: Date.now(),
      text,
      sent: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => ({
      ...prev,
      [selectedContact.id]: [...(prev[selectedContact.id] || []), newMsg]
    }));
  };

  const value = {
    contacts,
    messages,
    selectedContact,
    searchTerm,
    sidebarOpen,
    setContacts,
    setMessages,
    setSelectedContact,
    setSearchTerm,
    setSidebarOpen,
    sendMessage
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};