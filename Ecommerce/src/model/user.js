import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
const User=sequelize.define(
    'User',
    {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        type:{
            type:DataTypes.ENUM('customer','vendor'),
            defaultValue:'customer',
            allowNull:false,
        },
    },
    {
        tableName:'users',
        timestamps:true,
    }
);
export {User}


