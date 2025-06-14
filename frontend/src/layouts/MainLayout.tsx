import React from 'react';
import Header from '@layouts/Header';
import Footer from '@layouts/Footer';
import { Outlet } from 'react-router';
type Props = {};

export default function MainLayout({}: Props) {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* 자식 라우트 렌더링 */}
      </main>
      <Footer />
    </div>
  );
}
