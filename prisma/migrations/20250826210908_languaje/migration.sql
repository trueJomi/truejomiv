/*
  Warnings:

  - Added the required column `language` to the `CV` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CV" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "language" TEXT NOT NULL
);
INSERT INTO "new_CV" ("id") SELECT "id" FROM "CV";
DROP TABLE "CV";
ALTER TABLE "new_CV" RENAME TO "CV";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
