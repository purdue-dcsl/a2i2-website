'use client'

import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewsArticle from './pages/news_article'


export default function Router({
  children,
}: {
  children: React.ReactNode
}) {

  // check when client loads
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className='bg-black h-screen' />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={children} />
        <Route path="/article" element={<NewsArticle />} />
      </Routes>
    </BrowserRouter>
  )
}