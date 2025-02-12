/*
  Warnings:

  - The primary key for the `Rate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Rate` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rate" (
    "idUser" INTEGER NOT NULL,
    "idProduct" INTEGER NOT NULL,
    "opinion" TEXT,
    "value" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,

    PRIMARY KEY ("idUser", "idProduct"),
    CONSTRAINT "Rate_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Rate_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Rate" ("createdAt", "idProduct", "idUser", "opinion", "updatedAt", "value") SELECT "createdAt", "idProduct", "idUser", "opinion", "updatedAt", "value" FROM "Rate";
DROP TABLE "Rate";
ALTER TABLE "new_Rate" RENAME TO "Rate";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
