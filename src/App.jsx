import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './Pages/NavBar';
import ShowSongs from './Pages/ShowSongs';
import ShowSong from './Pages/ShowSong';
import NewSong from './Pages/NewSong';
import EditSong from './Pages/EditSong';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/songs" />} />
      <Route path="songs" element={<NavBar />}>
        <Route index element={<ShowSongs />} />
        <Route path="/songs/:id" element={<ShowSong />} />
        <Route path="/songs/new" element={<NewSong />} />
        <Route path="/songs/edit/:id" element={<EditSong />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
