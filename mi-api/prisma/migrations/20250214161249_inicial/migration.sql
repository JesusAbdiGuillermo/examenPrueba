-- CreateTable
CREATE TABLE "apps" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "domains" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "apps_id_key" ON "apps"("id");
