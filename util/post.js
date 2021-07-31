const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports.create = (body) => prisma.post.create({ data: body });
module.exports.findAll = () => prisma.post.findMany();
module.exports.updatePost = (id, body) => prisma.post.update({ where: id, data: body });
module.exports.deletePost = (id) => prisma.post.delete({ where: id });