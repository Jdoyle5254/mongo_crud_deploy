const { connection } = require('mongoose');

connection.connect(process.env.MONGODB_URI || 'mongodb://localhost/videosAndResponses', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
