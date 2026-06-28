import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bandasRouter from './routes/bandas';

dotenv.config();

const app = express();

// Configuração do CORS para permitir o frontend na porta 5173
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Rotas da API
app.get('/', (req, res) => {
  res.send('API do Catálogo de Bandas está rodando! Acesse o frontend na porta 5173.');
});
app.use('/api/bandas', bandasRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
