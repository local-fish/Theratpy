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
		name: 'Doctor',
		color: '#886154',
		sprites: {
			normal: 'Normal_Doctor.png',
			happy: 'Happy_Doctor.png',
			sad: 'Sad_Doctor.png',
			angry: 'Angry_Doctor.png',
			nonchalant: 'Nonchalant_Doctor.png',
			squinting: 'Squiting_Doctor.png',
		},
	},
	'p': {
		name: 'Partner',
		color: '#b38fa4',
		sprites: {
			normal: 'Normal_Lady.png',
			sad: 'Sad_Lady.png',
			angry: 'Angry_Lady.png',
			lookingdown: 'Looking_Down_Lady.png',
			tired: 'Tired_Lady.png',
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #e1a8aa with fadeIn',
		'play music main with loop fade 3',
		'play voice system',
		'It’s a quiet evening.',
		'clear',
		'play voice system',
		'The room is dimly lit, soft music playing in the background.',
		'show image rat.png left with fadeIn',
		'show character p normal at left with fadeIn',
		'play voice lady',
		'p Hey... I’ve been thinking a lot lately. I really love what we have, but... sometimes I wonder how strong we really are. A friend told me about this psychologist who helps couples explore how committed they are to each other. Would you come with me?',
		'play voice system',
		'You nod — curious, maybe a little nervous.',
		'play voice system',
		'Your partner smiles in relief and takes your hand.',
		'play voice lady',
		'p Thank you. I think it’ll be good for us.',
		'show scene #e1a8aa with fadeIn',
		'play voice system',
		'The next day, you both sit in a softly lit clinic.',
		'show image rat.png left with fadeIn',
		'show character p normal at left with fadeIn',
		'play voice system',
		'A warm aroma of coffee lingers in the air.',
		'play voice system',
		'The door opens, and a tall rat steps out — calm, well-groomed, with a neutral expression that gives away nothing.',
		'hide character p with fadeOut',
		'hide image rat.png left with fadeOut',
		'show image doctor.png right with fadeIn',
		'show character d normal at right with fadeIn',
		'play voice doctor',
		'd You must be Partner and… ah, welcome. Please, come in.',
		'play voice system',
		'His tone is steady, not warm but not cold either — just centered.',
		'play voice system',
		'He gestures toward two comfortable chairs across from his desk.',
		'play voice system',
		'The Doctor sits across from you, legs crossed, notebook balanced neatly on his knee. His eyes are calm, focused.',
		'play voice doctor',
		'd Today, I’ll ask a few things — not to judge your relationship, but to understand how you experience it. There are no right or wrong answers. Just respond with what feels true for you.',
		'play voice doctor',
		'd Please rate each statement from 1 (strongly disagree) to 7 (strongly agree).',
		'play voice system',
		'Your partner looks at you uncertainly.',
		'play voice system',
		'The Doctor notices, then adds in that same calm, almost detached tone',
		'play voice doctor',
		'd For this part, I’ll need to speak with you alone. It’s easier to be honest when you’re not worrying about what your partner might think.',
		'play voice system',
		'Your partner hesitates, then nods.',
		'hide image doctor.png right with fadeOut',
		'hide character d with fadeOut',
		'show image rat.png left with fadeIn',
		'show character p normal at left with fadeIn',
		'play voice lady',
		'p I understand, I’ll wait outside.',
		'play voice system',
		'They squeeze your hand gently before leaving the room. ',
		'hide character p with fadeOut',
		'hide image rat.png left with fadeOut',
		'show image doctor.png right with fadeIn',
		'show character d normal at right with fadeIn',
		'play voice system',
		'The door clicks shut quietly',
		'play voice system',
		'The Doctor flips his notebook to a fresh page and clicks his pen',
		'play voice doctor',
		'Okay, Let’s begin.',
		'play voice system',
		'You take a deep breath',
		'play voice system',
		'The session begins.',
		'end',
	]
});
