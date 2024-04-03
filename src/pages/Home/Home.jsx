import './Home.css'
import Atracao from '../../components/Atracao/Atracao';
import Welcome from '../../components/Welcome/Welcome';
import Navegar from '../../components/Navegar/Navegar';

function Home() {
    const componentes = [];
    for (let i = 0; i <= 2; i++) {
        componentes.push(<Atracao key={i} />)
    }

    return (
        <>
            <Navegar></Navegar>
            <Welcome />
            <div className="ctn-atracoes">
                {componentes}
            </div>
        </>
    );
}

export default Home;