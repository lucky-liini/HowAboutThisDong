import React from 'react';
import { Outlet } from 'react-router-dom';
type Props = {};

export default function PostPage({}: Props) {
  return (
    <>
      <div>PostPage</div>
      <Outlet />
    </>
  );
}
