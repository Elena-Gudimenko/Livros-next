import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { codigo } = req.query; // Получаем код из URL

        if (req.method === 'DELETE') {
            controleLivro.excluir(Number(codigo)); // Удаление книги
            res.status(200).json({ message: 'Livro excluído com sucesso' });
        } else {
            res.setHeader('Allow', ['DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
