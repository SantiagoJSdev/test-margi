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
                            <img src="../imagen/email.png" alt="blog  marketing correo" className='img_contac2_logo' />
                        </div>
                        <h3>Escríbeme</h3>
                        <p>elcorre@gmail.com</p>
                    </li>
                    <li>
                    <div className='contac2_logo'>
                            <img src="../imagen/whatsapp.png" alt="blog  marketing whatsapp" className='img_contac2_logo' />
                        </div>
                        <h3>Chat</h3>
                        <p>Te ayudaré para cualquier duda</p>
                    </li>
                    <li>
                    <div className='contac2_logo'>
                            <img src="../imagen/avatar.png" alt="blog  marketing avatar" className='img_contac2_logo' />
                        </div>
                        <h3>Suscríbete</h3>
                        <p>Click  aquí</p>
                    </li>
                </ul>
            </div>
        </div>

    )
}