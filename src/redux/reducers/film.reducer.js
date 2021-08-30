// TYPES IMPORT
import {
	GETTING_FILM_LIST,
	GOT_FILM_LIST,
	GETTING_FILM_LIST_FAILED
} from '../types/films'

// Images
import comedy from "../../assets/images/genres/comedy.png"
import drama from "../../assets/images/genres/drama.png"
import fantastic from "../../assets/images/genres/fantastic.png"
import horror from "../../assets/images/genres/horror.png"

import imPngId1 from "../../assets/images/films/imPngId1.png"
import imPngId2 from "../../assets/images/films/imPngId2.png"
import imPngId3 from "../../assets/images/films/imPngId3.png"
import imPngId4 from "../../assets/images/films/imPngId4.png"
import owl_jpg from "../../assets/images/films/owl.jpg"
import burdashev_jpg from "../../assets/images/films/burdashev.jpg"
import clientIsAlwaysDead_jpg from "../../assets/images/films/clientIsAlwaysDead.jpg"
import hungryGames1_jpg from "../../assets/images/films/hungryGames1.jpg"

// Default Data, If I don't add it, I'll take an error
const initialState = {
	new_created: [
		0, 1, 2, 3, 6, 4, 5, 7
	],
	list: [{
			id: 0,
			img: imPngId1,
			name: "Мульт в кино. Выпуск №103. Некогда грустить!",
			genre: 4,
			countries: ["Россия"],
			description: "В новом выпуске ми-ми-мишки изобретут машину сна, а Дракоша Тоша научит завязывать шнурки. Также зрители увидят новые серии мультфильмов «Четверо в кубе», «Лео и Тиг» и совершенно новый мультсериал «Снежная королева: Хранители чудес»."
		},
		{
			id: 1,
			img: imPngId2,
			name: "Новый Бэтмен",
			genre: 1,
			countries: ["США"],
			description: "В раннем детстве юный наследник Брюс Уэйн стал свидетелем убийства своих родителей и после этого стал ненавидеть преступность. В Готэме все чаще случались насилие, ограбления и убийства."
		},
		{
			id: 2,
			img: imPngId3,
			name: "Однажды в... Голливуде",
			genre: 0,
			countries: ["США", "Германия"],
			description: "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."
		},
		{
			id: 3,
			img: imPngId4,
			name: "Стриптизёрши",
			genre: 0,
			countries: ["США"],
			description: "Танцовщицы элитного стриптиз-клуба, клиенты которого — известные финансисты с Уолл-Стрит, привыкли к большим заработкам и роскошной жизни. Но после финансового кризиса 2008 года посетителей в клубе заметно поубавилось, и деньги к девушкам уже не текут рекой. "
		},
		{
			id: 4,
			img: owl_jpg,
			name: "ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия",
			genre: 0,
			countries: ["Россия"],
			description: "Чихуа активно записывается на курсы по управлению гневом, а полицейский участок превращается в съемочную студию."
		},
		{
			id: 5,
			img: burdashev_jpg,
			name: "БУРДАШЕВ. Сезон 1, 20 серия",
			genre: 0,
			countries: ["Россия"],
			description: "Правдивая байка о медкомиссии в военкомате, адекватном военном подразделении и машине для усмирения русского нрава."
		},
		{
			id: 6,
			img: clientIsAlwaysDead_jpg,
			name: "Клиент всегда мертв",
			genre: [1, 0],
			countries: ["США"],
			description: "Будни сотрудников семейного похоронного бюро. Умная трагикомедия с блестящими актерами и морем черного юмора"
		},
		{
			id: 7,
			img: hungryGames1_jpg,
				name: "Голодные игры: Сойка-пересмешница. Часть I",
			genre: [1, 0],
			countries: ["США", "Канада", "Франция"],
			description: "75-ые Голодные игры изменили все. Китнисс нарушила правила, и непоколебимое до той поры деспотичное правление Капитолия пошатнулось. У людей появилась надежда, и ее символ – Сойка-пересмешница. Теперь, чтобы освободить захваченного в плен Пита и защитить своих близких, Китнисс придется сражаться в настоящих битвах и стать еще сильнее, чем на арене игр."
		},
	],
	genres: [{
			id: 0,
			name: "Комедии",
			Name: "Комедия",
			img: comedy,
			type: "comedy",
		},
		{
			id: 1,
			name: "Драма",
			Name: "Драма",
			img: drama,
			type: "drama",
		},
		{
			id: 2,
			name: "Фантастика",
			Name: "Фантастика",
			img: fantastic,
			type: "fantastic",
		},
		{
			id: 3,
			name: "Ужасы",
			Name: "Ужасы",
			img: horror,
			type: "horror",
		},
		{
			id: 4,
			name: "Для детей",
			Name: "Для детей",
			img: null	,
			type: "childish",
		},
		{
			id: 5,
			name: "Боевик",
			Name: "Боевик",
			img: null,
			type: "thriller",
		},
		{
			id: 6,
			name: "Триллер",
			Name: "Триллер",
			img: null,
			type: "thriller",
		},
		{
			id: 7,
			name: "Приключения",
			Name: "Приключения",
			img: null,
			type: "adventure",
		},
	]
}

const actionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GETTING_FILM_LIST:
			return {
				...state
			}
			default:
				return state
	}
}

export default actionsReducer
