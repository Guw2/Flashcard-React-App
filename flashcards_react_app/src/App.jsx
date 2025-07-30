import './App.css'
import Flashcard from './components/Flashcard'

function App() {
  
  const card = {
    title: "card #1",
    front: "Front",
    back: "Back"
  };

  return (
    <>
      <Flashcard card={card}></Flashcard>
    </>
  )
}

export default App
