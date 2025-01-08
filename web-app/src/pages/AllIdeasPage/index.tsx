import { trpc } from '../../lib/trpc'

function AllIdeasPage() {
  const {data,error,isLoading,isError} = trpc.getIdeas.useQuery()
  if (isLoading) {
    return <span>Loading.....</span>
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }
  const ideas = data?.ideas ?? []
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

export default AllIdeasPage
