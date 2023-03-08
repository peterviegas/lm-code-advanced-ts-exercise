import { User } from "../types/posts.types";
//import { User1 } from "../types/posts.types";

const users: User [] = [
	{
		id: "1",
		name: "Spicy Hotfish",
		creationDate: new Date(),
	},
	{
		id: "2",
		name: "Sally-Anne Writerperson",
		creationDate: new Date(),
	},
	{
		id: "3",
		name: "Jimmy Alias",
		creationDate: new Date(),
	},
	{
		id: "4",
		name: 'Steve "The Hoop" Hooper',
		creationDate: new Date(),
	},
];

export function getAllUsers(): User[] {
	// in the absence of a true Model layer, our service can simply return a hard-coded array of users

	return users;
}

export const saveUser =  (user: User):User|string => {

	const findUser = JSON.stringify(getAllUsers().filter((u) => u.id === user.id))

	if (findUser.length === 2){
		users.push(user);
		return user;
	}
	return 'Sorry this Id is already in the database User';
};
