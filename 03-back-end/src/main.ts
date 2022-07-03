import * as express from "express";
import * as cors from "cors";

const application: express.Application = express();

application.use(cors());
application.use(express.json());


application.get('/about', (req,res) => {
    res.send("<h1>O nama</h1><p>Ovo je tekst o nama</p>");
})



application.use( (req,res) => {
    res.sendStatus(404);
});

application.listen(10000);