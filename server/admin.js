const AdminBro = require("admin-bro");
const AdminBroExpressjs = require("admin-bro-expressjs");
const dbAdapter = require("admin-bro-sequelizejs");


module.exports = function(resources){
  // We have to tell AdminBro that we will manage sequelize resources with it
  AdminBro.registerAdapter(dbAdapter);
  
  // Pass all configuration settings to AdminBro
  const adminBro = new AdminBro({
    resources,
    rootPath: "/admin",
  });
  
  // Build and use a router which will handle all AdminBro routes
  const router = AdminBroExpressjs.buildRouter(adminBro);
  
  return {
    rootPath: adminBro.options.rootPath,
    router,
  }
};
