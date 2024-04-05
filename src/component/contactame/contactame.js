import '../../styles/contactame.css'


export const Contactame = () => {


    return (

        <div className="container__contac">
            <div className="contac1">
                <h3>Contáctame</h3>
            </div>
            <div className="contac2">
                <ul>
                    <li>
                        <div className='contac2_logo'>
                            <img src="https://github.com/SantiagoJSdev/test-margi/assets/87577172/1933d194-84dd-4274-9a66-5729dc54b757" alt="blog  marketing correo" className='img_contac2_logo' />
                        </div>
                        <h3>Escríbeme</h3>
                        <p>elcorre@gmail.com</p>
                    </li>
                    <li>
                    <div className='contac2_logo'>
                            <img src="https://github.com/SantiagoJSdev/test-margi/assets/87577172/624769dc-bf1d-4330-bddc-635e30b3ffd0" alt="blog  marketing whatsapp" className='img_contac2_logo' />
                        </div>
                        <h3>Chat</h3>
                        <p>Te ayudaré para cualquier duda</p>
                    </li>
                    <li>
                    <div className='contac2_logo'>
                            <img src="https://github.com/SantiagoJSdev/test-margi/assets/87577172/c7fe4466-7b74-419b-9ccb-62a49be44b3e" alt="blog  marketing avatar" className='img_contac2_logo' />
                        </div>
                        <h3>Suscríbete</h3>
                        <p>Click  aquí</p>
                    </li>
                </ul>
            </div>
        </div>

    )
}