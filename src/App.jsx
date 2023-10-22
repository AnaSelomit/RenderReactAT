import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import { BaseColaboradores } from "./data/object";
import Lista from "./components/Lista";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [colaborador, setColaborador] = useState(BaseColaboradores);

    return (
        <>
            <header>
                <Header title="BaseDeDatos" image="/images/Indata_Logocolor_03.png"></Header>
            </header>
            <main>
                <section className="container">
                    <div className="search">
                        <Buscador BaseColaboradores={BaseColaboradores} setColaborador={setColaborador}></Buscador>
                    </div>
                </section>

                <section className="container2">
                    <div className="container-lista">
                        <Lista dataColaborador={colaborador} BaseColaboradores={BaseColaboradores} setColaborador={setColaborador}></Lista>
                    </div>
                    <div className="container-form">
                        <Formulario dataColaborador={colaborador} BaseColaboradores={BaseColaboradores} setColaborador={setColaborador}></Formulario>
                    </div>
                </section>
            </main>
            <footer>
                <Footer image="/images/Indata_Logocolor_03.png"></Footer>
            </footer>
        </>
    );
}

export default App;
