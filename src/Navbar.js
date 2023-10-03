import { NavLink } from "react-router-dom";

function Navbar({ dogList }) {
  let activeStyle = {
    fontSize: "50px"
  };

  return (
    <>
      {dogList !== "Loading" &&
        <nav>

          {dogList.map(d =>
            <NavLink key={d.name} to={`/dogs/${d.name}`} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>{d.name}</NavLink>
          )}

        </nav>
      }
    </>
  );
}

export default Navbar;