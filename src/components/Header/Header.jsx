import "./Header.css"

const Header = ({ onCreate }) => {
  return (
    <header>
      <h1>Users</h1>
      <button onClick={()=>onCreate()}>Create new user</button>
    </header>
  );
}

export default Header