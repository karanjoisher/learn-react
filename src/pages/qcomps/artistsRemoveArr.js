import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  function remove(idx) {
    let newarr = [...artists];
    newarr.splice(idx, 1);
    newarr = newarr.map((a, index) => {return {...a, id: index}});
    setArtists(newarr);
  } 

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              remove(artist.id);              
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
