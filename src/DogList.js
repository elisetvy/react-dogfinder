import Dog from "./Dog";

function DogList({ dogList }) {
  return (
    <>
      {dogList === "Loading"
        ? <p>{dogList}</p>
        : <>
          {dogList.map(d => <div key={d.name}><Dog dog={d} /></div>)}
        </>

      }
    </>
  );
}

export default DogList;