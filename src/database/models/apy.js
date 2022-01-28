module.exports = (sequelize, DataTypes) => {
  const apy = sequelize.define('apy', {
    deposit: DataTypes.INTEGER,
    Interest_rate: DataTypes.FLOAT,
    yearly_compound_times: DataTypes.INTEGER,
  }, {
    freezeTableName: true,
    tableName: 'apy'
  });
  apy.associate = (models) => {
    apy.belongsTo(
      models.user,
      { foreignKey: 'customer_id' },
      { onDelete: 'cascade' },
      { onUpdate: 'cascade' }
    );
  };

  return apy;
};
