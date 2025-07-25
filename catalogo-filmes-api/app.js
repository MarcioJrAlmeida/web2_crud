const express = require('express');
const app = express();
const filmeRoutes = require('./src/routes/filmesRouters');

app.use(express.json());
app.use('/filmes', filmeRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
