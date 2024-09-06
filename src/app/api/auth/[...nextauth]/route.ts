import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../db";
import { PostJob } from "@prisma/client";

// Define custom types
interface CustomUser {
  id: string;
  email: string;
  profile?: any;
  education?: any;
  jobs?: PostJob[];  // Include jobs as an array of PostJob
}

interface CustomSession {
  user: CustomUser;
}

interface CustomToken {
  userId?: string;
  profile?: any;
  jobs?: PostJob[];  // Include jobs as an array of PostJob
  education?: any;
}


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials) {
        try {
          // Fetch user from the database
          const user = await prisma.user.findFirst({
            where: { email: credentials?.username },
            include: {
              education: true,
              profile: true,
              jobs: true,
              support:true
            },
          });

          // Handle invalid credentials
          if (!user) {
            throw new Error("Invalid credentials");
          }

          // Return user details (ensure passwords are hashed in production)
          console.log(user.jobs)
          return {
            id: user.id,
            email: user.email,
            profile: user.profile,
            // jobs : user.jobs,
            education: user.education,
            // jobs: JSON.stringify(user.jobs),
          };
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error("Failed to authorize");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: { token: CustomToken; user?: CustomUser }) {
      if (user) {
        // Store additional user info in the token
        token.userId = user.id;
        token.profile = user.profile;
        token.jobs = user.jobs;

        token.education = user.education ;
      }
      return token;
    },
    async session({ session, token }: { session: CustomSession; token: CustomToken }) {
      
      if (session.user) {
        // Attach user info from the token to the session
        session.user.id = token.userId as string;
        session.user.profile = token.profile;
        session.user.jobs = token.jobs;
        session.user.education = token.education;
      }
      
      return session;
    },
  },
  pages: {
    signIn: "/signin", // Custom sign-in page
  },
  session:{
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  }
});

export const GET = handler;
export const POST = handler;
