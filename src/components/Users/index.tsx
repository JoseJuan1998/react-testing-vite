import { useEffect, useState } from 'react'

function Users() {
  const [users, setUsers] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch((error) => setError('Error fetching users'))
  }, [])

  if (users.length === 0 && error === null) return <p>Loading...</p>

  if (error) return <p>{error}</p>

  return (
    <div>
      <h1>Users</h1>
      <ul>{users && users.map((user) => <li key={user}>{user}</li>)}</ul>
    </div>
  )
}

export default Users
