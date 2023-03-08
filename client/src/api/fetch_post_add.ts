import { baseUrl } from "./base_url";
import {Post, User} from "../../../server/src/types/posts.types";
import { getAllUsers } from "../../../server/src/services/users_service"


export async function fetchPostAdd(postAdd:Post) {

	postAdd.author.id
	const findUser = JSON.stringify(getAllUsers().filter((u) => u.id === postAdd.author.id))
	const post3 = getAllUsers().find((p) => p.id === postAdd.author.id);

	postAdd.author.name = post3?.name;
	postAdd.author.creationDate = post3?.creationDate;

	try {
		const result = await fetch(baseUrl + "/api/posts/add",{
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ name: postAdd }),
		});

		const post = await result.json();

		return post;
	} catch(e) {

		console.error(e)
		return false;
	}
}
