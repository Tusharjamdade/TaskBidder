import NextAuth from "next-auth";
import { NextRequest } from "next/server";
import CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name:"Login",
            credentials:{
                username:{label:"email",type:"text",placeholder:"Email"},
                password:{label:"email",type:"text",placeholder:"Email"},
            },
            async authorize(credentials:any){
                console.log(credentials)
                const email = credentials.username
                return {
                    userId:"1"
                }
            }
        })
    ],
    pages:{
        signIn:"/signin"
    }
})
export const GET = handler;
export const POST = handler;


