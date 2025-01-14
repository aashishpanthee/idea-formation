import { useParams } from 'react-router-dom'
import { ViewIdeaRouteParams } from '../../lib/routes'
import { trpc } from '../../lib/trpc'

function ViewIdeaPage() {
  const { ideaId } = useParams() as ViewIdeaRouteParams
  const { data, error, isLoading, isError } = trpc.getIdea.useQuery({ ideaId })
  if (isLoading) {
    return <span>Loading.....</span>
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }
  if (!data.idea) {
    return <span>Idea not found</span>
  }
  return (
    <div>
      <h1>{data.idea.title}</h1>
      <p>{data.idea.description}</p>
      <div dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </div>
  )
}

export default ViewIdeaPage
