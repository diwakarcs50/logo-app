import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Github, { userinfo } from './components/github/github.jsx'
// const router=createBrowserRouter(
//   [
//    {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"/link",
//         element:<Home/>

//       },
//       {
//         path:"/about",
//         element:<About/>

//       },
//       {
//         path:"/github/:userid",
//         element:<Github/>
//       }
//     ]
//    },

//   ]

// )
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
       <Route path="home" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route 
       loader={userinfo}
       path="github"
        element={<Github/>}
        />

    </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
