import { motion } from 'framer-motion'

const CharacterSilhouette = ({ image, hintsUsed }) => {
  const revealOpacity = Math.max(1 - hintsUsed * 0.25, 0) // Máximo de 4 pistas

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-64 h-64 mx-auto border rounded-lg shadow-lg"
    >
      <motion.img
        src={image}
        alt="Personaje"
        className="absolute w-full h-full"
        initial={{ filter: 'brightness(0) contrast(100%)' }}
        animate={{ filter: `brightness(${revealOpacity})` }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  )
}

export default CharacterSilhouette
