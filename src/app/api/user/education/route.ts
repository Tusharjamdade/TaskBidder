import prisma from "../../../../../db";
export async function POST(){

    // id            Int     @id @default(autoincrement())
    // author        User    @relation(fields: [autherId],references: [id])
    // autherId      Int
    // university    String
    // Degree        String
    // marks         String

    await prisma.education.create({
        data:{
            autherId:1,
            university:"Pune",
            Degree:"Data Science",
            marks:"12"
        }
    })
    return Response.json({
        msg:"All Good"
    })
}