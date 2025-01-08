function App() {
  const ideas = [
    {
      id: 1,
      title: 'Idea 1',
      description: 'Idea 1 description',
    },
    {
      id: 2,
      title: 'Idea 2',
      description: 'Idea 2 description',
    },
    {
      id: 3,
      title: 'Idea 3',
      description: 'Idea 3 description',
    },
  ]
  return (
    <div>
      <h1>Idea Formation</h1>
      <div>
        {ideas.map((idea) => {
          return (
            <div key={idea.title}>
              <h2>{idea.title}</h2>
              <p>{idea.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
