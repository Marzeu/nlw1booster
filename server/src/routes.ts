import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (req, res) => {
    const items = await knex('items').select('*');

    const serializedItens = items.map(item => {
        return {
            title: item.name,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        };
    });

    return res.json(serializedItens);
});

export default routes;