import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(){
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" onClick={close}>
          <div className="brand-logo" aria-hidden="true">🦷</div>
          <div className="brand-text">
            <strong>Dental Smile Pattaya</strong>
            <span>Honest dentistry in Pattaya</span>
          </div>
        </NavLink>
        <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open ? 'true':'false'} onClick={() => setOpen(v=>!v)}>☰</button>
        <nav className={open ? 'site-nav open' : 'site-nav'} role="navigation">
          <ul onClick={close}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/service">Service</NavLink></li>
            <li><NavLink to="/staff">Staff</NavLink></li>
            <li><NavLink to="/facility">Facility</NavLink></li>
            <li><NavLink to="/testimonial">Testimonial</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/map">Map</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
