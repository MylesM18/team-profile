module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("profiles", {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
        department: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1]
          }
      },
    });
    return Profile;
  };