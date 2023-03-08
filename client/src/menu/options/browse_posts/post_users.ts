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

	user.id = await prompt("Enter Post ID");
	user.name = await prompt("Enter name");
	//user.creationDate = Date(now)
	//const desiredPostId2 = await prompt("Enter Post ID");

	// TODO: should we validate this?!

	//print(`📨 Fetching post "${desiredPostId}...`);

	const result = await fetchUser( user);



	print(`🥳 Received post:`);

	console.log(result);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
	//const result = 200

	return result;
}
