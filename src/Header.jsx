const Header = () => {
    return (
        <header className="header-top">
            <img
                className="header-top-logo"
                src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
                alt="LinkedIn"
            />
            <nav>
                <ul className="liste">
                    <li>
                        <a href="#">Articles</a>
                    </li>
                    <li>
                        <a href="#">Personnes</a>
                    </li>
                    <li>
                        <a href="#">LinkedIn Learning</a>
                    </li>
                    <li>
                        <a href="#">Offre d'emploi</a>
                    </li>


                    <li>
                        <a href="#">S'identifier</a>
                    </li>
                    <li>
                        <a href="#">S'inscrire</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};




export default Header;