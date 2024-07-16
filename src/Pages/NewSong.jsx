import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Loading from './Components/Loading';
import FormTemplate from './Components/FormTemplate';

const NewSong = () => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const navigate = useNavigate();
  const [newSong, setNewSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post(`${BASE_URL}/songs`, newSong);
      setIsLoading(false);
      navigate('/songs');
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return (
    <section className="new-song">
      <h1>New Song</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <FormTemplate
          song={newSong}
          setSong={setNewSong}
          handleSubmit={handleSubmit}
          error={error}
          navigate={navigate}
        />
      )}
    </section>
  );
};

export default NewSong;
