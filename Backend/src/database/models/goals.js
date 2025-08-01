'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Goal extends Model {
    static associate(models) {
      // Uma meta pertence a um usuário
      Goal.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Goal.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    beginDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    finalDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    moneyToCollect: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    moneyCollected: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0.00,
    },
  }, {
    sequelize,
    modelName: 'Goal',
    tableName: 'goals',
  });

  return Goal;
};
