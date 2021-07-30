const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const  { findAll, create, deleteUser }  = require('../../util/user');

module.exports.findAll = async (req, res) => {
    const users = await findAll();
    res.json(users);
    
}

module.exports.create = async (req, res) => {
    const body = {
        fullname: 'Jean Pierre Peterson',
        email: 'peterson@gmail.com'
    };

    const user = await create(body);
    res.json({create: user});
}

module.exports.delete = async (req, res) => {
    const id = {
        id: 6
    };

   const user = await deleteUser(id)
   .then( () => {
    res.json({ delete: true});
   })
   .catch( (err) => {
    res.json({msg: err.meta.cause});
   });

}