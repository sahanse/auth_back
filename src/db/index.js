import pg from "pg";

const db = new pg.Client({
    database:process.env.PG_DB,
    password:process.env.PG_PASS,
    user:process.env.PG_USER,
    port:process.env.PG_PORT,
    host:process.env.PG_HOST,
});

export default db