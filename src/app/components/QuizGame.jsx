'use client'

import { useState, useEffect } from 'react'
import CharacterSilhouette from './CharacterSilhouette'
import { fetchRandomCharacter } from '../utils/fetchQuestions'
import { useQuiz } from '../context/QuizContext'

const QuizGame = () => {
  const { score, hintsUsed, incrementHints, updateScore } = useQuiz() // Extraer el estado del contexto
  const [character, setCharacter] = useState(null)
  const [answer, setAnswer] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const loadCharacter = async () => {
      const data = await fetchRandomCharacter()
      setCharacter(data)
    }
    loadCharacter()
  }, [])

  const checkAnswer = () => {
    if (answer.toLowerCase() === character.name.toLowerCase()) {
      const pointsEarned = Math.max(10 - hintsUsed * 2, 0)
      updateScore(pointsEarned)
      setMessage(
        `🎉 ¡Correcto! Es ${character.name}. Ganaste ${pointsEarned} puntos.`
      )
    } else {
      setMessage('❌ Incorrecto, intenta de nuevo.')
    }
  }

  const handleHint = () => {
    if (hintsUsed < 4) {
      incrementHints() // Usa la función del contexto
    } else {
      setMessage('🚫 Límite de pistas alcanzado.')
    }
  }

  return (
    <div className="flex flex-col items-center p-6 text-black">
      <h1 className="text-2xl font-bold mb-4">¿Quién es este personaje?</h1>

      {character && (
        <>
          <CharacterSilhouette image={character.image} hintsUsed={hintsUsed} />

          <input
            type="text"
            placeholder="Escribe el nombre"
            className="border p-2 mt-4 text-center"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <button
            onClick={checkAnswer}
            className="bg-blue-500 text-white px-4 py-2 mt-4"
          >
            Verificar
          </button>

          <button
            onClick={handleHint}
            className={`${
              hintsUsed < 4 ? 'bg-gray-500' : 'bg-gray-300 cursor-not-allowed'
            } text-white px-4 py-2 mt-2`}
            disabled={hintsUsed >= 4}
          >
            Usar pista ({hintsUsed}/4)
          </button>

          <p className="mt-4">{message}</p>
          <p className="mt-4 text-lg font-bold">Puntaje: {score}</p>
        </>
      )}
    </div>
  )
}

export default QuizGame
