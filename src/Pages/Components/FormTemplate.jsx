const FormTemplate = ({song, setSong, handleSubmit, error, navigate}) => {
  const handleChange = e => {
    const {name, value} = e.target;
    setSong(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = e => {
    const {name, checked} = e.target;
    setSong(prev => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={song.name}
          onChange={handleChange}
        />
      </div>
      <div className="form__group">
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={song.artist}
          onChange={handleChange}
        />
      </div>
      <div className="form__group">
        <label htmlFor="album">Album:</label>
        <input
          type="text"
          id="album"
          name="album"
          value={song.album}
          onChange={handleChange}
        />
      </div>
      <div className="form__group">
        <label htmlFor="time">Time:</label>
        <input
          type="text"
          id="time"
          name="time"
          value={song.time}
          onChange={handleChange}
        />
      </div>
      <div className="form__favorite">
        <label htmlFor="is_favorite">Favorite?</label>
        <input
          type="checkbox"
          id="is_favorite"
          name="is_favorite"
          checked={song.is_favorite}
          onChange={handleCheckbox}
        />
      </div>
      <div className="form__btns">
        <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
      <div className="form__errors">
        {error && <p style={{color: 'red'}}>{error}</p>}
      </div>
    </form>
  );
};

export default FormTemplate;
