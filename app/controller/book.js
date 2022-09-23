const BookModel = require('../model/books')


module.exports = {
    async show(req, res){
        
        try{
            const data = await BookModel.find()

            res.status(201).json(data)

        } catch(error){
            res.status(500).json({message: error.message})
        }
        
    }
}