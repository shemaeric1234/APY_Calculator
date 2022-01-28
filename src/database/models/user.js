module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
  }, {});
  user.associate = (models) => {
    user.hasMany(models.apy, {
      foreignKey: 'id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  };
  return user;
};