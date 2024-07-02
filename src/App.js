import './App.css';
import { Provider } from 'react-redux';
import { store } from './Stores/index';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';
import ShowcartDetails from './Pages/ShowcartDetails';
const route=createBrowserRouter(
  [
    {
      path:'/',
      element:<HomePage/>
    },
    {
      path:'/cartdetails',
      element:<ShowcartDetails/>
    },
    {
      path:'*',
      element:<ErrorPage/>
    }
  ]
)
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  )
}
export default App;
