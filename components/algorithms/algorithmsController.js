exports.getAlgorithms = function(req, res) {
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
  
    res.status(200).json({ algos });
}