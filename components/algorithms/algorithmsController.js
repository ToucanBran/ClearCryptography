exports.getAlgorithms = function(req, res) {
    let algorithms = [
            {"name":"Caeser Cipher", "description": "loraoiifjaoweifjaoeifjaoweifjawoeijf"},
            {"name":"Triple DES","description": "loraoiifjaoweifjaoeifjaoweifjawoeijf"},
            {"name":"RSA","description": "loraoiifjaoweifjaoeifjaoweifjawoeijf"},
            {"name":"Diffie-Hellman","description": "loraoiifjaoweifjaoeifjaoweifjawoeijf"},
            {"name":"AES","description": "loraoiifjaoweifjaoeifjaoweifjawoeijf"},
            {"name":"DES","description": "loraoiifjaoweifjaoeifjaoweifjawoeijf"}
        ];
  
    res.status(200).json({ algorithms });
}