/*
  Warnings:

  - You are about to drop the `Peoject_owner_custom_status` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[project_id]` on the table `Porject_team_map` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `project_id` on the `Porject_team_map` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `team_id` on the `Porject_team_map` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `Projects` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `project_id` on the `Tasks` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status` on the `Tasks` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `priority` on the `Tasks` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Project_status" AS ENUM ('ACTIVE', 'PLANNING', 'COMPLETED', 'ON_HOLD', 'CANCELLED');

-- CreateEnum
CREATE TYPE "Task_status" AS ENUM ('TODO', 'IN_DEV', 'IN_TEST', 'REOPEN', 'INVALID', 'NOT_ABLE_TO_REPLICATE');

-- CreateEnum
CREATE TYPE "Task_type" AS ENUM ('BUG', 'FEATURE', 'IMPROVEMENT', 'OTHER');

-- CreateEnum
CREATE TYPE "Task_priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- DropForeignKey
ALTER TABLE "public"."Projects" DROP CONSTRAINT "Projects_team_id_fkey";

-- AlterTable
ALTER TABLE "Porject_team_map" DROP COLUMN "project_id",
ADD COLUMN     "project_id" INTEGER NOT NULL,
DROP COLUMN "team_id",
ADD COLUMN     "team_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Projects" DROP COLUMN "status",
ADD COLUMN     "status" "Project_status" NOT NULL;

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "project_id",
ADD COLUMN     "project_id" INTEGER NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Task_status" NOT NULL,
DROP COLUMN "priority",
ADD COLUMN     "priority" "Task_priority" NOT NULL;

-- DropTable
DROP TABLE "public"."Peoject_owner_custom_status";

-- CreateTable
CREATE TABLE "Project_owner_custom_status" (
    "id" SERIAL NOT NULL,
    "project_owner_id" TEXT NOT NULL,
    "status_type_name" TEXT NOT NULL,
    "status_type_value" TEXT NOT NULL,

    CONSTRAINT "Project_owner_custom_status_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Porject_team_map_project_id_key" ON "Porject_team_map"("project_id");

-- AddForeignKey
ALTER TABLE "Teams" ADD CONSTRAINT "Teams_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team_user_map" ADD CONSTRAINT "Team_user_map_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team_user_map" ADD CONSTRAINT "Team_user_map_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Porject_team_map" ADD CONSTRAINT "Porject_team_map_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Porject_team_map" ADD CONSTRAINT "Porject_team_map_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_assigned_to_id_fkey" FOREIGN KEY ("assigned_to_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_assigned_by_id_fkey" FOREIGN KEY ("assigned_by_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_last_updated_by_id_fkey" FOREIGN KEY ("last_updated_by_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_owner_custom_task_type" ADD CONSTRAINT "Project_owner_custom_task_type_project_owner_id_fkey" FOREIGN KEY ("project_owner_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_owner_custom_status" ADD CONSTRAINT "Project_owner_custom_status_project_owner_id_fkey" FOREIGN KEY ("project_owner_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task_comments" ADD CONSTRAINT "Task_comments_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task_comments" ADD CONSTRAINT "Task_comments_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task_comments" ADD CONSTRAINT "Task_comments_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
