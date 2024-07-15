import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './Pages/NavBar';
import ShowSongs from './Pages/ShowSongs';
// import ShowSong from './Pages/ShowSong';
import NewSong from './Pages/NewSong';
// import EditSong from './Pages/EditSong';
import NotFound from './Pages/NotFound';

const App = () => {
  // <Route path="/songs/:id" element={<ShowSong />} />
  // <Route path="/songs/edit/:id" element={<EditSong />} />
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/songs" />} />
      <Route path="songs" element={<NavBar />}>
        <Route index element={<ShowSongs />} />
        <Route path="/songs/new" element={<NewSong />} />
        <Route path="/songs/error" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
