if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/tic-tac-toe-ai.min.js');
} else {
  module.exports = require('./dist/tic-tac-toe-ai.js');
}
