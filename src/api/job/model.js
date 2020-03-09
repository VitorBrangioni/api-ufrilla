module.exports = (Sequelize, DataTypes) => {

    let Job = Sequelize.define("Job", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        quantity: DataTypes.INTEGER,
        value: DataTypes.DOUBLE,
        description: DataTypes.STRING(255),
        job_start: DataTypes.DATE,
        job_end: DataTypes.DATE,
        freelancer_type_id: DataTypes.INTEGER,
    }, {
            timestamps: true,
            tableName: 'job',
            underscored: true,
        }
    );

    Job.associate = function (models) {

        Job.belongsTo(models.FreelancerType, {
            as: 'freelancer_type',
            foreignKey: 'freelancer_type_id'
        });
    };

    return Job;
};