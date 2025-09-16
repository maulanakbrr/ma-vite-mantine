import { Suspense } from 'react'
import './App.css'
import { RouterProvider } from 'react-router'
import { routeList } from './routes/route-list'

function App() {
  
  return (
    <Suspense fallback={<>Loading</>}>
      <RouterProvider router={routeList}/>
    </Suspense>
  )
}

export default App
