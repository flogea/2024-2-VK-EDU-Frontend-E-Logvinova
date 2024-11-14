import './App.css';
import { AppRouter } from './app/AppRouter';
import { ChatProvider } from './context/ChatContext';
import { MessagesProvider } from './context/MessagesContext';
import { ModalProvider } from './context/modalContext';

function App() {
  return (
    <ModalProvider>
      <ChatProvider>
        <MessagesProvider>
          <AppRouter />
        </MessagesProvider>
      </ChatProvider>
    </ModalProvider>
  );
}

export default App;
