-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrderProduct" (
    "idProduct" INTEGER NOT NULL,
    "idOrder" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    PRIMARY KEY ("idProduct", "idOrder"),
    CONSTRAINT "OrderProduct_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "OrderProduct_idOrder_fkey" FOREIGN KEY ("idOrder") REFERENCES "Order" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_OrderProduct" ("idOrder", "idProduct", "quantity") SELECT "idOrder", "idProduct", "quantity" FROM "OrderProduct";
DROP TABLE "OrderProduct";
ALTER TABLE "new_OrderProduct" RENAME TO "OrderProduct";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
