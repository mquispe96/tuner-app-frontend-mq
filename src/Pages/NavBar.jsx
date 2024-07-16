import {useNavigate, Outlet} from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="nav">
        <h1 onClick={() => navigate('/songs')}>My Tuner App</h1>
        <button onClick={() => navigate('/songs/new')}>New Song</button>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
