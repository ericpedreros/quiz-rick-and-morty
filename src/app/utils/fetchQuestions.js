const fetchCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const data = await res.json()
  return data
}
