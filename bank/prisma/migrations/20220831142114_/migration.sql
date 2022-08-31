/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `bankAccount` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bank" TEXT NOT NULL DEFAULT '001',
ADD COLUMN     "bankAccount" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ALTER COLUMN "accountId" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
