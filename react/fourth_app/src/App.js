import './App.css';
import Note from './Components/Note';
import { useState } from 'react';

function App() {
  // let sampleArray = [{ title: 'The Hacking School', content: "Study about the react" },
  // { title: 'W3 School', content: "Study about the HTMl" },
  // { title: 'ChatGpt', content: "Study about the DOM" }]
  const [notes, setNotes] = useState([])
  const [note, setNote] = useState({
    title: "", content: ""
  })
  function onChangeHandler(e) {
    console.log(e.target.name, e.target.value)
    setNote({ ...note, [e.target.name]: e.target.value })

  }
  function onClickHandler(e) {
    e.preventDefault();
    if (note.title.trim() && note.content.trim()) {
      setNotes([...notes, note])
      setNote({ title: "", content: "" })
    }
    else {
      alert("Enter Valid Data")
    }
  }
  function deleteTasks(index) {
    const newList = [...notes];
    newList.splice(index, 1)
    setNotes(newList)
}

  return (
    <>
      {/* <h2>{note.title}</h2>
    <p>{note.content}</p> */}
      <form>
        <label>
          Title:
          <input type='text' placeholder='Enter Title' onChange={onChangeHandler} name="title" value={note.title} />
        </label>
        <label>
          Content:
          <input type='text' placeholder='Enter Content' onChange={onChangeHandler} name="content" value={note.content} />
        </label>
        <br />
        <button onClick={onClickHandler}>Add Note</button>


      </form>
      {notes.map((ele, index) => {
        return (
          <div id='flex'>
            <Note key={index} title={ele.title} content={ele.content} />
            <button id='cross' onClick={()=>deleteTasks(index)}>&#10006;</button>
            <hr/>
          </div>
        )
      })}
    </>
  );
}

export default App;
