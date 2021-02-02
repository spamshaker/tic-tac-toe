if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/tic-tac-toe-engine.min.js');
} else {
  module.exports = require('./dist/tic-tac-toe-engine.js');
}
