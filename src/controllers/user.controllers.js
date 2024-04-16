const userService = require ('../services/user.services');
const mongoose = require("mongoose");


const create = async (req, res) => {
    
    const {name, username, email, password, avatar, background } = req.body;

    if(!name || !username || !email || !password || !avatar || !background ){
        res.status(400).send({mensage:"Enviar todos os campos para inscrição"});
    }

    const user = await userService.createService(req.body);

    if(!user){
        return res.status(400).send({message:"Error na criação"});
    }

    res.status(201).send({
        massage: "Usuário criado com sucesso",
        user:{
            id: user._id,
            name,
            username,
            email,
            avatar,
            background
        }
    });
};

const findAll = async (req, res) =>{

    const users = await userService.findAllService();

    if(users.length === 0){
        return res.status(400).send({message:"Não há usuário cadastrado"});
    }

    res.send(users);


};

const findById = async (req, res) => {
    const id = req.params.id;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({massage: "usuário Inválido."});
    }

    const user = await userService.findByIdService(id);

    if(!user){
        return res.status(400).send({massage: "Usuário não encontrado."});
    }

    res.send(user);

};

const update = async (req, res)=>{

    const {name, username, email, password, avatar, background } = req.body;


    if(!name && !username && !email && !password && !avatar && !background ){
        res.status(400).send({mensage:"Submeta pelo menos um campo para fazer a atualização."});
    }

    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({massage: "Usuário Inválido."});
    }

    const user = await userService.findByIdService(id);

    if(!user){
        return res.status(400).send({massage: "Usuário não encontrado."});
    }



    await userService.updateService(
        id,
        name, 
        username,
        email, 
        password, 
        avatar,
        background
    );

    res.send({message:"Usuário foi atualizado com sucesso!"});

};

module.exports = {create, findAll, findById, update};