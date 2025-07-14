import { NavLink } from 'react-router-dom'

const menus: Record<string, { label: string; path: string }[]> = {
  'equity-sector': [
    { label: 'RRG', path: '/equity-sector/rrg' },
    { label: 'Correlation', path: '/equity-sector/correlation' },
    { label: 'Lead/Lag', path: '/equity-sector/leadlag' },
  ],
}

const TopMenu = ({ app }: { app: string }) => {
  const menu = menus[app] || []

  return (
    <div style={{ background: 'var(--onyx)', padding: '0.5rem 1rem', display: 'flex', gap: '1rem' }}>
      {menu.map(({ label, path }) => (
        <NavLink
          key={path}
          to={path}
          style={({ isActive }) => ({
            padding: '0.4rem 0.8rem',
            border: '1px solid var(--chefchaouen-blue)',
            borderRadius: '8px',
            color: 'var(--antiflash-white)',
            textDecoration: 'none',
            backgroundColor: isActive ? 'var(--chefchaouen-blue)' : 'transparent',
            transition: 'background-color 0.15s ease, transform 0.05s ease',
          })}
          onMouseDown={(e) => {
            (e.target as HTMLElement).style.transform = 'scale(0.97)'
          }}
          onMouseUp={(e) => {
            (e.target as HTMLElement).style.transform = 'scale(1)'
          }}
          onMouseEnter={(e) => {
            const el = e.target as HTMLElement
            if (!el.style.backgroundColor.includes('rgb')) {
              el.style.backgroundColor = 'rgba(81, 150, 245, 0.1)'
            }
          }}
          onMouseLeave={(e) => {
            const el = e.target as HTMLElement
            if (!el.className.includes('active')) {
              el.style.backgroundColor = 'transparent'
            }
            el.style.transform = 'scale(1)'
          }}
        >
          {label}
        </NavLink>
      ))}
    </div>
  )
}

export default TopMenu
