-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_encounterId_fkey";

-- AlterTable
ALTER TABLE "Encounter" ADD COLUMN     "postId" INTEGER;

-- AddForeignKey
ALTER TABLE "Encounter" ADD CONSTRAINT "Encounter_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
