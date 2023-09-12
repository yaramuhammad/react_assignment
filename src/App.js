import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Layout from './components/Layout/layout';
import 'bootstrap/dist/css/bootstrap.css';
import './components/Layout/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

const router = createBrowserRouter(
  [{
    path:'',element:<Layout/>, children:[
      {path: '', element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'portfolio', element: <Portfolio/>},
      {path: 'contact', element: <Contact/>}
  ],
  }]
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
