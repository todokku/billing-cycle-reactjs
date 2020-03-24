module.exports = (sequelize, DataTypes) => {
  const Debt = sequelize.define('Debt', {
    user_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    value: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    repeat: DataTypes.BOOLEAN,
    date_repeat: DataTypes.DATE,
  }, {});

  Debt.associate = (models) => {
    Debt.belongsTo(models.User, { as: 'user', foreignKey: 'user_id' });
  };

  return Debt;
};
