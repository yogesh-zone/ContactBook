import React from 'react';
import { Route ,Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Navbar from "./component/Contact_Book/Components/navbar" 
import Home from "./component/Contact_Book/Components/home"
import AddPost from "./component/Contact_Book/Components/addContact"
import EditContact from "./component/Contact_Book/Components/editContact"
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './component/Contact_Book/redux/reducers/rootReducer';
const store = createStore( rootReducer , composeWithDevTools());
const App = () => {
  return (
    <>
      <Provider store={store}>
      <Router  basename="/contactbook">
      <ToastContainer />
      <Navbar/> 
      <Routes>
      <Route exact path='/' element={<Home/> }></Route>
      <Route  path="/add" element={<AddPost/>}/>
      <Route exact path="/edit/:id" element={<EditContact/>}/>
      </Routes>
      </Router>
      </Provider>
    </>
  )
}

export default App


