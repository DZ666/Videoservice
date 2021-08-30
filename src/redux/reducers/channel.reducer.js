// TYPES IMPORT
	import {
	  GETTING_CHANNEL_LIST
	} from "../types/channels.js"

// Images Imports
	import first from "../../assets/images/channels/first.png"
	import twoXtwo from "../../assets/images/channels/2x2.png"
	import rbk from "../../assets/images/channels/rbk.png"
	import amedia from "../../assets/images/channels/amedia.png"
	import ntv from "../../assets/images/channels/ntv.png"

// Default Data, If I don't add it, I'll take an error
let initialState = {
  list: [
	  {
		  id: 0,
		  name: "Первый канал",
		  img: first,
		  stream: [
		  	{
				id: 0,
				time: "13:00",
				name: "Новости (с субтитрами)"
			},
		  	{
				id: 1,
				time: "14:00",
				name: "Давай поженимся"
			},
		  	{
				id: 2,
				time: "15:00",
				name: "Другие новости"
			},
		  	{
				id: 3,
				time: "16:00",
				name: "Ещё новости"
			},
		  	{
				id: 4,
				time: "17:00",
				name: "Ещё фильм"
			},
		  	{
				id: 5,
				time: "18:00",
				name: "Другой фильм"
			},
		  ]
	  },
	  {
		  id: 1,
		  name: "2x2",
		  img: twoXtwo,
		  stream: [
		  	{
				id: 0,
				time: "13:00",
				name: "МУЛЬТ ТВ. Сезон 4, 7 серия"
			},
		  	{
				id: 1,
				time: "14:00",
				name: "ПОДОЗРИТЕЛЬНАЯ СОВА, Сезон 7, 7 серия"
			},
		  	{
				id: 2,
				time: "15:00",
				name: "БУРДАШЕВ, Сезон 1, 20 серия"
			},
			{
				id: 3,
				time: "16:00",
				name: "Ещё новости"
			},
		  	{
				id: 4,
				time: "17:00",
				name: "Ещё фильм"
			},
		  	{
				id: 5,
				time: "18:00",
				name: "Другой фильм"
			},
		  ]
	  },
	  {
		  id: 2,
		  name: "РБК",
		  img: rbk,
		  stream: [
		  	{
				id: 0,
				time: "13:00",
				name: "ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС"
			},
		  	{
				id: 1,
				time: "14:00",
				name: "ДЕНЬ. Главные темы"
			},
		  	{
				id: 2,
				time: "15:00",
				name: "Главные новости"
			},
			{
				id: 3,
				time: "16:00",
				name: "Ещё новости"
			},
		  	{
				id: 4,
				time: "17:00",
				name: "Ещё фильм"
			},
		  	{
				id: 5,
				time: "18:00",
				name: "Другой фильм"
			},
		  ]
	  },
	  {
		  id: 3,
		  name: "AMEDIA PREMIUN",
		  img: amedia,
		  stream: [
		  	{
				id: 0,
				time: "13:00",
				name: "Клиент всегда мёртв"
			},
		  	{
				id: 1,
				time: "14:00",
				name: "Голодные игры: Сойка-пересмешница. Часть I"
			},
		  	{
				id: 2,
				time: "17:00",
				name: "Секс в большом городе"
			},
			{
				id: 3,
				time: "16:00",
				name: "Ещё новости"
			},
		  	{
				id: 4,
				time: "17:00",
				name: "Ещё фильм"
			},
		  	{
				id: 5,
				time: "18:00",
				name: "Другой фильм"
			},
		  ]
	  },
	  {
		  id: 4,
		  name: "НТВ",
		  img: ntv,
		  stream: [
		  	{
				id: 0,
				time: "13:00",
				name: "Фильм про полицию"
			},
		  	{
				id: 1,
				time: "14:00",
				name: "Ещё один фильм про полицию"
			},
		  	{
				id: 2,
				time: "17:00",
				name: "И ещё один фильм про полицию"
			},
			{
				id: 3,
				time: "16:00",
				name: "Ещё новости"
			},
		  	{
				id: 4,
				time: "17:00",
				name: "Ещё фильм"
			},
		  	{
				id: 5,
				time: "18:00",
				name: "Другой фильм"
			},
		  ]
	  },
  ]
}

// All Action Project Requires here
const actionsReducer = (state = initialState, action) => {

  switch (action.type) {
    case GETTING_CHANNEL_LIST:
      return {
        ...state
      }
    default:
      return state
  }
}

export default actionsReducer
