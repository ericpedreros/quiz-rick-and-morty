'use client'

import { createContext, useContext, useState } from 'react'

// Crear el contexto
const QuizContext = createContext()

// Proveedor del contexto
export const QuizProvider = ({ children }) => {
  const [score, setScore] = useState(0)
  const [hintsUsed, setHintsUsed] = useState(0)

  const incrementHints = () => setHintsUsed((prev) => Math.min(prev + 1, 4))
  const updateScore = (points) => setScore((prev) => prev + points)

  return (
    <QuizContext.Provider
      value={{ score, hintsUsed, incrementHints, updateScore }}
    >
      {children}
    </QuizContext.Provider>
  )
}

// Hook personalizado para usar el contexto
export const useQuiz = () => {
  const context = useContext(QuizContext)
  if (!context) {
    throw new Error('useQuiz debe usarse dentro de un QuizProvider')
  }
  return context
}
