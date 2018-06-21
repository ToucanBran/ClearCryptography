var Algorithm = require('../../data/models/algorithm')

function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }
exports.getAlgorithms = (req, res) => {
    Algorithm.find()
    .exec((err, algorithms) => {
        if(err) {
            handleError(res, err.message, "Failed to get previews.");
        }
        else {
            res.status(200).json(algorithms);
        }
    });
}