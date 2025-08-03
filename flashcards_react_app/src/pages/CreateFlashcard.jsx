import { useRef } from 'react';
import styles from '../css/CreateFlashcard.module.css';

function CreateFlashcard() {

  const front = useRef("");
  const back = useRef("");

  function create() {

    const newCard = {
      front: front.current,
      back: back.current,
    };

    const existing = JSON.parse(localStorage.getItem("flashcards-array")) || [];
    const updated = [...existing, newCard];

    localStorage.setItem("flashcards-array", JSON.stringify(updated));
  }

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>Add Flashcard</h1>
      <form action="/my-flashcards" className={styles.form}>
        <label htmlFor="front">Front</label>
        <input id="front" type="text" name="front" onChange={e => {front.current = e.target.value}} />

        <label htmlFor="back">Back</label>
        <input id="back" type="text" name="back" onChange={e => {back.current = e.target.value}}/>

        <input type="submit" value="Create" onClick={create} className={styles.submitButton} />
      </form>
    </div>
  );
}

export default CreateFlashcard;
