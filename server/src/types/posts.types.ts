import { sequelize } from "../../../client/src/database/database";
/*import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	CreationOptional,
	DataTypes,
} from "sequelize";*/

export type User = {
	id: string;
	name?: string;
	creationDate?: Date;
};

export type Post = {
	id: string;
	title: string;
	text: string;
	author: User;
};
/*
export class User1 extends Model<
	InferAttributes<User1>,
	InferCreationAttributes<User1>
> {
	declare id: CreationOptional<number>;
	declare name: string;
	declare creationDate: Date;
}

User1.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		creationDate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	},
	{
		modelName: "User1",
		timestamps: false,
		sequelize: sequelize,
	}
);*/
