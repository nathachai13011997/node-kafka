const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const _dirname = path.resolve();

const doc = yaml.load(fs.readFileSync(path.join(_dirname, 'config.yaml'), 'utf8'));

module.exports = {
  portApp: 3000,
  hostDB: doc.db.host,
  database: doc.db.database,
  portDB: doc.db.port,
  userDB: doc.db.user,
  passwordDB: doc.db.password,
  serversKafka: doc.kafka.servers,
  groupKafka: doc.kafka.group
}
