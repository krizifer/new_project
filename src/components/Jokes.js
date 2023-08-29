import React, { useState } from 'react';

function App() {
  const [joke, setJoke] = useState(null);

  const handleClick = () => {
    fetch("<https://official-joke-api.appspot.com/random_joke>")
      .then((response) => response.json())
      .then((data) => setJoke(data));
  };

  return (
    <div>
      <button className='btn btn-success' id="button" onClick={handleClick}>
        Click me to generate jokes
      </button>
      {joke && (
        <div>
          <h2>{joke.setup}</h2>
          <p>{joke.punchline}</p>
        </div>
      )}
    </div>
  );
}

export default App;

//This is the practice file for hitting an API
