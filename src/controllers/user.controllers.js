import mongoose from "mongoose";
import userService from '../services/user.services.js';



const create = async (req, res) => {
        try {

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

} catch(err)
{
    res.status(500).send({message:err.message});
};
};


const findAll = async (req, res) => {  
    try{
    const users = await userService.findAllService();

    if(users.length === 0){
        return res.status(400).send({message:"Não há usuário cadastrado"});
    }

    res.send(users);
    }catch(err){
        res.status(500).send({message:err.message});
    };

};

const findById = async(req, res) => {
    try{
    const user = req.user;

    res.send(user);
    }catch(err){
        res.status(500).send({message:err.message});
    }
};

const update = async (req, res)=>   {
   
    try{

    const {name, username, email, password, avatar, background } = req.body;


    if(!name && !username && !email && !password && !avatar && !background ){
        res.status(400).send({mensage:"Submeta pelo menos um campo para fazer a atualização."});
    }

    const {id, user} = req;

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
    }catch(err){
        res.status(500).send({message:err.message});
    }
};

export default {create, findAll, findById, update};