import { Router } from "express";
import DataStore from 'nedb';
import { City } from "../types";

const db = new DataStore({ filename: 'data/cities.db', autoload: true});

const cityRouter = Router();

cityRouter.get('/', (req, res) => {
    db.find({}, (err: Error | null, docs: City[]) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.send(docs);
        } 
    });
});

cityRouter.get('/:city', (req, res) => {
    db.findOne({ city: req.params.city }, (err: Error | null, doc: City[]) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.send(doc);
        } 
    });
});

cityRouter.post('/', (req, res) => {
    const city = req.body as City;
    db.insert(city, (err: Error | null, doc: City) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.send(doc);
        } 
    });
});

export default cityRouter;