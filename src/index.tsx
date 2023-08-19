import React,{Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { LoaderFunctionArgs, RouterProvider } from 'react-router-dom';
import store from './Store/store';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
const Home = lazy(()=>import('./pages/Home'));
const ShowMeal = lazy(()=>import('./pages/showMeal'));
const ShowCategories = lazy(()=>import('./pages/ShowCategories'));
const ShowArea = lazy(()=>import('./pages/ShowArea'));
const ShowIngradiante = lazy(()=>import('./pages/ShowIngradiante'));
const SearchPage = lazy(()=>import('./pages/SearchPage'));
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const routers = createBrowserRouter([
  {
    path:'/React-Food/',
    element:<App />,
    errorElement:<ErrorPage />,
    children:[
      {
        index:true,
        element:<Suspense><Home /></Suspense>
      },
      {
        path:'showmeal/:id',
        element:<Suspense><ShowMeal /></Suspense>,
        loader:({params:{id}}:LoaderFunctionArgs):null=>{
          if(!id||!/^\d+$/.test(id)){
              throw new Response('error in routes',{status:500,statusText:'invalid route should use only number'});
          }
          return null;
        }
      },
      {
        path:'searcphage',
        element:<Suspense><SearchPage /></Suspense>
      },
      {
        path:'showcategories/:category',
        element:<Suspense><ShowCategories /></Suspense>,
        loader:({params:{category}}:LoaderFunctionArgs):null=>{
          if(!category||!/^[a-zA-Z]+$/.test(category)){
              throw new Response('error in routes',{status:500,statusText:'invalid route should use only number'});
          }
          return null;
        }
      },
      {
        path:'showarea/:area',
        element:<Suspense><ShowArea /></Suspense>,
        loader:({params:{area}}:LoaderFunctionArgs):null=>{
          if(!area||!/^[a-zA-Z]+$/.test(area)){
              throw new Response('error in routes',{status:500,statusText:'invalid route should use only number'});
          }
          return null;
        }
      },
      {
        path:'showingradiante/:ingradiante',
        element:<Suspense><ShowIngradiante /></Suspense>,
        loader:({params:{ingradiante}}:LoaderFunctionArgs):null=>{
          if(!ingradiante||!/^[a-zA-Z!@#$%^&*()_]+$/.test(ingradiante)){
              throw new Response('error in routes',{status:500,statusText:'invalid route should use only number'});
          }
          return null;
        }
      }
    ]
  }
])
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={routers} />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
