import instance from "../index.js"

import { def_local } from "../Auth"

const API = {
	make_comment(body) {
		def_local()
		// If I used server, then i got it from db
		let user_list = JSON.parse(localStorage.getItem("users")),
			result = user_list.map(user => ({
				...user,
				comments: user.id === body.user_id ? [...(user.comments || []), {id: user.comments.length, film_id: body.id, text: body.comment, post_date: body.post_date }] : [...(user.comments || [])]
			}))
			localStorage.setItem("users", JSON.stringify(result))
	},
	delete_comment(user_id, id) {
		console.log(user_id, id);
		let new_user_list = JSON.parse(localStorage.getItem("users")).map(user => ({
			...user,
			comments: user.id === user_id ? user.comments.filter(comment => comment.id !== id) : user.comments
		}))
		localStorage.setItem("users", JSON.stringify(new_user_list))
	}
}

export default API
