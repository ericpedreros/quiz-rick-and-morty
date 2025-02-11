export const fetchRandomCharacter = async () => {
  const id = Math.floor(Math.random() * 826) + 1 // 826 personajes en la API
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const data = await res.json()
  return data
}
