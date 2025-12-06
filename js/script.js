/* global monogatari */

function calculateScore(){
	const scores = monogatari.storage('answers');
	
	const total = Object.values(scores).reduce((sum, val) => sum + Number(val) - 1, 0);
	return total;
}


// Define the messages used in the game.
monogatari.action ('message').messages ({

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
		'jump Scene1',
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
		'hide image doctor.png at right with fadeOut',
		'show image rat.png at left with fadeIn',
		'show character p sad at left with fadeIn',
		'play voice system',
		'Pasangan kamu menatap kamu dengan ragu.',
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
		'Pasanganmu ragu sejenak',
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
		'play voice doctor',
		'd “Pertama, boleh saya memanggil Anda dengan sebutan apa?”',
		'play voice system',
		'Kamu menarik napas dalam.',
		{ 
			'Input': {
				'Text': 'Bagaimana kamu ingin dipanggil? (Jawaban Anda akan direkam).',
				'Type': 'text',
				'Validation': (input) => {
					return input.trim ().length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ player: { name: input }});
				},
				'Revert': () => {
					monogatari.storage ({ player: { name: '' }});
				},
			}
		},
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
		{
			'Input': {
				'Text':'Teman-teman tidak akan keberatan jika saya putus dengan pasangan saat ini',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q1: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q1: 0 }});
				},
			}
		},
		'show character d squinting at right',
		'play voice doctor',
		'd “Ambil waktu seperlunya, tidak perlu terburu-buru.”',
		'play voice doctor',
		'd “Pikirkan makna pernyataan-pernyataan ini bagi Anda.”',
		// There's gotta be a better way of doing this but I'm too busy to delve into the docs
		{
			'Input': {
				'Text':'Teman-teman akan sulit menerima kenyataan jika saya harus mengakhiri hubungan dengan pasangan',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q2: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q2: 0 }});
				},
			}
		},	
		{
			'Input': {
				'Text':'Keluarga saya menginginkan hubungan ini berhasil',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q3: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q3: 0 }});
				},
			}
		},
		{
			'Input': {
				'Text':'Jika hubungan ini berakhir, saya merasa kondisi keuangan akan baik-baik saja',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q4: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q4: 0 }});
				},
			}
		},
		{
			'Input': {
				'Text':'Saya tidak akan kesulitan mencukupi kebutuhan diri sendiri jika hubungan ini berakhir ',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q5: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q5: 0 }});
				},
			}
		},
		{
			'Input': {
				'Text':'Tanpa pasangan, saya tidak akan mengalami masalah dalam memenuhi kebutuhan dasar untuk hidup',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q6: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q6: 0 }});
				},
			}
		},
		{
			'Input': {
				'Text':'Mengakhiri hubungan ini akan membutuhkan banyak waktu dan usaha',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q7: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q7: 0 }});
				},
			}
		},
		{
			'Input': {
				'Text':'Akan cukup mudah bagi saya untuk mengakhiri hubungan ini',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q8: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q8: 0 }});
				},
			}
		},
		{
			'Input': {
				'Text':'Mengakhiri hubungan ini akan membutuhkan banyak langkah yang sulit',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q9: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q9: 0 }});
				},
			}
		},
		'show character d nonchalant at right',
		'play voice doctor',
		'd “Kita sudah setengah jalan.”',
		'show character d happy at right',
		'play voice doctor',
		'd “Sejauh ini Anda sudah menjalankannya dengan baik, teruskan.”',
		{
			'Input': {
				'Text':'Hubungan saya dengan pasangan lebih penting dari apapun',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q10: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q10: 0 }});
				},
			}
		},
		{
			'Input': {
				'Text':'Tidak peduli seberapa sulitnya masa depan yang harus dihadapi, saya ingin hubungan ini tetap kuat',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q11: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q11: 0 }});
				},
			}
		},
		{
			'Input': {
				'Text':'Saya lebih sering memikirkan hubungan ini sebagai “kami” daripada “saya” dan “dia.”',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q12: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q12: 0 }});
				},
			}
		},
		{
			'Input': {
				'Text':'Saya sering membayangkan bagaimana rasanya menikah atau berkencan dengan orang lain.',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q13: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q13: 0 }});
				},
			}
		},
		{
			'Input': {
				'Text':'Hubungan dengan pasangan saat ini jelas merupakan bagian dari rencana masa depan saya',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q14: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q14: 0 }});
				},
			}
		},
		{
			'Input': {
				'Text':'Saya tidak ingin dikenal sebagai pasangan dari kekasih saya saat ini',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q15: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q15: 0 }});
				},
			}
		},
		{
			'Input': {
				'Text':'Mungkin dalam beberapa tahun ke depan, saya sudah tidak ingin menjalin hubungan bersama pasangan saat ini',
				'Type':'radio',
				'Options':[
					{label: '1', value: 1},
					{label: '2', value: 2},
					{label: '3', value: 3},
					{label: '4', value: 4},
					{label: '5', value: 5},
					{label: '6', value: 6}
				],
				'Validation': (input) => {
					return input.length > 0;
				},
				'Save': (input) => {
					monogatari.storage ({ answers: { q16: input }});
				},
				'Revert': () => {
					monogatari.storage ({ answers: { q16: 0 }});
				},
			}
		},
		'jump Scene3',
	],
	'Scene3':[
		'show character d nonchalant at right',
		'play voice system',
		'Dr. Cheeser meletakkan papan jalannya.',
		'play voice doctor',
		'd “Terima kasih atas kejujuranmu”',
		'play voice doctor',
		'd “Itu saja untuk hari ini,” katanya dengan tenang.',
		'show character d normal at right',
		'play voice doctor',
		'd “Ini bukan tentang menilai cinta atau kesetiaan.”',
		'play voice doctor',
		'd “Ini tentang memahami apa yang membuat segalanya tetap bertahan, atau apa yang pada akhirnya bisa membuatnya terlepas.”',
		'hide character d at right with fadeOut',
		'hide image doctor.png at right with fadeOut',
		'play sound door',
		'play voice system',
		'Kamu berjalan keluar dari ruangan',
		'show image rat.png at left with fadeIn',
		'show character p tired at left with fadeIn',
		'play voice system',
		'Matamu langsung tertuju pada pacarmu yang duduk di salah satu sofa ruang tunggu.',
		'show character p normal at left',
		'play voice system',
		'Pacarmu menatapmu dari tempat duduknya sambil menggenggam tanganmu.',
		'play voice lady',
		'p “Jadi… bagaimana perasaanmu?”',
		'play voice system',
		'Kamu mengingat kembali setiap pertanyaan.',
		'play voice system',
		'Setiap kesadaran sunyi yang muncul.',
		'play voice system',
		'Sesi mungkin telah berakhir, tetapi proses refleksimu baru saja dimulai.',
		'jump result',
	],
	'result':[
		'show scene #000000 with fadeIn duration 2s',
		'centered Terima kasih telah menyelesaikan tes ini!',
		'centered Hasil tidak akan otomatis disimpan di perangkat Anda, pastikan untuk menyimpannya sebelum menutup halaman.',
		{'Conditional':{
			'Condition': function(){
				const n = calculateScore();
				const scorePercent = n/80;
				const mean = n/16;
				monogatari.storage({score: {percent: (scorePercent * 100).toFixed(2)}});
				if(mean < 1.685){
					return 'sr';
				} else if(mean <= 2.459){
					return 'r';
				} else if(mean <= 4.009){
					return 'c';
				} else if(mean <= 4.784){
					return 't';
				} else if(mean >= 4.785){
					return 'st';
				}
			},
			'sr': 'jump sr',
			'r': 'jump r',
			'c': 'jump c',
			't': 'jump t',
			'st': 'jump st'
		}}
	],
	'sr':[
		'centered <div style="color: #e1a8aa; font-size: 48px">{{score.percent}}%</div><div style="font-size: 24px; margin-bottom: 8px">Sangat Rendah</div><div>Tingkat komitmenmu masih berada di tahap yang sangat rendah. Bisa jadi kamu belum benar-benar siap atau masih merasa ragu dengan hubungan ini. Tidak apa-apa—setiap orang punya waktunya masing-masing untuk memahami perasaannya.</div>',
		'end'
	],
	'r':[
		'centered <div style="color: #e1a8aa; font-size: 48px">{{score.percent}}%</div><div style="font-size: 24px; margin-bottom: 8px">Rendah</div><div>Tingkat komitmenmu tergolong rendah. Itu berarti kamu punya ketertarikan, tapi masih ada banyak hal yang membuatmu belum sepenuhnya yakin. Mungkin kamu masih butuh waktu untuk mengenal dirimu sendiri dan hubungan ini lebih dalam.</div>',
		'end'
	],
	'c':[
		'centered <div style="color: #e1a8aa; font-size: 48px">{{score.percent}}%</div><div style="font-size: 24px; margin-bottom: 8px">Cukup</div><div>Tingkat komitmenmu berada di posisi tengah. Kamu peduli, tapi masih menyimpan beberapa keraguan. Ini adalah titik yang wajar, di mana hubungan bisa tetap berjalan sambil terus tumbuh dan berkembang.</div>',
		'end'
	],
	't':[
		'centered <div style="color: #e1a8aa; font-size: 48px">{{score.percent}}%</div><div style="font-size: 24px; margin-bottom: 8px">Tinggi</div><div>Tingkat komitmenmu tergolong tinggi. Kamu menunjukkan bahwa hubungan ini penting bagimu, dan kamu cukup siap untuk menjaganya. Ada keinginan tulus untuk tetap bertahan dan berkembang bersama.</div>',
		'end'
	],
	'st':[
		'centered <div style="color: #e1a8aa; font-size: 48px">{{score.percent}}%</div><div style="font-size: 24px; margin-bottom: 8px">Sangat Tinggi</div><div>Tingkat komitmenmu sangat tinggi. Ini menunjukkan bahwa kamu benar-benar serius, penuh perhatian, dan siap melangkah jauh bersama pasanganmu. Hubungan ini memiliki arti yang sangat besar bagimu.</div>',
		'end'
	],
});
