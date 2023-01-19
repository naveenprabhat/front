import { Link } from "react-router-dom";


const Navbar = ({ user }) => {
  const logout = () => {
    window.open("/auth/logout", "_self");
  };

  // const page = () => {
  //   window.open("https://www.facebook.com/pages/create/","_blank", "toolbar=yes,scrollbars=no,resizable=yes,top=200,left=700,width=600,height=700");
  // };
  const business = () => {
    window.open("https://developers.facebook.com/apps/","_self");
  };
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Naveen App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <div>
        <Link className="link" to="login">
          Login
        </Link>
        <Link className="link" onClick={business}>
          Business
        </Link>
        {/* <Link className="link" onClick={page}>
          Page
        </Link>  */}
      </div>
      )}
    </div>
  );
};

export default Navbar;