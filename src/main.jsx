import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path =''  element={<App/>} />
      <Route path ='login'  element={<Login/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <RouterProvider router={router}/>
    </Provider>
  </>,
)
