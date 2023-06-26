import { db } from "./dbConnect.js";
const coll = db.collection('items');

const toArray = (collection) => collection.docs.map(doc => ({ id: doc.id, ...doc.data() }))

export async function getAllItems(req, res) {
    try {
        const allItems = await coll.get();
        res.send(toArray(allItems));
    } catch (err) {
        res.status(500).send(err);
    }
}

export async function addNewItems(req, res) {
    try {
        const newItem = req.body;
        await coll.add(newItem);
        getAllItems(req, res)

    } catch (err) {
        res.status(500).send(err);
    }
}

export async function updateItemsById(req,res) {
    try{
        const { candyId } = req.params;
        const updatedInfo = req.body;
        await coll.doc(candyId).update(updatedInfo);
        getAllCandy(req,res)
    } catch(err) {
        resizeTo.status(500).send(err);
    }
}