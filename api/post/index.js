const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const  { findAll, create, updatePost, deletePost }  = require('../../util/post');

module.exports.create = async (req, res) => {
    const body = {
        title: 'Assassinat du president Jovenel Moise',
        body: 'Dans la nuit de 6 a 7 Juillet vers 2 heures du matin, le president fut tue dans sa residence',
        authorId: 1
    };

    const post = await create(body)
    .then( () => res.json({ post: true}))
    .catch( (err) => res.json({ msg: err.meta }));
}

module.exports.findAll = async (req, res) => {
    const post = await findAll();
    res.json(post);
}

module.exports.update = async (req, res) => {
    const id = { id: 1 };
    const body = {
        title: 'ssassinat du president de la republique  D\'Haiti Jovenel Moise'
    };

    const updatedata = await updatePost(id, body)
    .then( () => res.json({ update: true }))
    .catch( (err) => res.json({ msg: err.meta }));
}

module.exports.delete = async (req, res) => {
    const id = { id: 2 };

    const deletedata = await deletePost(id)
    .then( () => res.json({ delete: true }))
    .catch( (err) => res.json({ msg: err.meta }));
}