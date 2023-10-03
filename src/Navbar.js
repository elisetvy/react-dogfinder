import { NavLink } from "react-router-dom";

function Navbar({ dogList }) {
  console.log("doglist in NavBar:", dogList);

  return (
    <>
      {dogList !== "Loading" &&
        <nav>

          {dogList.map(d =>
            <NavLink key={d.name} to={`/dogs/${d.name}`}>{d.name}</NavLink>
          )}

        </nav>
      }
    </>
  );
}

export default Navbar;