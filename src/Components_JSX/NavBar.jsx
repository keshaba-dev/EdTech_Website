import '/src/Components_CSS/Navbar.css'

export default function NavBar() {
    const links = ['Programs', 'Platform', 'Outcomes', 'Pricing'];

    return(
        <header className="site-header">
            <nav className="Navbar" aria-label="Main navigation">
                <a className="brand" href="#home" aria-label="SkillBridge home">
                    <span className="brand-mark">S</span>
                    <span>
                        <strong>SkillBridge</strong>
                        <small>Career Academy</small>
                    </span>
                </a>

                <div className="nav-links">
                    {links.map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`}>
                            {link}
                        </a>
                    ))}
                </div>

                <div className="nav-actions">
                    <a className="text-link" href="#contact">Sign in</a>
                    <a className="nav-cta" href="#contact">Book demo</a>
                </div>
            </nav>
        </header>
    );
}
