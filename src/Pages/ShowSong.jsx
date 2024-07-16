import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Loading from './Components/Loading';
import DeleteWindow from './Components/DeleteWindow';
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
        navigate('/404');
      });
  }, []);

  useEffect(() => {
    axios
      .patch(`${BASE_URL}/songs/${id}`, isFavorite)
  }, [isFavorite]);

  return (
    <main className="song">
      <h1>Song Details</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section className="song__details">
            <h2>Title - {song.name}</h2>
            <p>Artist/s - {song.artist}</p>
            <p>Abum - {song.album}</p>
            <p>Duration - {song.time}</p>
            <p
              className="favorite"
              onClick={() =>
                setIsFavorite(prev => ({
                  ...prev,
                  is_favorite: !prev.is_favorite,
                }))
              }
            >
              {isFavorite.is_favorite ? <MdFavorite /> : <MdFavoriteBorder />}{' '}
              Favorite
            </p>
          </section>
          {!deleteWindow && (
            <div className="song__btns">
              <button onClick={() => navigate('/songs')}>Back</button>
              <button onClick={() => navigate(`/songs/edit/${id}`)}>
                Edit
              </button>
              <button onClick={() => setDeleteWindow(true)}>Delete</button>
            </div>
          )}
          {deleteWindow && (
            <DeleteWindow id={id} setDeleteWindow={setDeleteWindow} />
          )}
        </>
      )}
    </main>
  );
};

export default ShowSong;
