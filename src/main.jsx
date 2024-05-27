import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyPage } from './pages/MyPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './components/Root';
import { Intro } from './pages/Intro';
import { Drone } from './pages/Drone';
import { Raspberry } from './pages/Raspberry';
import { Berichten } from './pages/Berichten';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <MyPage />,
        
      },
      
       {
        path: '/Intro',
        element: <Intro />,
        }, 
       {
        path: '/Drone',
        element: <Drone />,
       },
       {
        path: '/Raspberry',
        element: <Raspberry />,
        },
        {
        path: '/Berichten',
        element: <Berichten />,
          },
        {
        path: '*',
        element: <div>Not Found</div>,
        }
      
    ],
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
