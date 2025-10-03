# 🎬 API de Pesquisa de Filmes (OMDb API)

Este projeto é uma API simples construída em **Node.js + Express** que consome a **OMDb API** para buscar filmes por título.

---

## 🚀 Tecnologias Utilizadas
- Node.js
- Express
- Axios
- Cors
- dotenv

---

## 📂 Estrutura do Projeto
```
.
├── app.js              # Arquivo principal da aplicação
├── routes/
│   └── movieRoutes.js  # Rotas de busca de filmes
├── .env                # Arquivo de variáveis de ambiente
├── package.json
```
---

## ⚙️ Configuração do Ambiente

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e adicione:
```env
PORT=5000
OMDB_API_KEY=sua_chave_aqui
```
🔑 Obtenha sua chave gratuita em: http://www.omdbapi.com/apikey.aspx

### 4. Rodar a aplicação
```bash
npm start
```

---

## 📡 Rotas da API

### Testar servidor
**GET** `http://localhost:5000/`  
Resposta:
```json
"A API de pesquisa de filmes está ativa e funcionando!"
```

### Buscar filmes
**GET** `http://localhost:5000/api/movies?query=batman`  
Resposta (exemplo):
```json
{
  "Search": [
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Poster": "https://..."
    }
  ],
  "totalResults": "321",
  "Response": "True"
}
```
Se não encontrar:
```json
{ "message": "Filme não encontrado" }
```

---

## 🐳 Deploy / Execução em Produção
- Pode ser hospedado em serviços como **Render, Railway, Vercel ou Heroku**.
- Em ambiente local:
```bash
npm run start
```

---

## 📜 Licença
Este projeto é de uso livre para estudos.
