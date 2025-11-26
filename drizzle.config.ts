// No direct import required; export the config object directly

// Allow missing DATABASE_URL so static deployments won't fail.
// Set process.env.DATABASE_URL when you actually use the DB.
const dbUrl = process.env.DATABASE_URL ?? "";

export default {
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl,
  },
};
