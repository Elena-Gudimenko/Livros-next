// LinhaLivro.tsx
import React from 'react';
import { ControleEditora } from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro'; // Импортируйте модель Livro

// a) Instância do controlador
const controleEditora = new ControleEditora();

// b) Definindo a interface LinhaLivroProps
interface LinhaLivroProps {
    livro: Livro; // Tipo Livro deve ser importado
    excluir: () => void;
}

// c) Componente LinhaLivro
export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const { livro, excluir } = props;

    return (
        <tr>
            <td>{livro.titulo}</td>
            <td>{livro.resumo}</td>
            <td>{livro.autores.join(', ')}</td>
            <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
            <td>
                <button className="btn btn-danger" onClick={excluir}>
                    Excluir
                </button>
            </td>
        </tr>
    );
};
