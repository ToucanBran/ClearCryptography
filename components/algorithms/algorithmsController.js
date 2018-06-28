var Algorithm = require('../../data/models/algorithm')

function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }
exports.getAlgorithms = (req, res) => {
    Algorithm.find({}, {pageContent:0})
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

exports.getAlgorithmContent = (req, res) => {
    Algorithm.findOne({"name_id": parseInt(req.params["id"])}, {name:1, pageContent:1})
    .exec((err, content) => {
        if(err) {
            handleError(res, err.message, "Failed to get content.");
        }
        else {
            res.status(200).json(content);

        }
    });
}