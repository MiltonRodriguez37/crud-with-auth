const User = require("../models/User");

exports.createUser = async (req,res) => {
  try {
    let user;
    user = new User(req.body);
    await user.save();
    res.send(user);

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error en el servidor.')
  }
}

exports.getUsers = async (req,res) => {
  try {
    const users = await User.find()
    res.json(users);

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error en el servidor.')
  }
}

exports.updateUser = async (req,res) => {
  try {
    const {name, lastname, gender, telephone} = req.body;
    let userFound = await User.findById(req.params.id);

    if(!userFound){
      return res.status(404).json({msg: 'No existe ese usuario'})
    }

    userFound.name = name;
    userFound.lastname = lastname;
    userFound.gender = gender;
    userFound.telephone = telephone;

    userFound = await User.findOneAndUpdate({_id:req.params.id},userFound, {new:true});

    res.json(userFound);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error en el servidor.')
  }
}

exports.getUser = async (req,res) => {
  try {
    let user = await User.findById(req.params.id);
    if(!user){
      return res.status(404).json({msg:'No existe el usuario'})
    }
    res.json(user);

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error en el servidor.')
  }
}

exports.deleteUser = async (req,res) => {
  try {
    let user = await User.findById(req.params.id);
    if(!user){
      return res.status(404).json({msg:'No existe el usuario'})
    }
    await User.findOneAndDelete({_id:req.params.id});
    res.json({msg:'Usuario eliminado'});

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error en el servidor.')
  }
}