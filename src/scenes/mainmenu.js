class MainMenu extends Phaser.Scene {
    constructor() {
        super("mainMenu");
    }
    create(){
        // this.sound.play('start', {volume: 0.3})
        this.background = this.add.tileSprite(0, 0, 800, 800, 'background').setOrigin(0)
        // this.menuMusic = this.sound.add(('start'), {volume: 0.5})
        // this.menuMusic.play()

        var button = this.add.rectangle(350, 300, 200, 80, 0xffa800).setOrigin(-1);
        var buttonText = this.add.text(280, 340, 'Start Game', {fontFamily: 'Arial',fontSize: 24,color: '#293021' }).setOrigin(-2.5);
        button.setInteractive();
        button.on('pointerup', function(){
            this.scene.start("dungeonCrawler")
        }, this)
    }
}   