const create = (req, res) => {
    
    const {name, username, email, password, avatar, background } = req.body;

    if(!name || !username || !email || !password || !avatar || !background ){
        res.status(400).send({mensage:"Enviar todos os campos para inscrição"});
    }

  

    res.status(201).send({
        massage: "Usuário criado com sucesso",
        user:{
            name,
            username,
            email,
            avatar,
            background
        }
    });
};
module.exports = {create};