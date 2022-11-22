import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';
// require('dotenv').config();


const app: Express = express();
const port = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
});

