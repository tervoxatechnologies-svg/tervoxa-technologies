import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { services } from '../data/content';
import { useAuth } from '../auth/AuthContext';

export default function LayoutImproved({ children }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [drop, setDrop] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const lightHeader = location.pathname === '/dashboard' || location.pathname === '/admin' || location.pathname === '/login' || location.pathname === '/register';

  const closeMenus = () => {
    setOpen(false);
    setDrop(false);
  };
  const signOut = async () => { closeMenus(); await logout(); };

  useEffect(() => {
    closeMenus();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onKeyDown = event => {
      if (event.key === 'Escape') closeMenus();
    };
    const onPointerDown = event => {
      if (!event.target.closest('.nav-drop')) setDrop(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  return (
    <div className="app">
      <header className={`header ${scrolled ? 'scrolled' : ''} ${lightHeader ? 'light-header' : ''}`}>
        <div className="nav container">
          <Link className="brand" to="/" onClick={closeMenus}>
            <img src="/tervoxa-mark.jpeg" alt="Tervoxa Technologies" />
            <span><b>TERVOXA</b><small>TECHNOLOGIES</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link to="/" onClick={closeMenus}>Home</Link>
            <Link to="/about" onClick={closeMenus}>About</Link>
            <div className="nav-drop">
              <button type="button" aria-expanded={drop} onClick={() => setDrop(value => !value)}>
                Services <ChevronDown className={drop ? 'rotate-icon' : ''} size={15} />
              </button>
              {drop && <div className="mega" role="menu">
                {services.map(service => (
                  <Link key={service.slug} to={`/services/${service.slug}`} onClick={closeMenus} role="menuitem">
                    <span>{service.num}</span>{service.title}
                  </Link>
                ))}
              </div>}
            </div>
            <Link to="/process" onClick={closeMenus}>Process</Link>
            <Link to="/faq" onClick={closeMenus}>FAQs</Link>
            <Link to="/contact" onClick={closeMenus}>Contact</Link>
            {user && <Link to={user.role === 'admin' ? '/admin' : '/dashboard'} onClick={closeMenus}>Dashboard</Link>}
          </nav>
          {user ? <button className="nav-cta nav-logout" type="button" onClick={signOut}>Sign out</button> : <Link className="nav-cta" to="/login" onClick={closeMenus}>Client portal <ArrowUpRight size={16} /></Link>}
          <button className="menu-btn" type="button" onClick={() => setOpen(value => !value)} aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && <div className="mobile-menu">
          {['/', '/about', '/services', '/process', '/faq', '/contact'].map((path, index) => (
            <Link key={path} to={path} onClick={closeMenus}>{['Home', 'About', 'Services', 'Process', 'FAQs', 'Contact'][index]}</Link>
          ))}
          {user ? <><Link className="mobile-cta" to={user.role === 'admin' ? '/admin' : '/dashboard'} onClick={closeMenus}>Open dashboard</Link><button className="mobile-logout" type="button" onClick={signOut}>Sign out</button></> : <Link className="mobile-cta" to="/login" onClick={closeMenus}>Client portal</Link>}
        </div>}
      </header>
      <main>{children}</main>
      <footer>
        <div className="container footer-grid">
          <div>
            <Link className="brand footer-brand" to="/" onClick={closeMenus}>
              <img src="/tervoxa-mark.jpeg" alt="Tervoxa Technologies" />
              <span><b>TERVOXA</b><small>TECHNOLOGIES</small></span>
            </Link>
            <p>Technology. Vision. Value.</p>
            <p className="muted">Building digital solutions for modern businesses.</p>
          </div>
          <div><h4>Services</h4>{services.map(service => <Link key={service.slug} to={`/services/${service.slug}`}>{service.title}</Link>)}</div>
          <div><h4>Company</h4><Link to="/about">About Us</Link><Link to="/services">Services</Link><Link to="/process">Our Process</Link><Link to="/faq">FAQs</Link></div>
          <div><h4>Contact</h4><p className="muted">Have a project or requirement?</p><Link className="footer-link" to="/contact">Start a project enquiry <ArrowUpRight size={15} /></Link></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Tervoxa Technologies. All Rights Reserved.</span><div><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms & Conditions</Link><Link to="/disclaimer">Disclaimer</Link></div><b>Build • Protect • Support</b></div>
      </footer>
    </div>
  );
}
