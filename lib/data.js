module.exports = {
	ChatWarsBotID: 265204902,
	gameStrings: {
		equipment: '🎽Экипировка',
		bag: '🎒Содержимое рюкзака',
		stock: '📦Склад с материалами',
	},
	// https://regex101.com/r/YnuYFh/1
	itemsRegex: /(\D+)(\((\d+)\))?\s(\+(\d+)⚔)?\s?(\+(\d+)🛡)? \/(on|off)_(\d+)/,
	phrases: {
		hello: `*Привет!* Я помогу тебе с покупками в 🏚Лавке @ChatWarsBot

`,
		help: `Но потом. Когда мой исходный код будет дописан, я смогу помочь вот с чем:

*Посчитать, сколько стоит барахло в твоём 🎒Рюкзаке*
Для этого перешли мне сообщение, которое ты получишь по команде /bag в чате с @ChatWarsBot
	
*Посчитать, сколько стоит твой 📦Склад*
Для этого перешли мне сообщение, которое ты получишь по команде /stock в чате с @ChatWarsBot

*Подсказать, что из 🏚Лавки тебе по карману*
Для этого сообщи, сколько у тебя 💰Золота в кармане
Я проверю каждый тип 🎽Экипировки и даже подскажу, на что тебе осталось совсем немного подкопить.

Исходники здесь: https://github.com/Grawl/chatwars-consultant-telegram-bot`,
		unrecognizedInput: `Что-то я не понял, что ты пытаешься сделать.

`,
		unknownCommand: `*Я такой команды не знаю*

Если ты ткнул команду бота @ChatWarsBot, то вот что: её нужно отправлять не мне.`,
		brokenForward: `Я вижу, что это сообщение от @ChatWardBot, но *не вижу здесь твою 🎽Экипировку, 🎒Содержимое рюкзака или 📦Склад с материалами.*`
	},
}