const { PrismaClient  } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports.findAll = () => prisma.user.findMany();
module.exports.create = (body) => prisma.user.create({ data: body });
module.exports.deleteUser = (id) => prisma.user.delete({ where: id });