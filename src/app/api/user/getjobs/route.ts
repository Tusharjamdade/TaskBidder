// app/api/user/getjobs/route.ts

import { NextResponse } from "next/server";
import prisma from "../../../../../db";

export async function GET() {
  try {
    // Fetch all posts from the database
    const posts = await prisma.postJob.findMany({
      // Include any necessary relationships if needed
    });

    // Return the posts as a JSON response
    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ message: "Failed to fetch posts" }, { status: 500 });
  }
}
