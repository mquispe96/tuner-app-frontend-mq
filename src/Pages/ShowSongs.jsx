import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Loading from './Components/Loading';
import Song from './Components/Song';

const ShowSongs = () => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/songs`)
      .then(res => {
        setSongs(res.data);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        navigate('/error');
      });
  }, []);

  return (
    <main className='songs'>
      <h2>Songs</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <table className='songs__table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Time</th>
              <th>Favorite?:</th>
            </tr>
          </thead>
          <tbody>
            {songs.map(song => (
              <Song key={song.id} song={song} />
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
};

export default ShowSongs;
