import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  const [count, setCount] = useState(0) 
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
          <Route path='/' element={<ItemListContainer greeting= "Bebé"/>}/>
          <Route path='/category:id' element={<ItemListContainer/>}/>
          <Route path='/item:id' element={<ItemDetailContainer/>}/>   
          </Routes>
        </div>
  </BrowserRouter>        
  )
}

export default App
