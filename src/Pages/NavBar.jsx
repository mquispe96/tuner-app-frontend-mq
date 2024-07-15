import {useNavigate, Outlet} from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="nav">
        <h1 onClick={() => navigate('/songs')}>My App</h1>
      </header>
      <Outlet />
    </>
  );
};

export default NavBar;
