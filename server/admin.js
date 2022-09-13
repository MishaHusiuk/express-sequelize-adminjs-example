const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const dbAdapter = require("@adminjs/sequelize");


module.exports = function(resources){
  // We have to tell AdminJS that we will manage sequelize resources with it
  AdminJS.registerAdapter(dbAdapter);
  
  // Pass all configuration settings to AdminJS
  const admin = new AdminJS({
    resources,
    rootPath: "/admin",
  });
  
  // Build and use a router which will handle all AdminJS routes
  const router = AdminJSExpress.buildRouter(admin);
  
  return {
    rootPath: admin.options.rootPath,
    router,
  }
};
