const service = require("./theaters.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req,res) {
    const data = await service.list();
    res.send({ data });
}

module.exports = {
    list: asyncErrorBoundary(list),
};