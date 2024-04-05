import '../../styles/navBar.css';

export const NavBar = () => {


    return (
        
        <div className="container__nav">
            <div className="container__nav__inter">
                <div className='nav_logo'>
                    <img src="https://github.com/SantiagoJSdev/test-margi/assets/87577172/83af650b-2836-4574-b4ff-49cf48f3a7c4" alt="Marketing digital" className='img-fluid' />
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
                        <li><img src="https://github.com/SantiagoJSdev/test-margi/assets/87577172/81c2e22c-d6ae-4994-a9b2-eb83b70e80fc" alt="blog  marketing instagram" className='img__redes' /></li>
                        <li><img src="https://github.com/SantiagoJSdev/test-margi/assets/87577172/0bc80a56-fdb4-4532-b493-688f8d036c54" alt="blog  marketing youtube" className='img__redes' /></li>
                        <li><img src="https://github.com/SantiagoJSdev/test-margi/assets/87577172/06bc1e47-3ffd-497d-80f4-92114b9d008c" alt="blog  marketing tiktok" className='img__redes' /></li>
                    </ul>
                </div>
            </div> 
        </div>

    )

}