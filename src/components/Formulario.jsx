import Alert from "./Alert";
import Error from "./Error";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const Formulario = ({ dataColaborador, setColaborador, BaseColaboradores }) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [edad, setEdad] = useState("");
    const [cargo, setCargo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre === "" || correo === "" || edad === "" || cargo === "" || telefono === "") {
            setError(true);
            return;
        }

        const id = Date.now();
        const includeData = { id, nombre, correo, edad, cargo, telefono };
        setColaborador([...dataColaborador, includeData]);
        BaseColaboradores.push(includeData);
        setNombre("");
        setCorreo("");
        setEdad("");
        setCargo("");
        setTelefono("");
        setError("");
        setShow(true);
    };

    const closeSuccess = () => {
        setShow(false);
    };
    const closeError = () => {
        setError(false);
    };

    return (
        <>
            <Form className="form" onSubmit={handleSubmit}>
                <div className="container-form2">
                    <h3>Datos Colaborador</h3>

                    <label>Nombre </label>
                    <InputGroup className="mb-1">
                        <Form.Control type="text" name="nombre" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                    </InputGroup>

                    <label>E-mail </label>
                    <InputGroup className="mb-1">
                        <Form.Control type="email" name="correo" className="form-control" onChange={(e) => setCorreo(e.target.value)} value={correo} />
                    </InputGroup>

                    <label>Edad </label>
                    <InputGroup className="mb-1">
                        <Form.Control type="number" name="edad" className="form-control" onChange={(e) => setEdad(e.target.value)} value={edad} />
                    </InputGroup>

                    <label>Cargo</label>
                    <InputGroup className="mb-1">
                        <Form.Control type="text" name="cargo" className="form-control" onChange={(e) => setCargo(e.target.value)} value={cargo} />
                    </InputGroup>
                    <label>Telefono</label>
                    <InputGroup className="mb-1">
                        <Form.Control type="tel" name="telefono" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
                    </InputGroup>

                    <div className="agregar">
                        <Button className="w-100" type="submit" variant="success">
                            Agregar Colaborador
                        </Button>
                    </div>
                </div>
            </Form>
            <Alert nombre={nombre} show={show} closeSuccess={closeSuccess}></Alert>
            <Error error={error} closeError={closeError}></Error>
        </>
    );
};

export default Formulario;
