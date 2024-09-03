/*
  Warnings:

  - A unique constraint covering the columns `[authorId]` on the table `UserProfile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_authorId_key" ON "UserProfile"("authorId");
