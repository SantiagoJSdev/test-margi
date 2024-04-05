import '../../styles/footer.css'

export const Footer = () => {


    return (

        <div className="container__footer">
            <ul>
                <li className='footer__li'>
                    <div className='nav_logo_footer'>
                        <img src="../imagen/logo.svg" alt="Marketing digital" className='img-fluid_footer' />
                    </div>
                </li>
                <li className='container__footer__li'> <p> |Todos los derechos reservados | Políticas de Privacidad. </p> </li>
                <li className='container__footer__liRedes'>
                <ul>
                        <li><img src="../imagen/instagram-logo.svg" alt="blog  marketing instagram" className='img__redes' /></li>
                        <li><img src="../imagen/youtube-logo.svg" alt="blog  marketing youtube" className='img__redes' /></li>
                        <li><img src="../imagen/tiktok-logo.svg" alt="blog  marketing tiktok" className='img__redes' /></li>
                    </ul>
                </li>
            </ul>
        </div>

    )
}