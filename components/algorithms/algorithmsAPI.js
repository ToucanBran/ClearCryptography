module.exports = function(app) {
    let algos = {
        "algorithms": [
            "Caeser Cipher",
            "Triple DES",
            "RSA",
            "Diffie-Hellman",
            "AES",
            "DES"
        ]
    }
    app.route('/algorithms')
      .get(function(req, res) {
          res.send(algos);
      });
  };
  