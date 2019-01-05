import 'phaser';
import unitsClass from '../src/units.js'
import menuClass from '../src/menu.js'
import HeroesMenu from './HeroesMenu.js';
import ActionsMenu from './ActionsMenu.js';
import EnemiesMenu from './EnemiesMenu.js';
import Message from './message.js';
import units from '../src/units.js';

// var BootScene = new Phaser.Class({

//     Extends: Phaser.Scene,

//     initialize:

//         function BootScene() {
//             Phaser.Scene.call(this, { key: 'BootScene' });
//         },

//     preload: function () {
//         // load the resources here
//     },

//     create: function () {
//         this.scene.start('WorldScene');
//     }
// });

// var WorldScene = new Phaser.Class({

//     Extends: Phaser.Scene,

//     initialize:

//         function WorldScene() {
//             Phaser.Scene.call(this, { key: 'WorldScene' });
//         },
//     preload: function () {
//         this.load.image('tiles', 'assets/map/main_sheet.png');

//         this.load.tilemapTiledJSON('map', 'assets/map/ybsim_map.json');

//         this.load.spritesheet(
//             'player',
//             'assets/characters.png',
//             { frameWidth: 16, frameHeight: 16 }
//         )

//     },
//     create: function () {
//         let map = this.make.tilemap({ key: 'map' });
//         let tiles = map.addTilesetImage('ybsim_tiles', 'tiles');
//         let grass = map.createStaticLayer(0, tiles, 0, 0);
//         let obstacles = map.createStaticLayer(1, tiles, 0, 0);
//         obstacles.setCollisionByExclusion([-1]);

//         this.player = this.physics.add.sprite(50, 100, 'player', 10);
//         this.physics.world.bounds.width = map.widthInPixels;
//         this.physics.world.bounds.height = map.heightInPixels;
//         this.player.setCollideWorldBounds(true);

//         this.cursors = this.input.keyboard.createCursorKeys();

//         this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
//         this.cameras.main.startFollow(this.player);
//         this.cameras.main.roundPixels = true;

//         //  animation with key 'left', we don't need left and right as we will use one and flip the sprite
//         this.anims.create({
//             key: 'left',
//             frames: this.anims.generateFrameNumbers('player', { frames: [10, 18, 10, 26] }),
//             frameRate: 10,
//             repeat: -1
//         });

//         // animation with key 'right'
//         this.anims.create({
//             key: 'right',
//             frames: this.anims.generateFrameNumbers('player', { frames: [10, 18, 10, 26] }),
//             frameRate: 10,
//             repeat: -1
//         });
//         this.anims.create({
//             key: 'up',
//             frames: this.anims.generateFrameNumbers('player', { frames: [11, 19, 11, 27] }),
//             frameRate: 10,
//             repeat: -1
//         });
//         this.anims.create({
//             key: 'down',
//             frames: this.anims.generateFrameNumbers('player', { frames: [9, 17, 9, 25] }),
//             frameRate: 10,
//             repeat: -1
//         });

//         this.physics.add.collider(this.player, obstacles);

//         this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
//         for (var i = 0; i < 30; i++) {
//             var x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
//             var y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
//             // parameters are x, y, width, height
//             this.spawns.create(x, y, 20, 20);
//         }
//         this.physics.add.overlap(this.player, this.spawns, this.onMeetEnemy, false, this);
//     },
//     update: function (time, delta) {
//         this.player.body.setVelocity(0);

//         // Horizontal movement
//         if (this.cursors.left.isDown) {
//             this.player.body.setVelocityX(-80);
//         }
//         else if (this.cursors.right.isDown) {
//             this.player.body.setVelocityX(80);
//         }

//         // Vertical movement
//         if (this.cursors.up.isDown) {
//             this.player.body.setVelocityY(-80);
//         }
//         else if (this.cursors.down.isDown) {
//             this.player.body.setVelocityY(80);
//         }

//         if (this.cursors.left.isDown) {
//             this.player.anims.play('left', true);
//             this.player.flipX = true;
//         }
//         else if (this.cursors.right.isDown) {
//             this.player.anims.play('right', true);
//             this.player.flipX = false;
//         }
//         else if (this.cursors.up.isDown) {
//             this.player.anims.play('up', true);
//         }
//         else if (this.cursors.down.isDown) {
//             this.player.anims.play('down', true);
//         }
//         else {
//             this.player.anims.stop();
//         }
//     },
//     onMeetEnemy: function(player, zone) {        
//         // we move the zone to some other location
//         zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
//         zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);       
 
//         this.cameras.main.shake(300);

//         // start battle 
//     }
// });

// var config = {
//     type: Phaser.AUTO,
//     parent: 'content',
//     width: 320,
//     height: 240,
//     zoom: 2,
//     pixelArt: true,
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 0 },
//             debug: true
//         }
//     },
//     scene: [
//         BootScene,
//         WorldScene
//     ]
// };
// var game = new Phaser.Game(config);



var BootScene = new Phaser.Class({
 
    Extends: Phaser.Scene,
 
    initialize:
 
    function BootScene ()
    {
        Phaser.Scene.call(this, { key: 'BootScene' });
    },
 
    preload: function ()
    {
        // load resources
        this.load.spritesheet('player', 'assets/characters.png', { frameWidth: 16, frameHeight: 16 });
        this.load.image('kid_player1', 'assets/basketball_kid.png');
        this.load.image('kid_player2', 'assets/basketball_kid.png');
    },
 
    create: function ()
    {
        this.scene.start('BattleScene');
    }
});

let Enemy = new Phaser.Class({
    Extends: unitsClass,
    playerReactions: [
        "dribbles the ball out of bounds",
        "chucks a wild shot",
        "stops and stares at the crowd",
        "trips on an untied shoelace"
        ],

    initialize:
    function Enemy(scene, x, y, texture, frame, type, hp, damage) {
        unitsClass.call(this, scene, x, y, texture, frame, type, hp, damage);

        this.flipX = true;

        this.setScale(2);
    }
});


let PlayerCharacter = new Phaser.Class({
    Extends: unitsClass,
 
    initialize:
    function PlayerCharacter(scene, x, y, texture, frame, type, hp, damage) {
        unitsClass.call(this, scene, x, y, texture, frame, type, hp, damage);
        // flip the image so I don't have to edit it manually
        this.flipX = true;
        
        this.setScale(2);
    }
});

var BattleScene = new Phaser.Class({
 
    Extends: Phaser.Scene,
 
    initialize:
 
    function BattleScene ()
    {
        Phaser.Scene.call(this, { key: 'BattleScene' });
    },
    create: function ()
    {
        // change the background to green
        this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
        
        // player character - coach
        var coach = new PlayerCharacter(this, 250, 30, 'player', 10, 'Coach', 100, 20);        
        this.add.existing(coach);
        
        // player character - mage
        // var mage = new PlayerCharacter(this, 250, 80, 'player', 13, 'Mage', 80, 8);
        // this.add.existing(mage);            
        
        var kid_player1 = new Enemy(this, 50, 30, 'kid_player1', null, 'Billy', 50, 3);
        this.add.existing(kid_player1);
        
        var kid_player2 = new Enemy(this, 50, 80, 'kid_player2', null,'Jerry', 50, 3);
        this.add.existing(kid_player2);
        
        // array with heroes
        this.heroes = [ coach ];
        // array with enemies
        this.enemies = [ kid_player1, kid_player2 ];
        // array with both parties, who will attack
        this.units = this.heroes.concat(this.enemies);
        
        // Run UI Scene at the same time
        this.scene.launch('UIScene');

        this.index = -1;

        this.uiScene = this.scene.get('UIScene');
    },
    nextTurn: function() {
        this.index++;
        // if there are no more units, we start again from the first one
        if(this.index >= this.units.length) {
            this.index = 0;
        }
        if(this.units[this.index]) {
            // if its player hero
            if(this.units[this.index] instanceof PlayerCharacter) {                
                this.events.emit('PlayerSelect', this.index);
            } else { // else if its enemy unit
                // pick random hero
                var r = Math.floor(Math.random() * this.heroes.length);
                // call the enemy's attack function 
                
                //this.units[this.index].attack(this.heroes[r]);
                console.warn(unitsClass);
                var optionIndex = Math.floor(Math.random() * this.units[this.index].playerReactions.length);
                this.uiScene.message.showMessage(`${this.units[this.index].type} ${this.units[this.index].playerReactions[optionIndex]}`)
                //this.uiScene.message.showMessage(`${this.units[this.index].type} attacks ${this.units[r].type} for ${this.units[this.index].damage}`);      
                // add timer for the next turn, so will have smooth gameplay
                this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
            }
        }
    },
    receivePlayerSelection: function(action, target) {
        let character = this.units[this.index];
        if(action == 'encourage') {        
            this.uiScene.message.showMessage(`${character.type} attempts to encourage ${this.enemies[target].type}`);    
            this.units[this.index].encourage(this.enemies[target]);              
        }
        this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });        
    },
});
 
var UIScene = new Phaser.Class({
 
    Extends: Phaser.Scene,
 
    initialize:
 
    function UIScene ()
    {
        Phaser.Scene.call(this, { key: 'UIScene' });
    },
 
    create: function ()
    {    
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(2, 0xffffff);
        this.graphics.fillStyle(0x031f4c, 1);        
        this.graphics.strokeRect(2, 100, 90, 100);
        this.graphics.fillRect(2, 100, 90, 100);
        this.graphics.strokeRect(95, 100, 90, 100);
        this.graphics.fillRect(95, 100, 90, 100);
        this.graphics.strokeRect(188, 100, 130, 100);
        this.graphics.fillRect(188, 100, 130, 100);

        this.menus = this.add.container();

        this.heroesMenu = new HeroesMenu(195, 103, this);           
        this.actionsMenu = new ActionsMenu(100, 103, this);            
        this.enemiesMenu = new EnemiesMenu(8, 103, this);   
        
        this.battleScene = this.scene.get('BattleScene');
        // the currently selected menu 
        this.currentMenu = this.actionsMenu;
        
        // add menus to the container
        this.menus.add(this.heroesMenu);
        this.menus.add(this.actionsMenu);
        this.menus.add(this.enemiesMenu);

        this.remapHeroes();
        this.remapEnemies();

        this.input.keyboard.on('keydown', this.onKeyInput, this);

        this.battleScene.events.on("PlayerSelect", this.onPlayerSelect, this);
        this.events.on("SelectEnemies", this.onSelectEnemies, this);
        this.events.on("Enemy", this.onEnemy, this);

        this.battleScene.nextTurn();

        this.message = new Message(this, this.battleScene.events);
        this.add.existing(this.message);
    },
    remapHeroes: function() {
        var heroes = this.battleScene.heroes;
        this.heroesMenu.remap(heroes);
    },
    remapEnemies: function() {
        var enemies = this.battleScene.enemies;
        this.enemiesMenu.remap(enemies);
    },
    onKeyInput: function(event) {
        if(this.currentMenu) {
            if(event.code === "ArrowUp") {
                this.currentMenu.moveSelectionUp();
            } else if(event.code === "ArrowDown") {
                this.currentMenu.moveSelectionDown();
            } else if(event.code === "ArrowRight" || event.code === "Shift") {
 
            } else if(event.code === "Space" || event.code === "ArrowLeft") {
                this.currentMenu.confirm();
            } 
        }
    },
    onPlayerSelect: function(id) {
        this.heroesMenu.select(id);
        this.actionsMenu.select(0);
        this.currentMenu = this.actionsMenu;
    },
    onSelectEnemies: function() {
        this.currentMenu = this.enemiesMenu;
        this.enemiesMenu.select(0);
    },
    onEnemy: function(index) {
        this.heroesMenu.deselect();
        this.actionsMenu.deselect();
        this.enemiesMenu.deselect();
        this.currentMenu = null;
        this.battleScene.receivePlayerSelection('encourage', index);
    },
});
 
var config = {
    type: Phaser.AUTO,
    parent: 'content',
    width: 320,
    height: 180,
    zoom: 0,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [ BootScene, BattleScene, UIScene ]
};
 
var game = new Phaser.Game(config);