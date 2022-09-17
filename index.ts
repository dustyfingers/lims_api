import server from './server';

server.listen(process.env.PORT, () => {
    return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});
