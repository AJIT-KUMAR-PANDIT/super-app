import StyleNotes from './Notes.module.css';

const Notes = () => {
  return (
    <>
    <div className={`${StyleNotes.notes}`}>
        <div>
        All notes
        </div>
        <textarea className={`${StyleNotes.takeNotes}`}>
        This is how I am going to learn
        MERN Stack in next 3 months.
        </textarea>
    </div>
    </>
  )
}

export default Notes