import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Home from 'pages/Home';
import Orders from 'pages/Orders';
import Account from 'pages/Account';
import Settings from 'pages/Settings';
import Chat from 'pages/Chat';
import Faq from 'pages/Faq';

export default function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/account" element={<Account />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
  );
}
