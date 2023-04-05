/*
  Warnings:

  - Added the required column `information` to the `Encounter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Encounter" ADD COLUMN     "information" TEXT NOT NULL;
