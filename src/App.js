import React, { useState, useEffect, useRef } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [timer, setTimer] = useState(5);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  // const [disableTextArea, setDisableTextArea] = useState(true);

  // nekoja promena

  const textareaRef = useRef();

  useEffect(() => {
    if (timer > 0 && isGameStarted) {
      setTimeout(() => setTimer((prev) => prev - 1), 1000);
    } else {
      endGame();
    }
  }, [timer, isGameStarted]);

  const startGame = () => {
    // setDisableTextArea(false);
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
    setTimer(5);
    setIsGameStarted(true);
    setUserInput("");
  };

  const endGame = () => {
    // setDisableTextArea(true);
    textareaRef.current.disabled = true;
    setIsGameStarted(false);
    const arrayOfWords = userInput.split(" ");
    const filteredArrayOfWords = arrayOfWords.filter((el) => el !== "");
    setScore(filteredArrayOfWords.length);
  };

  return (
    <div className="gameContainer">
      <h1>Typing Game</h1>
      <textarea
        ref={textareaRef}
        disabled={true}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <div>
        <button onClick={startGame}>Start Game</button>
      </div>
      <h4>Time left: {timer}</h4>
      <h4>Score: {score}</h4>
    </div>
  );
}

export default App;
