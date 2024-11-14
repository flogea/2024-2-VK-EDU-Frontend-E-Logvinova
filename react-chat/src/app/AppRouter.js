import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChatListPage, ChatPage } from '../pages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatListPage />} />
        <Route path="/chat/:id" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
};
