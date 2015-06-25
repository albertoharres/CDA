$(document).ready(function() {


	var verses = [	'E como eu palmilhasse vagamente',
			  	'uma estrada de Minas, pedregosa,',
              	'e no fecho da tarde um sino rouco',

         	    'se misturasse ao som de meus sapatos',
				'que era pausado e seco; e aves pairassem',
				'no céu de chumbo, e suas formas pretas',

				'lentamente se fossem diluindo',
				'na escuridão maior, vinda dos montes',
				'e de meu próprio ser desenganado,',

                'a máquina do mundo se entreabriu',
				'para quem de a romper já se esquivava',
				'e só de o ter pensado se carpia.',

				'Abriu-se majestosa e circunspecta,',
				'sem emitir um som que fosse impuro',
				'nem um clarão maior que o tolerável',

				'pelas pupilas gastas na inspeção',
				'contínua e dolorosa do deserto,',
				'e pela mente exausta de mentar,',

				'toda uma realidade que transcende',
				'a própria imagem sua debuxada',
				'no rosto do mistério, nos abismos.',

				'Abriu-se em calma pura, e convidando',
				'quantos sentidos e intuições restavam',
				'a quem de os ter usado os já perdera,',

				'e nem desejaria recobrá-los,',
				'se em vão e para sempre repetimos',
				'os mesmos sem roteiro tristes périplos,',

				'convidando-os a todos, em coorte,',
				'a se aplicarem sobre o pasto inédito',
				'da natureza mítica das coisas,',

				'assim me disse, embora voz alguma',
				'ou sopro ou eco o simples percussão',
				'atestasse que alguém, sobre a montanha,',

				'a outro alguém, noturno e miserável,',
				'em colóquio se estava dirigindo:',
				'O que procuraste em ti ou fora de,',

				'teu ser restrito e nunca se mostrou,',
				'mesmo afetando dar-se ou se rendendo,',
				'e a cada instante mais se retraindo,',

				'olha, repara, ausculta: essa riqueza',
				'sobrante a toda pérola, essa ciência',
				'sublime e formidável, mas hermética,',

				'essa total explicação da vida,',
				'esse nexo primeiro e singular,',
				'que nem concebes mais, pois tão esquivo',

				'se revelou ante a pesquisa ardente',
				'em que te consumiste… vê, contempla,',
				'abre teu peito para agasalhá-lo.',

				'As mais soberbas pontes e edifícios,',
				'o que nas oficinas se elabora,',
				'o que pensado foi e logo atinge,',

				'distância superior ao pensamento,',
				'os recursos da terra dominados,',
				'e as paixões e os impulsos e os tormentos',

				'e tudo que define o ser terrestre',
				'ou se prolonga até nos animais',
				'e chega às plantas para se embeber',

				'no sono rancoroso dos minérios,',
				'dá volta ao mundo e torna a se engolfar',
				'na estranha ordem geométrica de tudo,',

				'e o absurdo original e seus enigmas,',
				'suas verdades altas mais que tantos',
				'monumentos erguidos à verdade;',

				'e a memória dos deuses, e o solene',
				'sentimento de morte, que floresce',
				'no caule da existência mais gloriosa,', 

				'tudo se apresentou nesse relance',
				'e me chamou para seu reino augusto,',
				'afinal submetido à vista humana.',

				'Mas, como eu relutasse em responder',
				'a tal apelo assim maravilhoso,',
				'pois a fé se abrandara, e mesmo o anseio,',

				'a esperança mais mínima — esse anelo',
				'de ver desvanecida a treva espessa',
				'que entre os raios do sol inda se filtra;',

				'como defuntas crenças convocadas',
				'presto e fremente não se produzissem',
				'a de novo tingir a neutra face',

				'que vou pelos caminhos demonstrando,',
				'e como se outro ser, não mais aquele',
				'habitante de mim há tantos anos,',

				'passasse a comandar minha vontade',
				'que, já de si volúvel, se cerrava',
				'semelhante a essas flores reticentes',

				'em si mesmas abertas e fechadas;',
				'como se um dom tardio já não fora',
				'apetecível, antes despiciendo,',

				'baixei os olhos, incurioso, lasso,',
				'desdenhando colher a coisa oferta',
				'que se abria gratuita a meu engenho.',

				'A treva mais estrita já pousara',
				'sobre a estrada de Minas, pedregosa,',
				'e a máquina do mundo, repelida,',

				'se foi miudamente recompondo,',
				'enquanto eu, avaliando o que perdera,',
				'seguia vagaroso, de mão pensas.',


				'Provisoriamente não cantaremos o amor,',
				'que se refugiou mais abaixo dos subterrâneos.',
				'Cantaremos o medo, que esteriliza os abraços,',
				'não cantaremos o ódio, porque este não existe,',
				'existe apenas o medo, nosso pai e nosso companheiro,',
				'o medo grande dos sertões, dos mares, dos desertos,',
				'o medo dos soldados, o medo das mães, o medo das igrejas,',
				'cantaremos o medo dos ditadores, o medo dos democratas,',
				'cantaremos o medo da morte e o medo de depois da morte.',
				'Depois morreremos de medo',
				'e sobre nossos túmulos nascerão flores amarelas e medrosas',


				'Depois de tantos combates',
				'o anjo bom matou o anjo mau',
				'e jogou seu corpo no rio.',
				'As água ficaram tintas',
				'de um sangue que não descorava',
				'e os peixes todos morreram.',
				'Mas uma luz que ninguém soube',
				'dizer de onde tinha vindo',
				'apareceu para clarear o mundo,',
				'e outro anjo pensou a ferida',
				'do anjo batalhador.',



				'Quando nasci, um anjo torto',
				'desses que vivem na sombra',
				'disse: Vai, Carlos! ser gauche na vida.',

				'As casas espiam os homens',
				'que correm atrás de mulheres.',
				'A tarde talvez fosse azul,',
				'não houvesse tantos desejos.',

				'O bonde passa cheio de pernas:',
				'pernas brancas pretas amarelas.',
				'Para que tanta perna, meu Deus, pergunta meu coração.',
				'Porém meus olhos',
				'não perguntam nada.',

				'O homem atrás do bigode',
				'é sério, simples e forte.',
				'Quase não conversa.',
				'Tem poucos, raros amigos',
				'o homem atrás dos óculos e do bigode.',

				'Meu Deus, por que me abandonaste',
				'se sabias que eu não era Deus',
				'se sabias que eu era fraco.',

				'Mundo mundo vasto mundo,',
				'se eu me chamasse Raimundo',
				'seria uma rima, não seria uma solução.',
				'Mundo mundo vasto mundo,',
				'mais vasto é meu coração.',

				'Eu não devia te dizer',
				'mas essa lua',
				'mas esse conhaque',
				'botam a gente comovido como o diabo.',


				'Como esses primitivos que carregam por toda parte o',
				'maxilar inferior de seus mortos,',
				'assim te levo comigo, tarde de maio,',
				'quando, ao rubor dos incêndios que consumiam a terra,',
				'outra chama, não perceptível, tão mais devastadora,',
				'surdamente lavrava sob meus traços cômicos,',
				'e uma a uma, disjecta membra, deixava ainda palpitantes',
				'e condenadas, no solo ardente, porções de minh’alma',
				'nunca antes nem nunca mais aferidas em sua nobreza',
				'sem fruto.', 

				'Mas os primitivos imploram à relíquia saúde e chuva,',
				'colheita, fim do inimigo, não sei que portentos.',
				'Eu nada te peço a ti, tarde de maio,',
				'senão que continues, no tempo e fora dele, irreversível,',
				'sinal de derrota que se vai consumindo a ponto de',
				'converter-se em sinal de beleza no rosto de alguém',
				'que, precisamente, volve o rosto e passa…',
				'Outono é a estação em que ocorrem tais crises,',
				'e em maio, tantas vezes, morremos.',

				'Para renascer, eu sei, numa fictícia primavera,',
				'já então espectrais sob o aveludado da casca,',
				'trazendo na sombra a aderência das resinas fúnebres',
				'com que nos ungiram, e nas vestes a poeira do carro',
				'fúnebre, tarde de maio, em que desaparecemos,',
				'sem que ninguém, o amor inclusive, pusesse reparo.',

				'E os que o vissem não saberiam dizer: se era um préstito',
				'lutuoso, arrastado, poeirento, ou um desfile carnavalesco.',
				'Nem houve testemunha.',

				'Nunca há testemunhas. Há desatentos. Curiosos, muitos.',
				'Quem reconhece o drama, quando se precipita, sem máscara?',
				'Se morro de amor, todos o ignoram',
				'e negam. O próprio amor se desconhece e maltrata.',
				'O próprio amor se esconde, ao jeito dos bichos caçados;',
				'não está certo de ser amor, há tanto lavou a memória',
				'das impurezas de barro e folha em que repousava. E resta,',
				'perdida no ar, por que melhor se conserve,',
				'uma particular tristeza, a imprimir seu selo nas nuvens.',


				'Por muito tempo achei que a ausência é falta.',
				'E lastimava, ignorante, a falta.',
				'Hoje não a lastimo.',
				'Não há falta na ausência.',
				'A ausência é um estar em mim.',
				'E sinto-a, branca, tão pegada, aconchegada nos meus braços,',
				'que rio e danço e invento exclamações alegres,',
				'porque a ausência, essa ausência assimilada,',
				'ninguém a rouba mais de mim.',


				'Oh! se te amei, e quanto!',
				'Mas não foi tanto assim.',
				'Até os deuses claudicam',
				'em nugas de aritmética.',
				'Meço o passado com régua',
				'de exagerar as distâncias.',
				'Tudo tão triste, e o mais triste',
				'é não ter tristeza alguma.',
				'É não venerar os códigos',
				'de acasalar e sofrer.',
				'É viver tempo de sobra',
				'sem que me sobre miragem.',
				'Agora vou-me. Ou me vão?',
				'Ou é vão ir ou não ir?',
				'Oh! se te amei, e quanto,',
				'quer dizer, nem tanto assim.',


				'Por que Deus permite',
				'que as mães vão-se embora?',
				'Mãe não tem limite,',
				'é tempo sem hora,',
				'luz que não apaga',
				'quando sopra o vento',
				'e chuva desaba,',
				'veludo escondido',
				'na pele enrugada,',
				'água pura, ar puro,',
				'puro pensamento.',
				'Morrer acontece',
				'com o que é breve e passa',
				'sem deixar vestígio.',
				'Mãe, na sua graça,',
				'é eternidade.',
				'Por que Deus se lembra',
				'— mistério profundo —',
				'de tirá-la um dia?',
				'Fosse eu Rei do Mundo,',
				'baixava uma lei:',
				'Mãe não morre nunca,',
				'mãe ficará sempre',
				'junto de seu filho',
				'e ele, velho embora,',
				'será pequenino',
				'feito grão de milho.']

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i <= 10; i++) {
	var line = getRandomInt(0,230);

	var verses_in = '<p>'+verses[line]+'</p>';
	$("#center-poetry").append(verses_in);

};

});




