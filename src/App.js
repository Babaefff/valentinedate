import React, { useState } from "react";
import "./styles.css";

function App() {
  const [response, setResponse] = useState("");
  const [gifUrl, setGifUrl] = useState(
    "https://i.pinimg.com/originals/c0/68/60/c06860b058d7aadaa28874be0a723947.gif"
  );

  const handleYesClick = () => {
    setResponse("I LOVE YOU SABRINA <3");
    setGifUrl(
      "https://i.pinimg.com/originals/38/ff/a4/38ffa4616c7e43522afa0d3569fb522b.gif"
    );
  };

  const handleNoClick = () => {
    let nextResponse = "";
    switch (response) {
      case "":
        nextResponse = "Really? Think again";
        break;
      case "Really? Think again":
        nextResponse = "Are you sure? Won't you be my valentine?";
        break;
      case "Are you sure? Won't you be my valentine?":
        setGifUrl("https://i.pinimg.com/originals/64/d0/9c/64d09cfbed528b8b8348b4e2cfbf012d.gif");
        nextResponse = "There is no other option :)";
        break;
      default:
        nextResponse = response;
        break;
    }
    setResponse(nextResponse);
    if (nextResponse !== "") {
      setGifUrl("https://media.tenor.com/925LDfyVUGEAAAAi/cute-sad.gif");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {response === "" ? "Will you be my valentine Sabrina?" : response}
        </h1>
        <img className="gif" src={gifUrl} alt="GIF" />
        {response === "" ? (
          <div>
            <button className="yes-button" onClick={handleYesClick}>
              Yes
            </button>
            <button className="no-button" onClick={handleNoClick}>
              No
            </button>
          </div>
        ) : response === "I LOVE YOU SABRINA <3" ? (
          <div>
            <p className="date">{"I can't wait for our Valentine's datee"}</p>
          </div>
        ) : (
          <div>
            {response === "There is no other option :)" ? (
              <div>
                <button className="yes-button" onClick={handleYesClick}>
                  Yes
                </button>
                <button className="yes-button" onClick={handleYesClick}>
                  Yes
                </button>
              </div>
            ) : (
              <div>
                <button className="yes-button" onClick={handleYesClick}>
                  Yes
                </button>
                <button className="no-button" onClick={handleNoClick}>
                  No
                </button>
              </div>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
