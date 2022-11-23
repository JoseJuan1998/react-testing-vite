import { useEffect, useState } from 'react'
import { SkillsProps } from './skills.types'

export default function Skills({ skills = [] }: SkillsProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 500)
  }, [])

  if (skills.length === 0) return <h1>Empty</h1>

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}
