import { useState } from 'react';
import '../css/Home.css'
import { Link } from 'react-router-dom';

function Home(){

    const [array, setArray] = useState(() => {
        return JSON.parse(localStorage.getItem("flashcards-array")) || [];
    });

    return(
        <div className="main-div">
            <div className='addflashcard-div'>
                <p>Created Flashcards: {array.length}</p>
                <Link to="/study">
                    <button className='study-button'>Study</button>
                </Link>
                <Link to="/create-flashcard">
                    <button className='addflashcard-button'>Add Flashcard</button>
                </Link>
            </div>
        </div>
    );
}

export default Home; 