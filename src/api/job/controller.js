const { Job } = require('./../../config/models');

exports.register = (req, res) => {
    const job = req.body;

    Job.create(job)
        .then(
        jobCreated => {
            res.status(201).json(jobCreated);
        },
        err => {
            console.log(err);
            res.sendStatus(500);
        }
    );
};

exports.update = async (req, res) => {
    const job = req.body;

    Job.update(job, {
        where: { id: job.id },
    }).then(
        rows => res.status(200).json(rows),
        err => {
            console.log(err);
            res.sendStatus(500);
        }
    );
};

exports.show = (req, res) => {
    Job.findAll()
        .then(
        jobs => res.status(200).json(jobs),
        err => {
            console.log(err);
            res.sendStatus(500);
        }
    );
};