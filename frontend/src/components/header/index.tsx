import './styles.css';

import logo from '../../assets/img/icon.svg'

export function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/_erik_souzaa">@_erik_souzaa</a>
                </p>
            </div>
        </header>
    )
}