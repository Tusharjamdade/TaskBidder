import prisma from "../../../../../db";
export async function GET(){
    const user = await prisma.user.findFirst({where:{
        id:1
    }}) 

    return Response.json({
        user
    })
}