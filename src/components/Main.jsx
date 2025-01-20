import { useState } from "react"

const Main = () => {

  const [title, setTitle] = useState('ciao')

  const handlerSubmit = () => {
    event.preventDefault()
    console.log(`articolo aggiunto è ${title}`);

  }

  return (
    <main>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="title">Inserisci il titolo dell'articolo:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => { setTitle(e.target.value) }}
        />
        <button type="submit">Aggiugi articolo</button>
      </form>
      <p>{title}</p>
    </main>
  )
}

export default Main
