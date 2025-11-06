/*
  Warnings:

  - You are about to drop the column `assosiate_user_id` on the `Teams` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Teams` table. All the data in the column will be lost.
  - Added the required column `created_by_id` to the `Teams` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('DEVELOPER', 'TESTER', 'PRODUCT_MANAGER', 'LEAD', 'DESIGNER', 'RND');

-- AlterTable
ALTER TABLE "Teams" DROP COLUMN "assosiate_user_id",
DROP COLUMN "role",
ADD COLUMN     "created_by_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Team_user_map" (
    "id" SERIAL NOT NULL,
    "team_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "Team_user_map_pkey" PRIMARY KEY ("id")
);
