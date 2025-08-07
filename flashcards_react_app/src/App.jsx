import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Options from './pages/Options'
import CreateFlashcard from './pages/CreateFlashcard'
import MyFlashcards from './pages/MyFlashcards'
import Study from './pages/Study'

function App() {

  return (
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/options' element={<Options />} />
            <Route path='/study' element={<Study />} />
            <Route path='/my-flashcards' element={<MyFlashcards />} />
            <Route path='/create-flashcard' element={<CreateFlashcard />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
