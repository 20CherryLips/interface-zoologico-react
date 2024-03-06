import imNotFound from '../../assets/img-not-found.png';
import './Atracao.css'

function Atracao() {
    return (
        <div className='ctn-atracao'>
            <img src={imNotFound} />
            <p>Lorem Ipsun</p>
        </div>
    );
}

export default Atracao; 
