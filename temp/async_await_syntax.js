// write a function to retrieve a blob of json
// make an ajax request! Use the 'fetch' function.
// http://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//     fetch('https://rallycoding.herokuapp.com/api/music_albums')
//       .then(res => res.json())
//       .then(json => console.log(json));
// }

// ES2017 async/await syntax
const fetchAlbums = async () => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()
    console.log(json);
}

fetchAlbums();