-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "jobRole" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostJob" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "deadline" TEXT NOT NULL,
    "skills" TEXT[],
    "thumbnail" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "PostJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bids" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Bids_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" SERIAL NOT NULL,
    "autherId" INTEGER NOT NULL,
    "university" TEXT NOT NULL,
    "Degree" TEXT NOT NULL,
    "marks" TEXT NOT NULL,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Support" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "autherId" INTEGER NOT NULL,

    CONSTRAINT "Support_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "PostJob" ADD CONSTRAINT "PostJob_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bids" ADD CONSTRAINT "Bids_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_autherId_fkey" FOREIGN KEY ("autherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Support" ADD CONSTRAINT "Support_autherId_fkey" FOREIGN KEY ("autherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
