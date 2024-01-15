import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import { createStore } from 'redux';
import ContactReducer from './redux/Redusers/ContactRedusers';
import { composeWithDevTools } from '@redux-devtools/extension';
import { Provider } from 'react-redux';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}/>
       <Route path='/add' element={<Add/>}/>
       <Route path='/edit/:id' element={<Edit/>}/>
    </Route>
  )
)

const store = createStore(ContactReducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

