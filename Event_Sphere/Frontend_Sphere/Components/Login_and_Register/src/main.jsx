import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import Login from './loginPage'
import Register from './registerPage'
import Rolechoice from './rolechoice/rolechoice'
import CollegeLogin from './College_login/login_college'
import CollegeRegister from './College_login/register_college'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App />} />
      <Route path='/access-account' element={<Rolechoice />} />
      <Route path='/college-login' element={<CollegeLogin />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/college-register' element={<CollegeRegister />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
