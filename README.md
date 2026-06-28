# Backend Setup

Para que o backend funcione e possa verificar os tokens do Firebase, você precisa gerar uma chave privada (Service Account) no Firebase Console.

## Como gerar as credenciais de serviço no Firebase Console:

1. Acesse o [Firebase Console](https://console.firebase.google.com/).
2. Selecione o seu projeto.
3. No menu lateral esquerdo, clique no ícone de engrenagem (Configurações do projeto) e selecione **Configurações do projeto**.
4. Vá para a aba **Contas de serviço**.
5. Clique no botão **Gerar nova chave privada**.
6. Um arquivo `.json` será baixado.
7. Abra este arquivo `.json` e copie os valores necessários para preencher o seu arquivo `backend/.env` baseado no `backend/.env.example`:
   - `project_id` -> `FIREBASE_PROJECT_ID`
   - `client_email` -> `FIREBASE_CLIENT_EMAIL`
   - `private_key` -> `FIREBASE_PRIVATE_KEY` (copie com as quebras de linha `\n` da forma que vier no json).

## Rodando o servidor

No diretório `backend`, rode:
```bash
npm install
npm run dev
```

O servidor iniciará na porta 3001.
