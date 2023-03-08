import { fetchUser } from "../../../api/fetch_user";
import { clear, print, prompt, printNewLine } from "../../../ui/console";
import {User} from "../../../../../server/src/types/posts.types";

export async function postUsers() {
	clear();

	const user: User = {
		id: '',
		name: '',
		creationDate: new Date()
	}

	user.id = await prompt("Enter User ID");
	user.name = await prompt("Enter name");

	const result = await fetchUser( user);

	print(`🥳 Received post:`);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return result;
}