import models from '../models/models'

let add = async (req, res, next) => {
    const { nombre, descripcion } = req.body;
    try {
        const data = await models.Categoria.create({
            nombre,
            descripcion
        })
        res.status(200).json(data);
    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        })
        next(e)
    }
}

let query = async (req, res, next) => {
    let id = req.query._id;
    try {
        const data = await models.Categoria.findOne({_id:id})
        if (!data) {
            res.status(404).send({
                message: "Error, el archivo no existe"
            })
        } else {
            res.status(200).json(data)
        }
    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        })
        next(e)
    }
}

let list = async (req, res, next) => {
    let valor = req.query.valor;
    try {
        const data = await models.Categoria.find({
            $or:[{ 'nombre': new RegExp( valor, 'i')},
            { 'descripcion': new RegExp( valor, 'i')}]
        },{createAt:0})
        .sort({'createAt':-1});
        res.status(200).json(data);
    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        })
        next()
    }
}

let update = (req, res, next) => {
    try {

    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        })
        next()
    }
}
let remove = (req, res, next) => {
    try {

    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        })
        next()
    }
}
let activate = (req, res, next) => {
    try {

    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        })
        next()
    }
}
let deactivate = (req, res, next) => {
    try {

    } catch (e) {
        res.status(500).send({
            message: "Error en el proceso"
        })
        next()
    }
}
export default {
    add,
    query,
    list,
    update,
    remove,
    activate,
    deactivate
}