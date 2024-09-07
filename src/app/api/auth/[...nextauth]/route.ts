import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PostJob } from "@prisma/client";


import { NEXT_AUTH } from "../../../lib/auth";
const handler = NextAuth(NEXT_AUTH);

export const GET = handler;
export const POST = handler;
