$(document).ready(function() {


	var verses = [	'Дым табачный воздух выел.',
			  	'Вспомни - ',
			  	'за этим окном',
			  	'Не надо этого,',
			  	'дорогая,',
			  	'хорошая,',
			  	'дай простимся сейчас.',
			  	'Дай хоть',
			  	'последней нежностью выстелить',
			  	'твой уходящий шаг.',
			  	'кроме твоего взгляда,',
			  	'не властно лезвие ни одного ножа.',
			  	'Завтра забудешь',
			  	'что тебя короновал,',
			  	'что душу цветущую любовью выжег,',
			  	'Надо мною,',
			  	'а я и не знаю, где ты и с кем.',
			  	'мне нету солнца,',
			  	'Кроме любви твоей,',
			  	'мне нету моря,',
			  	'тело в улицу брошу я.',
			  	'Слов моих сухие листья ли заставят остановиться,',
			  	'жадно дыша?',
			  	'Сядем рядом.Сядем ближе',
			  	'Нас забудут - да не скоро,',
			  	'Я знаю, зачем иду по земле.',
			  	'Мне будет легко улетать.',
			  	'Нить, как волос.',
			  	'Жить, как колос.',
			  	'Но завтра - утро. Все сначала.',
			  	'значит - это кому-нибудь нужно?',
			  	'в метелях полуденной пыли,',
			  	'плачет,',
			  	'целует ему жилистую руку,',
			  	'просит - чтоб обязательно была звезда!',
			  	'Послушайте!',
			  	'Значит - это необходимо,',
			  	'От большого ума лишь сума, да тюрьма.',
			  	'Глаза стоят на ржавом потолке',
			  	'Столетний дождь',
			  	'По тихой полосе бредут слова',
			  	'Гоpи-гоpи ясно, чтобы не погасло,',
			  	'Дом гоpит — козел не видит,',
			  	'Дом гоpит — козел не знает,',
			  	'Кто кончил жизнь трагически - тот истинный поэт, ',
			  	'Слабо стреляться? В пятки, мол, давно ушла душа?',
			  	'Терпенье, психопаты и кликуши!',
			  	'Поэты ходят пятками по лезвию ножа',
			  	'Укоротить поэта! - вывод ясен.',
			  	'И нож в него - но счастлив он висеть на острие,',
			  	'Жалею вас, приверженцы фатальных дат и цифр!',
			  	]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i <= 10; i++) {
	var line = getRandomInt(0,50);

	var verses_in = '<p>'+verses[line]+'</p>';
	$("#center-poetry").append(verses_in);

};

});




