import mongoose from "mongoose";
const schema=mongoose.Schema({
    f_name:({type:String}), 
    l_name:({type:String}), 
    email:({type:String}), 
    dob:({type:String}), 
    gen:({type:String}), 
    empid:({type:String}), 
    pho:({type:String}), 
    city:({type:String}), 
    dist:({type:String}), 
    exp:({type:String}), 
    pic:({type:String})
})
export default mongoose.model.Employees||mongoose.model("Employee",schema);