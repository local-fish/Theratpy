/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({

});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	main: 'main.mp3',
});

// Define the voice files used in the game.
monogatari.assets ('voices', {
	system: 'sys.wav',
	lady: 'lady.wav',
	doctor: 'doc.wav',
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	door: 'door.mp3',
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	'd': {
		name: 'Dr. Cheeser',
		color: '#886154',
		sprites: {
			normal: 'Normal_Doctor.png',
			happy: 'Happy_Doctor.png',
			sad: 'Sad_Doctor.png',
			angry: 'Angry_Doctor.png',
			nonchalant: 'Nonchalant_Doctor.png',
			squinting: 'Squinting_Doctor.png',
		},
	},
	'p': {
		name: 'Pacar',
		color: '#b38fa4',
		sprites: {
			normal: 'Normal_Lady.png',
			sad: 'Sad_Lady.png',
			angry: 'Angry_Lady.png',
			lookingdown: 'Looking_Down_Lady.png',
			tired: 'Tired_Lady.png',
			verysad: 'Very_Sad_Lady.png',
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #000000 with fadeIn',
		'play music main with loop fade 3',
		'play voice system',
		'Suasana malam begitu sunyi.',
		'play voice system',
		'Udara terasa kering.',
		'play voice system',
		'Sebagian orang sudah tertidur pada jam ini.',
		'play voice system',
		'Tetapi tidak untuk kita.',
		'show image rat.png left with fadeIn',
		'show character p lookingdown at left with fadeIn',
		'play voice system',
		'Pacarmu sedang duduk berhadapan denganmu',
		'play voice system',
		'Dia memiliki tampang yang gelisah',
		'play voice system',
		'Dia melirik, seolah ragu sebelum berbicara',
		'show character p normal at left with fadeIn',
		'play voice system',
		'Seketika keheningan itu terpecahkan',
		'play voice lady',
		'p “Akhir-akhir ini aku banyak berpikir”',
		'play voice lady',
		'p “Aku benar-benar menghargai hubungan yang kita miliki”',
		'show character p sad at left',
		'play voice lady',
		'p “Tetapi aku selalu menanyakan seberapa kuat hubungan kita yang sebenarnya ”',
		'show character p normal at left',
		'play voice lady',
		'p “Seorang temanku menyarankan psikolog yang pernah Ia temui bersama pacarnya yang berfokus pada terapi pasangan.”',
		'play voice lady',
		'p “Apakah kamu bersedia untuk menemuinya bersamaku besok?”',
		{'Choice': {
			'Yes': {
				'Text': '“Baik, ayo kita pergi bersama besok”',
				'Do': 'jump Yes'
			},
			'No': {
				'Text': '“Aku sibuk, mungkin lain kali”',
				'Do': 'jump No'
			}
		}},
	],
	'Yes': [
		'play voice system',
		'Pacarmu tersenyum dengan rasa lega',
		'play voice lady',
		'“Terima kasih, aku rasa ini akan baik bagi kita”',
		'jump Scene2',
	],
	'No': [
		'show character p angry at left',
		'play voice lady',
		'p “Apa?”',
		'play voice lady',
		'p ...',
		'play voice lady',
		'p “Baik, kalau begitu kita akhiri saja hubungan kita.”',
		'show character p tired at left',
		'play voice lady',
		'p “Karena jelas kamu tidak menghargai hubungan ini."',
		'end'
	],
	'Scene1': [
		'show scene #e1a8aa with fadeIn',
		'play voice system',
		'Keesokan harinya, kalian berdua pergi ke klinik bersama',
		'play sound door',
		'play voice system',
		'Aroma hangat kopi tercium memenuhi ruang tunggu.',
		'play voice system',
		'Pintu terbuka, dan seekor tikus tinggi melangkah keluar.',
		'play voice system',
		'Tenang, rapi, dengan ekspresi netral yang tidak menunjukkan apa pun.',
		'show image doctor.png right with fadeIn',
		'show character d nonchalant at right with fadeIn',
		'play voice doctor',
		'd “Ah, kalian pasti pasangan itu. Selamat datang. Silakan duduk.”',
		'play voice doctor',
		'd “Saya Dr. Cheeser, Julius Cheeser. Tapi kalian bisa memanggil saya Dr. Cheeser.”',
		'play voice system',
		'Nada bicaranya stabil tidak hangat namun juga tidak dingin, hanya seimbang',
		'play voice system',
		'Ia menunjuk dua kursi nyaman di hadapannya.',
		'play voice system',
		'Ia duduk di seberang kalian, clipboard di tangan.',
		'play voice system',
		'Tatapannya tenang, terfokus.',
		'play voice doctor',
		'd “Hari ini, saya akan menanyakan beberapa hal”',
		'play voice doctor',
		'd “Bukan untuk menilai hubungan kalian, tetapi untuk memahami bagaimana kalian mengalaminya."',
		'play voice doctor',
		'd “Tidak ada jawaban benar atau salah. Cukup jawab sesuai yang paling benar bagi Anda.”',
		'hide character d with fadeOut',
		'hide image doctor.png with fadeOut',
		'show image rat.png at left with fadeIn',
		'show character p sad at left with fadeIn',
		'play voice system',
		'Pasangan Anda menatap Anda dengan ragu.',
		'play voice system',
		'Dr. Cheeser dengan pengamatannya yang tajam memperhatikan ekspresi pacarmu, lalu menambahkan dengan nada yang tetap tenang, hampir tanpa emosi.',
		'hide character p with fadeOut',
		'hide image rat.png with fadeOut',
		'show image doctor.png at right with fadeIn',
		'show character d squinting at right with fadeIn',
		'play voice doctor',
		'd “Untuk bagian ini, saya perlu berbicara dengan Anda saja."',
		'play voice doctor',
		'd “Lebih mudah untuk jujur ketika Anda tidak perlu khawatir dengan apa yang mungkin dipikirkan pasangan Anda.”',
		'hide character d with fadeOut',
		'hide image doctor.png with fadeOut',
		'show image rat.png at left with fadeIn',
		'show character p tired at left with fadeIn',
		'play voice system',
		'Pasangan Anda ragu sejenak',
		'play voice system',
		'Lalu mengangguk.',
		'show character p verysad at left',
		'play voice lady',
		'p “Saya mengerti… Saya akan menunggu di luar.”',
		'show character p tired at left',
		'play voice system',
		'Dia menggenggam tanganmu dengan lembut sebelum keluar ruangan.',
		'play voice system',
		'Pintu tertutup pelan.',
		'hide character p with fadeOut',
		'hide image rat.png with fadeOut',
		'play sound door',
		'play voice system',
		'show image doctor.png at right with fadeIn',
		'show character d squinting at right with fadeIn',
		'Dr. Cheeser menjepit lembar kertas baru pada papan jalannya dan mengklik pulpen.',
		'show character d happy at right',
		'play voice doctor',
		'd “Baik, mari kita mulai.”',
		'play voice system',
		'Kamu menarik napas dalam.',
		'show character d normal at right',
		'play voice doctor',
		'd “Saya akan memberikan beberapa pernyataan.”',
		'play voice doctor',
		'd “Silahkan nilai setiap pernyataan dari 1 (sangat tidak setuju) hingga 6 (sangat setuju) berdasarkan seberapa hal tersebut menggambarkanmu.”',
		'jump Scene2',
	],
	'Scene2':[
		'play voice system',
		'Dr. Cheeser berbicara dengan tenang.',
		'play voice doctor',
		'd “Mari kita mulai dengan bagaimana Anda memandang hubungan Anda dan posisi hubungan itu dalam hidup Anda.”',
		'play voice doctor',
		'd “Kita bisa mulai dengan pertanyaan pertama.”',
		{'Input':{
			'Text':'Teman-teman tidak akan keberatan jika saya putus dengan pasangan saat ini',
			'Type':'radio',
			'Options':[
				{label: '1', value: 1},
				{label: '2', value: 2},
				{label: '3', value: 3},
				{label: '4', value: 4},
				{label: '5', value: 5},
				{label: '6', value: 6}
			]
		}},
	]
});
