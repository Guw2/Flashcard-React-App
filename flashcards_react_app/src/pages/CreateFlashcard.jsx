import styles from '../css/CreateFlashcard.module.css';

function CreateFlashcard() {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>Add Flashcard</h1>
      <form action="/my-flashcards" className={styles.form}>
        <label htmlFor="front">Front</label>
        <input id="front" type="text" name="front" />

        <label htmlFor="back">Back</label>
        <input id="back" type="text" name="back" />

        <input type="submit" value="Create" className={styles.submitButton} />
      </form>
    </div>
  );
}

export default CreateFlashcard;
