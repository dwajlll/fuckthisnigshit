const { combineStats, makeAuto, addAura, weaponArray } = require('../facilitators.js');
const { base } = require('../constants.js');
const g = require('../gunvals.js');

// Bullets
Class.splitterBullet = {
    PARENT: "bullet",
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [8, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        },
        {
            POSITION: [8, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        },
    ]
}
Class.chipBullet = {
    LABEL: "Chip",
    STROKE_WIDTH: 1.5,
    PARENT: "bullet",
    SHAPE: 0,
    COLOR: "#fce65f",
    FACING_TYPE: ["spin", { speed: 0.25 }],
    PROPS: [
        {
            POSITION: [22.5, 0, 0, 0, 360, 1],
            TYPE: "chipCircles1",
        },
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "chipCircles2",
        },
    ], 
}
Class.gamblerMainBullet = {
    PARENT: "bullet",
    SHAPE: 0,
    FACING_TYPE: ["spin", { speed: 0.25 }],
    PROPS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "gamblerSymbol",
        },
    ], 
}
Class.gamblerMiniBullet = {
    PARENT: "bullet",
    SHAPE: 0,
    FACING_TYPE: ["spin", { speed: 0.425 }],
    PROPS: [
        {
            POSITION: [11.5, 0, 0, 0, 360, 1],
            TYPE: "gamblerSymbol",
        },
    ], 
}
Class.coinMissile = {
    COLOR: "yellow",
    PARENT: "bullet",
    SHAPE: 0,
    INDEPENDENT: true,
    GUNS: [ {
         POSITION: [ 2.5, 10, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {damage: 1.15, health: 1.25, speed: 2.25, range: 0.55}]),
            TYPE: ["gamblerMiniBullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "sustained",
            SHOOT_ON_DEATH: true,
            ALT_FIRE: true,
         }, }, {
         POSITION: [ 2.5, 10, 1, 0, 0, -10, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {damage: 1.15, health: 1.25, speed: 2.25, range: 0.55}]),
            TYPE: ["gamblerMiniBullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "sustained",
            SHOOT_ON_DEATH: true,
            ALT_FIRE: true,
         }, }, {
         POSITION: [ 2.5, 10, 1, 0, 0, 10, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {damage: 1.15, health: 1.25, speed: 2.25, range: 0.55}]),
            TYPE: ["gamblerMiniBullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "sustained",
            SHOOT_ON_DEATH: true,
            ALT_FIRE: true,
         }, }, {
         POSITION: [ 2.5, 10, 1, 0, 0, -20, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {damage: 1.15, health: 1.25, speed: 2.25, range: 0.55}]),
            TYPE: ["gamblerMiniBullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "sustained",
            SHOOT_ON_DEATH: true,
            ALT_FIRE: true,
         }, }, {
         POSITION: [ 2.5, 10, 1, 0, 0, 20, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {damage: 1.15, health: 1.25, speed: 2.25, range: 0.55}]),
            TYPE: ["gamblerMiniBullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "sustained",
            SHOOT_ON_DEATH: true,
            ALT_FIRE: true,
         }, }, {
         POSITION: [ 13, 6, 2, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.missileTrail, g.rocketeerMissileTrail, {speed: 6.5, range: 0.3, reload: 0.1}]),
            TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true, COLOR: "gold"}],
            AUTOFIRE: true,
            STAT_CALCULATOR: "thruster",
         }, }, 
    ],
    PROPS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: ["gamblerSymbol", {COLOR: "yellow"}],
        },
    ], 
}
Class.cardBullet = {
    LABEL: "Card",
    PARENT: "bullet",
    SHAPE: "M 1.4637 -1.0125 V 0.9895 H -1.4647 V -1.0125 Z",
    COLOR: "veryLightGrey",
    PROPS: [
        {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: "cardStar",
        },
        {
            POSITION: [7.5, 0, 0, 0, 360, 1],
            TYPE: "cardText",
        },
    ],
}
Class.clusterBulletTest = {
   PARENT: 'bullet',
   INDEPENDENT: true,
   GUNS: [ {
         POSITION: [ 12, 12, 1, -6, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: ["hexagon", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 12, 12, 1, -6, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: ["hexagon", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 12, 12, 1, -6, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: ["hexagon", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 12, 12, 1, -6, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: ["hexagon", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 12, 12, 1, -6, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: ["hexagon", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 12, 12, 1, -6, 0, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: ["hexagon", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 12, 12, 1, -6, 0, -135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: ["hexagon", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 12, 12, 1, -6, 0, 135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: ["hexagon", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, 
     ],
};
Class.bombBullet = {
    PARENT: "bullet",
    SHAPE: [[2,-0.013],[1.01,0.4],[1.195,0.6],[0.8,1],[-0.005,1.19],[-0.99,0.99],[-0.62,0.6],[-1.2,-0.013],[-0.61,-0.6],[-1.01,-1],[-0.01,-1.2],[0.81,-1.01],[1.2,-0.61],[1,-0.393]],
    TURRETS: weaponArray([
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "radiationSymbol",
            SIZE: 5,
        },
    ], 3)
}
Class.squareAutoMinion = {
    PARENT: "minion",
    SHAPE: 4,
    FACING_TYPE: ["spin", { speed: 0.04 }],
    TURRETS: weaponArray([
        {
            POSITION: [9, 0, 0, 0, 360, 0],
            TYPE: "autoTankGun",
        },
    ], 4)
}
Class.mgs = {
   PARENT: 'bullet',
   LABEL: 'Mega Swarmer Bullet',
   TYPE: 'bullet',
   SHAPE: 12,
   DAMAGE_CLASS: 2,
   DANGER: 5,
   MOTION_TYPE: 'motor',
   FACING_TYPE: 'toTarget',
   SIZE: 12,
   MAX_CHILDREN: 0,
   DAMAGE_EFFECTS: false,
   FACING_TYPE: ["spin", { speed: -0.05 }],
   GUNS: weaponArray([
         {
         POSITION: [ 18, 7, -2, -2, -2.5, 0, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
            TYPE: "swarm",
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 18, 7, -2, -2, 2.5, 0, 0.35, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
            TYPE: "swarm",
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 18, 5, -2, 1, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
            TYPE: "swarm",
            AUTOFIRE: true,
         }, }, 
     ], 3, 0.5),
};
Class.laserBeam = {
    PARENT: "bullet",
    LABEL: "Laser Beam",
    SHAPE: -1,
}
Class.miniNuke = {
    PARENT: "bullet",
    LABEL: "Nuke",
    SHAPE: "M -1.5057 -0.6747 L -1.5057 -0.7169 L -1.166 -0.7426 L -0.9969 -0.7426 L -0.9969 -0.6883 L -0.6951 -0.6883 L -0.5086 -0.5465 L -0.1119 -0.6958 L 0.3084 -0.7396 L 0.3637 -0.7396 L 0.8504 -0.6702 L 1.1696 -0.5465 L 1.1997 -0.4831 L 1.2226 -0.4831 L 1.2455 -0.4924 L 1.4836 -0.2819 L 1.5602 0.01 L 1.4733 0.2999 L 1.2666 0.4644 L 1.2434 0.4463 L 1.1881 0.4463 L 1.1907 0.5096 L 0.8525 0.7118 L 0.3563 0.7631 L -0.1651 0.6997 L -0.5223 0.5609 L -0.6898 0.6937 L -0.9806 0.6937 L -0.9806 0.751 L -1.1481 0.7548 L -1.4894 0.7118 L -1.4894 0.6575 L -1.1544 0.6575 L -1.1544 0.2773 L -1.5621 0.2773 L -1.5653 -0.293 L -1.1575 -0.299 L -1.1512 -0.643 Z M -0.8321 0.22 L -1.0218 0.22 L -1.0218 -0.1995 L -0.8385 -0.1995 Z",
    INDEPENDENT: true,
    GUNS: [ {
          POSITION: [ 2, 5, 1, 0, 0, 0, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.shrapnelNukeExplosion]),
             ALT_FIRE: true,
             TYPE: ["specialMiniNuke", {PERSISTS_AFTER_DEATH: true}],
             STAT_CALCULATOR: "sustained",
             SHOOT_ON_DEATH: true,
          }, }, 
      ],
};
Class.megaMiniNuke = {
    PARENT: "bullet",
    LABEL: "Nuke",
    SHAPE: "M -1.5057 -0.6747 L -1.5057 -0.7169 L -1.166 -0.7426 L -0.9969 -0.7426 L -0.9969 -0.6883 L -0.6951 -0.6883 L -0.5086 -0.5465 L -0.1119 -0.6958 L 0.3084 -0.7396 L 0.3637 -0.7396 L 0.8504 -0.6702 L 1.1696 -0.5465 L 1.1997 -0.4831 L 1.2226 -0.4831 L 1.2455 -0.4924 L 1.4836 -0.2819 L 1.5602 0.01 L 1.4733 0.2999 L 1.2666 0.4644 L 1.2434 0.4463 L 1.1881 0.4463 L 1.1907 0.5096 L 0.8525 0.7118 L 0.3563 0.7631 L -0.1651 0.6997 L -0.5223 0.5609 L -0.6898 0.6937 L -0.9806 0.6937 L -0.9806 0.751 L -1.1481 0.7548 L -1.4894 0.7118 L -1.4894 0.6575 L -1.1544 0.6575 L -1.1544 0.2773 L -1.5621 0.2773 L -1.5653 -0.293 L -1.1575 -0.299 L -1.1512 -0.643 Z M -0.8321 0.22 L -1.0218 0.22 L -1.0218 -0.1995 L -0.8385 -0.1995 Z",
    INDEPENDENT: true,
    GUNS: [ {
          POSITION: [ 2, 5, 1, 0, 0, 0, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.oppenheimer]),
             ALT_FIRE: true,
             TYPE: ["specialMiniNuke", {PERSISTS_AFTER_DEATH: true}],
             STAT_CALCULATOR: "sustained",
             SHOOT_ON_DEATH: true,
          }, }, 
      ],
};
Class.infernoBullet = {
    PARENT: "bullet",
    LABEL: "Flare",
    SHAPE: 4,
    MOTION_TYPE: "flamethrower",
}
Class.explodingFlakBullet = {
   PARENT: 'bullet',
   SHAPE: "M -1.82 0 L -0.65 -1.17 L 1.69 0 L -0.65 1.17 L -1.82 0",
   INDEPENDENT: true,
   GUNS: [ {
         POSITION: [ 2, 5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.c4, g.half_damage, g.half_damage, g.half_size, g.no_speed]),
            SHOOT_ON_DEATH: true,
            TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true, MOTION_TYPE: "flakGun"}],
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.explodingShell = {
   PARENT: 'bullet',
   SHAPE: "M -1.82 0 L -0.65 -1.17 L 1.69 0 L -0.65 1.17 L -1.82 0",
   INDEPENDENT: true,
   GUNS: [ {
         POSITION: [ 2, 5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.c4]),
            SHOOT_ON_DEATH: true,
            TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true, MOTION_TYPE: "explode"}],
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.triangleBullet = {
    PARENT: "bullet",
    LABEL: "Triangle",
    SHAPE: 3,
    COLOR: "#333333ff",
    FACING_TYPE: ["spin", {speed: 0.9}],
}
Class.ttxShoe = {
   PARENT: "miniNuke",
   LABEL: "Triple Stinger",
   COLOR: "#333333ff",
   SHAPE: "M -0.0027 -1.6063 L -0.695 -0.4071 H 0.6897 Z M 0.6897 -0.4071 L -0.0027 0.7921 H 1.382 Z M -0.0027 0.7921 L -0.695 -0.4071 L -1.3874 0.7921 Z",
   FACING_TYPE: ["spin", {speed: 0.75}],
   GUNS: [ {
         POSITION: [ 2, 5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.c4]),
            TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true, MOTION_TYPE: "explode", COLOR: "#333333ff"}],
            STAT_CALCULATOR: "sustained",
            BORDERLESS: true,
            DRAW_FILL: false,
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 2, 5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.faster, g.faster, g.half_range, {speed: 4}]),
            TYPE: ["triangleBullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "sustained",
            BORDERLESS: true,
            DRAW_FILL: false,
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 2, 5, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.faster, g.faster, g.half_range, {speed: 4}]),
            TYPE: ["triangleBullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "sustained",
            BORDERLESS: true,
            DRAW_FILL: false,
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 2, 5, 1, 0, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.faster, g.faster, g.half_range, {speed: 4}]),
            TYPE: ["triangleBullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "sustained",
            BORDERLESS: true,
            DRAW_FILL: false,
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 2, 5, 1, 0, 0, 135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.faster, g.faster, g.half_range, {speed: 4}]),
            TYPE: ["triangleBullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "sustained",
            BORDERLESS: true,
            DRAW_FILL: false,
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 2, 5, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.faster, g.faster, g.half_range, {speed: 4}]),
            TYPE: ["triangleBullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "sustained",
            BORDERLESS: true,
            DRAW_FILL: false,
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 2, 5, 1, 0, 0, 225, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.faster, g.faster, g.half_range, {speed: 4}]),
            TYPE: ["triangleBullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "sustained",
            BORDERLESS: true,
            DRAW_FILL: false,
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 2, 5, 1, 0, 0, 270, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.faster, g.faster, g.half_range, {speed: 4}]),
            TYPE: ["triangleBullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "sustained",
            BORDERLESS: true,
            DRAW_FILL: false,
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 2, 5, 1, 0, 0, 315, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.faster, g.faster, g.half_range, {speed: 4}]),
            TYPE: ["triangleBullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "sustained",
            BORDERLESS: true,
            DRAW_FILL: false,
            SHOOT_ON_DEATH: true,
         }, }, 
     ],
};
Class.ttxBigShoe = {
    PARENT: "ttxShoe",
    LABEL: "Triple-Triple Stinger",
    SHAPE: "M -0.007 -2.0697 L -0.5101 -1.1988 H 0.4955 Z M 0.4955 -1.1988 L -0.007 -0.3279 H 0.9986 Z M 0.9986 -0.3279 L 0.4955 0.5436 H 1.5017 Z M 1.5017 0.5436 L 0.9986 1.4145 H 2.0041 Z M 0.9986 1.4145 L 0.4955 0.5436 L -0.007 1.4145 Z m -1.0056 0 L -0.5101 0.5436 L -1.0132 1.4145 Z m -1.0062 0 L -1.5156 0.5436 L -2.0188 1.4145 Z M -1.5156 0.5436 H -0.5101 L -1.0132 -0.3279 Z M -1.0132 -0.3279 H -0.007 L -0.5101 -1.1988 Z",
    FACING_TYPE: ["spin", {speed: 0.9}],
    GUNS: weaponArray([
          {
          POSITION: [ 2, 5, 1, 0, 0, 0, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.destroyer, g.faster, g.faster, g.half_half_half_range, {size: 3.5, speed: 0.5}]),
             TYPE: ["ttxShoe", {PERSISTS_AFTER_DEATH: true}],
             STAT_CALCULATOR: "sustained",
             BORDERLESS: true,
             DRAW_FILL: false,
             SHOOT_ON_DEATH: true,
          }, }, 
      ], 3)
};
Class.iceBullet = {
    PARENT: "bullet",
    ON_DEALT_DAMAGE: (me, them) => {
        ice(them, 1545, 13453);
    }
}
Class.ttxBiggestShoe = {
    PARENT: "ttxBigShoe",
    LABEL: "Triple-Triple-Triple Stinger",
    SHAPE: "m 0.0001 -1.7031 l -0.2063 0.3571 h 0.4123 z m 0.206 0.3571 l -0.206 0.3571 h 0.4123 z m 0.2063 0.3571 l -0.2063 0.3573 h 0.4125 z m 0.2063 0.3573 l -0.2063 0.3571 h 0.4123 z m 0.206 0.3571 l -0.2063 0.3571 h 0.4123 z m 0.206 0.3571 l -0.206 0.3571 h 0.4123 z M 1.2369 0.4395 L 1.0306 0.7969 h 0.4125 z M 1.4432 0.7969 L 1.2369 1.1539 h 0.4123 z M 1.2369 1.1539 L 1.0306 0.7969 L 0.8246 1.1539 Z m -0.4123 0 L 0.6184 0.7969 L 0.4121 1.1539 Z m -0.4125 0 L 0.2061 0.7969 L -0.0002 1.1539 Z m -0.4123 0 L -0.2061 0.7969 L -0.4124 1.1539 Z m -0.4123 0 L -0.6187 0.7969 L -0.8247 1.1539 Z m -0.4123 0 L -1.0309 0.7969 L -1.2372 1.1539 Z m -0.4125 0 L -1.4432 0.7969 L -1.6495 1.1539 Z M -1.4432 0.7969 H -1.0309 L -1.2372 0.4395 Z M -1.2372 0.4395 H -0.8247 L -1.0309 0.0825 Z M -1.0309 0.0825 H -0.6187 L -0.8247 -0.2746 Z M -0.8247 -0.2746 H -0.4124 L -0.6184 -0.6316 Z M -0.6184 -0.6316 H -0.2061 L -0.4124 -0.989 Z M -0.4124 -0.989 H 0.0001 L -0.2061 -1.346 Z m 0.2063 0.3573 l -0.2063 0.3571 h 0.4125 z m 0.2063 0.3571 h 0.4123 L 0.2061 -0.6316 Z M -0.6187 0.0825 L -0.8247 0.4395 H -0.4124 Z M -0.4124 0.4395 L -0.6187 0.7969 H -0.2061 Z M 0.2061 0.7969 h 0.4123 L 0.4121 0.4395 Z M 0.4121 0.4395 h 0.4125 L 0.6184 0.0825 Z",
    FACING_TYPE: ["spin", {speed: 0.11}],
    GUNS: weaponArray([
          {
          POSITION: [ 2, 5, 1, 0, 0, 0, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.annihilator, g.faster, g.faster, g.half_half_half_range, {size: 2.5, speed: 0.5}]),
             TYPE: ["ttxBigShoe", {PERSISTS_AFTER_DEATH: true}],
             STAT_CALCULATOR: "sustained",
             BORDERLESS: true,
             DRAW_FILL: false,
             SHOOT_ON_DEATH: true,
          }, }, 
      ], 3)
};
Class.plasmaBullet = {
   PARENT: 'bullet',
   LABEL: "Rocket",
   SHAPE: "M -1.82 0 L -0.65 -1.17 L 1.69 0 L -0.65 1.17 L -1.82 0",
   INDEPENDENT: true,
   GUNS: [ {
         POSITION: [ 2, 5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.c4, g.half_damage, g.less_damage, g.less_power, g.smaller, g.no_recoil]),
            SHOOT_ON_DEATH: true,
            TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true, MOTION_TYPE: "explode"}],
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.icbmShoe = {
   PARENT: 'miniNuke',
   LABEL: "Nuke",
   INDEPENDENT: true,
   SHAPE: "M 2.3319 -0.0413 L 2.3319 0.0417 L 1.8869 0.0417 L 1.7575 0.1164 L 0.9059 0.2502 L 0.9059 0.2778 L -1.4989 0.2778 L -1.5099 0.3709 L -1.5265 0.3709 L -1.5265 0.3832 L -1.6459 0.3832 L -1.7653 0.4301 L -1.9066 0.4301 L -1.9066 0.3621 L -2.0958 0.4701 L -2.1722 0.4911 L -2.3249 0.449 L -2.3249 0.2906 L -2.2288 0.235 L -2.2288 0.1879 L -2.0941 0.1045 L -2.0322 0.1045 L -2.0322 -0.104 L -2.0927 -0.104 L -2.2284 -0.1861 L -2.2288 -0.2348 L -2.3315 -0.2879 L -2.3258 -0.4477 L -2.1713 -0.4907 L -2.0949 -0.4701 L -1.9071 -0.3617 L -1.9071 -0.4297 L -1.7618 -0.4297 L -1.638 -0.3827 L -1.5265 -0.3814 L -1.5265 -0.3709 L -1.5101 -0.3709 L -1.4984 -0.2783 L 0.9057 -0.2783 L 0.9057 -0.25 L 1.757 -0.1161 L 1.8849 -0.0422 L 1.9953 -0.0422 Z",
   GUNS: [ {
         POSITION: [ 2, 4.5, 1, 0, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.no_speed, g.half_size, g.even_smaller]),
            TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true, MOTION_TYPE: "crockett", LABEL: "Explosion"}],
            STAT_CALCULATOR: "sustained",
            ALT_FIRE: true,
            BORDERLESS: true,
            DRAW_FILL: false,
            SHOOT_ON_DEATH: true,
         }, }, 
     ],
};
Class.explodingShellHalf = {
   PARENT: 'bullet',
   SHAPE: "M -1.82 0 L -0.65 -1.17 L 1.69 0 L -0.65 1.17 L -1.82 0",
   INDEPENDENT: true,
   GUNS: [ {
         POSITION: [ 2, 5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.c4, g.half_power]),
            SHOOT_ON_DEATH: true,
            TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true, MOTION_TYPE: "explode"}],
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.specialMiniNuke = {
    PARENT: "bullet",
    LABEL: "Explosion",
    MOTION_TYPE: "crockett",
}
Class.laserBeamBig = {
    PARENT: "bullet",
    BODY: {
        SIZE: 15, 
    },
    LABEL: "Laser Beam",
    SHAPE: [[-1.097,-0.095],[-0.007,-0.106],[1.1,-0.1],[1.1,0.11],[-0.01,0.11],[-1.1,0.09]],
}
Class.flamegunBullet = {
    PARENT: "bullet",
    COLOR: "#361ad6",
}
Class.penBullet = {
    PARENT: "bullet",
    BODY: {
        RANGE: 99999999999999999999999999999999999,
    },
    COLOR: "#000000",
}
Class.megaswarmer = {
   PARENT: 'bullet',
   LABEL: 'megaswarmer',
   TYPE: 'bullet',
   MOTION_TYPE: 'grow',
   BODY: {
      SPEED: base.SPEED * 2,
      HEALTH: base.HEALTH * 10,
      DAMAGE: base.DAMAGE * 3.5,
      PENETRATION: base.PENETRATION * 3,
      DENSITY: base.DENSITY * 6.5,
      PUSHABLE: 0.3,
   },
   GUNS: [ {
         POSITION: [ 18, 8, -1.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, -135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, 135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, -112.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, -67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, -22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, 22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, 67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, 112.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, 157.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, -157.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 18, 8, -1.5, 0, 0, 115, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "swarm",
         }, }, 
     ],
};
Class.superSplitterBullet = {
    PARENT: "bullet",
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [8, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["splitterBullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        },
        {
            POSITION: [8, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["splitterBullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        },
    ]
}
Class.bulletAura = addAura(0.75, 0.85, 0.2);
Class.auraBullet = {
    PARENT: "bullet",
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 2],
            TYPE: 'bulletAura',
        },
    ],
}
Class.realCrowbarMinion = {
   PARENT: "minion",
   LABEL: "Real Crowbar Minion",
   FACING_TYPE: "smoothToTarget",
   DRAW_HEALTH: true,
   CLEAR_ON_MASTER_UPGRADE: true,
   GIVE_KILL_MESSAGE: false,
   CONTROLLERS: [
       "nearestDifferentMaster",
       "mapAltToFire",
       "minion",
       "canRepel",
       "hangOutNearMaster",
   ],
   GUNS: [
        {
            POSITION: [37, 6.5, 1, 0, 0, 0, 0],
        }, {
            POSITION: [5, 8.5, -1.5, 8, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            POSITION: [6, 38, 0, 0, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 28, 0, 0, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 18, 0, 0, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        },
    ],
},
Class.turretedBullet = makeAuto('bullet', "Auto-Bullet", {type: "bulletAutoTurret", size: 14, color: "veryLightGrey", angle: 0});
Class.machinedBullet = makeAuto('bullet', "Machine-Bullet", {type: "bulletAutoMachine", size: 14, color: "veryLightGrey", angle: 0});
Class.speedBullet = {
    PARENT: "bullet",
    MOTION_TYPE: "accel",
}
Class.nail = {
    PARENT: "bullet",
    COLOR: "gray",
    SHAPE: "M -3 1.8 C -3.6 1.2 -3.6 -1.2 -3 -1.8 C -2.4 -1.2 -2.4 -0.6 -2.4 -0.6 L 2.4 -0.6 C 3 -0.6 3.6 0 4.2 0 C 3.6 0 3 0.6 2.4 0.6 L 2.4 0.6 L -2.4 0.6 C -2.4 0.6 -2.4 1.2 -3 1.8",
}
Class.stapler = {
   PARENT: 'bullet',
   LABEL: 'Stapler',
   COLOR: 19,
   SHAPE: "M 2.2057 -0.6596 C 1.9632 -1.0186 1.8856 -1.3484 1.1192 -1.3676 C 0.2559 -1.2028 -0.6364 -0.9699 -1.5969 -0.9408 C -2.0334 -0.7469 -2.4891 -0.5819 -2.2177 0.039 C -2.0785 0.2167 -1.8915 -0.2328 -1.8209 0.5562 C -0.6784 0.7566 1.2473 1.2278 1.5655 1.2571 C 2.0974 1.3838 2.6376 0.7398 1.8128 0.6446 C 1.2563 0.5609 0.6997 0.4772 0.1432 0.3935 C -0.0679 0.3659 -0.2378 0.242 -0.3066 0.164 C -0.4489 0.1381 -0.5912 0.112 -0.7335 0.0859 C -0.7473 0.0569 -0.761 0.0279 -0.7748 -0.0013 C -0.2699 -0.1481 0.2442 -0.1436 1.4284 -0.2308 C 1.7589 -0.2721 2.1536 -0.3593 2.1949 -0.6576",
   GUNS: [ {
         POSITION: [ 4, 10, 1, -3, -6, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nooil]),
            TYPE: "nailah",
            AUTOFIRE: true,
         }, }, 
     ],
};
Class.pillBullet = {
     PARENT: "bullet",
     LABEL: "Pill",
     COLOR: 14,
     SIZE: 10,
     FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }],
     SHAPE: "M -2 -1 A 1 1 0 0 0 -2 1 L 2 1 A 1 1 0 0 0 2 -1 L -2 -1",
     TURRETS: [
         {
             POSITION: [13, 0, 0, 0, 360, 1],
             TYPE: ['pill', { FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }] }]
         },
         {
             POSITION: [13, 0, 0, 0, 360, 1],
             TYPE: ['pill1', { FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }] }]
         },
     ],
     GUNS: [ {
           POSITION: [ 0, 0, 1, 0, 0, 0, 0, ],
           }, 
       ],
};
Class.nailah = {
     PARENT: "bullet",
     LABEL: "Fuck me in vagina pls uwu",
     COLOR: "gray",
     SHAPE: "M -0.9 -0.9 L -0.9 0.9 L 0.6 0.9 L 0.6 0.6 L -0.6 0.6 L -0.6 -0.6 L 0.6 -0.6 L 0.6 -0.9 L -0.9 -0.9",
}
Class.thedemonBullet = {
   PARENT: 'bullet',
   COLOR: "rainbow",
   INDEPENDENT: true,
   SHAPE: "M 0.0001 -1 A 1.0001 1.0001 0 0 0 -1 0.0001 A 1.0001 1.0001 0 0 0 0.0001 1.0002 A 1.0001 1.0001 0 0 0 1.0002 0.0001 A 1.0001 1.0001 0 0 0 0.0001 -1 Z m 0 0.3654 A 0.6347 0.6347 0 0 1 0.6348 0.0001 A 0.6347 0.6347 0 0 1 0.0001 0.6348 A 0.6347 0.6347 0 0 1 -0.6346 0.0001 A 0.6347 0.6347 0 0 1 0.0001 -0.6346 Z",
   GUNS: [ {
         POSITION: [ 0, 5, 1, 9, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.missileTrail, {reload: 0.6, damage: 0, recoil: 8}]),
            TYPE: "redBulle",
            STAT_CALCULATOR: "thruster",
            AUTOFIRE: true,
         }, }, 
     ],
};
Class.heliLandmine = {
   PARENT: "bullet",
   COLOR: "#575e4e",
   SHAPE: 12,
   INDEPENDENT: true,
   INVISIBLE: [0.06, 0.01],
   TURRETS: [
       {
           POSITION: [9, 0, 0, 0, 360, 1],
           TYPE: ["landmiDeco", {color: "evening"}],
       },
   ],
   GUNS: [ {
         POSITION: [ 65, 65, 1, -50, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.staticExplode1]),
            TYPE: ["sbe", { PERSISTS_AFTER_DEATH: true, size: 30 }],
            SHOOT_ON_DEATH: true,
            BORDERLESS: true,
            DRAW_FILL: false,
         }, }, 
     ],
};
Class.sbe = {
   PARENT: "bullet",
   SIZE: 25,
   MOTION_TYPE: 'fastgrow',
   SHAPE: "M -1.35 1.35 C -0.81 0.81 -0.81 -0.81 -1.35 -1.35 C -0.81 -0.81 0.81 -0.81 1.35 -1.35 C 0.81 -0.81 0.81 0.81 1.35 1.35 C 0.81 0.81 -0.81 0.81 -1.35 1.35",
   BODY: {
      RANGE: 30,
   },
   COLOR: "yellow",
}
Class.redBulle = {
   PARENT: "bullet",
   COLOR: "evening",
}
Class.stopSignBullet = {
   PARENT: 'swarm',
   COLOR: "white",
   SHAPE: "M -1.0008 0.3336 L -1.0008 -0.3336 L -0.3336 -1.0008 L 0.3336 -1.0008 L 1.0008 -0.3336 L 1.0008 0.3336 L 0.3336 1.0008 L -0.3336 1.0008 L -1.0008 0.3336",
   BORDERLESS: true,
   TURRETS: [
       {
           POSITION: [18.5, 0, 0, 0, 360, 1],
           TYPE: ["stopsignDeco", { COLOR: "red", BORDERLESS: true}]
       },
       {
           POSITION: [5, 0, 0, 0, 360, 1],
           TYPE: ["stopsignDeco2", { COLOR: "white", BORDERLESS: true}]
       },
   ],
   GUNS: [ {
         POSITION: [ 0, 0, 0.6, -2, -4.4, 0, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.op, g.fake, {size: 1.8}]),
            TYPE: "stopSignBullet",
         }, }, {
         POSITION: [ 0, 0, 0.6, -2, 4.4, 0, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.op, g.fake, {size: 1.8}]),
            TYPE: "stopSignBullet",
         }, }, 
     ],
};
Class.growBullet = {
    PARENT: "bullet",
    MOTION_TYPE: "grow",
}
Class.slowGrowBullet = {
    PARENT: "bullet",
    MOTION_TYPE: "slowgrow",
}
Class.slowestGrowBullet = {
    PARENT: "bullet",
    MOTION_TYPE: "slowestgrow",
}
Class.fireBullet = {
    PARENT: "bullet",
    MOTION_TYPE: "slowgrow",
    COLOR: "#ff4f00",
    BODY: {
        RANGE: 30,
    },
    SHAPE: 4,
}
Class.lowRangeBullet = {
    PARENT: "bullet",
    BODY: {
        RANGE: 10,
    },
}
Class.lowRangeBullet1 = {
    PARENT: "bullet",
    COLOR: "#ff9900",
    GLOW: {
        RADIUS: 0.6,
        COLOR: "#ff9900",
        ALPHA: 0.7,
        RECURSION: 5,
    },
    BODY: {
        RANGE: 5,
    },
}
Class.droneheli = {
   PARENT: 'drone',
   LABEL: 'Helicopter Drone',
   SHAPE: 0,
   HAS_NO_RECOIL: true,
   GUNS: [ {
         POSITION: [ 24, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.lowPower]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.midGrowBullet = {
    PARENT: "bullet",
    MOTION_TYPE: "midgrow",
}
Class.fastGrowBullet = {
    PARENT: "bullet",
    MOTION_TYPE: "fastgrow",
}
Class.shrapnelBullet = {
   PARENT: 'bullet',
   INDEPENDENT: true,
   SHAPE: "M -2.1248 -0.1988 L -2.3976 -0.826 C -2.3872 -0.8184 -2.3004 -0.8972 -2.2884 -1.0284 C -1.8908 -1.0596 -1.5152 -1.0432 -1.2712 -1.0284 L -1.1084 -0.746 C -0.7892 -0.834 -0.4148 -0.9352 0.0288 -1.0268 C 0.1244 -1.0328 0.2493 -1.0652 0.3596 -1.0844 C 0.5972 -1.0876 0.9756 -1.0856 1.2148 -1.0628 C 1.8096 -1.0388 2.3268 -0.522 2.3632 -0.0332 C 2.2784 0.4108 1.9256 1.0528 0.7044 1.0276 C 0.4992 1.0556 -0.3612 0.918 -0.9512 0.7404 L -1.2016 0.7648 L -1.266 0.8776 L -2.278 0.9052 L -2.366 0.6724 L -2.4036 0.6692 C -2.3133 0.4835 -2.2231 0.2977 -2.1328 0.112 L -2.1252 -0.1976",
   GUNS: [ {
         POSITION: [ 11, 11, 1, -5, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.shrapnelBulletGunval]),
            TYPE: ["midGrowBullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, 
     ],
};
Class.shrapnelBulletHeli = {
   PARENT: 'bullet',
   INDEPENDENT: true,
   SHAPE: "M -2.1248 -0.1988 L -2.3976 -0.826 C -2.3872 -0.8184 -2.3004 -0.8972 -2.2884 -1.0284 C -1.8908 -1.0596 -1.5152 -1.0432 -1.2712 -1.0284 L -1.1084 -0.746 C -0.7892 -0.834 -0.4148 -0.9352 0.0288 -1.0268 C 0.1244 -1.0328 0.2493 -1.0652 0.3596 -1.0844 C 0.5972 -1.0876 0.9756 -1.0856 1.2148 -1.0628 C 1.8096 -1.0388 2.3268 -0.522 2.3632 -0.0332 C 2.2784 0.4108 1.9256 1.0528 0.7044 1.0276 C 0.4992 1.0556 -0.3612 0.918 -0.9512 0.7404 L -1.2016 0.7648 L -1.266 0.8776 L -2.278 0.9052 L -2.366 0.6724 L -2.4036 0.6692 C -2.3133 0.4835 -2.2231 0.2977 -2.1328 0.112 L -2.1252 -0.1976",
   GUNS: [ {
         POSITION: [ 40, 40, 1, -19, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.shrapnelBulletGunvalHeli]),
            TYPE: ["lowRangeBullet1", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            BORDERLESS: true,
            DRAW_FILL: false,
         }, }, 
     ],
};
Class.machinetrapnnelbullet = {
   PARENT: 'bullet',
   INDEPENDENT: true,
   SHAPE: "M -3.052 -1.58 L -1.9 -1.58 L -1.036 -1.004 L 1.556 -1.004 C 2.708 -0.716 2.708 0.724 1.556 1.012 L -1.036 1.012 L -1.9 1.588 L -3.052 1.588 L -2.764 1.3 L -2.188 1.012 L -3.052 1.012 L -2.188 0.436 L -2.188 -0.428 L -3.052 -1.004 L -2.188 -1.004 L -2.764 -1.292 L -3.052 -1.58",
   GUNS: [ {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineMinion, g.destroyer]),
            TYPE: ["machineTrapperMinion", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineMinion, g.destroyer]),
            TYPE: ["machineTrapperMinion", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineMinion, g.destroyer]),
            TYPE: ["machineTrapperMinion", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, 
     ],
};
Class.flare = {
    PARENT: "growBullet",
    LABEL: "Flare",
    SHAPE: 4,
}
Class.developerBullet = {
    PARENT: "bullet",
    SHAPE: [[-1, -1], [1, -1], [2, 0], [1, 1], [-1, 1]],
}
Class.waterdrop = {
    PARENT: "bullet",
    COLOR: "cyan",
    SHAPE: "M 1 1 A 1 1 0 0 0 1 -1 C 0 -1 -1 0 -2 0 C -1 0 0 1 1 1",
}
Class.cursor = {
    PARENT: "drone",
    COLOR: "white",
    FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }],
    SHAPE: "M -0.1 0.35 L -0.1 -0.4 L 0.4 0.1 C 0.15 0.1 0.15 0.1 -0.1 0.35",
}
Class.cursor1 = {
    PARENT: "drone",
    COLOR: "white",
    SIZE: 30,
    FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }],
    SHAPE: "M -0.1 0.35 L -0.1 -0.4 L 0.4 0.1 C 0.15 0.1 0.15 0.1 -0.1 0.35",
}
Class.piss = {
    PARENT: "bullet",
    COLOR: 3,
    SHAPE: "M 1 1 A 1 1 0 0 0 1 -1 C 0 -1 -1 0 -2 0 C -1 0 0 1 1 1",
}
Class.casing = {
    PARENT: "bullet",
    LABEL: "Shell",
    TYPE: "swarm",
}

// Missiles
Class.missile = {
    PARENT: "bullet",
    LABEL: "Missile",
    INDEPENDENT: true,
    BODY: { RANGE: 120 },
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 130, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
                WAIT_TO_CYCLE: true,
            }
        },
        {
            POSITION: [14, 6, 1, 0, 2, 230, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
                WAIT_TO_CYCLE: true,
            }
        }
    ]
}
Class.halloweenMissile = {
   PARENT: 'missile',
   LABEL: 'Evil Missile',
   SHAPE: 6,
   COLOR: "#ff9000",
   TURRETS: [
        {
            POSITION: [22.5, 0, 0, 0, 360, 0],
            TYPE: "missileProp",
        },
   ],
   PROPS: [
        ...weaponArray({
            POSITION: [10.5, -4.5, 0, 30, 360, 1],
            TYPE: "pumpkinLine",
        }, 6),
        {
            POSITION: [8.5, 0, 0, 0, 360, 2],
            TYPE: "pumpkinCircle",
        },
        {
            POSITION: [6, 0, 0, 0, 360, 3],
            TYPE: "pumpkinStar",
        },
   ],
   GUNS: [ {
         POSITION: [ 14, 6, 1, 0, -2, 130, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
            COLOR: "#4d4337",
         }, }, {
         POSITION: [ 14, 6, 1, 0, 2, -130, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
            COLOR: "#4d4337",
         }, }, {
         POSITION: [ 14, 6, 0.3, 0, -2, 130, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.fake, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
            COLOR: "#7c664f",
         }, }, {
         POSITION: [ 14, 6, 0.3, 0, 2, -130, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.fake, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
            COLOR: "#7c664f",
         }, }, 
     ],
};
Class.scorchermissile = {
   PARENT: 'missile',
   GUNS: [ {
         POSITION: [ 14, 6, 1, 0, 2, -140, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 14, 6, 1, 0, -2, 140, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 15.5, 8, 1.5, 0, 0, 180, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.missileTrail, g.rocketeerMissileTrail]),
            TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "thruster",
         }, }, 
     ],
};
Class.bowlermissile = {
   PARENT: 'missile',
   GUNS: [ {
         POSITION: [ 14, 6, 1, 0, 2, -130, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 14, 6, 1, 0, -2, 130, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 15, 6, 1, 0, 2, -145, 0.45, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 15, 6, 1, 0, -2, 145, 0.45, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, 
     ],
};
Class.torpedomissile = {
   PARENT: 'missile',
   GUNS: [ {
         POSITION: [ 14, 6, 1, 0, 2, -130, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 14, 6, 1, 0, -2, 130, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 4, 10, 1.3, 9, 0, 180, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.trap, g.lowPower, {speed: 0.9, maxSpeed: 0.9}]),
            TYPE: ["trap", {PERSISTS_AFTER_DEATH: true}],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, 
     ],
};
Class.bazookamissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, -2, 130, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.more_health, g.less_reload, {speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
                WAIT_TO_CYCLE: true,
            }
        },
        {
            POSITION: [14, 8, 1, 0, 2, 230, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.more_health, g.less_reload, {speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
                WAIT_TO_CYCLE: true,
            }
        }
    ]
}
Class.ladlemissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 130, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
                WAIT_TO_CYCLE: true,
            }
        },
        {
            POSITION: [14, 6, 1, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {recoil: 0, speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
                WAIT_TO_CYCLE: true,
            }
        },
        {
            POSITION: [14, 6, 1, 0, 2, 230, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
                WAIT_TO_CYCLE: true,
            }
        }
    ]
}
Class.autoskimMissile = {
    PARENT: "missile",
    TURRETS: [
         {
             POSITION: [ 10, 0, 0, 0, 0, 1 ],
             TYPE: "weakAutoTankGun",
         },
    ],
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 130, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
                WAIT_TO_CYCLE: true,
            }
        },
        {
            POSITION: [14, 6, 1, 0, 2, 230, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
                WAIT_TO_CYCLE: true,
            }
        }
    ]
}
Class.hyperskimMissile = {
   PARENT: 'missile',
   GUNS: [ {
         POSITION: [ 14, 6, 1, 0, 0, -90, 0.45, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 14, 6, 1, 0, 0, 90, 0.45, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 14, 6, 1, 0, 2, -147.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 14, 6, 1, 0, -2, 147.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, 
     ],
};
Class.grazermissile = {
   PARENT: 'missile',
   GUNS: [ {
         POSITION: [ 14, 8, 0.4, 0, 0, -90, 0.45, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.swarm, g.lowPower, g.more_reload, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "swarm", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 14, 8, 0.6, 0, 0, 90, 0.45, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.swarm, g.lowPower, g.more_reload, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "swarm", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 14, 6, 1, 0, 2, -147.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 14, 6, 1, 0, -2, 147.5, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
            TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, 
     ],
};
Class.skimclustermissile = {
    PARENT: "bullet",
    LABEL: "Missile",
    INDEPENDENT: true,
    BODY: { RANGE: 120 },
    TURRETS: [
         {
            POSITION: [ 9, 0, 0, 0, 0, 1 ],
             TYPE: ["genericEntity", {COLOR: 16}],
         },
    ],
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 130, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
                WAIT_TO_CYCLE: true,
        }, }, {
            POSITION: [14, 6, 1, 0, 2, 230, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
                WAIT_TO_CYCLE: true,
        }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 150, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 210, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 240, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 270, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 300, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 330, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, },
    ],
};
Class.hypermissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 150, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 210, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
            },
        },
        {
            POSITION: [14, 6, 1, 0, -2, 90, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 270, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
            },
        },
    ],
}
Class.gunnerDominatorMinion = {
    PARENT: "minion",
    LABEL: "Dominator Minion",
    HITS_OWN_TYPE: "hard",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 1.5,
        SPEED: 6.5,
        ACCELERATION: 0.8,
        HEALTH: 590,
        SIZE: 50, 
        SHIELD: 5,
        DAMAGE: 15,
        RESIST: 100,
        PENETRATION: 5,
        DENSITY: 5.5,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: true,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    UPGRADE_LABEL: 'Gunner',
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "dominationBody"
        }
    ],
    GUNS: [
        {
            POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15.85, 3, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
        }
    ]
}
Class.pentaMinion = {
    PARENT: "genericTank",
    LABEL: "Penta Shot",
    DANGER: 7,
    HITS_OWN_TYPE: "hard",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    BODY: {
        SPEED: 0.85 * base.SPEED
    },
    GUNS: [
        {
            POSITION: [16, 8, 1, 0, -3, -30, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 8, 1, 0, 3, 30, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, -2, -15, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 2, 15, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.assMinion = {
    PARENT: "genericTank",
    DANGER: 7,
    HITS_OWN_TYPE: "hard",
    LABEL: 'Assembler',
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: 'assemblerTrap',
                MAX_CHILDREN: 8,
                STAT_CALCULATOR: "block",
            }
        }
    ],
    TURRETS: [
        {
            POSITION: [2.5, 14, 0, 0,    360, 1],
            TYPE: 'assemblerDot'
        }
    ]
}
Class.shotgunMinion = {
    PARENT: "genericTank",
    LABEL: "Shotgun",
    HITS_OWN_TYPE: "hard",
    DANGER: 7,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [15, 14, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, g.fake]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [8, 14, -1.3, 4, 0, 0, 0],
        },
    ],
}
Class.cycloneMinion = {
    PARENT: "genericTank",
    LABEL: "Cyclone",
    DANGER: 7,
    HITS_OWN_TYPE: "hard",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    GUNS: weaponArray([
        {
            POSITION: [15, 3.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 60, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.cyclone]),
                TYPE: "bullet"
            }
        }
    ], 3)
}
Class.machinegMinion = {
    PARENT: "genericTank",
    LABEL: "Machine Gunner",
    DANGER: 7,
    HITS_OWN_TYPE: "hard",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [14, 3, 4, -3, 5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, -3, -5, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, 2.5, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, -2.5, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 3, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.machineGunner]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.barricadeMinion = {
    PARENT: "genericTank",
    DANGER: 7,
    HITS_OWN_TYPE: "hard",
    LABEL: "Barricade",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    BODY: {
        FOV: 1.15,
    },
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.3, 22, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
        {
            POSITION: [4, 8, 1.3, 18, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
        {
            POSITION: [4, 8, 1.3, 14, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}
Class.constructMinion = { // it's "construct" and not "constructor" because "constructor" breaks things
    PARENT: "genericTank",
    LABEL: "Constructor",
    HITS_OWN_TYPE: "hard",
    DANGER: 7,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    BODY: {
        SPEED: 0.7 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [
        {
            POSITION: [18, 18, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 18, 1.2, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.construct]),
                TYPE: "setTrap",
                STAT_CALCULATOR: "block"
            }
        }
    ]
}
Class.nailgunMinion = {
    PARENT: "genericTank",
    LABEL: "Nailgun",
    HITS_OWN_TYPE: "hard",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
        },
    ],
}
Class.crowbarMinion = {
   PARENT: "genericTank",
   LABEL: "Crowbar",
   HITS_OWN_TYPE: "hard",
   CONTROLLERS: [
       "nearestDifferentMaster",
       "mapAltToFire",
       "minion",
       "canRepel",
       "hangOutNearMaster",
   ],
   GUNS: [
        {
            POSITION: [37, 6.5, 1, 0, 0, 0, 0],
        }, {
            POSITION: [5, 8.5, -1.5, 8, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            POSITION: [6, 38, 0, 0, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 28, 0, 0, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 18, 0, 0, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        },
    ],
},
Class.smashermMinion = {
    PARENT: "genericSmasher",
    LABEL: "Mega-Smasher",
    HITS_OWN_TYPE: "hard",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    BODY: {
        SPEED: 1.05 * base.SPEED,
        FOV: 1.1 * base.FOV,
        DENSITY: 4 * base.DENSITY,
    },
    TURRETS: [
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
}
Class.spikeMinion = {
    PARENT: "genericSmasher",
    LABEL: "Spike",
    HITS_OWN_TYPE: "hard",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    BODY: {
        SPEED: base.SPEED * 0.9,
        DAMAGE: base.DAMAGE * 1.1,
    },
    TURRETS: [
        {
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 90, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 270, 360, 0],
            TYPE: "spikeBody",
        },
    ],
}
Class.landmineMinion = {
    PARENT: "genericSmasher",
    LABEL: "Landmine",
    INVISIBLE: [0.06, 0.01],
    HITS_OWN_TYPE: "hard",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    TOOLTIP: "Stay still to turn invisible.",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [21.5, 0, 0, 30, 360, 0],
            TYPE: "landmineBody"
        }
    ]
}
Class.autoSmasherMinion = makeAuto({
    PARENT: "genericSmasher",
    DANGER: 6,
    HITS_OWN_TYPE: "hard",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ],
}, "Auto-Smasher", {type: "autoSmasherTurret", size: 11})
Class.smasherMinion = {
    PARENT: "genericSmasher",
    LABEL: "Smasher",
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    DANGER: 6,
    HITS_OWN_TYPE: "hard",
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ]
}
Class.septaMinion = {
    PARENT: "genericTank",
    LABEL: "Septa-Trapper",
    HITS_OWN_TYPE: "hard",
    DANGER: 7,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    BODY: {
        SPEED: base.SPEED * 0.8,
    },
    HAS_NO_RECOIL: true,
    GUNS: weaponArray([
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ], 7, 4/7),
}
Class.gunnerDominatorMinion2 = {
    PARENT: "minion",
    LABEL: "Dominator Minion 2",
    HITS_OWN_TYPE: "hard",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 1.5,
        SPEED: 6.5,
        ACCELERATION: 0.8,
        HEALTH: 590,
        SIZE: 50, 
        SHIELD: 5,
        DAMAGE: 15,
        RESIST: 100,
        PENETRATION: 5,
        DENSITY: 5.5,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: true,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    UPGRADE_LABEL: 'Gunner',
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "dominationBody"
        }
    ],
    GUNS: [
        {
            POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.destroyerDominator]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0]
        }
    ]
}

Class.gunnerDominatorMinion3 = {
    PARENT: "minion",
    LABEL: "Dominator Minion 3",
    HITS_OWN_TYPE: "hard",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 1.5,
        SPEED: 6.5,
        ACCELERATION: 0.8,
        HEALTH: 590,
        SIZE: 50, 
        SHIELD: 5,
        DAMAGE: 15,
        RESIST: 100,
        PENETRATION: 5,
        DENSITY: 5.5,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: true,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    UPGRADE_LABEL: 'Gunner',
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "dominationBody"
        }
    ],
    GUNS: weaponArray([
        {
            POSITION: [4, 3.75, 1, 8, 0, 0, 0]
        },
        {
            POSITION: [1.25, 3.75, 1.7, 12, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
                AUTOFIRE: true
            }
        }
    ], 8)
}
Class.boosterMinion = {
    PARENT: "minion",
    LABEL: "Sex toy",
    SIZE: 10,
    BODY: {
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front"
            }
        },
        {
            POSITION: [14, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        },
        {
            POSITION: [14, 8, 1, 0, 1, -140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        },
        {
            POSITION: [16, 8, 1, 0, 0, -150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster"
            }
        }
    ]
}
Class.baseProtectorMinion = {
    PARENT: "minion",
    LABEL: "Base",
    UPGRADE_LABEL: "Base Protector",
    ON_MINIMAP: false,
    SIZE: 64,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    IGNORED_BY_AI: false,
    HITS_OWN_TYPE: "pushOnlyTeam",
    BODY: {
        SPEED: 0,
        HEALTH: 1e4,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1e3,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        RESIST: 100,
        HETERO: 0,
    },
    FACING_TYPE: ["spin", {speed: 0.02}],
    TURRETS: [
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: "dominationBody",
        },
        ...weaponArray({
            POSITION: [12, 7, 0, 45, 100, 0],
            TYPE: "baseSwarmTurret",
        }, 4)
    ],
    GUNS: weaponArray([
        {
            POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0],
        },
        {
            POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0],
        },
    ], 4)
};
Class.minimissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0.5 }, g.lowPower]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        },
    ],
}
Class.weakminimissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0.65 }, g.lowPower, g.lowPower]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        },
    ],
}
Class.clustermissile = {
   PARENT: 'missile',
   TURRETS: [
        {
            POSITION: [ 9, 0, 0, 0, 0, 1 ],
            TYPE: ["genericEntity", {COLOR: 16}],
        },
   ],
   GUNS: weaponArray({
         POSITION: [ 7, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, 12),
};
Class.clustermissile.GUNS.push(
         {
         POSITION: [ 14, 6, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0.5 }, g.lowPower]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
            AUTOFIRE: true,
         }, },
)
Class.flockmissile = {
   PARENT: 'missile',
   TURRETS: [
        {
            POSITION: [ 9, 0, 0, 0, 0, 1 ],
            TYPE: ["genericEntity", {COLOR: 16}],
        },
   ],
   GUNS: [ {
         POSITION: [ 14, 6, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0.5 }, g.lowPower]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
            AUTOFIRE: true,
         }, }, ...weaponArray({
         POSITION: [ 7, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bee, g.lowPower, g.flankGuard, g.less_damage, {size: 1.35, recoil: 0, damage: 0.8}]),
            TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, 12),
     ],
};
Class.neutronmissile = {
   PARENT: 'missile',
   TURRETS: [
        {
            POSITION: [ 9, 0, 0, 0, 0, 1 ],
            TYPE: ["genericEntity", {COLOR: 16}],
        },
   ],
   GUNS: weaponArray({
         POSITION: [ 7, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, g.half_half_half_range, {size: 1.9, recoil: 0, damage: 0.8}]),
            TYPE: ["weakminimissile", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, 4), // fuck this shit
};
Class.flankClusterMissile = {
   PARENT: 'missile',
   TURRETS: [
        {
            POSITION: [ 9, 0, 0, 0, 0, 1 ],
            TYPE: ["genericEntity", {COLOR: 16}],
        },
   ],
   GUNS: [ {
         POSITION: [ 14, 6, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0.5 }, g.lowPower]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 14, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }, g.lowPower]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            AUTOFIRE: true,
         }, }, ...weaponArray({
         POSITION: [ 7, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, 12),
     ],
};
Class.twinclustermissile = {
   PARENT: 'missile',
   TURRETS: [
        {
            POSITION: [ 9, 0, 0, 0, 0, 1 ],
            TYPE: ["genericEntity", {COLOR: 16}],
        },
   ],
   GUNS: [ {
         POSITION: [ 14, 8, 1, 0, 6, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, { recoil: 0.5 }, g.lowPower]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 14, 8, 1, 0, -6, 180, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, { recoil: 0.5 }, g.lowPower]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 150, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 210, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 240, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 270, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 300, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 330, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, },
     ],
};
Class.hyperclustermissile = {
   PARENT: 'missile',
   TURRETS: [
        {
            POSITION: [ 9, 0, 0, 0, 0, 1 ],
            TYPE: ["genericEntity", {COLOR: 16}],
        },
        {
            POSITION: [ 7, 0, 0, 0, 0, 1 ],
            TYPE: ["genericEntity", {COLOR: 16}],
        },
   ],
   GUNS: [ {
         POSITION: [ 14, 6, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0.5 }, g.lowPower]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.half_half_half_range, {size: 2.35, recoil: 0, damage: 0.8}]),
            TYPE: ["miniClusterMissile", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.half_half_half_range, {size: 2.35, recoil: 0, damage: 0.8}]),
            TYPE: ["miniClusterMissile", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 240, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.half_half_half_range, {size: 2.35, recoil: 0, damage: 0.8}]),
            TYPE: ["miniClusterMissile", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, },
     ],
};
Class.miniClusterMissile = {
   PARENT: 'missile',
   TURRETS: [
        {
            POSITION: [ 9, 0, 0, 0, 0, 1 ],
            TYPE: ["genericEntity", {COLOR: 16}],
        },
   ],
   GUNS: weaponArray([
         {
         POSITION: [ 7, 6, 1, 0, 0, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.35}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, },
     ], 12)
};
Class.autoClusterMissile = {
   PARENT: 'missile',
   TURRETS: [
        {
            POSITION: [ 9, 0, 0, 0, 0, 1 ],
            TYPE: ["genericEntity", {COLOR: 16}],
        },
        {
            POSITION: [ 4.5, 0, 0, 0, 0, 1 ],
            TYPE: ["weakAutoTankGun", {COLOR: 16}],
        },
   ],
   GUNS: [ {
         POSITION: [ 14, 6, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0.5 }, g.lowPower]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 150, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 210, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 240, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 270, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 300, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 330, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, },
     ],
};
Class.miniHomingMissile = {
    PARENT: "autoswarm",
    INDEPENDENT: true,
    BODY: { RANGE: 120 },
    SHAPE: 0,
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0.5 }, g.lowPower]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        },
    ],
}
Class.spinmissile = {
    PARENT: "missile",
    CONTROLLERS: [["spin2", {speed: 0.1}]],
    GUNS: weaponArray({
        POSITION: [14, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {size: 1.1}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
        },
    }, 2),
}
Class.explodingSpinMissile = {
   PARENT: 'missile',
   CONTROLLERS: [["spin2", {speed: 0.1}]],
   TURRETS: [
        {
            POSITION: [ 9, 0, 0, 0, 0, 1 ],
            TYPE: ["genericEntity", {COLOR: 16}],
        },
   ],
   GUNS: [ {
         POSITION: [ 14, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {size: 1.1}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 14, 8, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {size: 1.1}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 150, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 210, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 240, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 270, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 300, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 330, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, },
     ],
};
Class.hyperspinmissile = {
    PARENT: "spinmissile",
    GUNS: weaponArray({
        POSITION: [14, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {size: 1.1}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
        },
    }, 4),
}
Class.megaspinmissile = {
    PARENT: "spinmissile",
    GUNS: weaponArray({
        POSITION: [14, 11.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            AUTOFIRE: !0,
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.more_health, g.lowPower, {size: 1.1}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
        },
    }, 4),
}
Class.hive = {
    PARENT: "bullet",
    LABEL: "Hive",
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    CONTROLLERS: ["nearestDifferentMaster", "targetSelf"],
    AI: {
        NO_LEAD: true,
    },
    GUNS: weaponArray({
        POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee]),
            TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "swarm",
            AUTOFIRE: true
        },
    }, 5, 0.2)
}
Class.hiveClusterMissile = {
    PARENT: "missile",
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    CONTROLLERS: ["nearestDifferentMaster", "targetSelf"],
    AI: {
        NO_LEAD: true,
    },
    TURRETS: [
         {
             POSITION: [ 9, 0, 0, 0, 0, 1 ],
             TYPE: ["genericEntity", {COLOR: 16}],
         },
    ],
    GUNS: [
        ...weaponArray({
        POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee]),
            TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "swarm",
            AUTOFIRE: true
        }, }, 5), {
         POSITION: [ 7, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 150, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 210, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 240, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 270, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 300, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 330, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            ALT_FIRE: true,
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, },
    ],
};
Class.myriadHive = {
    PARENT: "bullet",
    LABEL: "Hive",
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    CONTROLLERS: ["nearestDifferentMaster", "targetSelf"],
    AI: {
        NO_LEAD: true,
    },
    GUNS: weaponArray({
        POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee, g.more_health]),
            TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "swarm",
            AUTOFIRE: true
        },
    }, 3, 0.2)
}
Class.hypermyriadHive = {
    PARENT: "bullet",
    LABEL: "Hive",
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    CONTROLLERS: ["nearestDifferentMaster", "targetSelf"],
    AI: {
        NO_LEAD: true,
    },
    GUNS: weaponArray({
        POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee, g.more_health]),
            TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "swarm",
            AUTOFIRE: true
        },
    }, 6, 0.2)
}
Class.protoHive = {
    PARENT: "bullet",
    LABEL: "Proto-Hive",
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    CONTROLLERS: ["nearestDifferentMaster", "targetSelf"],
    AI: { NO_LEAD: true },
    GUNS: weaponArray({
        POSITION: [7, 9.5, 0.6, 7, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee]),
            TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "swarm",
            AUTOFIRE: true
        },
    }, 3, 1/3)
}
Class.snake = {
    PARENT: "bullet",
}
Class.rocketeerMissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [16.5, 10, 1.5, 0, 0, 180, 3],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.missileTrail, g.rocketeerMissileTrail]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        },
    ],
}
Class.rocketeerCluster = {
    PARENT: "missile",
    TURRETS: [
        {
            POSITION: [ 9, 0, 0, 0, 0, 1 ],
            TYPE: ["genericEntity", {COLOR: 16}],
        },
    ],
    GUNS: [
        {
         POSITION: [16.5, 10, 1.5, 0, 0, 180, 3],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.missileTrail, g.rocketeerMissileTrail]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 150, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 210, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 240, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 270, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 300, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 7, 6, 1, 0, 0, 330, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, g.flankGuard, g.less_damage, {recoil: 0, damage: 0.8}]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
            STAT_CALCULATOR: "sustained",
         }, },
    ],
}
Class.assdestroyerMissile = {
   PARENT: 'swarm',
   SHAPE: "M -2.1248 -0.1988 L -2.3976 -0.826 C -2.3872 -0.8184 -2.3004 -0.8972 -2.2884 -1.0284 C -1.8908 -1.0596 -1.5152 -1.0432 -1.2712 -1.0284 L -1.1084 -0.746 C -0.7892 -0.834 -0.4148 -0.9352 0.0288 -1.0268 C 0.1244 -1.0328 0.2493 -1.0652 0.3596 -1.0844 C 0.5972 -1.0876 0.9756 -1.0856 1.2148 -1.0628 C 1.8096 -1.0388 2.3268 -0.522 2.3632 -0.0332 C 2.2784 0.4108 1.9256 1.0528 0.7044 1.0276 C 0.4992 1.0556 -0.3612 0.918 -0.9512 0.7404 L -1.2016 0.7648 L -1.266 0.8776 L -2.278 0.9052 L -2.366 0.6724 L -2.4036 0.6692 C -2.3133 0.4835 -2.2231 0.2977 -2.1328 0.112 L -2.1252 -0.1976",
   BODY: { RANGE: 200 },
   GUNS: [ {
         POSITION: [ 16.5, 10, 1.5, 0, 0, 180, 0.35, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.missileTrail, g.rocketeerMissileTrail]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
            AUTOFIRE: true,
         }, },
     ],
};
Class.fiveSiderBullet = {
   PARENT: 'bullet',
   SHAPE: 6,
   GUNS: [ {
         POSITION: [ 15, 6, 2, 0, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.missileTrail, g.fiveSiderMissileTrail]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 8, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.longReload]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 8, 6, 1, 0, 0, -60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.longReload]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 8, 6, 1, 0, 0, -127.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.longReload]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 8, 6, 1, 0, 0, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.longReload]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 8, 6, 1, 0, 0, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.longReload]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            AUTOFIRE: true,
         }, }, 
     ],
};
Class.heavyRocket = {
   PARENT: 'missile',
   LABEL: 'Heavy Rocket',
   MOTION_TYPE: 'accel',
   GUNS: [ {
         POSITION: [ 15, 13, 1.3, 0, 0, 180, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.missileTrail, g.rocketeerMissileTrail]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
         }, }, {
         POSITION: [ 17, 9, 1.3, 0, 0, 180, 0.15, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.missileTrail, g.rocketeerMissileTrail]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            STAT_CALCULATOR: "thruster",
         }, }, {
         POSITION: [ 14, 12, 1.4, 0, 0, 0, 0.15, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 7, 1.4, 0, 0, 0, 0.15, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 3, 1.4, 0, 0, 0, 0.15, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.sentinelMissile = {
    PARENT: "bullet",
    LABEL: "Missile",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
        DENSITY: 3,
    },
    GUNS: [
        {
            POSITION: [12, 10, 0, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        }, {
            POSITION: [14, 6, 1, 0, -2, 130, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        }, {
            POSITION: [14, 6, 1, 0, 2, 230, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.skimmer]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        },
    ],
}
Class.kronosMissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [4, 6, 1.6, 13, 0, 90, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.trap, g.lowPower, {reload: 2, speed: 1.3, maxSpeed: 1.3, range: 0.5}]),
                TYPE: [ "trap", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "trap",
            },
        }, {
            POSITION: [4, 6, 1.6, 13, 0, -90, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.trap, g.lowPower, {reload: 2, speed: 1.3, maxSpeed: 1.3, range: 0.5}]),
                TYPE: [ "trap", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "trap",
            },
        }, {
            POSITION: [14, 6, 1, 0, -2, 150, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
            },
        }, {
            POSITION: [14, 6, 1, 0, 2, 210, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {speed: 1.3, maxSpeed: 1.3}]),
                TYPE: [ "bullet", { PERSISTS_AFTER_DEATH: true } ],
                STAT_CALCULATOR: "thruster",
            },
        }, {
            POSITION: [13, 6, 1, 0, 0, 90, 0],
        }, {
            POSITION: [13, 6, 1, 0, 0, -90, 0],
        },
    ],
}
Class.autoSmasherMissile = {
    PARENT: "missile",
    HITS_OWN_TYPE: "never",
    GUNS: [],
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        }, {
            POSITION: [12, 0, 0, 0, 360, 1],
            TYPE: "autoSmasherMissileTurret",
        },
    ],
}
Class.spikeMissile = {
    PARENT: "bullet",
    LABEL: "Spike Missile",
    BODY: {
        SPEED: base.SPEED * 1.5,
        DAMAGE: base.DAMAGE * 1.5,
    },
    TURRETS: [
        {
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 90, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 270, 360, 0],
            TYPE: "spikeBody",
        },
    ],
}
Class.megaSmasherMissile = {
    PARENT: "bullet",
    LABEL: "Mega-Smasher Missile",
    MOTION_TYPE: "grow",
    BODY: {
        SPEED: 1.45 * base.SPEED,
        DENSITY: 4 * base.DENSITY,
    },
    TURRETS: [
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
}
Class.msglGrow = {
   PARENT: 'bullet',
   LABEL: 'M.S.G.L Grow',
   FACING_TYPE: ["spin", { speed: -0.15 }],
   MOTION_TYPE: "grow",
   BODY: {
      HEALTH: base.HEALTH * 15,
      DAMAGE: base.DAMAGE * 0.2,
   },
   GUNS: [ {
         POSITION: [ 15.5, 14, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.annihilator, g.launcher, g.megaLauncherGrow]),
            TYPE: "megaSmasherMissile",
         }, }, {
         POSITION: [ 15.5, 14, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.annihilator, g.launcher, g.megaLauncherGrow]),
            TYPE: "megaSmasherMissile",
         }, }, 
     ],
};
Class.rotatingBullet = {
   PARENT: 'genericTank',
   LABEL: 'Mega Smasher Launcher',
   FACING_TYPE: ["spin", { speed: -0.25 }],
   BODY: {
      HEALTH: base.HEALTH * 15,
      DAMAGE: base.DAMAGE * 0.2,
   },
   GUNS: [ {
         POSITION: [ 15.5, 14, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.machineGunner, g.annihilator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15.5, 14, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.machineGunner, g.annihilator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15.5, 14, 1, 0, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.machineGunner, g.annihilator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15.5, 14, 1, 0, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.machineGunner, g.annihilator]),
            TYPE: "bullet",
         }, }, 
     ],
};

// Healer Projectiles
Class.healerBullet = {
    PARENT: "bullet",
    HEALER: true,
};
Class.surgeonPillbox = {
    PARENT: "trap",
    LABEL: "Pillbox",
    SHAPE: -6,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
        DAMAGE: 0
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "surgeonPillboxTurret",
        },
    ],
}

// Drones
Class.turretedDrone = makeAuto('drone', "Auto-Drone", {type: 'droneAutoTurret'})
Class.turretedDrone2 = makeAuto('drone', "Auto-Drone", {type: 'droneAutoTurret2'})
Class.spawneredDrone = makeAuto('drone', "Spawnerception-Drone", {type: 'spawnerception'})
Class.opSpawneredDrone = makeAuto('drone', "Spawnerception-Drone1", {type: 'opSpawnerception'})

// Sunchips
Class.sunchip = {
    PARENT: "drone",
    SHAPE: 4,
    NECRO: true,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
}
Class.eggchip = {
    PARENT: "sunchip",
    NECRO: [0],
    SHAPE: 0
}
Class.minichip = {
    PARENT: "sunchip",
    NECRO: false,
    SHAPE: 0
}
Class.betaminichip = {
    PARENT: "minichip",
    PROPS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "egg",
        },
    ],
}
Class.alphaminichip = {
    PARENT: "minichip",
    PROPS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "egg",
        },
        {
            POSITION: [6, 0, 0, 0, 360, 1],
            TYPE: "egg",
        },
    ],
}
Class.omegaminichip = {
    PARENT: "minichip",
    PROPS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "egg",
        },
        {
            POSITION: [5, 0, 0, 0, 360, 1],
            TYPE: "egg",
        },
        {
            POSITION: [2.5, 0, 0, 0, 360, 1],
            TYPE: "egg",
        },
    ],
}
Class.starChip = {
    PARENT: "sunchip",
    NECRO: false,
    SHAPE: "M -1.624 1.1124 L -0.7552 -0.0001 L -1.624 -1.1126 L -0.2427 -0.6698 L 0.601 -1.8 L 0.586 -0.414 L 1.9765 -0.0002 L 0.586 0.4147 V 1.8005 L -0.2427 0.6706 Z",
}
Class.autosunchip = {
    PARENT: "sunchip",
    AI: {
        BLIND: true,
        FARMER: true,
    },
    INDEPENDENT: true,
}
Class.autoeggchip = {
    PARENT: "autosunchip",
    NECRO: [0],
    SHAPE: 0,
}
Class.summonerDrone = {
    PARENT: "sunchip",
    NECRO: false
}
Class.betaSummonerDrone = {
    PARENT: "summonerDrone",
    PROPS: [
        {
            POSITION: [14, 0, 0, 45, 360, 1],
            TYPE: "square",
        },
    ],
}
Class.alphaSummonerDrone = {
    PARENT: "summonerDrone",
    PROPS: [
        {
            POSITION: [14, 0, 0, 45, 360, 1],
            TYPE: "square",
        },
        {
            POSITION: [9.5, 0, 0, 0, 360, 1],
            TYPE: "square",
        },
    ],
}
Class.omegaSummonerDrone = {
    PARENT: "summonerDrone",
    PROPS: [
        {
            POSITION: [14, 0, 0, 45, 360, 1],
            TYPE: "square",
        },
        {
            POSITION: [9.5, 0, 0, 0, 360, 1],
            TYPE: "square",
        },
        {
            POSITION: [6.7, 0, 0, 45, 360, 1],
            TYPE: "square",
        },
    ],
}
Class.metalSummonerDrone = {
    PARENT: "sunchip",
    SHAPE: "M -1.0125 0.6075 L -1.0125 -0.6075 C -1.0125 -1.0125 -0.6075 -1.0125 -0.6075 -1.0125 L 0.6075 -1.0125 C 1.0125 -1.0125 1.0125 -0.6075 1.0125 -0.6075 L 1.0125 0.6075 C 1.0125 1.0125 0.6075 1.0125 0.6075 1.0125 L -0.6075 1.0125 C -0.6075 1.0125 -1.0125 1.0125 -1.0125 0.6075",
    NECRO: false,
}
Class.trichip = {
    PARENT: "sunchip",
    NECRO: [3],
    SHAPE: 3
}
Class.dorito = {
    PARENT: "sunchip",
    NECRO: false,
    SHAPE: 3
}
Class.betaDorito = {
    PARENT: "dorito",
    PROPS: [
        {
            POSITION: [10, 0, 0, 60, 360, 1],
            TYPE: "triangle",
        },
    ],
}
Class.alphaDorito = {
    PARENT: "dorito",
    PROPS: [
        {
            POSITION: [10, 0, 0, 60, 360, 1],
            TYPE: "triangle",
        },
        {
            POSITION: [5, 0, 0, 0, 360, 1],
            TYPE: "triangle",
        },
    ],
}
Class.omegaDorito = {
    PARENT: "dorito",
    PROPS: [
        {
            POSITION: [10, 0, 0, 60, 360, 1],
            TYPE: "triangle",
        },
        {
            POSITION: [5, 0, 0, 0, 360, 1],
            TYPE: "triangle",
        },
        {
            POSITION: [2.5, 0, 0, 60, 360, 1],
            TYPE: "triangle",
        },
    ],
}
Class.pentachip = {
    PARENT: "sunchip",
    NECRO: [5],
    SHAPE: 5
}
Class.demonchip = {
    PARENT: "sunchip",
    NECRO: false,
    SHAPE: 5
};
Class.betademonchip = {
    PARENT: "demonchip",
    PROPS: [
        {
            POSITION: [16, 0, 0, 35, 360, 1],
            TYPE: "pentagon",
        },
    ],
}
Class.alphademonchip = {
    PARENT: "demonchip",
    PROPS: [
        {
            POSITION: [16, 0, 0, 35, 360, 1],
            TYPE: "pentagon",
        },
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "pentagon",
        },
    ],
}
Class.omegademonchip = {
    PARENT: "demonchip",
    PROPS: [
        {
            POSITION: [16, 0, 0, 35, 360, 1],
            TYPE: "pentagon",
        },
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "pentagon",
        },
        {
            POSITION: [10.5, 0, 0, 35, 360, 1],
            TYPE: "pentagon",
        },
    ],
}
Class.realchip = {
    PARENT: "sunchip",
    NECRO: false,
    SHAPE: 6
};
Class.betarealchip = {
    PARENT: "realchip",
    PROPS: [
        {
            POSITION: [17, 0, 0, 90, 360, 1],
            TYPE: "hexagon",
        },
    ],
}
Class.alpharealchip = {
    PARENT: "realchip",
    PROPS: [
        {
            POSITION: [17, 0, 0, 90, 360, 1],
            TYPE: "hexagon",
        },
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: "hexagon",
        },
    ],
}
Class.omegarealchip = {
    PARENT: "realchip",
    PROPS: [
        {
            POSITION: [17, 0, 0, 90, 360, 1],
            TYPE: "hexagon",
        },
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: "hexagon",
        },
        {
            POSITION: [12.5, 0, 0, 90, 360, 1],
            TYPE: "hexagon",
        },
    ],
}

// Minions
Class.minion = {
    PARENT: "genericTank",
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hard",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    GUNS: [
        {
            POSITION: [17, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minionGun]),
                WAIT_TO_CYCLE: true,
                TYPE: "bullet",
            },
        },
    ],
}
Class.megaMinion = {
    PARENT: "minion",
    LABEL: "Mega Minion",
    BODY: {
        FOV: 0.525,
        SPEED: 2.9,
        ACCELERATION: 0.35,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.25,
        RESIST: 1,
        PENETRATION: 1.1,
        DENSITY: 0.5,
    },
    GUNS: [
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.minionGun]),
                WAIT_TO_CYCLE: true,
                TYPE: "bullet",
            },
        },
    ],
}
Class.turretedMinion = makeAuto('minion', "Turreted Minion", {type: "bulletAutoTurret", size: 10, angle: 0})
Class.gaiaMinion = {
   PARENT: 'minion',
   LABEL: 'Gaia Minion',
   GUNS: [ {
         POSITION: [ 20, 4.5, 1, 0, 3.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, {speed: 1.35, damage: 1.1, health: 1.1}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 4.5, 1, 0, -3.5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, {speed: 1.35, damage: 1.1, health: 1.1}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 12, 19.5, 0.6, 0, 0, 0, 0, ],
         },
     ],
};
Class.halloweenMinion = {
   PARENT: 'minion',
   LABEL: 'Evil Minion',
   COLOR: "#ff9000",
   SHAPE: 7,
   PROPS: [
        ...weaponArray({
            POSITION: [10, -4.5, 0, 0, 360, 1],
            TYPE: "pumpkinLine",
        }, 7),
        {
            POSITION: [8.5, 0, 0, 0, 360, 2],
            TYPE: "pumpkinCircle",
        },
        {
            POSITION: [6, 0, 0, 0, 360, 3],
            TYPE: "pumpkinStar",
        },
   ],
   GUNS: [ {
         POSITION: [ 17, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minionGun]),
            TYPE: "bullet",
            COLOR: "#7c664f",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 7, 4.5, 0.8, 10, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minionGun, g.fake]),
            TYPE: "bullet",
            COLOR: "#4d4337",
            WAIT_TO_CYCLE: true,
         }, }, 
     ],
};
Class.nesterMinion = {
   PARENT: 'minion',
   LABEL: 'Mini Nester',
   SHAPE: 5,
   GUNS: [ {
         POSITION: [ 8, 1.5, 1, 3, -6.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.gunner, g.power]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 1.5, 1, 3, 6.5, 0, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.gunner, g.power]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 10, 1.5, 1, 3, -4, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.gunner, g.power]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 10, 1.5, 1, 3, 4, 0, 0.65, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.gunner, g.power]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 5, 9, 0.75, 5, -1, -26, 0, ],
         }, {
         POSITION: [ 5, 9, 0.75, 5, 1, 26, 0, ],
         }, {
         POSITION: [ 6.5, 9, 0.75, 5, 0, -180, 0, ],
         }, {
         POSITION: [ 2, 7, 1.2, 12.3, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.less_reload]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.provokerMinion = {
   PARENT: 'minion',
   LABEL: 'Mini Provoker',
   SHAPE: 8,
   TURRETS: [
       {
           POSITION: [7, 10, 0, 0, 360, 0],
           TYPE: 'autoTankGun',
       },
       {
           POSITION: [7, 10, 0, 90, 360, 0],
           TYPE: 'autoTankGun',
       },
       {
           POSITION: [7, 10, 0, 180, 360, 0],
           TYPE: 'autoTankGun',
       },
       {
           POSITION: [7, 10, 0, 270, 360, 0],
           TYPE: 'autoTankGun',
       },
   ],
   GUNS: weaponArray([
         {
         POSITION: [ 18, 3, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.faster, g.pellet]),
            TYPE: "bullet",
         }, }, 
     ], 4)
};
Class.aggressorMinion = {
   PARENT: 'minion',
   LABEL: 'Mini Aggressor',
   SHAPE: 8,
   TURRETS: [
       {
           POSITION: [7, 10, 0, 0, 360, 0],
           TYPE: 'autoTankGun',
       },
       {
           POSITION: [7, 10, 0, 90, 360, 0],
           TYPE: 'autoTankGun',
       },
       {
           POSITION: [7, 10, 0, 180, 360, 0],
           TYPE: 'autoTankGun',
       },
       {
           POSITION: [7, 10, 0, 270, 360, 0],
           TYPE: 'autoTankGun',
       },
   ],
   GUNS: weaponArray([
         {
         POSITION: [ 14, 7, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.faster]),
            TYPE: "bullet",
         }, }, 
     ], 4)
};
Class.troublemakerMinion = {
   PARENT: 'minion',
   LABEL: 'Mini Troublemaker',
   SHAPE: 8,
   TURRETS: [
       {
           POSITION: [7, 10, 0, 0, 360, 0],
           TYPE: 'autoTankGun',
       },
       {
           POSITION: [7, 10, 0, 90, 360, 0],
           TYPE: 'megaAutoTankGun',
       },
       {
           POSITION: [7, 10, 0, 180, 360, 0],
           TYPE: 'autoTankGun',
       },
       {
           POSITION: [7, 10, 0, 270, 360, 0],
           TYPE: 'megaAutoTankGun',
       },
   ],
   GUNS: weaponArray([
         {
         POSITION: [  8, 6, 1.3, 8, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.pounder, g.faster]),
            TYPE: "bullet",
         }, }, 
     ], 4)
};
Class.instigatorMinion = {
   PARENT: 'minion',
   LABEL: 'Mini Instigator',
   SHAPE: 8,
   TURRETS: [
       {
           POSITION: [7, 10, 0, 0, 360, 0],
           TYPE: 'autoTankGun',
       },
       {
           POSITION: [7, 10, 0, 90, 360, 0],
           TYPE: 'autoTankGun',
       },
       {
           POSITION: [7, 10, 0, 180, 360, 0],
           TYPE: 'autoTankGun',
       },
       {
           POSITION: [7, 10, 0, 270, 360, 0],
           TYPE: 'autoTankGun',
       },
   ],
   GUNS: weaponArray([
         {
         POSITION: [ 4, 7, 1.2, 8.5, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.faster]),
            TYPE: "drone",
            AUTOFIRE: true,
            STAT_CALCULATOR: "drone",
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 3,
         }, }, 
     ], 4)
};
Class.lancerMinion = {
   PARENT: 'drone',
   LABEL: 'Lancer',
   SHAPE: 0,
   GUNS: [ {
         POSITION: [ 8, 4, 1.4, 6, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.minionGun]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
         }, }, {
         POSITION: [ 8, 4, 1.4, 8.5, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.minionGun]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
         }, }, {
         POSITION: [ 25, 0.3, -55, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.miniHeli = {
   PARENT: 'minion',
   LABEL: 'Mini Helicopter',
   SHAPE: "M -0.28 -0.98 L 1.54 -0.98 C 1.96 -0.882 2.436 -0.616 2.8 -0.28 L 2.8 0.28 C 2.436 0.616 1.96 0.882 1.54 0.98 L -0.28 0.98 C -0.7 0.84 -0.98 0.7 -1.19 0.42 L -1.19 -0.42 C -0.98 -0.7 -0.7 -0.84 -0.28 -0.98",
   HAS_NO_RECOIL: true,
   BODY: {
       DAMAGE: 0.45,
   },
   TURRETS: [
       {
           POSITION: [10, 10, 0, 0, 360, 1],
           TYPE: 'normalrotor',
       },
       {
           POSITION: [5, -40, 0, 0, 360, 1],
           TYPE: ["tailrotor", {COLOR: "grey"}]
       },
   ],
   GUNS: [ {
         POSITION: [ 20, 2, 1, 20, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, {damage: 0.1, health: 5, speed: 2, maxspeed: 4, reload: 0.4}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 10, 8, 1, 20, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.machineTrapperMinion = {
   PARENT: 'minion',
   LABEL: 'Mini Machine Trapper',
   CONTROLLERS: [
       "nearestDifferentMaster",
       "mapAltToFire",
       "minion",
       "canRepel",
       "hangOutNearMaster",
   ],
   DIE_AT_RANGE: true,
   GUNS: [ {
         POSITION: [ 15, 9, 1.4, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 3, 13, 1.4, 16, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.machineGun, g.minionGun]),
            TYPE: "trap",
         }, }, 
     ],
};
Class.hemeraMinion = {
    PARENT: "genericTank",
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hard",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    GUNS: [
        {
            POSITION: [17, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minionGun]),
                WAIT_TO_CYCLE: true,
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: "autoTankGun",
    }]
}
Class.cMinion = {
    PARENT: "genericTank",
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hard",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    GUNS: [
        {
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "ccMinion",
                STAT_CALCULATOR: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
    ],
}
Class.ccMinion = {
    PARENT: "genericTank",
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hard",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.4,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    GUNS: [
        {
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "minion",
                STAT_CALCULATOR: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
    ],
}
Class.leafMinion = {
   PARENT: 'minion',
   LABEL: 'Leaf Minion',
   SIZE: 11.5,
   SHAPE: "M -0.35 0 L 1.05 0 C 1.05 -0.7 0.7 -1.05 0 -1.05 C -0.35 -1.05 -0.7 -0.7 -1.4 0 C -0.7 0.7 -0.35 1.05 0 1.05 C 0.7 1.05 1.05 0.7 1.05 0",
   COLOR: "#228b22",
   TURRETS: [
       {
           POSITION: [13, 2, 0, 0, 360, 1],
           TYPE: "leafSymbol",
       },
   ],
   GUNS: [ {
         POSITION: [ 15, 7, 1, 0, 0, 0, 1.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.leaf]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.tinyMinion = {
    PARENT: "minion",
    LABEL: "Swarm Minion",
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    MOTION_TYPE: 'swarm',
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.35 * 0.5,
        DAMAGE: 2.25,
        RESIST: 1.6,
        RANGE: 300,
        DENSITY: 12,
        PUSHABILITY: 0.5,
        FOV: 1.5,
    },
    AI: { BLIND: true },
    GUNS: [
        {
            POSITION: [17, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minionGun, g.lowPower]),
                WAIT_TO_CYCLE: true,
                TYPE: "bullet",
            }, 
        },
    ],
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
}
Class.tinyTwinMinion = {
    PARENT: "minion",
    LABEL: "Swarm Minion",
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    MOTION_TYPE: 'swarm',
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.35 * 0.5,
        DAMAGE: 2.25,
        RESIST: 1.6,
        RANGE: 300,
        DENSITY: 12,
        PUSHABILITY: 0.5,
        FOV: 1.5,
    },
    AI: { BLIND: true },
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
    GUNS: [
        {
            POSITION: [17, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minionGun, g.lowPower]),
                WAIT_TO_CYCLE: true,
                TYPE: "bullet",
            }, 
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: "twinTurret",
    }]
}
Class.sentrySwarmMinion = {
    PARENT: 'drone',
    LABEL: 'sentry',
    COLOR: 'pink',
    UPGRADE_COLOR: "pink",
    DRAW_HEALTH: true,
    HAS_NO_RECOIL: true,
    GUNS: Class.sentrySwarm.GUNS
}
Class.sentryGunMinion = {
    PARENT: 'drone',
    LABEL: 'sentry',
    COLOR: 'pink',
    UPGRADE_COLOR: "pink",
    DRAW_HEALTH: true,
    HAS_NO_RECOIL: true,
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: ['megaAutoTankGun', {GUN_STAT_SCALE: {health: 0.8}}]
    }]
}
Class.sentryTrapMinion = {
    PARENT: 'drone',
    LABEL: 'sentry',
    COLOR: 'pink',
    UPGRADE_COLOR: "pink",
    DRAW_HEALTH: true,
    HAS_NO_RECOIL: true,
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: 'trapTurret'
    }]
}
Class.minigunCrasher = {
   PARENT: 'crasher',
   LABEL: 'Minigun Crasher',
   TYPE: 'crasher',
   SHAPE: 3,
   DAMAGE_CLASS: 2,
   DANGER: 10,
   MOTION_TYPE: 'motor',
   FACING_TYPE: 'smoothToTarget',
   SIZE: 43,
   MAX_CHILDREN: 0,
   DAMAGE_EFFECTS: false,
   COLOR: 5,
   GUNS: [ {
         POSITION: [ 23, 6, 1, 0, 0, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 23, 6, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 6, 1, 0, 0, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 6, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 6, 1, 0, 0, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 6, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 6, 1, 0, 0, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 6, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 6, 1, 0, 0, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 6, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 13, 6, 1, 0, 0, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 13, 6, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 23, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 13, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 12, 5, 1, 2, -4, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 12, 5, 1, 2, 4, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 7, 1, 0, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, 
     ],
};

// Traps
Class.setTrap = {
    PARENT: "trap",
    LABEL: "Set Trap",
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget"],
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
}
Class.explosiveTrap = {
   PARENT: 'trap',
   INDEPENDENT: true,
   FACING_TYPE: ["spin", { speed: 0.06 }],
   SHAPE: "M -1.344 1.008 L -1.008 0.336 C -0.672 0 -0.672 0 -1.008 -0.336 L -1.344 -1.008 C -1.008 -1.008 -1.008 -1.008 -1.008 -1.344 L -0.336 -1.008 C 0 -0.672 0 -0.672 0.336 -1.008 L 1.008 -1.344 C 1.008 -1.008 1.008 -1.008 1.344 -1.008 L 1.008 -0.336 C 0.672 0 0.672 0 1.008 0.336 L 1.344 1.008 C 1.008 1.008 1.008 1.008 1.008 1.344 L 0.336 1.008 C 0 0.672 0 0.672 -0.336 1.008 L -1.008 1.344 C -1.008 1.008 -1.008 1.008 -1.344 1.008",
   TURRETS: [
       {
           POSITION: [9, 0, 0, 0, 360, 1],
           TYPE: "explosiveDeco",
       },
   ],
   GUNS: [ {
         POSITION: [ 8, 8, 1, -4, 0, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, -135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, 
     ],
};
Class.explosiveTrapHeli = {
   PARENT: 'trap',
   INDEPENDENT: true,
   FACING_TYPE: ["spin", { speed: 0.06 }],
   SHAPE: "M -1.344 1.008 L -1.008 0.336 C -0.672 0 -0.672 0 -1.008 -0.336 L -1.344 -1.008 C -1.008 -1.008 -1.008 -1.008 -1.008 -1.344 L -0.336 -1.008 C 0 -0.672 0 -0.672 0.336 -1.008 L 1.008 -1.344 C 1.008 -1.008 1.008 -1.008 1.344 -1.008 L 1.008 -0.336 C 0.672 0 0.672 0 1.008 0.336 L 1.344 1.008 C 1.008 1.008 1.008 1.008 1.008 1.344 L 0.336 1.008 C 0 0.672 0 0.672 -0.336 1.008 L -1.008 1.344 C -1.008 1.008 -1.008 1.008 -1.344 1.008",
   TURRETS: [
       {
           POSITION: [9, 0, 0, 0, 360, 1],
           TYPE: "explosiveDeco",
       },
   ],
   GUNS: [ {
         POSITION: [ 8, 8, 1, -4, 0, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap, g.lowPower]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, -135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap, g.lowPower]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap, g.lowPower]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap, g.lowPower]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap, g.lowPower]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap, g.lowPower]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap, g.lowPower]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weakTrap, g.lowPower]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, 
     ],
};
Class.explosiveBlock = {
   PARENT: 'trap',
   INDEPENDENT: true,
   FACING_TYPE: ["spin", { speed: 0.09 }],
   SHAPE: "M -1.3064 0.9798 L -0.9798 0.3266 C -0.864 0 -0.864 0 -0.9798 -0.3266 L -1.3064 -0.9798 C -0.864 -0.864 -0.864 -0.864 -0.9798 -1.3064 L -0.3266 -0.9798 C 0 -0.864 0 -0.864 0.3266 -0.9798 L 0.9798 -1.3064 C 0.864 -0.864 0.864 -0.864 1.3064 -0.9798 L 0.9798 -0.3266 C 0.864 0 0.864 0 0.9798 0.3266 L 1.3064 0.9798 C 0.864 0.864 0.864 0.864 0.9798 1.3064 L 0.3266 0.9798 C 0 0.864 0 0.864 -0.3266 0.9798 L -0.9798 1.3064 C -0.864 0.864 -0.864 0.864 -1.3064 0.9798",
   TURRETS: [
       {
           POSITION: [9, 0, 0, 0, 360, 1],
           TYPE: "explosiveDeco",
       },
   ],
   GUNS: [ {
         POSITION: [ 8, 8, 1, -4, 0, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, -135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, {
         POSITION: [ 8, 8, 1, -4, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: ["trap", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true,
         }, }, 
     ],
};
Class.unsetTrap = {
    PARENT: "trap",
    LABEL: "Set Trap",
    SHAPE: -4,
    MOTION_TYPE: "motor",
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
}
Class.boomerang = {
    PARENT: "trap",
    LABEL: "Boomerang",
    CONTROLLERS: ["boomerang"],
    MOTION_TYPE: "motor",
    HITS_OWN_TYPE: "never",
    SHAPE: -5,
    BODY: {
        SPEED: 1.25,
        RANGE: 120,
    },
}
Class.assemblerTrap = {
    PARENT: "setTrap",
    LABEL: "Assembler Trap",
    BODY: {
        SPEED: 0.7,
        ACCEL: 0.75
    },
    TURRETS: [
        {
            POSITION: [4, 0, 0, 0, 360, 1],
            TYPE: 'assemblerDot'
        }
    ],
    HITS_OWN_TYPE: 'assembler'
}
Class.shotTrapBox = {
    PARENT: 'unsetTrap',
    MOTION_TYPE: "glide",
}

// Pillboxes
Class.pillbox = {
    PARENT: "setTrap",
    LABEL: "Pillbox",
    CONTROLLERS: ["nearestDifferentMaster"],
    INDEPENDENT: true,
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxTurret",
        },
    ],
}
Class.weakPillbox = {
    PARENT: "trap",
    LABEL: "Trapbox",
    CONTROLLERS: ["nearestDifferentMaster"],
    INDEPENDENT: true,
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxWeakTurret",
        },
    ],
}
Class.weakestPillbox = {
    PARENT: "trap",
    LABEL: "Trapbox",
    CONTROLLERS: ["nearestDifferentMaster"],
    INDEPENDENT: true,
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxWeakestTurret",
        },
    ],
}
Class.unsetPillbox = {
    PARENT: "unsetTrap",
    LABEL: "Pillbox",
    CONTROLLERS: ["nearestDifferentMaster"],
    INDEPENDENT: true,
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxTurret",
        },
    ],
}
Class.legionaryPillbox = {
    PARENT: "unsetTrap",
    LABEL: "Pillbox",
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "legionaryTwin",
        },
    ],
}
Class.smallGravel = {
    PARENT: "trap",
    COLOR: "gray",
    LABEL: "Small Gravel",
    SIZE: 0.1,
    SHAPE: -7
}

// Swarms
Class.autoswarm = {
    PARENT: "swarm",
    AI: {
        FARMER: true
    },
    INDEPENDENT: true
}
Class.fireworkPropTriangle = {
    SHAPE: "M -1 1.0037 V -1 l 2.0037 1.0018 z",
}
Class.fireworkLines = {
    SHAPE: "m -1.9 -0.9 v 0.6829 L -1.6272 -0.9 Z m 0.6642 0 L -1.9 0.7613 V 0.9078 H -1.1571 L -0.4344 -0.9 Z M -0.043 -0.9 L -0.7657 0.9078 H 0.0357 L 0.7584 -0.9 Z m 1.1928 0 L 0.4271 0.9078 H 1.2285 L 1.9114 -0.8001 V -0.9 Z m 0.7615 1.0784 l -0.2915 0.7295 h 0.2915 z",
    BORDERLESS: true,
}
Class.fireworkBorder = {
    SHAPE: "M -1.9982 1.0117 V -0.992 H 2.0091 V 1.0117 Z",
    DRAW_FILL: false,
}
Class.fireworkFill = {
    SHAPE: "M -1.9982 1.0117 V -0.992 H 2.0091 V 1.0117 Z",
    BORDERLESS: true,
}
Class.fireworkShrapnel = {
   PARENT: 'bullet',
   GUNS: [ {
         POSITION: [ 7, 25, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.1, speed: 3.5, health: 9999, damage: 0, spray: 2.5}]),
            TYPE: ["fireworkFireBullet", {PERSISTS_AFTER_DEATH: true, MOTION_TYPE: "colorthingynocolor", COLOR: "yellow"}],
            DRAW_FILL: false,
            BORDERLESS: true,
            AUTOFIRE: true,
         }, }, 
     ],
};
Class.fireworkFireBullet = {
    SHAPE: 0,
    ALPHA: 0.75,
}

Class.fireworkMissile = {
    PARENT: "rocketswarm",
    INDEPENDENT: true,
    SHAPE: "M -1.9982 1.0117 V -0.992 H 2.0091 V 1.0117 Z",
    COLOR: "red",
    BORDERLESS: true,
    ON: [{
      event: "death",
      handler: ({ body }) => {
        for (let i = 0, s = 20; i < s; i++) {
          let force = 50
          let angle = ((360 / s) * i) * (Math.PI / 180)
          let o = new Entity({
            x: body.x,
            y: body.y
          })
          o.define(Class.fireworkShrapnel)
          o.define({ BODY: {HEALTH: 1, DAMAGE: 0.5 }, COLOR: "yellow", SIZE: 5 })
          o.team = body.team
          o.color = body.color
          o.velocity.x = force * Math.cos(angle)
          o.velocity.y = force * Math.sin(angle)
        }
      }
    }],
    GUNS: [ {
         POSITION: [ 17, 22, 1, 0, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.1, speed: 5, health: 9999, damage: 0}]),
            TYPE: ["fireworkFireBullet", {PERSISTS_AFTER_DEATH: true, MOTION_TYPE: "colorthingynocolor", COLOR: "red", LAYER: 1}],
            DRAW_FILL: false,
            BORDERLESS: true,
            AUTOFIRE: true,
         }, }, { 
         POSITION: [ 17, 21, 1, 0, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.1, speed: 5, health: 9999, damage: 0}]),
            TYPE: ["fireworkFireBullet", {PERSISTS_AFTER_DEATH: true, MOTION_TYPE: "colorthingynocolor", COLOR: "orange", LAYER: 2}],
            DRAW_FILL: false,
            BORDERLESS: true,
            AUTOFIRE: true,
         }, }, { 
         POSITION: [ 17, 20, 1, 0, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.1, speed: 5, health: 9999, damage: 0}]),
            TYPE: ["fireworkFireBullet", {PERSISTS_AFTER_DEATH: true, MOTION_TYPE: "colorthingynocolor", COLOR: "yellow", LAYER: 3}],
            DRAW_FILL: false,
            BORDERLESS: true,
            AUTOFIRE: true,
         }, },
    ],
    PROPS: [
        {
            POSITION: [20, 0, 0, 0, 360, 1],
            TYPE: ["fireworkFill", {COLOR: "red"}],
        },
        {
            POSITION: [20, 32, 0, 0, 360, 2],
            TYPE: ["fireworkPropTriangle", {COLOR: "red"}],
        },
        {
            POSITION: [20, 0, 0, 0, 360, 3],
            TYPE: ["fireworkLines", {COLOR: "white"}],
        },
        {
            POSITION: [20, 0, 0, 0, 360, 4],
            TYPE: ["fireworkBorder", {COLOR: "red"}],
        },
    ],
}
Class.swarmX = {
    PARENT: "swarm",
    AI: {
        FARMER: true
    },
    INDEPENDENT: true,
    COLOR: 19,
    TURRETS: [
        {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: ['corruptx', { FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }] }]
        },
    ],
}
Class.bee = {
    PARENT: "swarm",
    PERSISTS_AFTER_DEATH: true,
    SHAPE: 4,
    LABEL: "Drone",
    HITS_OWN_TYPE: "hardWithBuffer"
}
Class.turretedBee = makeAuto('bee', "Turreted Bee", {type: "bulletAutoTurret", size: 11.5, angle: 0})
Class.homingBullet = {
    PARENT: "autoswarm",
    SHAPE: 0,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    CAN_GO_OUTSIDE_ROOM: true
}
