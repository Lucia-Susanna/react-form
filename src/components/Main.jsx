import { useState } from "react"

const Main = () => {

  const [articlesList, setArticlesList] = useState([])
  const [newTitle, setNewTitle] = useState('')

  const addArticle = () => {
    event.preventDefault()

    setArticlesList([...articlesList, newTitle]);
    setNewTitle('')

  }

  const deleteArticle = (i, title) => {
    console.log(i);
    const newArticlesList = articlesList.filter((item, index) => i !== index)
    setArticlesList(newArticlesList)


    // console.log(newArticlesList);


  }



  return (
    <main>
      <div className="container">
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
          {articlesList.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
              <button onClick={() => deleteArticle(index, item)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>

            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Main
