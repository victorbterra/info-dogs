
# 🐶 InfoDogs - Pesquise sobre raças de cães

📌 Sobre o Projeto

A Dog Breeds API é um projeto de estudo fullstack desenvolvido em Node.js, Express.js e React que fornece informações sobre raças de cães. O backend é alimentado, trata os dados e o endpoint da The Dog API para listar detalhes como nome, temperamento, expectativa de vida e imagem de diversas raças.

# 🚀 Tecnologias Utilizadas

📡 Backend:

- Node.js - Ambiente de execução JavaScript

- Express.js - Framework para criar APIs

- Axios - Para requisições HTTP

- Dotenv - Gerenciamento de variáveis de ambiente

- CORS - Permitir que o frontend consuma a API

- Nodemon - Atualiza automaticamente o servidor em desenvolvimento

🎨 Frontend:

- Next.js - Framework React para SSR e SSG

- Axios - Para requisições HTTP

- Tailwind CSS - Estilização modular



# 📁 Estrutura do Projeto

```
dog-breeds-app/
│-- backend/            # Código do servidor Node.js
│   │-- src/
│   │   │-- routes/
│   │   │-- services/
│   │   │-- app.js
│   │-- .env
│   │-- package.json
│-- frontend/           # Código da aplicação React
│   │-- src/
│   │   │-- components/
│   │   │-- pages/
│   │   │-- App.js
│   │-- package.json
│   │-- vite.config.js (ou react.config.js)
│-- README.md           # Documentação do projeto
│-- .gitignore          # Arquivos ignorados pelo Git
```
# 🛠️ Configuração e Instalação

 ### `1️⃣ Clone o repositório`

git clone https://github.com/seu-usuario/dog-breeds-app.git
cd dog-breeds-app

### `2️⃣ Configuração do Backend`
```
cd backend
npm install
```
Crie um arquivo .env e adicione sua chave de API da The Dog API:
```
DOG_API_KEY=SUA_CHAVE_AQUI
PORT=3000
```
🔑 Para obter a chave da API, cadastre-se em The Dog API.

Inicie o servidor:
```
npm run dev
```
O servidor estará rodando em http://localhost:3000

### `3️⃣ Configuração do Frontend`
```
cd ../frontend
npx create-next-app@latest . -y
npm install axios
```
Crie um arquivo .env.local e adicione a URL do backend:
```
BACKEND_URL=http://localhost:3000/api
```
Inicie o frontend:
```
npm run dev
```
A aplicação estará disponível em http://localhost:3001
# 🌎 Endpoints da API

🔍 Buscar todas as raças de cães

```
GET /api/breeds
```

🔄 Resposta esperada:

```
[
  {
    "id": 1,
    "name": "Affenpinscher",
    "temperament": "Curious, Playful, Adventurous",
    "life_span": "10 - 12 years",
    "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
  }
]
```
# 🤝 Contribuindo

 Contribuições são sempre bem-vindas!


 - Faça um fork do repositório

 - Crie uma branch para sua feature (git checkout -b minha-feature)

 - Commit suas mudanças (git commit -m 'Adicionei uma nova feature')

 - Faça um push para a branch (git push origin minha-feature)

 - Abra um Pull Request


## 👨‍💻 Autor

Desenvolvido por [Victor Terra](https://victorterradev.com/) 🚀.