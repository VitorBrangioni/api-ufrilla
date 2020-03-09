const { FreelancerType } = require('./../../config/models');

exports.show = (req, res) => {
    FreelancerType.findAll()
        .then(
        profs => res.status(200).json(profs),
        err => {
            console.log(err);
            res.status(500).send();
        }
    );
};