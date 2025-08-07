import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import { Home, About, Contact, User, Github, ContextApi, Basics, BgChanger, Card, Counter, Hooks, ReactElement, TailwindProps, Login, Profile, ThemeSwitcher, Todo } from './components/index.js'
import { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },{
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         loader:{githubInfoLoader},
//         path: "github",
//         element: <Github />
//       },
//       {
//         path: "user/:userid",
//         element: <User />
//       },
//       {
//         path: "contextapi",
//         element: <ContextApi />
//       },
//       {
//         path: "basics",
//         element: <Basics />,
//         children:[
//           {
//             path: "card",
//             element: <Card />
//           }
//         ]
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='contextapi' element={<ContextApi />}/>
      <Route path='basics' element={<Basics />}>
        <Route path='card' element={<Card />} />
        <Route path='counter' element={<Counter />} />
        <Route path='hooks' element={<Hooks />} />
        <Route path='reactelement' element={<ReactElement />} />
        <Route path='tailwindprops' element={<TailwindProps />} />
        <Route path='backgroundchanger' element={BgChanger}/>
      </Route>
      <Route path='profile' element={<Profile />} />
      <Route path='login' element={<Login />} />
      <Route path='todo' element={<Todo />} />
      <Route path='themeswitcher' element={<ThemeSwitcher />} />
      
      <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github />}/>
      <Route 
        path='user/:userid' 
        element={<User />}
        
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
)
