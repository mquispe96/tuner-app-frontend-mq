import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Loading from './Components/Loading';
import DeleteSong from './Components/DeleteSong';
import {MdFavorite} from 'react-icons/md';
import {MdFavoriteBorder} from 'react-icons/md';

const ShowSong = () => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const navigate = useNavigate();
  const {id} = useParams();
  const [song, setSong] = useState('');
  const [isFavorite, setIsFavorite] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [deleteWindow, setDeleteWindow] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/songs/${id}`)
      .then(res => {
        setSong(res.data);
        setIsFavorite({is_favorite: res.data.is_favorite});
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        navigate('/songs/error');
      });
  }, []);

  useEffect(() => {
    axios
      .patch(`${BASE_URL}/songs/${id}`, isFavorite)
      .catch(() => navigate('/songs/error'));
  }, [isFavorite]);

  return (
    <main className="song">
      <h1>Song Details</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="song__details">
          <h2>{song.name}</h2>
          <p>{song.artist}</p>
          <p>{song.album}</p>
          <p>{song.time}</p>
          <p
            onClick={() =>
              setIsFavorite(prev => ({...prev, is_favorite: !prev.is_favorite}))
            }
          >
            {isFavorite.is_favorite ? <MdFavorite /> : <MdFavoriteBorder />}{' '}
            Favorite
          </p>
          {!deleteWindow && (
            <div className="song__buttons">
              <button onClick={() => navigate('/songs')}>Back</button>
              <button onClick={() => navigate(`/songs/edit/${id}`)}>
                Edit
              </button>
              <button onClick={() => setDeleteWindow(true)}>Delete</button>
            </div>
          )}
          {deleteWindow && (
            <DeleteSong id={id} setDeleteWindow={setDeleteWindow} />
          )}
        </section>
      )}
    </main>
  );
};

export default ShowSong;
