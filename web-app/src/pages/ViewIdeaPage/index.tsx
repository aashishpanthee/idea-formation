import { useParams } from 'react-router-dom'
import { ViewIdeaRouteParams } from '../../lib/routes'

function ViewIdeaPage() {
  const { ideaId } = useParams() as ViewIdeaRouteParams
  return (
    <div>
      <h1>{ideaId}</h1>
      <p>Description of Idea 1</p>
      <div>
        <p>Text paragraph of idea 1</p>
        <p>Text paragraph of idea 2</p>
        <p>Text paragraph of idea 3</p>
      </div>
    </div>
  )
}

export default ViewIdeaPage
