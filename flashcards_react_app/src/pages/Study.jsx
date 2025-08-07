import { useState } from 'react';
import Flashcard from '../components/Flashcard'

function Study(){

    const [array, setArray] = useState(() => {
        return JSON.parse(localStorage.getItem("flashcards-array") || []);
    });



    return(
        <div className="main-div">
            <div>
                <Flashcard card={array}/>
            </div>
        </div>
    );
}

export default Study;