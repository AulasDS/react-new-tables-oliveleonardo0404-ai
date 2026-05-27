import { useNavigate } from 'react-router-dom';
import axios from "axios";
import React, { useState, useEffect } from "react";

interface Produto {
    _id: string;
    nome: string;
    preco?: number;
    quantidade:number;
    descricao?: string;
    __v?: number;
}

interface ApiResponse {
    data: Produto[];

}
export default function InserirCompra() {
    const navigate = useNavigate();

    const [dadosform, setDadosForm] = useState({
        clienteId: "",
        produtoId: "",
        quantidade: ""
    });
    

    useEffect(() => {
        const buscarProduto = async () => {
            try {
                const response = await axios.get<ApiResponse>(`http://localhost:3000/produto/`);
                setDadosForm({
                    clienteId: response.data._Id,
                    produtoId: response.data._Id,
                    quantidade: String(response.data.quantidade)
                });
                setCarregando(false);
            } catch (error) {
                alert("Erro ao carregar os dados do produto.");
                navigate("/");
            }
}});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const clienteId = formData.get('clienteId') as string;
        const produtoId = Number(formData.get('produtoId')) as number;
        const quantidade = Number(formData.get('quantidade')) as number;

        axios.post('http://localhost:3000/compra', { clienteId, produtoId, quantidade })
            .then(() => {
                navigate('/produtos');
            })
    }

    return (
        <div className="d-flex justify-content-center mt-5 align-items-center">
            <div className="card shadow-sm p-4 w-100" style={{ maxWidth: '450px', borderRadius: '12px' }}>
                <h2 className="text-center mb-4 text-secondary fw-semibold">Inserir Compra</h2>

                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <div>
                        <label className="form-label text-muted small fw-medium">ID do Cliente</label>
                        <input
                            type="text"
                            className="form-control form-control-lg fs-6"
                            placeholder="Ex: 123"
                            name="clienteId"
                            required
                        />
                    </div>

                    <div>
                        <label className="form-label text-muted small fw-medium">ID do Produto</label>
                        <input
                            type="select"
                            className="form-control form-control-lg fs-6"
                            placeholder="0.00"
                            name="produtoId"
                            required
                        />
                    </div>
                   <div>
                        <label className="form-label text-muted small fw-medium">Quantidade </label>
                        <input
                            type="number"
                            className="form-control form-control-lg fs-6"
                            placeholder="Ex: 10 "
                            name="quantidade"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 mt-2 fw-medium"
                        style={{ borderRadius: '8px', backgroundColor: '#4F46E5', borderColor: '#4F46E5' }}
                    >
                        Salvar Produto
                    </button>
                </form>
            </div>
        </div>
    );
}



