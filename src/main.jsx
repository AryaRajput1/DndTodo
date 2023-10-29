import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

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
    <RouterProvider router={router}/>
    </Provider>
  </>,
)
