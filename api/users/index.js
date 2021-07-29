const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const  { findAll, create } = require('../../util/user');

module.exports.findAll = async (req, res) => {
    const users = await findAll();
    res.json(users);
    
}

module.exports.create = async (req, res) => {
    const body = {
        fullname: 'Vilsaint Ebrans',
        email: 'ebrans@gmail.com'
    };

    const user = await create(body);
    res.json(user);
}