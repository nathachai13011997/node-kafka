const account = require("../services/account");

const methods = {
  async openAccount(req, res) {
    try {
      const data = await account.openAccount(req.body);
      res.success({ message: data });
    } catch (err) {
      res.error(err);
    }
  },

  async depositFund(req, res) {
    try {
      const data = await account.depositFund(req.body);
      res.success({ message: data });
    } catch (err) {
      res.error(err);
    }
  },

  async withdrawFund(req, res) {
    try {
      const data = await account.withdrawFund(req.body);
      res.success({ message: data });
    } catch (err) {
      res.error(err);
    }
  },

  async closeAccount(req, res) {
    try {
      const data = await account.closeAccount(req.body);
      res.success({ message: data });
    } catch (err) {
      res.error(err);
    }
  },
};

module.exports = { ...methods };
