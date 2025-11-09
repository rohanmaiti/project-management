-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('DEVELOPER', 'TESTER', 'PRODUCT_MANAGER', 'LEAD', 'DESIGNER', 'RND');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL,
    "priority" "Priority" NOT NULL DEFAULT 'LOW',
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "team_id" INTEGER NOT NULL,
    "owner_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teams" (
    "id" SERIAL NOT NULL,
    "team_name" TEXT NOT NULL,
    "created_by_id" TEXT NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team_user_map" (
    "id" SERIAL NOT NULL,
    "team_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "Team_user_map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Porject_team_map" (
    "id" SERIAL NOT NULL,
    "project_id" TEXT NOT NULL,
    "team_id" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Porject_team_map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "project_id" TEXT NOT NULL,
    "assigned_to_id" TEXT NOT NULL,
    "assigned_to_first_name" TEXT NOT NULL,
    "assigned_to_last_name" TEXT NOT NULL,
    "assigned_by_id" TEXT NOT NULL,
    "assigned_by_first_name" TEXT NOT NULL,
    "assigned_by_last_name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "last_updated_by_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project_owner_custom_task_type" (
    "id" SERIAL NOT NULL,
    "project_owner_id" TEXT NOT NULL,
    "task_type_name" TEXT NOT NULL,
    "task_type_value" TEXT NOT NULL,

    CONSTRAINT "Project_owner_custom_task_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Peoject_owner_custom_status" (
    "id" SERIAL NOT NULL,
    "project_owner_id" TEXT NOT NULL,
    "status_type_name" TEXT NOT NULL,
    "status_type_value" TEXT NOT NULL,

    CONSTRAINT "Peoject_owner_custom_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task_comments" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "task_id" INTEGER NOT NULL,
    "sender_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seen_comments_record" (
    "id" SERIAL NOT NULL,
    "comment_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Seen_comments_record_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
