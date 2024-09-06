-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "skills" TEXT[] DEFAULT ARRAY['js', 'ts']::TEXT[];
