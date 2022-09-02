const { format } = require('date-fns');

const formatDate = (date) => format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss");

module.exports = { formatDate };
