import SignInPage from "@/features/auth/pages/SignInPage";
import SignUpPage from "@/features/auth/pages/SignUpPage";
import MapLayout from "@/features/map/layouts/MapLayout";
import AptDetail from "@/features/map/pages/AptDetail";
import DongDetail from "@/features/map/pages/DongDetail";
import PostArticleAddPage from "@/features/post/pages/PostArticleAddPage";
import PostArticlePage from "@/features/post/pages/PostArticlePage";
import PostDongPage from "@/features/post/pages/PostDongPage";
import PostPage from "@/features/post/pages/PostPage";
import MainLayout from "@/layouts/MainLayout";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    //element: <Navigate to="/map" replace></Navigate> // /map으로 redirect
    element: <MainLayout />,
    children: [
      {
        path: "/map",
        element: <MapLayout />, // 지도 + 사이드바
        children: [
          {
            path: "dong/:dongcode",
            element: <DongDetail />, // MapSidebar의 prop으로 전달됨
          },
          {
            path: "apt/:aptcode",
            element: <AptDetail />, // MapSidebar의 prop으로 전달됨
          },
        ],
      },
      {
        path: "/post",
        element: <PostPage />,
        children: [
          { path: "dong/:dongcode", element: <PostDongPage /> }, // 동 게시판
          { path: "article/:dongpost_id", element: <PostArticlePage /> }, // 게시글 조회
          { path: "article/new", element: <PostArticleAddPage /> }, // 게시글 추가
        ],
      },
    ],
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);
