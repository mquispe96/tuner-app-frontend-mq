import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {MdFavorite} from 'react-icons/md';
import {MdFavoriteBorder} from 'react-icons/md';
import {MdOutlineDeleteSweep} from 'react-icons/md';
import DeleteSong from './DeleteSong';

const Song = ({song}) => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState({is_favorite: song.is_favorite});
  const [deleteWindow, setDeleteWindow] = useState(false);

  useEffect(() => {
    axios
      .patch(`${BASE_URL}/songs/${song.id}`, isFavorite)
  }, [isFavorite]);

  return (
    <tr onClick={() => navigate(`/songs/${song.id}`)}>
      <td>{song.name}</td>
      <td>{song.artist}</td>
      <td>
        {isFavorite.is_favorite ? (
          <MdFavorite
            onClick={e => {
              e.stopPropagation();
              setIsFavorite(prev => ({...prev, is_favorite: false}));
            }}
            style={{cursor: 'pointer'}}
          />
        ) : (
          <MdFavoriteBorder
            onClick={e => {
              e.stopPropagation();
              setIsFavorite(prev => ({...prev, is_favorite: true}));
            }}
          />
        )}
      </td>
      <td>
        {!deleteWindow && (
          <MdOutlineDeleteSweep
            onClick={e => {
              e.stopPropagation();
              setDeleteWindow(true);
              setTimeout(() => setDeleteWindow(false), 3000);
            }}
          />
        )}
        {deleteWindow && (
          <DeleteSong id={song.id} setDeleteWindow={setDeleteWindow} />
        )}
      </td>
    </tr>
  );
};

export default Song;
