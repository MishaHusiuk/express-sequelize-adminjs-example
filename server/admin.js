const AdminBro = require("admin-bro");
const AdminBroExpressjs = require("admin-bro-expressjs");
const dbAdapter = require("admin-bro-sequelizejs");

// We have to tell AdminBro that we will manage sequelize resources with it
AdminBro.registerAdapter(dbAdapter);

// Pass all configuration settings to AdminBro
const adminBro = new AdminBro({
  resources: [
    /* sequelise models here*/
  ],
  rootPath: "/admin",
});

// Build and use a router which will handle all AdminBro routes
const router = AdminBroExpressjs.buildRouter(adminBro);

// app.use(adminBro.options.rootPath, router);

module.exports = {
  rootPath: adminBro.options.rootPath,
  router,
};
