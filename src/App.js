
import { useState } from 'react';
import './App.css';
import data from "./data"

function ButtonType({ type, activeType, onClick }) {
  return(
    <button 
      className={activeType ? "Button-red" : "Button-blue"}
      onClick={() => onClick(type)}
    >
      {type}
    </button>
  )
}

function ButtonContent({ id, activeType, onClick }) {
  return(
    <button 
      className={activeType ? "Button-red" : "Button-blue"}
      onClick={() => onClick(id)}
    >
      Content {id + 1}
    </button>
  )
}

function App() {
  const [type, setType] = useState("video")
  const [content, setContent] = useState(data[0])
  const [mode, setMode] = useState(true)

  function handleTypeClick(type) {
    setType(() => type)
  }

  function handleContentClick(id) {
    setContent(() => data[id])
  }

  function handleMode() {
    setMode(() => !mode)
  }

  return (
    <div className={["grid-container", mode ? "grid-container-dark" : "grid-container-light"].join(" ")}>

      <div className={["Header", mode ? "DarkMode" : "LightMode"].join(" ")}>
        <button className={mode ? "Button-dark" : "Button-light"}
                onClick={handleMode}>{mode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className={["Menu", mode ? "DarkMode" : "LightMode"].join(" ")}>
        <ButtonContent id={0} activeType={content.id === 1} onClick={handleContentClick} />
        <ButtonContent id={1} activeType={content.id === 2} onClick={handleContentClick} />
        <ButtonContent id={2} activeType={content.id === 3} onClick={handleContentClick} />
        <ButtonContent id={3} activeType={content.id === 4} onClick={handleContentClick} />
        <ButtonContent id={4} activeType={content.id === 5} onClick={handleContentClick} />
        <ButtonContent id={5} activeType={content.id === 6} onClick={handleContentClick} />
        <ButtonContent id={6} activeType={content.id === 7} onClick={handleContentClick} />
        <ButtonContent id={7} activeType={content.id === 8} onClick={handleContentClick} />
      </div>

      <div className={["Main-top", mode ? "DarkMode" : "LightMode"].join(" ")}>
        <ButtonType type="video" activeType={type === "video"} onClick={handleTypeClick} />
        <ButtonType type="text" activeType={type === "text"} onClick={handleTypeClick} />
      </div>

      <div className={["Main-bottom", mode ? "DarkMode" : "LightMode"].join(" ")}>
        {type === "video" ?
          <div>
            <video key={content.video} width="60%" controls>
              <source src={content.video} type="video/mp4" />
            </video>
          </div> :
          <div>
            <h1>{content.title}</h1>
            <p>{content.text} {content.text} {content.text} {content.text} {content.text}</p>
            <p>{content.text} {content.text} {content.text} {content.text} {content.text}</p>
            <p>{content.text} {content.text} {content.text} {content.text} {content.text}</p>
          </div>
        }
      </div>

    </div>
  );
}

export default App;
