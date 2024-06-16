class Dungeoncrawler extends Phaser.Scene {
    constructor() {
        super("dungeonCrawler");
    }

    init() {
        this.ACCELERATION = 25;
        this.gameOver = false
    }

    create() {

        
        //creates maps,tileset, and layers 
       this.map = this.add.tilemap("Dungeon",16,16,50,50);
       this.tileset = this.map.addTilesetImage("dun_tiles", "tiles");
       this.groundLayer = this.map.createLayer("Ground", this.tileset, 0, 0);
       this.wallsLayer = this.map.createLayer("Walls", this.tileset, 0, 0);
       this.wallsLayer.setScale(2)
       this.groundLayer.setScale(2)
       //creates the cursors for controls
       cursors = this.input.keyboard.createCursorKeys();
       //sets wall collision 
       this.wallsLayer.setCollisionByProperty({
        collides: true

    });
    
    
    //creates the player sprite 
    my.sprite.player = this.physics.add.sprite(game.config.width/3, game.config.height/3, "fauna", "sprites/walk-down/walk-down-1.png").setScale(SCALE)
    //Collision between walls and player
    this.physics.add.collider(my.sprite.player, this.wallsLayer);
    this.input.keyboard.on('keydown-D', () => {
        this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
        this.physics.world.debugGraphic.clear()
    }, this);



   //camera
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels *2, this.map.heightInPixels*2.5);
    this.cameras.main.startFollow(my.sprite.player, true, 0.25, 0.25);
    this.cameras.main.setDeadzone(0, 0);
    this.cameras.main.setZoom(1);
 
    }

    update() {
        //movement and play animtion
        if(cursors.down.isDown) {    
            my.sprite.player.body.setVelocityY(125)
            my.sprite.player.anims.play('rundown', true);
            console.log('left')
           
          
        }else if(cursors.right?.isDown){
            my.sprite.player.body.setVelocityX(125)
            // my.sprite.player.body.setAccelerationX(0);
            // my.sprite.player.body.setAccelerationX(this.ACCELERATION);
             my.sprite.player.anims.play('runright', true);
             my.sprite.player.flipX= false 
            // console.log('right')
            // cursors.right.isDown = false 
        }
        else if(cursors.up?.isDown){
            my.sprite.player.body.setVelocityY(-125)
            //my.sprite.player.body.allowDrag(false);
            // my.sprite.player.body.setAccelerationY(-this.ACCELERATION);
            my.sprite.player.anims.play('runup', true);
            console.log('up')
            // cursors.up.isDown = false
               
        }
        else if(cursors.left?.isDown){
            my.sprite.player.body.setVelocityX(-125)
            // my.sprite.player.body.setAccelerationX(0);
            // my.sprite.player.body.setAccelerationX(-this.ACCELERATION);
            my.sprite.player.anims.play('runleft', true);  
            my.sprite.player.flipX= true
            console.log('left')
            // cursors.left.isDown = false 
        }
        else{
            // my.sprite.player.body.setAccelerationX(0);
            // my.sprite.player.body.setVelocityX(0)
            // my.sprite.player.body.setVelocityX(0)
            my.sprite.player.body.setDrag(130)
            console.log("drag?")
            
            my.sprite.player.anims.stop()
 
        }
        
    }
}