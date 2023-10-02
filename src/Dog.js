import { useNavigate } from "react-router-dom";

function Dog({ dog }) {
  const { name, age, src, facts } = dog;
  const navigate = useNavigate();

  return (
    <div>
      <img src={`/${src}.jpg`} alt="dog" onClick={() => navigate(`/dogs/${name}`)}/><br />
      Name: {name} <br />
      Age: {age}
      <ul>
        {facts.map((fact, idx) =>
          <li key={idx}>{fact}</li>
        )}
      </ul>
    </div>
  );
}

export default Dog;