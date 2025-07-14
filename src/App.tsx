import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import RRG from './apps/equity-sector-analysis/RRG'
import Correlation from './apps/equity-sector-analysis/Correlation'
import LeadLag from './apps/equity-sector-analysis/LeadLag'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/equity-sector/rrg" replace />} />
          <Route path="/equity-sector/rrg" element={<RRG />} />
          <Route path="/equity-sector/correlation" element={<Correlation />} />
          <Route path="/equity-sector/leadlag" element={<LeadLag />} />
          {/* Add other app routes here */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
