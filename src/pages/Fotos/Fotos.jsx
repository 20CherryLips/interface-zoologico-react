import './Fotos.css';
import Navegacao from '../../components/Navegar/Navegar';
import ImgCarrossel from '../../components/ImgCarrossel/ImgCarrossel';

function Fotos() {
    return(
        <>
            <Navegacao />
            <h1 className='h1-fotos'>Fotos</h1>
            <ImgCarrossel />
        </>
    );
}

export default Fotos