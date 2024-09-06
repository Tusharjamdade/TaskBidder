"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { Aboutus } from "@/components/component/Aboutus";
import { TimeLineDemo } from "@/components/TimeLine";

const words = [
  { text: "Get started with" },
  {
    text: "TaskBidder!",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // if (status === "authenticated") {
  //   console.log("User details:", session.user.userDetails);
  //   console.log("Jobs:", session.user.jobs);
  //   console.log("Education:", session.user.education);
  //   console.log("Support:", session.user.support);
  //   console.log("Bids:", session.user.bids);
  // }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {status === "authenticated" ? JSON.stringify(session) : "logout"}

      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center justify-center min-h-full">
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
            The road to freedom starts from here
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <button
              onClick={() => signOut()}
              className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
            >
              Signup
            </button>
            <button
              onClick={() => signIn()}
              className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
            >
              Signin
            </button>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <Aboutus/>
      {/* <TimeLineDemo/> */}
    </div>
  );
}
