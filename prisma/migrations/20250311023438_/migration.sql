-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CategoryProduct" (
    "idProduct" INTEGER NOT NULL,
    "idCategory" INTEGER NOT NULL,

    PRIMARY KEY ("idProduct", "idCategory"),
    CONSTRAINT "CategoryProduct_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CategoryProduct_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CategoryProduct" ("idCategory", "idProduct") SELECT "idCategory", "idProduct" FROM "CategoryProduct";
DROP TABLE "CategoryProduct";
ALTER TABLE "new_CategoryProduct" RENAME TO "CategoryProduct";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
