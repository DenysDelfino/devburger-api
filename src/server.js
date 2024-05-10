// const app = require('./app') - Modo antigo de rodar

import app from './app'; // Modo novo de rodar, mas tem que instalar o sucrase para compilar.

app.listen(3001, () => console.log('Server is running at port 3001...'));
