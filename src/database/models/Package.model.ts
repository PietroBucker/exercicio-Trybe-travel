import { DataTypes, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Package } from '../../types/Package';

export type PackageImputOptional = Optional<Package, 'id'>;
export type PackageSeqModelCreation = ModelDefined<Package, PackageImputOptional>;

const PackageModel: PackageSeqModelCreation = db.define('Pakage', {
  destination: DataTypes.STRING,
  category: DataTypes.STRING,
  price: DataTypes.DECIMAL,
}, {
  tableName: 'packages',
  timestamps: false,
  underscored: true,
});

export default PackageModel;