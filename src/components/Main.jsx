import { useState } from "react"

const Main = () => {

  const [titles, setTitles] = useState([])
  const [newTitle, setNewTitle] = useState('')

  const addArticle = () => {
    event.preventDefault()
    console.log(`articolo aggiunto è ${newTitle}`);
    setTitles([...titles, newTitle]);
    console.log(titles);


  }

  return (
    <main>
      <form onSubmit={addArticle}>
        <label htmlFor="title">Inserisci il titolo dell'articolo:</label>
        <input
          type="text"
          id="title"
          value={newTitle}
          onChange={e => { setNewTitle(e.target.value) }}
        />
        <button type="submit">Aggiugi articolo</button>
      </form>
      <ul className="articlesList">
        {titles.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  )
}

export default Main
