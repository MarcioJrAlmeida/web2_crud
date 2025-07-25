# 🎬 Catálogo de Filmes - CRUD Fullstack

Sistema completo para cadastro, edição, listagem e exclusão de filmes. Desenvolvido em **ReactJS** no frontend e **Node.js + SQL Server** no backend.

---

## 🧱 Estrutura do Projeto

- `catalogo-filmes-api/` → Backend (Node.js + Express + Sequelize)
- `catalogo-filmes-frontend/` → Frontend (ReactJS)

---

## 🚀 Funcionalidades do Sistema

- ✅ Listagem de filmes (Home)
- ✅ Cadastro de novo filme
- ✅ Edição de filme existente
- ✅ Exclusão com confirmação
- ✅ Trailer embutido com link do YouTube
- ✅ Estilização com tema escuro e design responsivo (padrão Netflix)

---

## ⚙️ Tecnologias Utilizadas

### 📦 Backend (Node.js)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MSSQL](https://www.npmjs.com/package/mssql) (Driver SQL Server)
- SQL Server como banco de dados
- Transações com `BEGIN`, `COMMIT`, `ROLLBACK` nas operações sensíveis

### 💻 Frontend (React)
- React 18+
- React Router DOM
- Axios
- Estilo visual com CSS modularizado (`.css`)
- Icones com [Lucide-react](https://lucide.dev)

---

## ✅ Pré-requisitos

- Node.js v18 ou superior
- SQL Server (Local ou Cloud)
- Visual Studio Code (recomendado)

---

## 🛠️ Instalação e Execução

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/catalogo-filmes.git
cd catalogo-filmes
```

### 2️⃣ Banco de Dados

1. Crie um banco chamado **catalogo**

2. Crie a tabela Filmes com a seguinte estrutura:

```bash
CREATE TABLE Filmes (
  id INT PRIMARY KEY IDENTITY(1,1),
  titulo VARCHAR(255),
  descricao TEXT,
  ano_lancamento INT,
  genero VARCHAR(100),
  url_poster VARCHAR(500)
);
```

### 3️⃣ Configure o Backend

```bash
cd catalogo-filmes-api
```

. Instale as dependências:

```bash
npm install
```

. Inicie o servidor:

```bash
npm start
```

. Servidor rodando em: http://localhost:3001

### 4️⃣ Configure o Frontend

```bash
cd ../catalogo-filmes-frontend
```

. Instale as dependências:

```bash
npm install
```

. Inicie o FrontEnd:

```bash
npm start
```

. Servidor rodando em: http://localhost:3000


#### 🧑‍💻 Autor
Desenvolvido por MárcioJr. como projeto FullStack para prática de React + Node + SQL Server.