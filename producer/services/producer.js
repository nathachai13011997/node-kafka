const { Kafka } = require("kafkajs");
const config = require("../config/app");

const methods = {
  async produce({ topic, data }) {
    try {
      const kafka = new Kafka({
        clientId: "my-app",
        brokers: config.serversKafka,
        enforceRequestTimeout: false,
      });

      const producer = kafka.producer({
        allowAutoTopicCreation: false,
        transactionTimeout: 30000,
      });

      // event kafka producer notification
      producer.on("producer.connect", (err) =>
        console.log("producer kafka connected")
      );

      producer.on("producer.disconnect", () =>
        console.error("producer kafka disconnect")
      );

      producer.on("producer.network.request_timeout", () =>
        console.error("producer kafka network timeout")
      );

      await producer.connect();
      await producer.send({
        topic,
        messages: [
          {
            value: JSON.stringify(data),
          },
        ],
      });

      await producer.disconnect();
    } catch (err) {
      return err;
    }
  },
};

module.exports = { ...methods };
