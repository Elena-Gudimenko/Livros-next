import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { codEditora } = req.query;

        if (req.method === 'GET') {
            const nomeEditora = controleEditora.getNomeEditora(Number(codEditora));
            if (nomeEditora) {
                res.status(200).json({ nome: nomeEditora });
            } else {
                res.status(404).json({ message: 'Editora não encontrada' });
            }
        } else {
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
