// app/api/job/post/route.ts

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "@/app/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get("title")?.toString() || "";
    const location = formData.get("location")?.toString() || "";
    const jobType = formData.get("jobType")?.toString() || "";
    const description = formData.get("description")?.toString() || "";
    const deadline = formData.get("deadline")?.toString() || "";
    const skills = JSON.parse(formData.get("skills")?.toString() || "[]");

    const file = formData.get("file");
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ msg: "No file uploaded or invalid file type" }, { status: 400 });
    }

    const fileBuffer = new Uint8Array(await file.arrayBuffer());

    // Assuming you have some way to get the current user ID
    // const authorId = ; // Replace with actual user ID logic
    const session = await getServerSession(NEXT_AUTH);

    // Creating the job post
    await prisma.postJob.create({
      data: {
        title,
        location,
        jobType,
        description,
        deadline,
        skills,
        thumbnail: fileBuffer,
        author: {
          connect: { id: session?.user.id}, // Connect the existing user
        },
      },
    });

    return NextResponse.json({ msg: "Job posted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: "Error posting job" }, { status: 500 });
  }
}
