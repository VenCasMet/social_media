import mongoose, { mongo } from "mongoose";
const conversationSchema=new mongoose.Schema({
    participants:[{type:mongoose.Schema.Types.ObjectId, ref:"User"}],
    messages:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
});
export default Conversation=mongoose.model('Conversation',conversationSchema);