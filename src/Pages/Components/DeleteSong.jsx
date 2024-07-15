import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const DeleteSong = ({id, setDeleteWindow}) => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const navigate = useNavigate();

  return (
    <section className="delete-window">
      <p>Are you sure you want to delete this song?</p>
      <button
        onClick={() => {
          axios
            .delete(`${BASE_URL}/songs/${id}`)
            .then(() => {
              navigate('/songs');
            })
            .catch(() => navigate('/songs/error'));
        }}
      >
        Yes
      </button>
      <button onClick={() => setDeleteWindow(false)}>No</button>
    </section>
  );
};

export default DeleteSong;
