import { Categorias } from "../categorias/categorias";
import { Header } from "../header/header";
import { NavBar } from "../nav/NavBar";

import "../../styles/home.css"
import { Productos } from "../productos/productos";
import { Contactame } from "../contactame/contactame";
import { Footer } from "../footer/footer";

export const Home = () => {


    return (
        <div className="container">
            <div className="container_header">
                <NavBar />
            </div>
            <div className="">
                <Header />
            </div>
            <Categorias />
            <Productos />
            <Contactame />
            <Footer />
            {/* <> */}


        </div>
    );
}

