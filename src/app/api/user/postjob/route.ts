import prisma from "../../../../../db"
export async function POST(){

//     id          Int      @id @default(autoincrement())
//   title       String
//   location    String
//   description String
//   deadline    String
//   skills      String[]
//   thumbnail   String   
//   jobType     String
//   author   User @relation(fields: [authorId], references: [id])
//   authorId Int

    const body = {
        authorId:1,
        title:"Do Work",
        location:"India",
        description:"This is do some work",
        jobType:'This is job type',
        deadline:"12/1212/12",
        skills:["Tushar Jamdade","Ishwar"],
        thumbnail:"21312312"
    }
   
    await prisma.postJob.create({
        data:{
            authorId:1,
            title:"Do Work",
            location:"India",
            description:"This is do some work",
            jobType:'This is job type',
            deadline:"12/1212/12",
            skills:["Tushar Jamdade","Ishwar"],
            thumbnail:"21312312"
        }
    })
    // await prisma.user.create({
    //     data: {
    //         email: "tusharjamdade786@gmail.com",
    //         password: "Tushar@123"
    //     }
    // });
    
    return Response.json({
        msg:"Data inserted Sucessfully"
    })
}