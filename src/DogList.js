function DogList({ dogList }) {
  console.log(dogList)
  return (
    <>
    {dogList === "Loading"
    ? <p>{dogList}</p>
    : <p>THERE IS DOG LIST</p>}
    </>
  )
}

export default DogList;