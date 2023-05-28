const { Kafka } = require("kafkajs");

const config = require("../config/app");
const topics = require("../events/event");
const handle = require("./account");

const methods = {
  async consume() {
    const kafka = new Kafka({
      clientId: "my-app",
      brokers: config.serversKafka,
      enforceRequestTimeout: false,
    });

    const consumer = kafka.consumer({ groupId: config.groupKafka });

    // event kafka consumer notification
    consumer.on("consumer.connect", () =>
      console.info("consumer kafka connected")
    );
    consumer.on("consumer.disconnect", () =>
      console.error("consumer kafka disconnect")
    );
    consumer.on("consumer.crash", () => console.error("consumer kafka crash"));
    consumer.on("consumer.stop", () => console.error("consumer kafka stop"));
    consumer.on("consumer.network.request_timeout", () =>
      console.error("consumer kafka network timeout")
    );

    await consumer.connect();
    await consumer.subscribe({ topics, fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        // console.log({
        //   topic: topic,
        //   value: message.value.toString()
        // })
        const obj = JSON.parse(message.value.toString());
        handle(topic, obj);
      },
    });
  },
};

module.exports = { ...methods };
