module.exports = (Sequelize, DataTypes) => {

    const FreelancerType = Sequelize.define("FreelancerType", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: DataTypes.STRING(45)
    }, {
            timestamps: true,
            tableName: 'freelancer_type',
            underscored: true
        }
    );

    FreelancerType.associate = function (models) {

        FreelancerType.hasMany(models.Job, {
            as: 'jobs',
            foreignKey: 'freelancer_type_id'
        });
    };
    return FreelancerType;
};