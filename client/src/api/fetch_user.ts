import { baseUrl } from "./base_url";
import {User} from "../../../server/src/types/posts.types";

export async function fetchUser(user:User) {
	try {
		const result = await fetch(baseUrl + "/api/users/add",{
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ name: user }),
		});
		const post = await result.json();
		return post;
	} catch(e) {
		console.error(e)
		return false;
	}
}
