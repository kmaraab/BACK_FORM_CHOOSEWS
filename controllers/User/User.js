require('dotenv').config();
const { NewMessage } = require('../../midlewares/notificationEmail/newMessage');

// new contact us
exports.contact = async (req, res, next) => {
    const data = {...req.body}
    if(!data.email){
      return res.status(400).json({message: "Bad request"})
    }
    else {
      try {
        await NewMessage(data.email, data.name, data.phone, data.message);
        return res.status(200).json({message: "Message envoyé avec succès"});
      } catch (error) {
        return res.status(500).json({message: "Erreur serveur"});
      }
    }
}


// isOnline
exports.isOnline = (req, res, next) =>{
  try {
    return res.status(200).json({message: "API connecté"});
  } catch (error) {
    return res.status(500).json({message: "Erreur serveur"});
  }
}