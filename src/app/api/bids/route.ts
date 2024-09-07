import { NextRequest } from "next/dist/server/web/spec-extension/request";
import prisma from "../../../../db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../../lib/auth";

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const jobId = url.searchParams.get('id');

    const job = await prisma.postJob.findFirst({
        where: {
            id: parseInt(jobId || "")
        }
    });

    return new Response(JSON.stringify({
        job
    }), { status: 200 });
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const url = new URL(req.url);
    const session = await getServerSession(NEXT_AUTH);

    // if (!session || !session.user) {
    //     return new Response(JSON.stringify({
    //         error: "Unauthorized"
    //     }), { status: 401 });
    // }
    console.log("Session",session)

    const jobId = url.searchParams.get('jobId');

    try {
        const bid = await prisma.bids.create({
            data: {
                description: body.description,
                amount: body.amount,
                post: {
                    connect: {
                        id: Number(jobId)
                    }
                },
                user: {
                    connect: {
                        id:session?.user.id // Use the session user ID dynamically
                    }
                }
            }
        });

        return new Response(JSON.stringify({
            msg: "Bid created successfully"
        }), { status: 201 });
    } catch (error) {
        console.error("Error creating bid:", error);
        return new Response(JSON.stringify({
            error: "Failed to create bid"
        }), { status: 500 });
    }
}
