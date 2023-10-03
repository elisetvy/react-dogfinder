import { useParams } from "react-router-dom";
import Dog from "./Dog";

function DogDetails({ dogList, callGetDogs, getDogs }) {
  const { name } = useParams();

  if (callGetDogs === true) {
    getDogs();
  }

  if (dogList === "Loading") {
    return (
      <p>{dogList}</p>
    )
  }

  else {
    const dog = dogList.filter(d => d.name === name);
    return (
      <>
            <Dog dog={dog[0]} />
      </>
    )

  }

}

export default DogDetails;