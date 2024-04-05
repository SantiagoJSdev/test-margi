import '../../styles/productos.css' 


export const Productos = () => {


    return (

        <div className="container__productos">
            <div className="productos_box1">
                <div><h3>Guía de Marketing de Afiliado</h3></div>
                <img src="https://github.com/SantiagoJSdev/test-margi/assets/87577172/9e0c880a-77a2-4296-b9ab-0da524fa6638" alt="blog  marketing instagram" className='img__productos' />
            </div>
            <div className="productos_box2">
            <div><h3>Cómo ganar con Hotmar</h3></div>
                <img src="https://github.com/SantiagoJSdev/test-margi/assets/87577172/4b4c6d04-dc35-4aa8-a78f-8c5da2081789" alt="blog  marketing instagram" className='img__productos' />
            </div>
            <div className="productos_box3">
            <div><h3>Cómo ganar con Amazon</h3></div>
                <img src="https://github.com/SantiagoJSdev/test-margi/assets/87577172/2248f50d-2501-421a-80ef-3ea33220b445" alt="blog  marketing instagram" className='img__productos' />
            </div>
        </div>

    )
}