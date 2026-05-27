import { Link } from "react-router-dom";

export default function Compras()
{
    return (
         <div className="container-fluid py-4">
                <h1 className="text-center mb-4" style={{ fontWeight: 600 }}>Lista de compras</h1>
                <Link className="btn btn-secondary mb-4 px-4" to="/inserir-compra">Inserir compra</Link>




            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Cliente</th>
                        <th>Quantidade</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Teclado</td>
                        <td>Donathan</td>
                        <td>20</td>
                        <td>22/05/2026</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
