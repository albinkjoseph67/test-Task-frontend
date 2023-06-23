import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import IndexPage from './Pages/IndexPage'
import Layout from './Layout'
import { UserContextProvider } from './UserContext'
import AccountPage from './Pages/AccountPage'
import AddDiscussion from './Pages/AddDiscussion'
import EditDiscussion from './Pages/EditDiscussion'



axios.defaults.baseURL = 'http://127.0.0.1:4001'
axios.defaults.withCredentials = true;

function App() {
  
  

  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout/>} >

      <Route path='/login' element={<LoginPage/>} />
      <Route index element={<IndexPage/>}/>
      <Route path='/account' element={<AccountPage/>} />
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/account/adddiscussion' element={<AddDiscussion/>}/>
      <Route path='/edit/:id' element={<EditDiscussion/>}/>


      
      </Route>
    </Routes>
    </UserContextProvider>
  )
}

export default App
