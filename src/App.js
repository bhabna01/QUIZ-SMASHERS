import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';
import Blog from './components/Blog/Blog';

import Home from './components/Home/Home';
import Quizes from './components/Quizes/Quizes';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[{
        path:'/',
        loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Home></Home>
      },
      {
        // path:'/quizes',
        // loader: async () => {
        //   return fetch('https://openapi.programming-hero.com/api/quiz/1');
       
        path: '/quizes/:id',
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      },
      element:<Quizes></Quizes>
    },
      {
        path:'/statistics',
        loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Statistics></Statistics>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
  
      }

      ]
    },
    {
      path: '*',
      element: <h2>Not Found 404!!!</h2>
    }
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
