import {PrismaClient} from '@PrismaClient';
const prisma = new PrismaClient();

export default async(req,res)=>{
  const {url} = req.body;
  const shortURL = Math.random().toString(36).substring(2,5);
  try{
    const datra = await prisma.link.create({
      data: {url, shortURL}
    })
    return res.status(200).send(data);
  }catch(e){
    return res.status(500).send({e});
  }
  
}