/*
  Warnings:

  - You are about to drop the column `Quantity` on the `OrderProduct` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `OrderProduct` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrderProduct" (
    "idProduct" INTEGER NOT NULL,
    "idOrder" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    PRIMARY KEY ("idProduct", "idOrder"),
    CONSTRAINT "OrderProduct_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderProduct_idOrder_fkey" FOREIGN KEY ("idOrder") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OrderProduct" ("idOrder", "idProduct") SELECT "idOrder", "idProduct" FROM "OrderProduct";
DROP TABLE "OrderProduct";
ALTER TABLE "new_OrderProduct" RENAME TO "OrderProduct";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
