import prisma from "../../../../../db"

prisma
export async function POST(){
    // id          Int      @id @default(autoincrement())
    // firstName   String    
    // lastName    String
    // gender      String
    // jobRole     String
    // bio         String
    // image       String
    // author      User @relation(fields: [authorId], references: [id])
    // authorId Int
    
    await prisma.userProfile.create({
        data:{
            firstName:"Tushar",
            lastName:"Jamdade",
            gender:"Male",
            jobRole:"SDE",
            bio:"Hi this is tushar",
            image:"1212",
            authorId:2,

        }
    })
    return Response.json({
        msg:"Tushar"
    })
}