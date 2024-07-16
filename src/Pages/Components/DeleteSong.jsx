import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const DeleteSong = ({id, setDeleteWindow}) => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const navigate = useNavigate();

  return (
    <section className="delete-opts">
      <p>Are you sure?</p>
      <div className="delete-opts__btns">
        <button
          onClick={e => {
            e.stopPropagation();
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
        <button
          onClick={e => {
            e.stopPropagation();
            setDeleteWindow(false);
          }}
        >
          No
        </button>
      </div>
    </section>
  );
};

export default DeleteSong;
