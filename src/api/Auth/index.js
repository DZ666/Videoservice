import instance from "../index.js"

export const def_local = () => {
	let curr_local = JSON.parse(localStorage.getItem("users"))
	if (curr_local === null) {
		let def = [
			{
				"id": 0,
				"name": "Bell",
				"password": "123456",
				"comments": []
			},
			{
				"id": 1,
				"name": "Mark",
				"password": "123456",
				"comments": []
			},
			{
				"id": 2,
				"name": "Steve",
				"password": "123456",
				"comments": []
			},
		]
		localStorage.setItem("users", JSON.stringify(def))
	}
}

const API = {
	auth(body) {
		def_local()
		// If I used server, then i got it from db
		let user_list = JSON.parse(localStorage.getItem("users")),
			result = null
		for (let i = 0, len = user_list.length; i < len; i++) {
			if (user_list[i].name === body.name && user_list[i].password === body.password) {
				result = {
					status: 201,
					response: "Авторизация прошла успешно!",
					data: {
						...user_list[i]
					}
				}
				break
			} else {
				result = {
					status: 401,
					response: "Не правильный логин или пароль!"
				}
			}
		}
		if (result === null) {
			result = {
				status: 404,
				response: "Пользователь не найден!"
			}
		}
		return  result;
	},
	save_user_name({ name, id }) {
		def_local()
		// If I used server, then i got it from db
		let user_list = JSON.parse(localStorage.getItem("users")),
			result = user_list.map(user => ({
				...user,
				name: user.id === id ? name : user.name
			}))
			localStorage.setItem("users", JSON.stringify(result))

		result = {
			status: 201,
			response: "Rename Is Successfull",
			data: JSON.parse(localStorage.getItem("users")).filter(user => user.id === id)[0]
		}
		if (result === null) {
			result = {
				status: 404,
				response: "Пользователь не найден!"
			}
		}
		return  result
	},
	setDef() {
		def_local()
	}
}

export default API
