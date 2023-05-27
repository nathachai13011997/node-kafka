const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const _dirname = path.resolve();

const doc = yaml.load(fs.readFileSync(`${_dirname}\\config.yaml`, 'utf8'));

module.exports = {
  portApp: 3001,
  serversKafka: doc.kafka.servers,
  groupKafka: doc.kafka.group
}
