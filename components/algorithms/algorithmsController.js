var Algorithm = require('../../data/models/algorithm')

function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }
exports.getAlgorithms = (req, res) => {
    Algorithm.find()
    .exec((err, algos) => {
        if(err) {
            handleError(res, err.message, "Failed to get previews.");
        }
        else {
            let algorithms = [];
            algos.forEach((x) => algorithms.push(x));
            res.status(200).json(algorithms);
        }
    });
}