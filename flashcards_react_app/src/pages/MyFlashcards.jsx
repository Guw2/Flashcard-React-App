import { useEffect, useState } from "react";
import styles from '../css/MyFlashcards.module.css';

function MyFlashcards() {
  const [flashcards, setFlashcards] = useState(() => {
    return JSON.parse(localStorage.getItem("flashcards-array")) || [];
  });

  useEffect(() => {
    console.log(flashcards);
  }, [flashcards]); // adicionei a dependência para evitar chamadas infinitas

  const list = flashcards.map((x, index) =>
    <div key={index} className={styles.flashcardShow}>
      <div className={styles.title}>{x.title}</div>
      <div className={styles.frontDiv}>
        <label>Front</label>
        <p>{x.front}</p>
      </div>
      <div className={styles.frontDiv}>
        <label>Back</label>
        <p>{x.back}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.mainDiv}>
      {list}
    </div>
  );
}

export default MyFlashcards;
