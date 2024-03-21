import mongoose from "mongoose";

const chatModel = mongoose.Schema(
    {
        chatName : {
            type:String, 
            trim: true
        },
        isGroupChat: {
            type: Boolean, 
            default : false
        },
        latestMsg:{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Messages'
        },
        chatMembers : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Users'
        }],
        groupAdminName:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Users"
        }   
    },
    {
        timeStamps : true
    }
)

const ChatMdl = mongoose.model("chats", chatModel)
module.exports = ChatMdl;

// chatName
// isGroupChat
// latestMsg
// chatMembers
// groupAdminName