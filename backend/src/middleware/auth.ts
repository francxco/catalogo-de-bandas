import { Request, Response, NextFunction } from 'express';

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token não fornecido ou formato inválido.' });
  }

  // Token recebido do Firebase no frontend. 
  // Para simplificar o projeto da faculdade, faremos apenas a validação da presença do token 
  // no backend, sem usar o firebase-admin (que exige as chaves complexas no .env).
  
  // Opcional: Aqui poderíamos usar o pacote jsonwebtoken para extrair informações básicas,
  // mas vamos apenas aceitar a requisição, assumindo que o frontend já fez o login pelo Google.
  next();
};
