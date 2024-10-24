import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

// Define the attributes for the Employee model
interface EmployeeAttributes {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  salary: number;
  dateOfJoining: string;
  location: string;
  manager: string;
}

// Define the creation attributes (excluding id, as it's auto-incremented)
interface EmployeeCreationAttributes extends Optional<EmployeeAttributes, 'id'> {}

// Define the Employee model
class EmployeeModel extends Model<EmployeeAttributes, EmployeeCreationAttributes> implements EmployeeAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public department!: string;
  public designation!: string;
  public salary!: number;
  public dateOfJoining!: string;
  public location!: string;
  public manager!: string;
}

// Initialize the model
EmployeeModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dateOfJoining: {
    type: DataTypes.STRING, // Consider changing this to DataTypes.DATE if you want to store dates
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manager: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Employee',
  timestamps: false, // Disable automatic timestamps
});

// Export the model
export default EmployeeModel;
