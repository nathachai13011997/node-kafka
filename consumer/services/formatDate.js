const d = new Date();
const date = d.toISOString().split("T")[0];
const time = d.toTimeString().split(" ")[0];
const dateTime = `${date} ${time}`;

module.exports = dateTime