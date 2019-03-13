// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "Your in the woods. <br> You come across an abandoned house",
            choices: [
                {
                    text: "You approach it",
                    nextLevel: "Abandoned_House",
                },

                {
                    text: "You leave it alone",
                    nextLevel: "home",
                },
            ]
        },

        Abandoned_House: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You hear a noise inside",
            choices: [
                {
                    text: "You wait it out",
                    nextLevel: ""
                }, {
                    text: "You investigate",
                    nextLevel: "Investigate"
                }
            ]
        },

        home: {
            message: "You go home. <br> The end",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                }, 
            ]
        
        },
        Investigate: {
            message: "You see a man run towards you",
            choices: [
                {
                    text:"Grab rock near you",
                    nextLevel:"Rock"
                }, {
                    text: "Grab plank of wood",
                    nextLevel: "Wood",
                },
                
            ]
        
        }, 
        Rock: {
            message: "You throw the rock. <br> The man dodges it. You get tackled and killed ",
            choices: [
                {
                    text:"Start Over",
                    nextLevel:"start"
                },
                
            ]        
    

};
