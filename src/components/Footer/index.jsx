import FooterInfo from "../footer-info"
import './style.css'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info-container'>

                <FooterInfo titulo='Produtos' item1='Peças para computdores' item2='Mnagás' item3='jogos nostalgicos' item4='computadores montados' />
                <FooterInfo titulo='Produtos' item1='Peças para computdores' item2='Mnagás' item3='jogos nostalgicos' item4='computadores montados' />
                <FooterInfo titulo='Produtos' item1='Peças para computdores' item2='Mnagás' item3='jogos nostalgicos' item4='computadores montados' />
                <FooterInfo titulo='Produtos' item1='Peças para computdores' item2='Mnagás' item3='jogos nostalgicos' item4='computadores montados' />
            </div>
            <div className='footer-copyright'>
                <p >Todos os direitos reservados &copy; 2021 Jornada Nerd</p>
            </div>
        </footer>

    )
}

export default Footer