ALTER TABLE "users" RENAME COLUMN "first_name" TO "fullname";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "last_name";