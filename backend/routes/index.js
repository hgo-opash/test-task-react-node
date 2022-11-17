module.exports = (app) => {
  const router = require("express").Router();
  const emp = require("../controllers/emp.controller");

  router.get("/", emp.get_data);
  router.post("/emp", emp.set_empdata);
  router.post("/cmp", emp.set_cmpdata);
  router.post("/setdata", emp.set_alldata);
  router.get("/alldata", emp.get_alldata);
  router.get("/data/:phoneno", emp.getdataPhoneumber);

  app.use("/", router);
};
