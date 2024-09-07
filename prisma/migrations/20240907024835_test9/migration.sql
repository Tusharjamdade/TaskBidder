/*
  Warnings:

  - You are about to drop the column `autherId` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `autherId` on the `Support` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Support` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_autherId_fkey";

-- DropForeignKey
ALTER TABLE "Support" DROP CONSTRAINT "Support_autherId_fkey";

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "autherId",
ADD COLUMN     "authorId" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Support" DROP COLUMN "autherId",
ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Support" ADD CONSTRAINT "Support_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
