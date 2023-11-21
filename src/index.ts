import express from 'express';

// Cria uma instância do aplicativo Express
const app = express();

type Filme = {
    
}
// Define uma rota padrão
app.get('/filmes', (req, res) => {
    const filme = {
        titulo: 'Vingadores',
        descricao: 'Filme dos Vingadores',
        foto: 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg',
    }
    res.send([filme]);
});

app.post('/filmes', (req, res) => {
    const filme = {
        titulo: 'The nun',
        descricao: 'Filme da freira',
        foto: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEtpnOnlSI3UkF1Xkf_1pboQcKZ5nvIzhKw6Xqs4d_8xKF6JKN',
    }
    res.status(201).send(filme)
});


// Inicia o servidor
app.listen(3000, ()=> {
    console.log('Servidor iniciado na porta 3000');
});
