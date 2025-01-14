import { Route, Routes } from 'react-router-dom'
import AllIdeasPage from './pages/AllIdeasPage'
import ViewIdeaPage from './pages/ViewIdeaPage'
import { getAllIdeasRoute, getViewIdeaRoute, viewIdeaRouteParams } from './lib/routes'

function App() {
  return (
    <Routes>
      <Route path={getAllIdeasRoute()} element={<AllIdeasPage />} />
      <Route path={getViewIdeaRoute(viewIdeaRouteParams)} element={<ViewIdeaPage />} />
    </Routes>
  )
}

export default App
