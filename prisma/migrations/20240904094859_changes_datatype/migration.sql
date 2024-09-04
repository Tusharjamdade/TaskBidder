/*
  Warnings:

  - Changed the type of `thumbnail` on the `PostJob` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "PostJob" DROP COLUMN "thumbnail",
ADD COLUMN     "thumbnail" BYTEA NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'user';
