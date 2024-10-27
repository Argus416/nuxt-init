ALTER TABLE "todos" RENAME TO "posts";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "refresh_token_expires_in" timestamp NOT NULL;