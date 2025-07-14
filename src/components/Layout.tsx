import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopMenu from './TopMenu'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const currentApp = location.pathname.split('/')[1] // e.g., 'equity-sector'

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <TopMenu app={currentApp} />
        <main style={{ padding: '1rem' }}>{children}</main>
      </div>
    </div>
  )
}

export default Layout
