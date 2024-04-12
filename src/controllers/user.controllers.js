const userService = require ('../services/user.services')

const create = async (req, res) => {
    
    const {name, username, email, password, avatar, background } = req.body;

    if(!name || !username || !email || !password || !avatar || !background ){
        res.status(400).send({mensage:"Enviar todos os campos para inscrição"});
    }

    const user = await userService.create(req.body);

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

    //parei nesse ponto


}

module.exports = {create, findAll};