/*
  Warnings:

  - You are about to drop the column `authorId` on the `Bids` table. All the data in the column will be lost.
  - Added the required column `postId` to the `Bids` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bids" DROP CONSTRAINT "Bids_authorId_fkey";

-- AlterTable
ALTER TABLE "Bids" DROP COLUMN "authorId",
ADD COLUMN     "postId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Bids" ADD CONSTRAINT "Bids_postId_fkey" FOREIGN KEY ("postId") REFERENCES "PostJob"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
