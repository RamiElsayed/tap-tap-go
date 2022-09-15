const { format } = require("date-fns");

const formatDate = (date) => format(new Date(date), "dd/MM/yyyy");

module.exports = { formatDate };
