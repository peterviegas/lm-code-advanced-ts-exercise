import { fetchPostAdd } from "../../../api/fetch_post_add";
import { clear, print, prompt, printNewLine } from "../../../ui/console";
import {User} from "../../../../../server/src/types/posts.types";
import {Post} from "../../../../../server/src/types/posts.types";

export async function postPosts() {
	clear();

	const user: User = {
		id: '',
		name: '',
		creationDate: new Date()
	}

	const post: Post = {
		id: '',
		title: '',
		text: '',
		author: user
	}

	post.id = await prompt("Enter Post ID");
	post.title = await prompt("Enter Title");
	post.text = await prompt("Enter Text");
	user.id = await prompt("Enter User ID");

	const result = await fetchPostAdd( post);

	print(`🥳 Received post:`);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return result;
}
