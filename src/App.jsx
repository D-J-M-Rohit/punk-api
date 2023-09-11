import  { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch data from the Punk API when the component mounts
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Punk API Beers</h1>
      <input
        type="text"
        placeholder="Search for a beer..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <div key={beer.id} className="beer-card">
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
