

function DogList({ dogList }) {
  console.log(dogList);
  return (
    <>
      {dogList === "Loading"
        ? <p>{dogList}</p>
        : <>
          {dogList.map(d => {
            return (
              <div key={d.name}>

              <img src={`${d.name}.jpg`} />
              Name: {d.name} <br/>
              Age: {d.age}
              <ul>
                {d.facts.map((fact, idx) =>
                  <li key={idx}>{fact}</li>
                )}
              </ul>

              </div>

            )
          })}
        </>

      }
    </>
  );
}

export default DogList;