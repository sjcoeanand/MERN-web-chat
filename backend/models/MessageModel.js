import mongoose from "mongoose";
const MessageModel = mongoose.Schema(
    {
        sender : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Users'
        },
        content : {
            type : String,
            trim : true
        },
        chat : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'ChatMdl'
        }    
    },
    {
        timeStamps : true
    }
)

const MsgMdl = mongoose.model('MsgMdl', MessageModel)
module.exports = MsgMdl