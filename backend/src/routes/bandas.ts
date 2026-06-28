import { Router, Request, Response } from 'express';
import { authenticateToken } from '../middleware/auth';

const router = Router();

export interface Banda {
  id: number;
  nome: string;
  genero: string;
  anoFormacao: number | null;
  pais: string;
  emAtividade: boolean;
  integrantes: string[];
}

let bandas: Banda[] = [
  {
    id: 1,
    nome: 'Massacration',
    genero: 'Heavy Metal',
    anoFormacao: 2002,
    pais: 'Brasil',
    emAtividade: true,
    integrantes: ['Detonator', 'Metal Avenger', 'Headmaster', 'Blondie Hammett']
  },
  {
    id: 2,
    nome: 'Avenged sevenfold',
    genero: 'Heavy Metal',
    anoFormacao: 1999,
    pais: 'Estados Unidos',
    emAtividade: true,
    integrantes: ['M. Shadows', 'Synyster Gates', 'Zacky Vengeance', 'Johnny Christ', 'Brooks Wackerman']
  }
];

router.use(authenticateToken);

router.get('/', (req: Request, res: Response) => {
  res.json(bandas);
});

router.post('/', (req: Request, res: Response) => {
  const novaBanda: Banda = {
    ...req.body,
    id: Date.now()
  };
  bandas.push(novaBanda);
  res.status(201).json(novaBanda);
});

router.put('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string, 10);
  const bandaIndex = bandas.findIndex(b => b.id === id);

  if (bandaIndex === -1) {
    return res.status(404).json({ error: 'Banda não encontrada.' });
  }

  bandas[bandaIndex] = { ...bandas[bandaIndex], ...req.body, id };
  res.json(bandas[bandaIndex]);
});

router.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string, 10);
  const bandaIndex = bandas.findIndex(b => b.id === id);

  if (bandaIndex === -1) {
    return res.status(404).json({ error: 'Banda não encontrada.' });
  }

  bandas = bandas.filter(b => b.id !== id);
  res.status(204).send();
});

export default router;
