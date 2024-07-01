'use client'

import React from 'react'
import ScrollToTop from './ScrollToTop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewsArticle from './pages/news_article'


export default function Router({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={children} />
        <Route path="/article" element={<NewsArticle />} />
      </Routes>
    </BrowserRouter>
  )
}