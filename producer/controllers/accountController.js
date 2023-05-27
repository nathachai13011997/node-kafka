const methods = {
  async openAccount(req, res) {
    try {
      res.success(req.body);
    } catch (err) {
      res.error(err);
    }
  },
};

module.exports = { ...methods };
