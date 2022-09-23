const TrasactionModel = require('../model/historys')
const BookModel = require('../model/books')
const MemberModel = require('../model/members')
const book = require('./book')

module.exports = {
    async show(req, res){
        
        try{
            const data = await TrasactionModel.find()

            res.status(201).json(data)

        } catch(error){
            res.status(500).json({message: error.message})
        }
        
    },
    async borrow(req, res, next){

        var newExpire = new Date()
        var addDays = 7
        var expire = newExpire.setDate(newExpire.getDate() + addDays)        

        var bookCode = req.body.bookCode
        var count = bookCode.length

        var memberCode = req.body.memberCode
        var member = await MemberModel.findOne({code: memberCode})

        for(const checkBook of bookCode){
            let Book = await TrasactionModel.find({"books.code": checkBook, return: null})
            var countB = Book.length
            if( countB === 0){
                next()
                
            }else{
                console.log(Book)
                return res.status(400).json({message: "book already borrowed by some member"})
            }
            
        }

        if(count > 2 ){
            return res.status(400).json({message: "book can't be borrow more than 2"})
        }

        const checkExist = await BookModel.findOne({code: bookCode})

        if (!checkExist){
            return res.status(400).json({message: "book code invalid"})
        }

        const data = new TrasactionModel({
            books: [],
            member: [
                {
                    code: member.code,
                    name: member.name
                }
            ],
            borrow: new Date(),
            expire: expire,
        })

        try{
            
            const saveData = await data.save()

            for(const codeBook of bookCode){
                let Book = await BookModel.findOne({code: codeBook})

                const pushBook = await TrasactionModel.findByIdAndUpdate(saveData.id, {
                    $push:{
                        books: {
                            
                                code: Book.code,
                                title: Book.title,
                                stock: Book.stock,
                                author: Book.author
                            
                        }
                    }
                })
            }

            const result = await TrasactionModel.findById(saveData.id)
            res.status(201).json(result)

        } catch(error){
            res.status(500).json({message: error.message})
        }
    }
}