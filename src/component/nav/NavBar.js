import '../../styles/navBar.css';

export const NavBar = () => {


    return (
        
        <div className="container__nav">
            <div className="container__nav__inter">
                <div className='nav_logo'>
                    <img src="../imagen/logo.svg" alt="Marketing digital" className='img-fluid' />
                </div>
                <div className='nav_titles'>
                    <ul>
                        <li className='active'>Sobre mi</li>
                        <li className='colorTitles'>Productos</li>
                        <li className='colorTitles'>Contacto</li>
                    </ul>
                </div>
                <div className='nav_redes'>
                    <ul>
                        <li><img src="../imagen/instagram-logo.svg" alt="blog  marketing instagram" className='img__redes' /></li>
                        <li><img src="../imagen/youtube-logo.svg" alt="blog  marketing youtube" className='img__redes' /></li>
                        <li><img src="../imagen/tiktok-logo.svg" alt="blog  marketing tiktok" className='img__redes' /></li>
                    </ul>
                </div>
            </div> 
        </div>

    )

}