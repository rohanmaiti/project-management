/*
  Warnings:

  - Added the required column `created_by_id` to the `Team_user_map` table without a default value. This is not possible if the table is not empty.
  - Added the required column `team_name` to the `Team_user_map` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Team_user_map" ADD COLUMN     "created_by_id" TEXT NOT NULL,
ADD COLUMN     "team_name" TEXT NOT NULL;
