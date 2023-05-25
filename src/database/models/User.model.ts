import { DataTypes, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { User } from '../../types/User';

type UserImputOptional = Optional<User, 'id'>;
type UserSeqModelCreator = ModelDefined<User, UserImputOptional>;

const UserModel: UserSeqModelCreator = db.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;