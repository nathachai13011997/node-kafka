const producer = require("./producer");
const { uuid } = require("uuidv4");

const methods = {
  openAccount(data) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!data) throw new Error("data not emty!");
        data.id = uuid();

        const topic = "OpenAccountEvent";
        await producer.produce({ topic, data });

        resolve({ id: data.id, message: "OpenAccount Success" });
      } catch (err) {
        reject(err);
      }
    });
  },

  depositFund(data) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!data?.id) throw new Error("id not emty!");
        if (!data?.balance) throw new Error("balance not emty!");

        const topic = "DepositFundEvent";
        await producer.produce({ topic, data });

        resolve({ id: data.id, message: "DepositFund Success" });
      } catch (err) {
        reject(err);
      }
    });
  },

  withdrawFund(data) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!data?.id) throw new Error("id not emty!");
        if (!data?.balance) throw new Error("balance not emty!");

        const topic = "WithdrawFundEvent";
        await producer.produce({ topic, data });

        resolve({ id: data.id, message: "WithdrawFund Success" });
      } catch (err) {
        reject(err);
      }
    });
  },

  closeAccount(data) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!data?.id) throw new Error("id not emty!");

        const topic = "CloseAccountEvent";
        await producer.produce({ topic, data });

        resolve({ id: data.id, message: "CloseAccount Success" });
      } catch (err) {
        reject(err);
      }
    });
  },
};

module.exports = { ...methods };
