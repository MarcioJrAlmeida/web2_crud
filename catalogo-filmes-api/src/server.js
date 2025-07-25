const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors'); // <-- importar o cors
const filmesRoutes = require('./routes/filmesRouters'); 

app.use(cors());
app.use(express.json());
app.use('/filmes', filmesRoutes); // Todas as rotas começarão com /movies

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
