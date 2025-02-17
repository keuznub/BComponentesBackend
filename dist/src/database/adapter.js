"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    adapter: function() {
        return adapter;
    },
    libsql: function() {
        return libsql;
    },
    prisma: function() {
        return prisma;
    }
});
const _client = require("@prisma/client");
const _adapterlibsql = require("@prisma/adapter-libsql");
const _client1 = require("@libsql/client");
const libsql = (0, _client1.createClient)({
    url: `${process.env.TURSO_DATABASE_URL}`,
    authToken: `${process.env.TURSO_AUTH_TOKEN}`
});
const adapter = new _adapterlibsql.PrismaLibSQL(libsql);
const prisma = new _client.PrismaClient({
    adapter
});

//# sourceMappingURL=adapter.js.map