import { useContext } from 'react'
import { ModeContext } from '@/src/contexts/modeContext/modeProvider'

// Custom hook to consume the context
const useMode = () => {
  const context = useContext(ModeContext)
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider')
  }
  return context
}

export { useMode }
