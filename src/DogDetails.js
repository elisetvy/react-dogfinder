import { useParams } from "react-router-dom";
import Dog from "./Dog";

function DogDetails({ dogList }) {
  const { name } = useParams();
  const dog = dogList.filter(d => d.name === name);

  return (
    <>
    <Dog dog={dog[0]} />
    </>
  )
}

export default DogDetails;