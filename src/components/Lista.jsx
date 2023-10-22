import Table from "react-bootstrap/Table";

function BasicExample({ dataColaborador }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr className="header-table">
                    <th className="t1">Nombre</th>
                    <th className="t1">Correo</th>
                    <th className="t1">Edad</th>
                    <th className="t1">Cargo</th>
                    <th className="t1">Teléfono</th>
                </tr>
            </thead>
            <tbody>
                {dataColaborador.map((data) => (
                    <tr className="text-center" key={data.id}>
                        <td>{data.nombre}</td>
                        <td>{data.correo}</td>
                        <td>{data.edad}</td>
                        <td>{data.cargo}</td>
                        <td>{data.telefono}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default BasicExample;
