import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Loading from './Components/Loading';
import FormTemplate from './Components/FormTemplate';

const EditSong = () => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const navigate = useNavigate();
  const {id} = useParams();
  const [song, setSong] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`${BASE_URL}/${id}`, song);
      navigate(`/songs/${id}`);
    } catch (err) {
      setError(err.toString());
    }
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/songs/${id}`)
      .then(res => {
        setSong(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        navigate('/404');
      });
  }, []);

  return (
    <section className="edit-song">
      <h2>Edit Song</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <FormTemplate
          song={song}
          setSong={setSong}
          handleSubmit={handleSubmit}
          navigate={navigate}
          error={error}
        />
      )}
    </section>
  );
};

export default EditSong;
