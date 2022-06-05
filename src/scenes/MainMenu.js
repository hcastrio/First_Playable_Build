class MainMenu extends Phaser.Scene {
    constructor() {
        super("mainMenuScene");
    }

    preload() {
        // load assets
        this.load.path = "./assets/";

        // load JSON (dialog)
        this.load.json('dialog', 'json/dialog.json');

        // load images
        this.load.image('textbox', 'img/textbox.png');
        this.load.image('robotOne', 'img/robotOne.png');
        this.load.image('robotTwo', 'img/robotTwo.png');
        this.load.image('menu_background', 'img/menu_background.png');

        // load audio
        this.load.audio('transition_sound', 'audio/transition_sound.mp3');
        this.load.audio('ending_sound', 'audio/ending_sound.mp3');


        // load bitmap font
        this.load.bitmapFont('the_font', 'font/font.png', 'font/font.xml');
    }

    create() {

        this.add.tileSprite(0, 0, 840, 600, 'menu_background').setOrigin(0, 0);

        // create input
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        // wait for player input
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("gamePlayScene");
        }
    }
}
