import './header.css';
import { Link } from 'react-router-dom';

function Headar(){
    return(
        <header>
            <Link className='logo' to='/'> Prime Flix</Link> 
            <Link className='favoritos' to='/favoritos'>Meus fimes</Link> 


        </header>
    )
}

export default Headar;