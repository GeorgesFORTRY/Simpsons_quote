import { useState } from "react";
import axios from 'axios';
import QuoteCard from "./Components/QuoteCard"


function App() {
  const [quote, setQuote] = useState(null);
  const getQuote = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
    .then((response) => response.data)
    .then((data) => {

      setQuote(data[0]);
    });
  };
  return (
    <div className="App">
      <QuoteCard quote={quote} />
      <button type="button" onClick={getQuote}>Get quote</button>
    </div>
  );
}

export default App;
