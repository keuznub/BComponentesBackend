import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';
export var libsql = createClient({
    url: "".concat(process.env.TURSO_DATABASE_URL),
    authToken: "".concat(process.env.TURSO_AUTH_TOKEN)
});
export var adapter = new PrismaLibSQL(libsql);
export var prisma = new PrismaClient({
    adapter: adapter
});

//# sourceMappingURL=adapter.js.map