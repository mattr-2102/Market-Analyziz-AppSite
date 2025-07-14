// === Enhanced Layout and Sidebar with Persistence, Tooltips, Icons, etc ===

import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiGrid } from 'react-icons/fi'

const Sidebar = () => {
  const [open, setOpen] = useState(true)

  // Load persisted state
  useEffect(() => {
    const saved = localStorage.getItem('sidebarOpen')
    if (saved !== null) setOpen(JSON.parse(saved))
  }, [])

  // Persist on change
  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(open))
  }, [open])

  const apps = [
    { label: 'Equity Sector', icon: <FiGrid />, path: '/equity-sector/rrg' },
    // Add more apps here
  ]

  return (
    <div
      style={{
        width: open ? '220px' : '50px',
        transition: 'width 0.3s ease',
        backgroundColor: 'var(--raisin-black)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        display: 'flex',
        flexDirection: 'column',
        alignItems: open ? 'flex-start' : 'center',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--antiflash-white)',
          padding: '0.5rem',
          cursor: 'pointer',
          fontSize: '1.2rem',
          marginTop: '10px',
        }}
      >
        <FiMenu />
      </button>

      <div style={{ padding: open ? '1rem' : '0.5rem', width: '100%' }}>
        {apps.map(({ label, icon, path }) => (
          <NavLink
            key={path}
            to={path}
            title={!open ? label : ''} // Tooltip on collapsed
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1rem',
              color: 'var(--antiflash-white)',
              textDecoration: 'none',
              backgroundColor: isActive ? 'var(--onyx)' : 'transparent',
              borderRadius: '6px',
              transition: 'background-color 0.2s ease',
            })}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.06)'
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = 'transparent'
            }}
            onMouseDown={(e) => {
              (e.target as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0.2)'
            }}
            onMouseUp={(e) => {
              (e.target as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.06)'
            }}
          >
            {icon}
            {open && <span>{label}</span>}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
