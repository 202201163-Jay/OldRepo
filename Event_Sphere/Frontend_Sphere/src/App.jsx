import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {College_Login} from './Pages/College/College_Login';
import {College_Register} from './Pages/College/College_Register';
import {Student_Login} from './Pages/Student/Stu_Login';
import {Student_Register} from './Pages/Student/Stu_Reg';
import {Home} from './Pages/Home/Home';
import { Login } from './Pages/Home/Login';
import { Blogs } from './Pages/Home/Blogs';

export const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path="/college-login" element={<College_Login/>} />
        <Route path="/college-register" element={<College_Register/>} />
        <Route path="/student-login" element={<Student_Login/>} />
        <Route path="/student-register" element={<Student_Register/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
    </>
  );
}
