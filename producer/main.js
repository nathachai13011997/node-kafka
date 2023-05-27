const express = require('express')
// const { Kafka } = require('kafkajs')
// const bodyParser = require('body-parser');
// const yaml = require('js-yaml');
// const fs   = require('fs');
const app = express();
const config = require("./config/app");

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// const doc = yaml.load(fs.readFileSync('./config.yaml', 'utf8'));
// console.log('doc: ', doc);

// const kafkaProducer = async (data) => {

//     const kafka = new Kafka({
//         clientId: 'my-app',
//         brokers: doc.kafka.servers,
//         enforceRequestTimeout: false
//       })

//       const producer = kafka.producer({
//           allowAutoTopicCreation: false,
//           transactionTimeout: 30000
//         })
    
//     // event kafka producer notification
//     producer.on('producer.connect', () => console.info('producer kafka connected'))
//     producer.on('producer.disconnect', () => console.error('producer kafka disconnect'))
//     producer.on('producer.network.request_timeout', () => console.error('producer kafka network timeout'))    

//     await producer.connect();
//     await producer.send({
//         topic: 'OpenAccountEvent',
//         messages: [{
//             key: 'key',
//             value: JSON.stringify(data),
//         }]
//     });

//     await producer.disconnect();
// }

// app.post('/send-message', async (req, res) => {
//     // await kafkaProducer(req.body);
//     // console.log("body", JSON.stringify(req.body));
//     res.send('success')
//   })

// Express Configs
require("./config/express")(app)

// Routes
app.use(require("./routes/account"));

app.listen(config.portApp, () => {
  
  console.log(`Example app listening at http://localhost:${config.portApp}`)
})