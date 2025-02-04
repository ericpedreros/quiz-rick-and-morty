const FetchCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character/')
  const data = await response.json()
  return data
}

export default function Home() {
  return <section className=""></section>
}
