import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';


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
        path:'/courses',
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz/1');
       
      },
      element:<Courses></Courses>
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
    }
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
