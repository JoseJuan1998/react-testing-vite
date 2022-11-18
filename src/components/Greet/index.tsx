interface GreetProps {
  name?: string
}

export default function Greet({ name }: GreetProps) {
  return (
    <div>
      <h1>Greet</h1>
      <p>Hello {name}</p>
    </div>
  )
}
