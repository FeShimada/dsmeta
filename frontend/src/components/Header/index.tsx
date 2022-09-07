import './Header.css'
import logo from '../../assets/img/logo.svg'

const Header = () => {

    return(
        <header className='dsmeta-logo-container'>
            <img src={logo} alt="logo" />
            <h1>DsMeta</h1>
            <p>
                Desenvolvido por
                <a href="">@devSuperior</a>    
            </p>
        </header>
    )
}

export default Header