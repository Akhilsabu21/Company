import schema from './user.model.js'

export function addData(req,res)
{
    try {
        const {...Employees}=req.body;
        // console.log(...Employees);
        res.status(201).send(schema.create({...Employees}));
    } catch (error) {
        console.log(error);
    }
}
export async function getData(req,res)
{
    const data=await schema.find();
    res.status(200).send(data);
}
export async function detailData(req,res)
{
    try {
        const {id}=req.params;
        const data=await schema.findOne({_id:id});
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
    }
}
export function removeData(req,res)
{
    const {id}=req.params;
    schema.deleteOne({_id:id}).then(()=>{
        console.log("DELETED");
    }).catch((error)=>{
        console.log(error);
    })
    
    res.end()
}