import '../../styles/productos.css' 


export const Productos = () => {


    return (

        <div className="container__productos">
            <div className="productos_box1">
                <div><h3>Guía de Marketing de Afiliado</h3></div>
                <img src="../imagen/guia.jpg" alt="blog  marketing instagram" className='img__productos' />
            </div>
            <div className="productos_box2">
            <div><h3>Cómo ganar con Hotmar</h3></div>
                <img src="../imagen/comoHotmar.avif" alt="blog  marketing instagram" className='img__productos' />
            </div>
            <div className="productos_box3">
            <div><h3>Cómo ganar con Amazon</h3></div>
                <img src="../imagen/comoAmazon.avif" alt="blog  marketing instagram" className='img__productos' />
            </div>
        </div>

    )
}