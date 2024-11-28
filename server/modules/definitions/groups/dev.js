const { combineStats, menu, addAura, makeDeco, LayeredBoss, newWeapon, weaponArray, makeRadialAuto, makeAuto, makeTurret, makeGuard } = require('../facilitators.js');
const { base, basePolygonDamage, basePolygonHealth, dfltskl, statnames, smshskl } = require('../constants.js');
const g = require('../gunvals.js');
require('./tanks.js');
require('./food.js');

// Menus
Class.developer = {
    PARENT: "genericTank",
    LABEL: "Developer",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: base.HEALTH,
        DAMAGE: 10,
        SPEED: base.SPEED,
        DENSITY: 20,
        FOV: 1.25,
    },
    SKILL_CAP: Array(10).fill(dfltskl),
    IGNORED_BY_AI: true,
    RESET_CHILDREN: true,
    ACCEPTS_SCORE: true,
    CAN_BE_ON_LEADERBOARD: true,
    CAN_GO_OUTSIDE_ROOM: false,
    IS_IMMUNE_TO_TILES: false,
    SIZE: 24.5,
    FACING_TYPE: "spin",
    COLOR: "rainbow",
    DRAW_HEALTH: true,
    ARENA_CLOSER: true,
    INVISIBLE: [0, 0],
    ALPHA: [0, 1],
    HITS_OWN_TYPE: "hardOnlyTanks",
    NECRO: false,
    SHAPE: 9,
    TURRETS: [
        {
          POSITION: [69.5, 0, 0, 0, 0, 0],
          TYPE: "developerRingTurretBig",
        },
        {
          POSITION: [45, 0, 0, 0, 0, 0],
          TYPE: "developerRingTurret",
        },
        {
          POSITION: [11, 0, 0, 0, 361, 1],
          TYPE: "developerAnniTurret",
        },
        {
          POSITION: [23, 0, 0, 0, 0, 0],
          TYPE: ["developerDecoration", {COLOR: 16}],
        },
    ],
};
Class.developerRinger = {
    PARENT: "genericTank",
    LABEL: "Saturn",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        SPEED: 5.5,
        DENSITY: 20,
        FOV: 1.5,
    },
    SKILL_CAP: Array(10).fill(dfltskl),
    IGNORED_BY_AI: true,
    RESET_CHILDREN: true,
    ACCEPTS_SCORE: true,
    CAN_BE_ON_LEADERBOARD: true,
    CAN_GO_OUTSIDE_ROOM: false,
    IS_IMMUNE_TO_TILES: false,
    SIZE: 24.5,
    FACING_TYPE: "spin",
    COLOR: "rainbow",
    DRAW_HEALTH: true,
    ARENA_CLOSER: true,
    INVISIBLE: [0, 0],
    ALPHA: [0, 1],
    HITS_OWN_TYPE: "hardOnlyTanks",
    NECRO: false,
    SHAPE: 9,
    TURRETS: [
        {
          POSITION: [170, 0, 0, 0, 0, 0],
          TYPE: "developerRingTurretBiggest",
        },
        {
          POSITION: [120, 0, 0, 0, 0, 0],
          TYPE: "developerRingTurretBigger",
        },
        {
          POSITION: [69.5, 0, 0, 0, 0, 0],
          TYPE: "developerRingTurretBig",
        },
        {
          POSITION: [45, 0, 0, 0, 0, 0],
          TYPE: "developerRingTurret",
        },
        {
          POSITION: [11, 0, 0, 0, 361, 1],
          TYPE: "developerAnniTurret",
        },
        {
          POSITION: [23, 0, 0, 0, 0, 0],
          TYPE: ["developerDecoration", {COLOR: 16}],
        },
    ],
};
Class.developerAnniTurret = makeTurret({
   GUNS: [ {
         POSITION: [ 20, 19.5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.half_reload, g.half_reload, g.faster, g.omega_damage, g.op, {size: 1.5}]),
            TYPE: "bullet",
         }, }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.developerRifleTurret = makeTurret({
    GUNS: [
        {
            POSITION: [20, 12, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.half_reload, g.half_reload, g.omega_damage, g.faster, g.op]),
                TYPE: "bullet"
            }
        }
    ]
}, {canRepel: true, limitFov: true, fov: 3})
Class.developerRangerTurret = makeTurret({
    GUNS: [
        {
            POSITION: [32, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.half_reload, g.half_reload, g.omega_damage, g.faster, g.op]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.developerDecoration = {
    PARENT: "genericTank",
    LABEL: "",
    SHAPE: 9,
}
Class.developerRingTurret = {
    LABEL: "Burn in despair.",
    FACING_TYPE: ["spin", { speed: 0.10 }],
    INDEPENDENT: true,
    SYNC_SKILLS: true,
    COLOR: "black",
    SHAPE: "M 0.0001 -1 A 1.0002 1.0002 0 0 0 -1 0.0001 A 1.0002 1.0002 0 0 0 0.0001 1.0002 A 1.0002 1.0002 0 0 0 1.0002 0.0001 A 1.0002 1.0002 0 0 0 0.0001 -1 Z m 0 0.0155 A 0.9849 0.9849 0 0 1 0.9854 0.0001 A 0.9849 0.9849 0 0 1 0.0001 0.9847 A 0.9849 0.9849 0 0 1 -0.9845 0.0001 A 0.9849 0.9849 0 0 1 0.0001 -0.9845 Z",
    TURRETS: [
        ...weaponArray({
          POSITION: [3.7, 9.85, 0, 0, 220, 1],
          TYPE: "miniDevRingTurret",
        }, 4),
        ...weaponArray({
          POSITION: [3.7, 9.85, 0, 45, 220, 1],
          TYPE: "miniDevRingTurret2",
        }, 4),
    ],
};
Class.developerRingTurretBig = {
    LABEL: "Burn in despair.",
    FACING_TYPE: ["spin", { speed: -0.10 }],
    INDEPENDENT: true,
    SYNC_SKILLS: true,
    COLOR: "black",
    SHAPE: "M 0.0001 -1 A 1.0002 1.0002 0 0 0 -1 0.0001 A 1.0002 1.0002 0 0 0 0.0001 1.0002 A 1.0002 1.0002 0 0 0 1.0002 0.0001 A 1.0002 1.0002 0 0 0 0.0001 -1 Z m 0 0.0155 A 0.9849 0.9849 0 0 1 0.9854 0.0001 A 0.9849 0.9849 0 0 1 0.0001 0.9847 A 0.9849 0.9849 0 0 1 -0.9845 0.0001 A 0.9849 0.9849 0 0 1 0.0001 -0.9845 Z",
    TURRETS: [
        ...weaponArray({
          POSITION: [3.7, 9.85, 0, 0, 220, 1],
          TYPE: "miniDevRingPellet",
        }, 4),
        ...weaponArray({
          POSITION: [3.7, 9.85, 0, 45, 220, 1],
          TYPE: "miniDevRingBorer",
        }, 4),
    ],
};
Class.developerRingTurretBiggest = {
    LABEL: "BURN IN DESPAIR.",
    FACING_TYPE: ["spin", { speed: -0.115 }],
    INDEPENDENT: true,
    SYNC_SKILLS: true,
    COLOR: "black",
    SHAPE: "M 0.0001 -1 A 1.0002 1.0002 0 0 0 -1 0.0001 A 1.0002 1.0002 0 0 0 0.0001 1.0002 A 1.0002 1.0002 0 0 0 1.0002 0.0001 A 1.0002 1.0002 0 0 0 0.0001 -1 Z m 0 0.0155 A 0.9849 0.9849 0 0 1 0.9854 0.0001 A 0.9849 0.9849 0 0 1 0.0001 0.9847 A 0.9849 0.9849 0 0 1 -0.9845 0.0001 A 0.9849 0.9849 0 0 1 0.0001 -0.9845 Z",
    TURRETS: [
        ...weaponArray({
          POSITION: [3.7, 9.85, 0, 0, 220, 1],
          TYPE: "miniDevRingNat",
        }, 4),
        ...weaponArray({
          POSITION: [3.7, 9.85, 0, 45, 220, 1],
          TYPE: "miniDevRingEnto",
        }, 4),
    ],
};
Class.developerRingTurretBigger = {
    LABEL: "BURN IN DESPAIR.",
    FACING_TYPE: ["spin", { speed: 0.115 }],
    INDEPENDENT: true,
    SYNC_SKILLS: true,
    COLOR: "black",
    SHAPE: "M 0.0001 -1 A 1.0002 1.0002 0 0 0 -1 0.0001 A 1.0002 1.0002 0 0 0 0.0001 1.0002 A 1.0002 1.0002 0 0 0 1.0002 0.0001 A 1.0002 1.0002 0 0 0 0.0001 -1 Z m 0 0.0155 A 0.9849 0.9849 0 0 1 0.9854 0.0001 A 0.9849 0.9849 0 0 1 0.0001 0.9847 A 0.9849 0.9849 0 0 1 -0.9845 0.0001 A 0.9849 0.9849 0 0 1 0.0001 -0.9845 Z",
    TURRETS: [
        ...weaponArray({
          POSITION: [3.7, 9.85, 0, 0, 220, 1],
          TYPE: "miniDevRingPelletCep",
        }, 4),
        ...weaponArray({
          POSITION: [3.7, 9.85, 0, 45, 220, 1],
          TYPE: "miniDevRingBorerCep",
        }, 4),
    ],
};
Class.miniDevRingTurret = {
    LABEL: "Rifle Developer",
    SHAPE: 9,
    COLOR: "rainbow",
    TURRETS: [
        {
          POSITION: [13.5, 0, 0, 0, 361, 1],
          TYPE: "developerRifleTurret",
        },
        {
          POSITION: [23, 0, 0, 0, 0, 0],
          TYPE: ["developerDecoration", {COLOR: 16}],
        },
    ],
};
Class.miniDevRingTurret2 = {
    LABEL: "Ranger Developer",
    SHAPE: 9,
    COLOR: "rainbow",
    TURRETS: [
        {
          POSITION: [13.5, 0, 0, 0, 361, 1],
          TYPE: "developerRangerTurret",
        },
        {
          POSITION: [23, 0, 0, 0, 0, 0],
          TYPE: ["developerDecoration", {COLOR: 16}],
        },
    ],
};
Class.miniDevRingPellet = {
    LABEL: "Pelleter Developer",
    SHAPE: 9,
    COLOR: "rainbow",
    TURRETS: [
        {
          POSITION: [13.5, 0, 0, 0, 361, 1],
          TYPE: "pellTurret2",
        },
        {
          POSITION: [23, 0, 0, 0, 0, 0],
          TYPE: ["developerDecoration", {COLOR: 16}],
        },
    ],
};
Class.miniDevRingBorer = {
    LABEL: "Borer Developer",
    SHAPE: 9,
    COLOR: "rainbow",
    TURRETS: [
        {
          POSITION: [13.5, 0, 0, 0, 361, 1],
          TYPE: "boreTurret2",
        },
        {
          POSITION: [23, 0, 0, 0, 0, 0],
          TYPE: ["developerDecoration", {COLOR: 16}],
        },
    ],
};
Class.miniDevRingPelletCep = {
    LABEL: "Pelleterception Developer",
    SHAPE: 9,
    COLOR: "rainbow",
    TURRETS: [
        {
          POSITION: [13.5, 0, 0, 0, 361, 1],
          TYPE: "pellcepTurret",
        },
        {
          POSITION: [23, 0, 0, 0, 0, 0],
          TYPE: ["developerDecoration", {COLOR: 16}],
        },
    ],
};
Class.miniDevRingBorerCep = {
    LABEL: "Boreception Developer",
    SHAPE: 9,
    COLOR: "rainbow",
    TURRETS: [
        {
          POSITION: [13.5, 0, 0, 0, 361, 1],
          TYPE: "borecepTurret",
        },
        {
          POSITION: [23, 0, 0, 0, 0, 0],
          TYPE: ["developerDecoration", {COLOR: 16}],
        },
    ],
};
Class.miniDevRingNat = {
    LABEL: "Naturalist Developer",
    SHAPE: 9,
    COLOR: "rainbow",
    TURRETS: [
        {
          POSITION: [13.5, 0, 0, 0, 361, 1],
          TYPE: "natTurret",
        },
        {
          POSITION: [23, 0, 0, 0, 0, 0],
          TYPE: ["developerDecoration", {COLOR: 16}],
        },
    ],
};
Class.miniDevRingEnto = {
    LABEL: "Entomologist Developer",
    SHAPE: 9,
    COLOR: "rainbow",
    TURRETS: [
        {
          POSITION: [13.5, 0, 0, 0, 361, 1],
          TYPE: "entoTurret",
        },
        {
          POSITION: [23, 0, 0, 0, 0, 0],
          TYPE: ["developerDecoration", {COLOR: 16}],
        },
    ],
};
Class.fullSkills = {
    PARENT: "genericTank",
    LABEL: "Full Skills",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: base.HEALTH,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
    },
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
    IGNORED_BY_AI: true,
    RESET_CHILDREN: true,
    ACCEPTS_SCORE: true,
    CAN_BE_ON_LEADERBOARD: true,
    CAN_GO_OUTSIDE_ROOM: false,
    IS_IMMUNE_TO_TILES: false,
    DRAW_HEALTH: true,
    ARENA_CLOSER: true,
    INVISIBLE: [0, 0],
    ALPHA: [0, 1],
    HITS_OWN_TYPE: "hardOnlyTanks",
    NECRO: false,
    SHAPE: [
        [-1, -0.8],
        [-0.8, -1],
        [0.8, -1],
        [1, -0.8],
        [0.2, 0],
        [1, 0.6],
        [0.8, 1],
        [-0.8, 1],
        [-1, 0.8],
    ],
    GUNS: [
        {
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: "developerBullet"
            }
        }
    ]
}
Class.spectator = {
    PARENT: "genericTank",
    LABEL: "Spectator",
    ALPHA: 0,
    CAN_BE_ON_LEADERBOARD: false,
    ACCEPTS_SCORE: false,
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    IGNORED_BY_AI: true,
    ARENA_CLOSER: true,
    IS_IMMUNE_TO_TILES: true,
    TOOLTIP: "Left click to teleport, Right click above or below the screen to change FOV",
    SKILL_CAP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 255],
    BODY: {
        PUSHABILITY: 0,
        SPEED: 5,
        FOV: 2.5,
        DAMAGE: 0,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
    TURRETS: [
        {
            POSITION: [12.5, 0, 0, 0, 360, 1],
            TYPE: "eye",
        },
    ],
    GUNS: [{
        POSITION: [0,0,0,0,0,0,0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.2}, g.fake]),
            TYPE: "bullet",
            ALPHA: 0
        }
    }, {
        POSITION: [0, 0, 0, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.25 }, g.fake]),
            TYPE: "bullet",
            ALPHA: 0,
            ALT_FIRE: true,
        }
    }],
    ON: [{
        event: "fire",
        handler: ({ body }) => {
            body.x = body.x + body.control.target.x
            body.y = body.y + body.control.target.y
        }
    }, {
        event: "altFire",
        handler: ({ body }) => body.FOV = body.y + body.control.target.y < body.y ? body.FOV + 0.5 : Math.max(body.FOV - 0.5, 0.2)
    }]
}

Class.generatorBase = {
    PARENT: "genericTank",
    LABEL: "Generator",
    ALPHA: 0,
    IGNORED_BY_AI: true,
    CAN_BE_ON_LEADERBOARD: false,
    ACCEPTS_SCORE: false,
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    IS_IMMUNE_TO_TILES: true,
    SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
    BODY: {
        SPEED: 5,
        FOV: 2.5,
        DAMAGE: 0,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
}

Class.eliteGenerators = {
   PARENT: 'genericTank',
   LABEL: 'Elite',
   TOOLTIP: "Fire to spawn celestial, alt fire to spawn terrestrial.",
   SHAPE: 3.5,
   COLOR: "pink",
   ALPHA: 0,
   IGNORED_BY_AI: true,
   CAN_BE_ON_LEADERBOARD: false,
   ACCEPTS_SCORE: false,
   DRAW_HEALTH: false,
   HITS_OWN_TYPE: "never",
   ARENA_CLOSER: true,
   IS_IMMUNE_TO_TILES: true,
   SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
   BODY: {
        SPEED: 5,
        FOV: 2.5,
        DAMAGE: 0,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
   },
};
Class.destroyerGenerator = {
   PARENT: 'eliteGenerators',
   LABEL: 'Destroyer Generator',
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["eliteDestroyer", {SIZE: 27}],
         }, },
     ],
};
Class.ringGenerator = {
   PARENT: 'eliteGenerators',
   LABEL: 'Ringer Generator',
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["eliteFallenRing", {SIZE: 27}],
         }, },
     ],
};
Class.gunnerGenerator = {
   PARENT: 'eliteGenerators',
   LABEL: 'Gunner Generator',
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["eliteGunner", {SIZE: 27}],
         }, },
     ],
};
Class.sprayerGenerator = {
   PARENT: 'eliteGenerators',
   LABEL: 'Sprayer Generator',
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["eliteSprayer", {SIZE: 27}],
         }, },
     ],
};
Class.pelleterGenerator = {
   PARENT: 'eliteGenerators',
   LABEL: 'Pelleter Generator',
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["elitePelleter", {SIZE: 27}],
         }, },
     ],
};
Class.battleshipGenerator = {
   PARENT: 'eliteGenerators',
   LABEL: 'Battleship Generator',
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["eliteBattleship", {SIZE: 27}],
         }, },
     ],
};
Class.spawnerGenerator = {
   PARENT: 'eliteGenerators',
   LABEL: 'Spawner Generator',
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["eliteSpawner", {SIZE: 27}],
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            ALT_FIRE: true,
            TYPE: ["omegaSpawner", {SIZE: 27}],
         }, },
     ],
};
Class.trapGuardGenerator = {
   PARENT: 'eliteGenerators',
   LABEL: 'Trap Guard Generator',
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["eliteTrapGuard", {SIZE: 27}],
         }, },
     ],
};
Class.spinnerGenerator = {
   PARENT: 'eliteGenerators',
   LABEL: 'Spinner Generator',
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["eliteSpinner", {SIZE: 27}],
         }, },
     ],
};
Class.skimmerGenerator = {
   PARENT: 'eliteGenerators',
   LABEL: 'Skimmer Generator',
   COLOR: "orange",
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["eliteSkimmer", {SIZE: 27}],
         }, },
     ],
};
Class.celestialsGenerators = {
   PARENT: 'genericTank',
   LABEL: 'Celestial',
   TOOLTIP: "Fire to spawn celestial, alt fire to spawn terrestrial.",
   SHAPE: 9,
   ALPHA: 0,
   IGNORED_BY_AI: true,
   CAN_BE_ON_LEADERBOARD: false,
   ACCEPTS_SCORE: false,
   DRAW_HEALTH: false,
   HITS_OWN_TYPE: "never",
   ARENA_CLOSER: true,
   IS_IMMUNE_TO_TILES: true,
   SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
   BODY: {
        SPEED: 5,
        FOV: 2.5,
        DAMAGE: 0,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
   },
};
Class.paladinCeleGenerator = {
   PARENT: 'celestialsGenerators',
   LABEL: 'Paladin/Ares Generator',
   COLOR: "purple",
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["paladin", {SIZE: 51}],
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            ALT_FIRE: true,
            TYPE: ["ares", {SIZE: 41}],
         }, }, 
     ],
};
Class.freyjaCeleGenerator = {
   PARENT: 'celestialsGenerators',
   LABEL: 'Freyja/Gersemi Generator',
   COLOR: "lightGreen",
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["freyja", {SIZE: 51}],
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            ALT_FIRE: true,
            TYPE: ["gersemi", {SIZE: 41}],
         }, }, 
     ],
};
Class.zaphCeleGenerator = {
   PARENT: 'celestialsGenerators',
   LABEL: 'Zaphkiel/Ezekiel Generator',
   COLOR: "orange",
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["zaphkiel", {SIZE: 51}],
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            ALT_FIRE: true,
            TYPE: ["ezekiel", {SIZE: 41}],
         }, }, 
     ],
};
Class.nyxCeleGenerator = {
   PARENT: 'celestialsGenerators',
   LABEL: 'Nyx/Eris Generator',
   COLOR: "pink",
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["nyx", {SIZE: 51}],
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            ALT_FIRE: true,
            TYPE: ["eris", {SIZE: 41}],
         }, }, 
     ],
};
Class.theiaCeleGenerator = {
   PARENT: 'celestialsGenerators',
   LABEL: 'Theia/Selene Generator',
   COLOR: "gold",
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["theia", {SIZE: 51}],
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            ALT_FIRE: true,
            TYPE: ["selene", {SIZE: 41}],
         }, }, 
     ],
};
Class.juliusCeleGenerator = {
   PARENT: 'celestialsGenerators',
   LABEL: 'Julius/Plutus Generator',
   COLOR: "darkGrey",
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["julius", {SIZE: 51}],
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            ALT_FIRE: true,
            TYPE: ["plutus", {SIZE: 41}],
         }, }, 
     ],
};
Class.genghisCeleGenerator = {
   PARENT: 'celestialsGenerators',
   LABEL: 'Genghis/Althea Generator',
   COLOR: "darkGrey",
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["genghis", {SIZE: 51}],
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            ALT_FIRE: true,
            TYPE: ["althea", {SIZE: 41}],
         }, }, 
     ],
};
Class.napoleonCeleGenerator = {
   PARENT: 'celestialsGenerators',
   LABEL: 'Napoleon/Elpis Generator',
   COLOR: "darkGrey",
   GUNS: [ {
         POSITION: [ 21, 11, -0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, {recoil: 0}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            TYPE: ["napoleon", {SIZE: 51}],
         }, }, {
         POSITION: [ 19, 15, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0, size: 1}]),
            INDEPENDENT_CHILDREN: true,
            ALT_FIRE: true,
            TYPE: ["elpis", {SIZE: 41}],
         }, }, 
     ],
};

Class.bosses = menu("Bosses")
Class.oldTanks = menu("Old Tanks")
Class.themed = menu("Themed", "rainbow", 9)
Class.normalBosses = menu("Normal", "lightGreen")
Class.other = menu("Other", 17)
Class.arBosses = menu("Arms Race")
Class.provokerBosses = menu("Provokers", "lightGreen", 8)
Class.hurricaneBosses = menu("Hurricanes")
Class.hurricaneBosses2 = menu("Page 2")
Class.hurricaneBosses3 = menu("Page 3")
Class.otherShit = menu("Test/Random Bosses")
Class.otherShit2 = menu("Page 2")
Class.otherShit3 = menu("Page 3")
Class.bossGenerator = menu("Boss Generator")
Class.celestialSection = menu("Celestials/Terrestrials")
Class.eliteSection = menu("Elites")
Class.tieredBosses = menu("Tiered Bosses", 9)
Class.dctPage3 = menu("DCT Page 3")
Class.dctPage4 = menu("DCT Page 4")
Class.dctPage5 = menu("DCT Page 5")
Class.dctPage6 = menu("DCT Page 6")
Class.dctPage7 = menu("DCT Page 7")
Class.opWoomyTanks = menu("OP Woomy Tanks")
Class.corruptMenu = menu("Corrupt X")
Class.bosses.REROOT_UPGRADE_TREE = "bosses"
Class.fallens = menu("Fallen", "#c0c0c0")
Class.shapeMenu = menu("Shapes", "gold", 4)
Class.shapeMenu.UPGRADE_TOOLTIP = ("Too lazy to put them in generators :)")
Class.shapeMenu.GUNS = []
Class.halloween = menu("Halloween", "#ff9000", 9)
Class.halloween.PROPS = [
        ...weaponArray({
            POSITION: [10, -4.5, 0, 0, 360, 1],
            TYPE: "pumpkinLine",
        }, 9),
        {
            POSITION: [6.5, 0, 0, 0, 360, 2],
            TYPE: "pumpkinCircle",
        },
        {
            POSITION: [4.5, 0, 0, 0, 360, 3],
            TYPE: "pumpkinStar",
        },
]
Class.sentries = menu("Sentries", "pink", 3.5)
Class.sentries2 = menu("Page 2", "pink", 3.5)
Class.sentries.PROPS = [
    {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: "genericEntity"
    }
]
Class.elites = menu("Elites", "pink", 3.5)
Class.elites2 = menu("Page 2", "pink", 3.5)
Class.mysticals = menu("Mysticals", "gold", 4)
Class.nesters = menu("Nesters", "purple", 5.5)
Class.rogues = menu("Rogues", "darkGrey", 6)
Class.rammers = menu("Rammers", "aqua")
Class.rammers.PROPS = [
    {
        POSITION: [21.5, 0, 0, 360, -1],
        TYPE: "smasherBody",
    }
]
Class.terrestrials = menu("Terrestrials", "orange", 7)
Class.celestials = menu("Celestials", "lightGreen", 9)
Class.customCelestials = menu("Custom Celestials", "lightGreen", 9)
Class.eternals = menu("Eternals", "veryLightGrey", 11)
Class.devBosses = menu("Developers", "lightGreen", 4)
Class.devBosses.UPGRADE_COLOR = "rainbow"

Class.tanks = menu("Tanks")
Class.dwajlCustomTanks = menu("Dwajl Custom Tanks")
Class.dctPage2 = menu("DCT Page 2")
Class.unavailable = menu("Unavailable")
Class.dominators = menu("Dominators")
Class.dominators.PROPS = [
    {
        POSITION: [22, 0, 0, 360, 0],
        TYPE: "dominationBody",
    }
]
Class.sanctuaries = menu("Sanctuaries")
Class.sanctuaries.PROPS = [
    {
        POSITION: [22, 0, 0, 360, 0],
        TYPE: "dominationBody",
    }, {
        POSITION: [13, 0, 0, 360, 1],
        TYPE: "healerSymbol",
    }
]

// Generators
function compileMatrix(matrix, matrix2Entrance) {
    let matrixWidth = matrix[0].length,
        matrixHeight = matrix.length;
    for (let x = 0; x < matrixWidth; x++) for (let y = 0; y < matrixHeight; y++) {
        let str = matrix[y][x],
            LABEL = str[0].toUpperCase() + str.slice(1).replace(/[A-Z]/g, m => ' ' + m) + " Generator",
            code = str + 'Generator';
        Class[code] = matrix[y][x] = {
            PARENT: "generatorBase",
            LABEL,
            TURRETS: [{
                POSITION: [5 + y * 2, 0, 0, 0, 0, 1],
                TYPE: str,
            }],
            GUNS: [{
                POSITION: [14, 12, 1, 4, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }, g.fake]),
                    TYPE: "bullet"
                }
            }, {
                POSITION: [12, 12, 1.4, 4, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }]),
                    INDEPENDENT_CHILDREN: true,
                    TYPE: str
                },
            }],
        };
    }
}
function connectMatrix(matrix, matrix2Entrance) {
    let matrixWidth = matrix[0].length,
        matrixHeight = matrix.length;
    for (let x = 0; x < matrixWidth; x++) for (let y = 0; y < matrixHeight; y++) {
        let top = (y + matrixHeight - 1) % matrixHeight,
            bottom = (y + matrixHeight + 1) % matrixHeight,
            left = (x + matrixWidth - 1) % matrixWidth,
            right = (x + matrixWidth + 1) % matrixWidth,

        center = matrix[y     ][x    ];
        top    = matrix[top   ][x    ];
        bottom = matrix[bottom][x    ];
        left   = matrix[y     ][left ];
        right  = matrix[y     ][right];

        matrix[y][x].UPGRADES_TIER_0 = [
            "developer" ,  top    , "spectator",
             left       ,  center ,  right      ,
            "basic"     ,  bottom ,  matrix2Entrance
        ];
    }
}
let generatorMatrix = [
    [ "egg"           , "gem"                , "jewel"                  , "crasher"             , "sentry"               , "shinySentry"        , "EggRelic"           , "sphere"       , "nestWarden"],
    [ "square"        , "shinySquare"        , "legendarySquare"        , "shadowSquare"        , "rainbowSquare"        , "transSquare"        , "unknown0Square"        , "SquareRelic"        , "cube"         , "nestGuardian"],
    [ "triangle"      , "shinyTriangle"      , "legendaryTriangle"      , "shadowTriangle"      , "rainbowTriangle"      , "transTriangle"      , "unknown0Triangle"        , "TriangleRelic"      , "tetrahedron"  , "roguePalisade"],
    [ "pentagon"      , "shinyPentagon"      , "legendaryPentagon"      , "shadowPentagon"      , "rainbowPentagon"      , "transPentagon"      , "unknown0Pentagon"        , "PentagonRelic"      , "octahedron"   , "nestKeeper"],
    [ "betaPentagon"  , "shinyBetaPentagon"  , "legendaryBetaPentagon"  , "shadowBetaPentagon"  , "rainbowBetaPentagon"  , "transBetaPentagon"  , "unknown0BetaPentagon"        , "BetaPentagonRelic"  , "dodecahedron" , "paladin"],
    [ "alphaPentagon" , "shinyAlphaPentagon" , "legendaryAlphaPentagon" , "shadowAlphaPentagon" , "rainbowAlphaPentagon" , "transAlphaPentagon" , "unknown0AlphaPentagon"        , "AlphaPentagonRelic" , "icosahedron"  , "freyja"],
    [ "hexagon"       , "shinyHexagon"       , "legendaryHexagon"       , "shadowHexagon"       , "rainbowHexagon"       , "transHexagon"       , "unknown0Hexagon"        , "HexagonRelic"       , "tesseract"    , "nyx"],
],
gemRelicMatrix = [];
for (let tier of [ "", "Square", "Triangle", "Pentagon", "BetaPentagon", "AlphaPentagon", "Hexagon" ]) {
    let row = [];
    for (let gem of [ "Power", "Space", "Reality", "Soul", "Time", "Mind" ]) {
        row.push(gem + (tier ? tier + 'Relic' : 'Gem'));
    }
    gemRelicMatrix.push(row);
}

compileMatrix(generatorMatrix);
compileMatrix(gemRelicMatrix);

// Tensor = N-Dimensional Array, BASICALLY
let labyTensor = [];
for (let poly = 0; poly < 5; poly++) {
    let row = [];
    for (let tier = 0; tier < 6; tier++) {
        let column = [];
        for (let shiny = 0; shiny < 6; shiny++) {
            let tube = [];
            for (let rank = 0; rank < 2; rank++) {
                let str = `laby_${poly}_${tier}_${shiny}_${rank}`,
                    LABEL = ensureIsClass(str).LABEL + " Generator";
                Class['generator_' + str] = {
                    PARENT: "generatorBase",
                    LABEL,
                    TURRETS: [{
                        POSITION: [5 + tier * 2, 0, 0, 0, 0, 1],
                        TYPE: str,
                    }],
                    GUNS: [{
                        POSITION: [14, 12, 1, 4, 0, 0, 0],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }, g.fake]),
                            TYPE: "bullet"
                        }
                    }, {
                        POSITION: [12, 12, 1.4, 4, 0, 0, 0],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }]),
                            INDEPENDENT_CHILDREN: true,
                            TYPE: str
                        },
                    }],
                };
                tube.push('generator_' + str);
            }
            column.push(tube);
        }
        row.push(column);
    }
    labyTensor.push(row);
}

connectMatrix(generatorMatrix, 'PowerGemGenerator');
connectMatrix(gemRelicMatrix, 'generator_laby_0_0_0_0');

let tensorWidth = labyTensor.length,
    tensorHeight = labyTensor[0].length,
    tensorLength = labyTensor[0][0].length,
    tensorDepth = labyTensor[0][0][0].length;

for (let x = 0; x < tensorWidth; x++) {
    for (let y = 0; y < tensorHeight; y++) {
        for (let z = 0; z < tensorLength; z++) {
            for (let w = 0; w < tensorDepth; w++) {

                let left = (x + tensorWidth - 1) % tensorWidth,
                    right = (x + tensorWidth + 1) % tensorWidth,
                    top = (y + tensorHeight - 1) % tensorHeight,
                    bottom = (y + tensorHeight + 1) % tensorHeight,
                    front = (z + tensorLength - 1) % tensorLength,
                    back = (z + tensorLength + 1) % tensorLength,
                    past = (w + tensorDepth - 1) % tensorDepth,
                    future = (w + tensorDepth + 1) % tensorDepth,
            
                center = labyTensor[x    ][y     ][z    ][w     ];
                top    = labyTensor[x    ][top   ][z    ][w     ];
                bottom = labyTensor[x    ][bottom][z    ][w     ];
                left   = labyTensor[left ][y     ][z    ][w     ];
                right  = labyTensor[right][y     ][z    ][w     ];
                front  = labyTensor[x    ][y     ][front][w     ];
                back   = labyTensor[x    ][y     ][back ][w     ];
                past   = labyTensor[x    ][y     ][z    ][past  ];
                future = labyTensor[x    ][y     ][z    ][future];

                Class[labyTensor[x][y][z][w]].UPGRADES_TIER_0 = [
                    "developer"         , left  , right  ,
                    "teams"             , top   , bottom ,
                    "eggGenerator"      , front , back   ,
                    "PowerGemGenerator" , past  , future
                ];
            }
        }
    }
}

// Testing tanks
Class.diamondShape = {
    PARENT: "basic",
    LABEL: "Rotated Body",
    SHAPE: 4.5
};

Class.mummyHat = {
    SHAPE: 4.5,
    COLOR: -1
};
Class.mummy = {
    PARENT: "drone",
    SHAPE: 4,
    NECRO: [4],
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};
Class.mummifier = {
    PARENT: "genericTank",
    LABEL: "Mummifier",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 10,
    GUNS: [{
        POSITION: [5.5, 13, 1.1, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "necro"
        }
    },{
        POSITION: [5.5, 13, 1.1, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "necro"
        }
    }],
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};
Class.miscTestHelper2 = {
    PARENT: "genericTank",
    LABEL: "Turret Reload 3",
    MIRROR_MASTER_ANGLE: true,
    COLOR: -1,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noSpread]),
                TYPE: "bullet",
                COLOR: -1,
            },
        },
    ],
};
Class.miscTestHelper = {
    PARENT: "genericTank",
    LABEL: "Turret Reload 2",
    //MIRROR_MASTER_ANGLE: true,
    COLOR: {
        BASE: -1,
        BRIGHTNESS_SHIFT: 15,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noSpread]),
                TYPE: "bullet",
                COLOR: -1,
            },
        },
    ],
    TURRETS: [
        {
          POSITION: [20, 0, 20, 30, 0, 1],
          TYPE: "miscTestHelper2",
        }
    ]
};
Class.miscTest = {
    PARENT: "genericTank",
    LABEL: "Turret Reload",
    COLOR: "teal",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noSpread]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [20, 0, 20, 30, 0, 1],
            TYPE: "miscTestHelper",
        }
    ]
};
Class.mmaTest2 = {
    PARENT: "genericTank",
    MIRROR_MASTER_ANGLE: true,
    COLOR: "grey",
    GUNS: [{
            POSITION: [40, 4, 1, -20, 0, 0, 0],
        }],
}
Class.mmaTest1 = {
    PARENT: "genericTank",
    COLOR: -1,
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "mmaTest2",
        }
    ]
}
Class.mmaTest = {
    PARENT: "genericTank",
    LABEL: "Mirror Master Angle",
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "mmaTest2",
        },
        {
            POSITION: [20, 0, 20, 0, 360, 1],
            TYPE: "mmaTest1",
        },
    ]
}

Class.vulnturrettest_turret = {
    PARENT: "genericTank",
    COLOR: "grey",
    HITS_OWN_TYPE: 'hard',
    LABEL: 'Shield',
    COLOR: 'teal',
}

Class.vulnturrettest = {
    PARENT: "genericTank",
    LABEL: "Vulnerable Turrets",
    TOOLTIP: "[DEV NOTE] Vulnerable turrets are still being worked on and may not function as intended!",
    BODY: {
        FOV: 2,
    },
    DANGER: 6,
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet'
        }
    }],
    TURRETS: weaponArray({
        POSITION: {SIZE: 20, X: 40},
        TYPE: "vulnturrettest_turret",
        VULNERABLE: true
    }, 10)
};

Class.turretLayerTesting = {
    PARENT: 'genericTank',
    LABEL: 'Turret Layer Testing',
    TURRETS: [
        {
            POSITION: [20, 10, 10, 0, 0, 2],
            TYPE: ["basic", {COLOR: "lightGrey", MIRROR_MASTER_ANGLE: true}]
        },
        {
            POSITION: [20, 15, 5, 0, 0, 2],
            TYPE: ["basic", {COLOR: "grey", MIRROR_MASTER_ANGLE: true}]
        },
        {
            POSITION: [20, 10, -5, 0, 0, 1],
            TYPE: ["basic", {COLOR: "darkGrey", MIRROR_MASTER_ANGLE: true}]
        },
        {
            POSITION: [20, -10, -5, 0, 0, -2],
            TYPE: ["basic", {COLOR: "darkGrey", MIRROR_MASTER_ANGLE: true}]
        },
        {
            POSITION: [20, -10, 5, 0, 0, -1],
            TYPE: ["basic", {COLOR: "grey", MIRROR_MASTER_ANGLE: true}]
        },
    ]
}

Class.alphaGunTest = {
    PARENT: "basic",
    LABEL: "Translucent Guns",
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            ALPHA: 0.5
        }
    }]
}

Class.radialAutoTest = makeRadialAuto("gunner", {
    count: 5,
    isTurret: false,
    extraStats: {spray: 4, speed: 1.4, maxSpeed: 1.4, recoil: 0.2},
    turretIdentifier: "radialAutoTestTurret",
    size: 8,
    x: 10,
    arc: 220,
    angle: 36,
    label: "Radial Auto Test",
    rotation: 0.04,
    danger: 10,
})
Class.makeAutoTestTurret = makeTurret("ranger", {canRepel: true, limitFov: true, extraStats: {reload: 0.5}});
Class.makeAutoTest = {
    PARENT: 'genericTank',
    LABEL: "Make Auto Test",
    TURRETS: weaponArray({
        POSITION: [8, 10, 0, 0, 180, 0],
        TYPE: 'makeAutoTestTurret'
    }, 3)
}

Class.imageShapeTest = {
    PARENT: 'genericTank',
    LABEL: "Image Shape Test",
    SHAPE: '/round.png',
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            }
        }
    ]
}
Class.imageShapeTestTwo = {
    PARENT: 'genericTank',
    LABEL: "Image Shape Test Two",
    SHAPE: '/hexagonrelicrotated.png',
    SIZE: 45,
    GUNS: [ {
          POSITION: [ 18, 8, 1, 8, 0, 0, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic]),
             TYPE: "bullet",
          }, }, 
      ],
};
Class.strokeWidthTest = {
    PARENT: "basic",
    LABEL: "Stroke Width Test",
    STROKE_WIDTH: 2,
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            STROKE_WIDTH: 0.5
        }
    }]
}

Class.onTest = {
    PARENT: 'genericTank',
    LABEL: "ON property test",
    TOOLTIP: "Refer to Class.onTest in dev.js to know more.",
    ON: [{
        event: "fire",
        handler: ({ body, gun }) => {
            switch (gun.identifier) {
                case 'mainGun':
                    body.sendMessage(`I fired my main gun.`)
                    break;
                case 'secondaryGun':
                    body.sendMessage('I fired my secondary gun.')
                    break;
            }
        }
    }, {
        event: "altFire",
        handler: ({ body, gun }) => {
            body.sendMessage(`I fired my alt gun.`)
        }
    }, {
        event: "death",
        handler: ({ body, killers, killTools }) => {
            const killedOrDied = killers.length == 0 ? 'died.' : 'got killed.'
            body.sendMessage(`I ${killedOrDied}`)
        }
    }, {
        event: "collide",
        handler: ({ instance, other }) => {
            instance.sendMessage(`I collided with ${other.label}.`)
        }
    }, {
        event: "damage",
        handler: ({ body, damageInflictor, damageTool }) => { 
            body.sendMessage(`I got hurt`)
        }
    }],
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            IDENTIFIER: 'mainGun'
        }
    }, {
        POSITION: { ANGLE: 90 },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            ALT_FIRE: true
        }
    }, {
        POSITION: { ANGLE: 180, DELAY: 0.5 },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            IDENTIFIER: 'secondaryGun'
        }
    }]
}

Class.turretStatScaleTest = {
    PARENT: 'genericTank',
    LABEL: 'Turret Stat Test',
    TURRETS: Array(5).fill().map((_, i) => ({
        POSITION: [15, 0, -40 + 20 * i, 0, 360, 1],
        TYPE: ['autoTankGun', {GUN_STAT_SCALE: {speed: 1 + i / 5, maxSpeed: 1 + i / 5, reload: 1 + i / 5, recoil: 0}}]
    }))
}

Class.auraBasicGen = addAura();
Class.auraBasic = {
    PARENT: "genericTank",
    LABEL: "Aura Basic",
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraBasicGen"
        }
    ],
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
};
Class.auraHealerGen = addAura(-1);
Class.auraHealer = {
    PARENT: "genericTank",
    LABEL: "Aura Healer",
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraHealerGen"
        }
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
};

Class.ghoster_ghosted = {
    PARENT: "genericTank",
    TOOLTIP: 'You are now hidden, roam around and find your next target. You will be visible again in 5 seconds',
    LABEL: 'Ghoster',
    BODY: {
        SPEED: 20,
        ACCELERATION: 10,
        FOV: base.FOV + 1,
    },
    GUNS: [{
        POSITION: { WIDTH: 20, LENGTH: 20 },
    }],
    ALPHA: 0.6,
}

Class.ghoster = {
    PARENT: "genericTank",
    LABEL: 'Ghoster',
    TOOLTIP: 'Shooting will hide you for 5 seconds',
    BODY: {
        SPEED: base.SPEED,
        ACCELERATION: base.ACCEL,
    },
    ON: [
        {
            event: 'fire',
            handler: ({ body }) => {
                body.define("ghoster_ghosted")
                setTimeout(() => {
                    body.SPEED = 1e-99
                    body.ACCEL = 1e-99
                    body.FOV *= 2
                    body.alpha = 1
                }, 2000)
                setTimeout(() => {
                    body.SPEED = base.SPEED
                    body.define("ghoster")
                }, 2500)
            }
        }
    ],
    GUNS: [{
        POSITION: {WIDTH: 20, LENGTH: 20},
        PROPERTIES: {
            TYPE: 'bullet',
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator]),
        }
    }],
    ALPHA: 1,
}

Class.switcheroo = {
    PARENT: "basic",
    LABEL: 'Switcheroo',
    UPGRADES_TIER_0: [],
    RESET_UPGRADE_MENU: true,
    ON: [
        {
            event: "fire",
            handler: ({ body, globalMasterStore: store, gun }) => {
                if (gun.identifier != 'switcherooGun') return
                store.switcheroo_i ??= 0;
                store.switcheroo_i++;
                store.switcheroo_i %= 6;
                body.define(Class.basic.UPGRADES_TIER_1[store.switcheroo_i]);
                setTimeout(() => body.define("switcheroo"), 6000);
            }
        }
    ],
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            IDENTIFIER: 'switcherooGun'
        }
    }]
}

Class.expander = {
   PARENT: 'genericFlail',
   LABEL: 'Expander',
   UPGRADES_TIER_0: [],
   RESET_UPGRADE_MENU: true,
   TURRETS: [{
       POSITION: [6, 11.5, 0, 0, 190, 0],
       TYPE: "expandBolt2UNEX"
   }],
   ON: [
       {
           event: "altFire",
           handler: ({ body, globalMasterStore: store, gun }) => {
               if (gun.identifier != 'expanderGun') return
               body.define(Class.expanderEX);
           }
       }
   ],
   GUNS: [ {
         POSITION: [ 9, 14, 0.7, 3, 0, 0, 0, ],
         }, {
         POSITION: [ 0.1, 0.1, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
            TYPE: "bullet",
            IDENTIFIER: "expanderGun",
            ALT_FIRE: true,
         }, }, 
     ],
};
Class.expanderEX = {
   PARENT: 'genericFlail',
   LABEL: 'Expander',
   UPGRADES_TIER_0: [],
   RESET_UPGRADE_MENU: true,
   ON: [
       {
           event: "altFire",
           handler: ({ body, globalMasterStore: store, gun }) => {
               if (gun.identifier != 'expanderGun') return
               body.define(Class.expander);
           }
       }
   ],
   TURRETS: [{
       POSITION: [6, 11.5, 0, 0, 190, 0],
       TYPE: ["expandBolt5EX", {INDEPENDENT: true}],
   }],
   GUNS: [ {
         POSITION: [ 9, 14, 0.7, 3, 0, 0, 0, ],
         }, {
         POSITION: [ 0.1, 0.1, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
            TYPE: "bullet",
            IDENTIFIER: "expanderGun",
            ALT_FIRE: true,
         }, }, 
     ],
};

Class.vanquisher = {
    PARENT: "genericTank",
    DANGER: 8,
    LABEL: "Vanquisher",
    STAT_NAMES: statnames.generic,
    CONTROLLERS: ['stackGuns'],
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    //destroyer
    GUNS: [{
        POSITION: [21, 14, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
            TYPE: "bullet"
        }

    //builder
    },{
        POSITION: [18, 12, 1, 0, 0, 0, 0],
    },{
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block"
        }

    //launcher
    },{
        POSITION: [10, 9, 1, 9, 0, 90, 0],
    },{
        POSITION: [17, 13, 1, 0, 0, 90, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery]), TYPE: "minimissile", STAT_CALCULATOR: "sustained" }

    //shotgun
    },{
        POSITION: [4, 3, 1, 11, -3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [4, 3, 1, 11, 3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [4, 4, 1, 13, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 4, 1, 12, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 4, 1, 11, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 3, 1, 13, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [1, 3, 1, 13, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [1, 2, 1, 13, 2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    }, {
        POSITION: [1, 2, 1, 13, -2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]), TYPE: "casing" }
    }, {
        POSITION: [15, 14, 1, 6, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, g.fake]), TYPE: "casing" }
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 270, 0]
    }]
}
Class.armyOfOneBullet = {
    PARENT: "bullet",
    LABEL: "Unstoppable",
    TURRETS: [
        {
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }]
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }]
        }
    ]
}
Class.armyOfOne = {
    PARENT: "genericTank",
    LABEL: "Army Of One",
    DANGER: 9,
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    BODY: {
        SPEED: 0.5 * base.SPEED,
        FOV: 1.8 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [21, 19, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.destroyer, g.destroyer, g.destroyer, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, { reload: 0.5 }, { reload: 0.5 }, { reload: 0.5 }, { reload: 0.5 }]),
                TYPE: "armyOfOneBullet",
            },
        },{
            POSITION: [21, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.destroyer, g.destroyer, g.destroyer, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, { reload: 0.5 }, { reload: 0.5 }, { reload: 0.5 }, { reload: 0.5 }, g.fake]),
                TYPE: "bullet",
            },
        }
    ],
};
Class.weirdAutoBasic = {
    PARENT: "genericTank",
    LABEL: "Weirdly Defined Auto-Basic",
    GUNS: [{
        POSITION: {
            LENGTH: 20,
            WIDTH: 10
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1]]),
            TYPE: "bullet"
        },
    }],
    TURRETS: [{
        POSITION: {
            ANGLE: 180,
            LAYER: 1
        },
        TYPE: ["autoTurret", {
            CONTROLLERS: ["nearestDifferentMaster"],
            INDEPENDENT: true
        }]
    }]
}

Class.tooltipTank = {
    PARENT: 'genericTank',
    LABEL: "Tooltips",
    UPGRADE_TOOLTIP: "Allan please add details"
}

Class.bulletSpawnTest = {
    PARENT: 'genericTank',
    LABEL: "Bullet Spawn Position",
    GUNS: [
        {
            POSITION: [20, 10, 1, 0, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {speed: 0, maxSpeed: 0, shudder: 0, spray: 0, recoil: 0}]),
                TYPE: ['bullet', {BORDERLESS: true}],
                BORDERLESS: true,
            }
        }, {
            POSITION: [50, 10, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {speed: 0, maxSpeed: 0, shudder: 0, spray: 0, recoil: 0}]),
                TYPE: ['bullet', {BORDERLESS: true}],
                BORDERLESS: true,
            }
        }
    ]
}

Class.propTestProp = {
    PARENT: 'genericTank',
    SHAPE: 6,
    COLOR: 0,
    GUNS: [
        {
            POSITION: [20, 10, 1, 0, 0, 45, 0],
            PROPERTIES: {COLOR: 13},
        }, {
            POSITION: [20, 10, 1, 0, 0, -45, 0],
            PROPERTIES: {COLOR: 13},
        }
    ]
}
Class.propTest = {
    PARENT: 'genericTank',
    LABEL: 'Deco Prop Test',
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            }
        }
    ],
    PROPS: [
        {
            POSITION: [10, 0, 0, 0, 1],
            TYPE: 'propTestProp'
        }
    ]
}
Class.gunnerprop = {
   PARENT: 'genericTank',
   BORDERLESS: true,
   DRAW_FILL: false,
   GUNS: [ {
         POSITION: [ 19, 2, 1, 0, -2.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 2, 1, 0, 2.5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 12, 11, 1, 0, 0, 0, 0.5, ],
         }, 
     ],
};
Class.weaponArrayTest = {
    PARENT: 'genericTank',
    LABEL: 'Weapon Array Test',
    GUNS: weaponArray([
        {
            POSITION: [20, 8, 1, 0, 0, 25, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 2}]),
                TYPE: 'bullet'
            }
        }, {
            POSITION: [17, 8, 1, 0, 0, 25, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 2}]),
                TYPE: 'bullet'
            }
        }
    ], 5, 0.4, false),
    TURRETS: weaponArray(
        {
            POSITION: [7, 10, 0, -11, 180, 0],
            TYPE: 'autoTankGun'
        }
    , 5),
}

Class.gunBenchmark = {
    PARENT: 'genericTank',
    LABEL: "Gun Benchmark",
    GUNS: weaponArray({
        POSITION: [60, 0.2, 0, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {size: 0, reload: 0.15, range: 0.05}]),
            TYPE: ["bullet", {DRAW_SELF: false}]
        }
    }, 720)
}

Class.levels = menu("Levels")
Class.levels.UPGRADES_TIER_0 = []
for (let i = 0; i < 12; i++) {
    let LEVEL = i * Config.TIER_MULTIPLIER;
    Class["level" + LEVEL] = {
        PARENT: "levels",
        LEVEL,
        LABEL: "Level " + LEVEL
    };
    Class.levels.UPGRADES_TIER_0.push("level" + LEVEL);
}

Class.teams = menu("Teams")
Class.teams.UPGRADES_TIER_0 = []
for (let i = 1; i <= 8; i++) {
    let TEAM = i;
    Class["Team" + TEAM] = {
        PARENT: "teams",
        TEAM: -TEAM,
        COLOR: getTeamColor(-TEAM),
        LABEL: "Team " + TEAM
    };
    Class.teams.UPGRADES_TIER_0.push("Team" + TEAM);
}
Class['Team' + TEAM_ROOM] = {
    PARENT: "teams",
    TEAM: TEAM_ROOM,
    COLOR: "yellow",
    LABEL: "Room Team"
};
Class['Team' + TEAM_ENEMIES] = {
    PARENT: "teams",
    TEAM: TEAM_ENEMIES,
    COLOR: "yellow",
    LABEL: "Enemies Team"
};
Class.teams.UPGRADES_TIER_0.push('Team' + TEAM_ROOM, 'Team' + TEAM_ENEMIES);

Class.testing = menu("Testing")
Class.testing2 = menu("Page 2")

Class.addons = menu("Addon Entities")
Class.addons.UPGRADES_TIER_0 = []

// misc tanks
Class.volute = {
    PARENT: "genericTank",
    LABEL: "Volute",
    DANGER: 6,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 13, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.pounder]),
                TYPE: ["bullet", {MOTION_TYPE: "desmos"}]
            },
        },
        {
            POSITION: [5, 10, 2.125, 1, -6.375, 90, 0],
        },
        {
            POSITION: [5, 10, 2.125, 1, 6.375, -90, 0],
        },
    ],
}
Class.snakeOld = {
    PARENT: "missile",
    LABEL: "Snake",
    GUNS: [
        {
            POSITION: [6, 12, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                STAT_CALCULATOR: "thruster",
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.snake, g.snakeskin]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            },
        },
        {
            POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                NEGATIVE_RECOIL: true,
                STAT_CALCULATOR: "thruster",
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.snake]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            },
        },
    ],
}
Class.sidewinderOld = {
    PARENT: "genericTank",
    LABEL: "Sidewinder (Legacy)",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.3 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 11, -0.5, 14, 0, 0, 0],
        },
        {
            POSITION: [21, 12, -1.1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewinder]),
                TYPE: "snakeOld",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}

// Whirlwind
Class.whirlwindDeco = makeDeco(6)
Class.whirlwindDeco.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
Class.tornadoDeco = makeDeco(4)
Class.tornadoDeco.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
Class.megaTornadoDeco = makeDeco([[0,-1],[0.5,0],[0,1],[-0.5,0]])
Class.megaTornadoDeco.CONTROLLERS = [["spin", { independent: true }]]
Class.thunderboltDeco = makeDeco(4)
Class.thunderboltDeco.CONTROLLERS = [["spin", { independent: true, speed: 0.16 }]]
Class.hurricaneDeco = makeDeco(8)
Class.hurricaneDeco.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
Class.typhoonDeco = makeDeco(10)
Class.typhoonDeco.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
Class.tempestDeco1 = makeDeco(3)
Class.tempestDeco1.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
Class.tempestDeco2 = makeDeco(3)
Class.tempestDeco2.CONTROLLERS = [["spin", { independent: true, speed: -0.128 }]]
Class.blizzardDeco1 = makeDeco(5)
Class.blizzardDeco1.CONTROLLERS = [["spin", { independent: true, speed: 0.128 }]]
Class.blizzardDeco2 = makeDeco(5)
Class.blizzardDeco2.CONTROLLERS = [["spin", { independent: true, speed: -0.128 }]]

Class.whirlwind = {
    PARENT: "genericTank",
    LABEL: "Whirlwind",
    ANGLE: 60,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "whirlwindDeco"
        }
    ],
    AI: {
        SPEED: 2, 
    },
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 6; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["satellite", {ANGLE: i * 60}], 
                    MAX_CHILDREN: 1,   
                    AUTOFIRE: true,  
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}

// Whirlwind upgrades
Class.tornado = {
    PARENT: "genericTank",
    LABEL: "Tornado",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "tornadoDeco",
        },
    ],
    ANGLE: 90,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    AI: {
        SPEED: 2, 
    }, 
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 4; i++) { 
            output.push({ 
                POSITION: {WIDTH: 12, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite, g.pounder]), 
                    TYPE: ["satellite", {ANGLE: i * 90}], 
                    MAX_CHILDREN: 1,   
                    AUTOFIRE: true,  
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}
Class.hurricane = {
    PARENT: "genericTank",
    LABEL: "Hurricane",
    DANGER: 6,
    ANGLE: 45,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "hurricaneDeco",
        },
    ],
    AI: {
        SPEED: 2, 
    }, 
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 8; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["satellite", {ANGLE: i * 45}], 
                    MAX_CHILDREN: 1,   
                    AUTOFIRE: true,  
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}

// Tornado upgrades
Class.megaTornado = {
    PARENT: "genericTank",
    LABEL: "Mega Tornado",
    DANGER: 7,
    TURRETS: [
        {
            POSITION: [16, 0, 0, 0, 360, 1],
            TYPE: "megaTornadoDeco",
        },
    ],
    ANGLE: 180,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    AI: {
        SPEED: 2, 
    }, 
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 2; i++) { 
            output.push({ 
                POSITION: {WIDTH: 16, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite, g.pounder, g.destroyer]), 
                    TYPE: ["satellite", {ANGLE: i * 180}], 
                    MAX_CHILDREN: 1,   
                    AUTOFIRE: true,  
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}
Class.tempest = {
    PARENT: "genericTank",
    LABEL: "Tempest",
    DANGER: 7,
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "tempestDeco1",
        },
        {
            POSITION: [4, 0, 0, 180, 360, 1],
            TYPE: "tempestDeco2",
        },
    ],
    ANGLE: 120,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    AI: {
        SPEED: 2, 
    }, 
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 3; i++) { 
            output.push({ 
                POSITION: {WIDTH: 12, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite, g.pounder]), 
                    TYPE: ["satellite", {ANGLE: i * 120}], 
                    MAX_CHILDREN: 1,   
                    AUTOFIRE: true,  
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        for (let i = 0; i < 3; i++) { 
            output.push({ 
                POSITION: {WIDTH: 12, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite, g.pounder]), 
                    TYPE: ["satellite", { ANGLE: i * 120, CONTROLLERS: [['orbit', {invert: true}]] }], 
                    MAX_CHILDREN: 1,   
                    AUTOFIRE: true,  
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}
Class.thunderbolt = {
    PARENT: "genericTank",
    LABEL: "Thunderbolt",
    DANGER: 7,
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "thunderboltDeco",
        },
    ],
    ANGLE: 90,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    AI: {
        SPEED: 2.5, 
    }, 
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 4; i++) { 
            output.push({ 
                POSITION: {WIDTH: 12, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite, g.pounder]), 
                    TYPE: ["satellite", {ANGLE: i * 90}], 
                    MAX_CHILDREN: 1,   
                    AUTOFIRE: true,  
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}

// Hurricane upgrades
Class.typhoon = {
    PARENT: "genericTank",
    LABEL: "Typhoon",
    DANGER: 7,
    ANGLE: 36,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "typhoonDeco",
        },
    ],
    AI: {
        SPEED: 2, 
    }, 
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 10; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["satellite", {ANGLE: i * 36}], 
                    MAX_CHILDREN: 1,   
                    AUTOFIRE: true,  
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}
Class.blizzard = {
    PARENT: "genericTank",
    LABEL: "Blizzard",
    DANGER: 7,
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "blizzardDeco1",
        },
        {
            POSITION: [6, 0, 0, 180, 360, 1],
            TYPE: "blizzardDeco2",
        },
    ],
    ANGLE: 72,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    AI: {
        SPEED: 2, 
    }, 
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 5; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["satellite", {ANGLE: i * 72}], 
                    MAX_CHILDREN: 1,   
                    AUTOFIRE: true,  
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        for (let i = 0; i < 5; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["satellite", { ANGLE: i * 72, CONTROLLERS: [['orbit', {invert: true}]] }], 
                    MAX_CHILDREN: 1,   
                    AUTOFIRE: true,  
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}

// Whirlwind hybrids
Class.hexaWhirl = {
    PARENT: "genericTank",
    LABEL: "Hexa Whirl",
    DANGER: 7,
    ANGLE: 90,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "tornadoDeco"
        }
    ],
    AI: {
        SPEED: 2, 
    },
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 4; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["satellite", {ANGLE: i * 90}], 
                    MAX_CHILDREN: 1,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}
Class.hexaWhirl.GUNS.push({
        POSITION: [18, 8, 1, 0, 0, 60, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
            TYPE: "bullet"
        }
    },
    {
        POSITION: [18, 8, 1, 0, 0, 180, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
            TYPE: "bullet"
        }
    },
    {
        POSITION: [18, 8, 1, 0, 0, 300, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
            TYPE: "bullet"
        }
    },
    {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
            TYPE: "bullet"
        }
    },
    {
        POSITION: [18, 8, 1, 0, 0, 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
            TYPE: "bullet"
        }
    },
    {
        POSITION: [18, 8, 1, 0, 0, 240, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
            TYPE: "bullet"
        }
    })
Class.munition = {
    PARENT: "genericTank",
    LABEL: "Munition",
    DANGER: 7,
    ANGLE: 90,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "tornadoDeco"
        }
    ],
    AI: {
        SPEED: 2, 
    },
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 4; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["satellite", {ANGLE: i * 90}], 
                    MAX_CHILDREN: 1,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}
Class.munition.GUNS.push(
    {
        POSITION: [17, 3, 1, 0, -6, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
            TYPE: "bullet",
            LABEL: "Secondary",
        },
    },
    {
        POSITION: [17, 3, 1, 0, 6, 7, 0.75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
            TYPE: "bullet",
            LABEL: "Secondary",
        },
    },
    {
        POSITION: [19, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery]),
            TYPE: "bullet",
            LABEL: "Heavy",
        },
    },
)
Class.whirl3 = {
    PARENT: "genericTank",
    LABEL: "Whirl-3",
    DANGER: 7,
    ANGLE: 90,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "tornadoDeco"
        },
        {
            POSITION: [11, 8, 0, 0, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 120, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 240, 190, 0],
            TYPE: "autoTankGun",
        }
    ],
    AI: {
        SPEED: 2, 
    },
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 4; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["satellite", {ANGLE: i * 90}], 
                    MAX_CHILDREN: 1,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}
Class.whirlGuard = {
    PARENT: "genericTank",
    LABEL: "Whirl Guard",
    DANGER: 7,
    ANGLE: 90,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "tornadoDeco"
        }
    ],
    AI: {
        SPEED: 2, 
    },
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 4; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["satellite", {ANGLE: i * 90}], 
                    MAX_CHILDREN: 1,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}
Class.whirlGuard.GUNS.push(
    {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
            TYPE: "bullet"
        }
    },
    {
        POSITION: [13, 8, 1, 0, 0, 180, 0]
    },
    {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap"
        }
    }
)
// prophet temporarily disabled because it breaks the game for some reason
/*Class.prophet = {
    PARENT: "genericTank",
    LABEL: "Prophet",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    NECRO: true,
    ANGLE: 90,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "tornadoDeco"
        }
    ],
    AI: {
        SPEED: 2, 
    },
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 4; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["squareSatellite", {ANGLE: i * 90}], 
                    MAX_CHILDREN: 1,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}
Class.prophet.GUNS.push({
        POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {reload: 0.8}]),
            TYPE: "sunchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "necro",
            WAIT_TO_CYCLE: true,
            DELAY_SPAWN: false,
            MAX_CHILDREN: 7,
        }
    },
    {
        POSITION: [5.25, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {reload: 0.8}]),
            TYPE: "sunchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "necro",
            WAIT_TO_CYCLE: true,
            DELAY_SPAWN: false,
            MAX_CHILDREN: 7,
        }
})*/
Class.vortex = {
    PARENT: "genericTank",
    LABEL: "Vortex",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    ANGLE: 90,
    CONTROLLERS: ["whirlwind"],
    HAS_NO_RECOIL: true,
    STAT_NAMES: statnames.whirlwind,
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "tornadoDeco"
        }
    ],
    AI: {
        SPEED: 2, 
    },
    GUNS: (() => { 
        let output = []
        for (let i = 0; i < 4; i++) { 
            output.push({ 
                POSITION: {WIDTH: 8, LENGTH: 1, DELAY: i * 0.25},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.satellite]), 
                    TYPE: ["satellite", {ANGLE: i * 90}], 
                    MAX_CHILDREN: 1,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: false,
                    WAIT_TO_CYCLE: true
                }
            }) 
        }
        return output
    })()
}
Class.vortex.GUNS.push(
    {
        POSITION: [10, 9, 1, 9, 0, 0, 0],
    },
    {
        POSITION: [17, 13, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher]),
            TYPE: "minimissile",
            STAT_CALCULATOR: "sustained",
        },
    }
)

// misc tanks, cont.
Class.masterBullet = {
    PARENT: "missile",
    FACING_TYPE: "veryfastspin",
    MOTION_TYPE: "motor",
    HAS_NO_RECOIL: false,
    DIE_AT_RANGE: false,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Front",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [13, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [13, 8, 1, 0, 1, 220, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
    ],
}
Class.master = {
    PARENT: "genericTank",
    LABEL: "Master",
    BODY: {
        HEALTH: base.HEALTH * 0.4,
        SHIELD: base.SHIELD * 0.4,
        DENSITY: base.DENSITY * 0.3,
    },
    DANGER: 8,
    GUNS: [
        {
            POSITION: [18, 16, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "masterBullet",
                MAX_CHILDREN: 4,
                DESTROY_OLDEST_CHILD: true,
            },
        },
        {
            POSITION: [13, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 1, 220, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
}
Class.jumpSmasher = {
    PARENT: "genericSmasher",
    LABEL: "Jump Smasher",
    DANGER: 7,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ]
}
Class.lamgHiddenTurret = {
   PARENT: 'genericTank',
   LABEL: '',
   BORDERLESS: true,
   DRAW_FILL: false,
   GUNS: [ {
         POSITION: [ 15, 3.5, 1, -9, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, g.flankGuard, g.machineGun, g.cyclone, g.noSpread, {reload: 0.3, speed: 3.5, maxSpeed: 4, damage: 0.55}]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.lamgTurret2 = {
    PARENT: "genericTank",
    LABEL: "Spinner Turret",
    COLOR: "grey",
    FACING_TYPE: ["spin", {speed: 0.3}],
    GUNS: weaponArray([
         {
         POSITION: [ 15, 3.5, 1, 0, 0, 0, 0, ]
         },
     ], 10)
};
Class.lamgSpinnerTurret = {
    PARENT: "genericTank",
    LABEL: "",
    COLOR: "grey",
    TURRETS: [
        {
            POSITION: [20, 0, 0, 0, 0, 0],
            TYPE: "lamgHiddenTurret"
        },
        {
            POSITION: [20, 0, 0, 0, 0, 0],
            TYPE: "lamgTurret2"
        },
    ],
};
Class.literallyAMachineGun = {
    PARENT: "genericTank",
    LABEL: "Literally a Machine Gun",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2
    },
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    TURRETS: [
        {
            POSITION: [10, 14, 0, 0, 0, 1],
            TYPE: "lamgSpinnerTurret"
        }
    ],
    GUNS: [
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0]
        }
    ]
}

// literally a tank
class io_turretWithMotion extends IO {
    constructor(b, opts = {}) {
        super(b)
    }
    think(input) {
        return {
            target: this.body.master.velocity,
            main: true,
        };
    }
}
ioTypes.turretWithMotion = io_turretWithMotion
Class.latTop = makeDeco(0)
Class.latDeco1 = {
    PARENT: "genericTank",
    LABEL: "Tank Deco",
    FACING_TYPE: ["turnWithSpeed"],
    COLOR: "#5C533F",
    SHAPE: "M -1 -2 C -1 -2 -1 -3 0 -3 C 1 -3 1 -2 1 -2 V 2 C 1 2 1 3 0 3 C -1 3 -1 2 -1 2 V -2",
    MIRROR_MASTER_ANGLE: true,
}
Class.latDeco2 = {
    PARENT: "genericTank",
    LABEL: "Tank Deco",
    FACING_TYPE: ["turnWithSpeed"],
    COLOR: "#5C533F",
    SHAPE: "M -2 0 H 2 L 0 1 L -2 0",
    MIRROR_MASTER_ANGLE: true,
}
Class.latDeco3 = {
    PARENT: "genericTank",
    LABEL: "Tank Deco",
    FACING_TYPE: ["turnWithSpeed"],
    COLOR: "#3F3B2D",
    SHAPE: "M -10 -1 L 10 -1 L 10 1 L -10 1 L -10 -1",
    MIRROR_MASTER_ANGLE: true,
}
Class.latRight = {
    PARENT: "genericTank",
    LABEL: "Tank Side",
    FACING_TYPE: ["turnWithSpeed"],
    COLOR: "#96794E",
    SHAPE: "M -6 0 H 5 V 1 C 5 2 4 2 4 2 H -5 C -6 2 -6 1 -6 1 V 0",
    MIRROR_MASTER_ANGLE: true,
    TURRETS: [
        {
            POSITION: [4.8, 31, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, 24, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, 17, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, -42, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, -35, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, -28, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [18, -5, 0, 0, 0, 1],
            TYPE: "latDeco2",
        },
    ]
}
Class.latLeft = {
    PARENT: "genericTank",
    LABEL: "Tank Side",
    FACING_TYPE: ["turnWithSpeed"],
    COLOR: "#96794E",
    SHAPE: "M -5 0 H 6 V 1 C 6 2 5 2 5 2 H -4 C -5 2 -5 1 -5 1 V 0",
    MIRROR_MASTER_ANGLE: true,
    TURRETS: [
        {
            POSITION: [4.8, -31, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, -24, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, -17, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, 42, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, 35, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [4.8, 28, 10, 0, 0, 1],
            TYPE: "latDeco1",
        },
        {
            POSITION: [18, 5, 0, 0, 0, 1],
            TYPE: "latDeco2",
        },
    ]
}
Class.latBase = {
    PARENT: "genericTank",
    LABEL: "Tank Base",
    CONTROLLERS: ["turretWithMotion"],
    COLOR: "#96794E",
    SHAPE: [
        [1.1, 1],
        [1.4, 0],
        [1.1, -1],
        [-1.1, -1],
        [-0.8, 0],
        [-1.1, 1]
    ],
    GUNS: [
        {
            POSITION: [16, 5.5, 1, 1, 6.5, 0, 0]
        },
        {
            POSITION: [14.5, 5.5, 1, 1, 6.5, 0, 0]
        },
        {
            POSITION: [13, 5.5, 1, 1, 6.5, 0, 0]
        },
        {
            POSITION: [16, 5.5, 1, 1, -6.5, 0, 0]
        },
        {
            POSITION: [14.5, 5.5, 1, 1, -6.5, 0, 0]
        },
        {
            POSITION: [13, 5.5, 1, 1, -6.5, 0, 0]
        },
        {
            POSITION: [13, 5.5, 1, 1, 6.5, 180, 0]
        },
        {
            POSITION: [11.5, 5.5, 1, 1, 6.5, 180, 0]
        },
        {
            POSITION: [10, 5.5, 1, 1, 6.5, 180, 0]
        },
        {
            POSITION: [8.5, 5.5, 1, 1, 6.5, 180, 0]
        },
        {
            POSITION: [13, 5.5, 1, 1, -6.5, 180, 0]
        },
        {
            POSITION: [11.5, 5.5, 1, 1, -6.5, 180, 0]
        },
        {
            POSITION: [10, 5.5, 1, 1, -6.5, 180, 0]
        },
        {
            POSITION: [8.5, 5.5, 1, 1, -6.5, 180, 0]
        },
    ],
    TURRETS: [
        {
            POSITION: [5.3, 0, -10, 0, 0, 1],
            TYPE: "latLeft",
        },
        {
            POSITION: [5.3, 0, -10, 180, 0, 1],
            TYPE: "latRight",
        },
        {
            POSITION: [2, 0, -1.4, 90, 0, 1],
            TYPE: "latDeco3",
        },
    ]
}
Class.literallyATank = {
    PARENT: "genericTank",
    DANGER: 6,
    BODY: {
        HEALTH: base.HEALTH * 1.2,
    },
    LABEL: "Literally a Tank",
    SHAPE: "M -1 -1 H 0 C 1 -1 1 0 1 0 C 1 0 1 1 0 1 H -1 V -1",
    GUNS: [
        {
            POSITION: [30, 8, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [4, 8, -1.4, 8, 0, 0, 0]
        },
        {
            POSITION: [12, 8, 1.3, 30, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, { reload: 3, damage: 1.2, shudder: 0.5 }]),
                TYPE: "developerBullet"
            }
        },
        {
            POSITION: [2, 11, 1, 34, 0, 0, 0]
        }
    ],
    TURRETS: [
        {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: [ "latTop", { COLOR: "#5C533F" } ],
        },
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: [ "latTop", { COLOR: "#736245" } ],
        },
        {
            POSITION: [35, 0, 0, 0, 360, 0],
            TYPE: [ "latBase", { COLOR: "#96794E" } ],
        },
    ]
}

let testLayeredBoss = new LayeredBoss("testLayeredBoss", "Test Layered Boss", "terrestrial", 7, 3, "terrestrialTrapTurret", 5, 7, {SPEED: 10});
testLayeredBoss.addLayer({gun: {
    POSITION: [3.6, 7, -1.4, 8, 0, null, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, { size: 0.5 }]),
        TYPE: ["minion", {INDEPENDENT: true}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
    },
}}, true, null, 16);
testLayeredBoss.addLayer({turret: {
    POSITION: [10, 7.5, 0, null, 160, 0],
    TYPE: "crowbarTurret",
}}, true);

// FLAIL!!!
Class.flailBallSpike = {
    PARENT: "genericTank",
    COLOR: "black",
    SHAPE: 6,
    INDEPENDENT: true,
}
Class.flailBall = {
    PARENT: "genericTank",
    COLOR: "grey",
    HITS_OWN_TYPE: 'hard',
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: "flailBallSpike",
    }],
    GUNS: [
        { 
            POSITION: {WIDTH: 8, LENGTH: 10},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {
                    range: 0.1,
                    speed: 0,
                    maxSpeed: 0,
                    recoil: 0,
                    reload: 0.1,
                    damage: 4,
                    size: 2,
                    health: 1,
                }]),
                TYPE: ["bullet", {
                    ALPHA: 0,
                    ON: [{
                        event: 'tick',
                        handler: ({body}) => {
                            body.DAMAGE -= 1;
                            body.SIZE -= 0.6;
                            if (body.SIZE < 1) body.kill();
                        }
                    }],
                }], 
                AUTOFIRE: true,
                BORDERLESS: true,
                DRAW_FILL: false,
            }
        }
    ]
}
Class.flailBolt1 = {
    PARENT: "genericTank",
    COLOR: "grey",
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [40, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [48, 56, 0, 0, 360, 1],
        TYPE: "flailBall"
    }],
}
Class.flailBolt2 = {
    PARENT: "genericTank",
    COLOR: "grey",
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [30, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [20, 36, 0, 0, 360, 1],
        TYPE: "flailBolt1"
    }],
}
Class.flailBolt3 = {
    PARENT: "genericTank",
    COLOR: "grey",
    GUNS: [{
        POSITION: [30, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [18, 36, 0, 0, 360, 1],
        TYPE: "flailBolt2"
    }],
}
Class.expandBallUNEX = {
    PARENT: "genericTank",
    HITS_OWN_TYPE: 'hard',
    COLOR: "grey",
    GUNS: [
        {
            POSITION: [18, 13.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 13.5, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.op, {recoil: 0}]),
                TYPE: "setTrap",
                STAT_CALCULATOR: "block",
                AUTOFIRE: true,
            }
        }
    ]
}
// UNEX
Class.expandBolt1UNEX = {
    PARENT: "genericTank",
    INDEPENDENT: true,
    COLOR: "grey",
    TURRETS: [{
        POSITION: [50, 65, 0, 0, 360, 1],
        TYPE: "expandBallUNEX"
    }],
    GUNS: [ {
         POSITION: [ 30, 8.5, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 18.5, 0.5, 3, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 18.5, -0.5, 31, 0, 0, 0, ],
         }, 
     ],
};
Class.expandBolt2UNEX = {
    PARENT: "genericTank",
    COLOR: "grey",
    TURRETS: [{
        POSITION: [20, 43, 0, 0, 360, 1],
        TYPE: "expandBolt1UNEX"
    }],
    GUNS: [ {
         POSITION: [ 30, 8.5, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 18.5, 0.5, 3, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 18.5, -0.5, 31, 0, 0, 0, ],
         }, 
     ],
};
// EX
Class.expandBolt1EX = {
    PARENT: "genericTank",
    INDEPENDENT: true,
    COLOR: "grey",
    TURRETS: [{
        POSITION: [50, 65, 0, 0, 360, 1],
        TYPE: "expandBallUNEX"
    }],
    GUNS: [ {
         POSITION: [ 30, 8.5, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 18.5, 0.5, 3, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 18.5, -0.5, 31, 0, 0, 0, ],
         }, 
     ],
};
Class.expandBolt2EX = {
    PARENT: "genericTank",
    COLOR: "grey",
    TURRETS: [{
        POSITION: [20, 43, 0, 0, 360, 1],
        TYPE: "expandBolt1EX"
    }],
    GUNS: [ {
         POSITION: [ 30, 8.5, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 18.5, 0.5, 3, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 18.5, -0.5, 31, 0, 0, 0, ],
         }, 
     ],
};
Class.expandBolt3EX = {
    PARENT: "genericTank",
    COLOR: "grey",
    TURRETS: [{
        POSITION: [20, 43, 0, 0, 360, 1],
        TYPE: "expandBolt2EX"
    }],
    GUNS: [ {
         POSITION: [ 30, 8.5, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 18.5, 0.5, 3, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 18.5, -0.5, 31, 0, 0, 0, ],
         }, 
     ],
};
Class.expandBolt4EX = {
    PARENT: "genericTank",
    COLOR: "grey",
    TURRETS: [{
        POSITION: [20, 43, 0, 0, 360, 1],
        TYPE: "expandBolt3EX"
    }],
    GUNS: [ {
         POSITION: [ 30, 8.5, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 18.5, 0.5, 3, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 18.5, -0.5, 31, 0, 0, 0, ],
         }, 
     ],
};
Class.expandBolt5EX = {
    PARENT: "genericTank",
    COLOR: "grey",
    TURRETS: [{
        POSITION: [20, 43, 0, 0, 360, 1],
        TYPE: "expandBolt4EX"
    }],
    GUNS: [ {
         POSITION: [ 30, 8.5, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 18.5, 0.5, 3, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 18.5, -0.5, 31, 0, 0, 0, ],
         }, 
     ],
};
Class.genericFlail = {
    PARENT: "genericTank",
    STAT_NAMES: statnames.flail,
    SYNC_WITH_TANK: true,
    SKILL_CAP: [dfltskl, dfltskl, dfltskl, dfltskl, 0, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
}
Class.flail = {
    PARENT: "genericFlail",
    LABEL: "Flail",
    TURRETS: [{
        POSITION: [6, 10, 0, 0, 190, 0],
        TYPE: ["flailBolt3", {
            INDEPENDENT: true
        }]
    }]
}
Class.doubleFlail = {
    PARENT: "genericFlail",
    LABEL: "Double Flail",
    DANGER: 6,
    TURRETS: [{
        POSITION: [6, 10, 0, 0, 190, 0],
        TYPE: ["flailBolt3", {
            INDEPENDENT: true
        }]
    }, {
        POSITION: [6, 10, 0, 180, 190, 0],
        TYPE: ["flailBolt3", {
            INDEPENDENT: true
        }]
    }]
}
Class.tripleFlail = {
    PARENT: "genericFlail",
    LABEL: "Triple Flail",
    DANGER: 7,
    TURRETS: [{
        POSITION: [6, 10, 0, 0, 190, 0],
        TYPE: ["flailBolt3", {
            INDEPENDENT: true
        }]
    }, {
        POSITION: [6, 10, 0, 120, 190, 0],
        TYPE: ["flailBolt3", {
            INDEPENDENT: true
        }]
    }, {
        POSITION: [6, 10, 0, 240, 190, 0],
        TYPE: ["flailBolt3", {
            INDEPENDENT: true
        }]
    }]
}
Class.maceBallSpike = {
    PARENT: "genericTank",
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
}
Class.maceBall = {
    PARENT: "genericTank",
    COLOR: "grey",
    HITS_OWN_TYPE: 'hard',
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: ["maceBallSpike", { SHAPE: 3 }]
    }, ],
    GUNS: [
        { 
            POSITION: {WIDTH: 8, LENGTH: 10},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {
                    range: 0.1,
                    speed: 0,
                    maxSpeed: 0,
                    recoil: 0,
                    reload: 0.1,
                    damage: 4,
                    size: 2,
                    health: 1,
                }]),
                TYPE: ["bullet", {
                    ALPHA: 0,
                    ON: [{
                        event: 'tick',
                        handler: ({body}) => {
                            body.DAMAGE -= 1;
                            body.SIZE -= 0.6;
                            if (body.SIZE < 1) body.kill();
                        }
                    }],
                }], 
                AUTOFIRE: true,
                BORDERLESS: true,
                DRAW_FILL: false,
            }
        }
    ]
}
Class.maceBolt1 = {
    PARENT: "genericTank",
    COLOR: "grey",
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [48, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [76, 56, 0, 0, 190, 1],
        TYPE: "maceBall",
    }],
}
Class.maceBolt2 = {
    PARENT: "genericTank",
    COLOR: "grey",
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [24, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [20, 28, 0, 0, 190, 1],
        TYPE: "maceBolt1"
        },
    ],
}
Class.maceBolt3 = {
    PARENT: "genericTank",
    COLOR: "grey",
    GUNS: [{
        POSITION: [24, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [18, 28, 0, 0, 190, 1],
        TYPE: "maceBolt2",
    }],
}
Class.mace = {
    PARENT: "genericFlail",
    LABEL: "Mace",
    DANGER: 6,
    TURRETS: [{
        POSITION: [6, 10, 0, 0, 190, 0],
        TYPE: ["maceBolt3", {
            INDEPENDENT: true
        }]
    }]
}
Class.mamaBolt1 = {
    PARENT: "genericTank",
    COLOR: "grey",
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [48, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [104, 56, 0, 0, 190, 1],
        TYPE: "maceBall"
        },
    ],
}
Class.mamaBolt2 = {
    PARENT: "genericTank",
    COLOR: "grey",
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [18, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [20, 20, 0, 0, 190, 1],
        TYPE: "mamaBolt1"
        },
    ],
}
Class.mamaBolt3 = {
    PARENT: "genericTank",
    COLOR: "grey",
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [18, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [18, 20, 0, 0, 190, 1],
        TYPE: "mamaBolt2"
        },
    ],
}
Class.bigMama = {
    PARENT: "genericFlail",
    LABEL: "BIG MAMA",
    DANGER: 7,
    TURRETS: [{
        POSITION: [6, 10, 0, 0, 190, 0],
        TYPE: ["mamaBolt3", {
            INDEPENDENT: true
        }]
    }]
}
Class.ihdtiBall = {
    PARENT: "genericTank",
    COLOR: "grey",
    HITS_OWN_TYPE: 'hard',
    INDEPENDENT: true,
    TURRETS: [{
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: "maceBallSpike"
    }, {
        POSITION: [21.5, 0, 0, 180, 360, 0],
        TYPE: "maceBallSpike"
    }],
    GUNS: [
        { 
            POSITION: {WIDTH: 8, LENGTH: 10},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {
                    range: 0.1,
                    speed: 0,
                    maxSpeed: 0,
                    recoil: 0,
                    reload: 0.1,
                    damage: 6,
                    size: 2,
                    health: 1,
                }]),
                TYPE: ["bullet", {
                    ALPHA: 0,
                    ON: [{
                        event: 'tick',
                        handler: ({body}) => {
                            body.DAMAGE -= 1;
                            body.SIZE -= 0.6;
                            if (body.SIZE < 1) body.kill();
                        }
                    }],
                }], 
                AUTOFIRE: true,
                BORDERLESS: true,
                DRAW_FILL: false,
            }
        }
    ]
}
Class.ihdtiBolt1 = {
    PARENT: "genericTank",
    COLOR: "grey",
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [48, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [76, 56, 0, 0, 190, 1],
        TYPE: "ihdtiBall"
        }
    ]
}
Class.ihdtiBolt2 = {
    PARENT: "genericTank",
    COLOR: "grey",
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [24, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [20, 28, 0, 0, 190, 1],
        TYPE: "ihdtiBolt1"
        }
    ]
}
Class.ihdtiBolt3 = {
    PARENT: "genericTank",
    COLOR: "grey",
    GUNS: [{
        POSITION: [24, 5, 1, 8, 0, 0, 0]
    }],
    TURRETS: [{
        POSITION: [18, 28, 0, 0, 190, 1],
        TYPE: "ihdtiBolt2"
        }
    ]
}
Class.itHurtsDontTouchIt = {
    PARENT: "genericFlail",
    LABEL: "It hurts dont touch it",
    DANGER: 7,
    TURRETS: [{
        POSITION: [6, 10, 0, 0, 190, 0],
        TYPE: ["ihdtiBolt3", {
            INDEPENDENT: true
        }]
    }]
}

// combined tanks: ct - combined tanks, 1 - tier, (b/t/anything) - tank name

Class.ctGuns = {
   PARENT: "genericTank",
   LABEL: "Guns",
   COLOR: "rainbow",
   GLOW: {
       RADIUS: 3,
       COLOR: "rainbow",
       ALPHA: 0.7,
       RECURSION: 5,
   },
};
Class.ct1B = {
   PARENT: 'genericTank',
   LABEL: 'Basic',
   UPGRADE_TOOLTIP: "Bullets",
   GUNS: [ {
         POSITION: [ 18, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.ct1T = {
   PARENT: 'genericTank',
   LABEL: 'Trap',
   UPGRADE_TOOLTIP: "Traps",
   GUNS: [ {
         POSITION: [ 15, 8, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 3, 8, 1.7, 16, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.ct1D = {
   PARENT: 'genericTank',
   LABEL: 'Droner',
   UPGRADE_TOOLTIP: "Drones",
   GUNS: [ {
         POSITION: [ 6, 10, 1.3, 7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone]),
            TYPE: "drone",
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: 4,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, 
     ],
};
Class.ct1S = {
   PARENT: 'genericTank',
   LABEL: 'Swarm',
   UPGRADE_TOOLTIP: "Swarm Drones",
   GUNS: [ {
         POSITION: [ 16, 11, 0.6, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.giant_damage]),
            TYPE: "swarm",
         }, }, 
     ],
};
Class.ct1H = {
   PARENT: 'genericTank',
   LABEL: 'Homing',
   UPGRADE_TOOLTIP: "Homing bullets",
   GUNS: [ {
         POSITION: [ 20, 10, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.homingBullets]),
            TYPE: "homingBullet",
         }, }, {
         POSITION: [ 21, 1, 0.6, 0, -6, 0, 0, ],
         }, {
         POSITION: [ 21, 1, 0.6, 0, 6, 0, 0, ],
         }, 
     ],
};

// tier 2
Class.ct2fB = {
   PARENT: 'genericTank',
   LABEL: 'Fast',
   UPGRADE_TOOLTIP: "Fast reload",
   GUNS: [ {
         POSITION: [ 12, 11, 1.3, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.ct2sB = {
   PARENT: 'genericTank',
   LABEL: 'Strong',
   UPGRADE_TOOLTIP: "Stronger bullets",
   GUNS: [ {
         POSITION: [ 20, 12, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.ct2pB = {
   PARENT: 'genericTank',
   LABEL: 'Pelleter',
   UPGRADE_TOOLTIP: "High penetration",
   GUNS: [ {
         POSITION: [ 18.5, 2, 1, 0, -3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18.5, 2, 1, 0, 3, 0, 1/2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 13.8, 0.6, 6, 0, 0, 0, ],
         }, 
     ],
};
Class.ct2bT = {
   PARENT: 'genericTank',
   LABEL: 'Build',
   UPGRADE_TOOLTIP: "Blocks",
   GUNS: [ {
         POSITION: [ 18, 11, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 11, 1.2, 19, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.ct2mT = {
   PARENT: 'genericTank',
   LABEL: 'Mega Trapper',
   UPGRADE_TOOLTIP: "High damage",
   GUNS: [ {
         POSITION: [ 15, 11, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 3, 11, 1.5, 15, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pounder]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.ct2rT = {
   PARENT: 'genericTank',
   LABEL: 'Boomerang',
   UPGRADE_TOOLTIP: "Boomerangs",
   GUNS: [ {
         POSITION: [ 16, 9.3, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 14.7, 0.6, 7, 0, 0, 0, ],
         }, {
         POSITION: [ 3, 9, 1.5, 17, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.boomerang, {size: 1.65, speed: 3.5}]),
            TYPE: "boomerang",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.ct2cD = {
   PARENT: 'genericTank',
   LABEL: 'Commander',
   UPGRADE_TOOLTIP: "More drones",
   GUNS: [ {
         POSITION: [ 6, 10, 1.3, 11, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 4,
         }, }, {
         POSITION: [ 6, 10, 1.3, 7, 0, 0, 1/2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 3,
         }, }, 
     ],
};
Class.ct2pD = {
   PARENT: 'genericTank',
   LABEL: 'Spam',
   UPGRADE_TOOLTIP: "Fast reload",
   GUNS: [ {
         POSITION: [ 12, 10, 1.6, 1, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.less_reload, g.less_reload, g.overseer]),
            TYPE: "drone",
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 6,
         }, }, 
     ],
};
Class.ct2sD = {
   PARENT: 'genericTank',
   LABEL: 'Cheese',
   UPGRADE_TOOLTIP: "Higher health and damage",
   GUNS: [ {
         POSITION: [ 6, 12, 1.3, 7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.pounder]),
            TYPE: "drone",
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: 3,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, 
     ],
};
Class.ct2wS = {
   PARENT: 'genericTank',
   LABEL: 'Doubswarm',
   UPGRADE_TOOLTIP: "More swarm drones",
   GUNS: [ {
         POSITION: [ 20, 10, 0.6, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.giant_damage, g.omega_damage]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 16, 11, 0.6, 0, 0, 0, 0.3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.giant_damage, g.omega_damage]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, 
     ],
};
Class.ct2sS = {
   PARENT: 'genericTank',
   LABEL: 'Swarm',
   UPGRADE_TOOLTIP: "Stronger swarm dones",
   GUNS: [ {
         POSITION: [ 16, 14, 0.6, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.delta_damage, g.giant_damage, g.less_reload]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, 
     ],
};
Class.ct2mS = {
   PARENT: 'genericTank',
   LABEL: 'Spam',
   UPGRADE_TOOLTIP: "Fast reload",
   GUNS: [ {
         POSITION: [ 16, 14, 0.7, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.less_reload, g.delta_damage]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, 
     ],
};
Class.ct2hH = {
   PARENT: 'genericTank',
   LABEL: 'Homing',
   UPGRADE_TOOLTIP: "Stronger homing bullets",
   GUNS: [ {
         POSITION: [ 20, 12, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.homingBullets, g.pounder]),
            TYPE: "homingBullet",
         }, }, {
         POSITION: [ 21, 1, 0.6, 0, -7, 0, 0, ],
         }, {
         POSITION: [ 21, 1, 0.6, 0, 7, 0, 0, ],
         }, 
     ],
};
Class.ct2gH = {
   PARENT: 'genericTank',
   LABEL: 'Homing Gun',
   UPGRADE_TOOLTIP: "Fast reload",
   GUNS: [ {
         POSITION: [ 13, 11, 1.3, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.homingBullets, g.machineGun]),
            TYPE: "homingBullet",
         }, }, {
         POSITION: [ 16, 1, 0.6, 8, -4, -10.5, 0, ],
         }, {
         POSITION: [ 16, 1, 0.6, 8, 4, 10.5, 0, ],
         }, 
     ],
};
Class.ct2mH = {
   PARENT: 'genericTank',
   LABEL: 'Missile',
   UPGRADE_TOOLTIP: "Homing Missile",
   GUNS: [ {
         POSITION: [ 5, 9, 0.7, 19, 0, 0, 0, ],
         }, {
         POSITION: [ 22, 12, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.homingBullets, g.launcher]),
            TYPE: "miniHomingMissile",
         }, }, {
         POSITION: [ 23, 1, 0.6, 0, -7, 0, 0, ],
         }, {
         POSITION: [ 23, 1, 0.6, 0, 7, 0, 0, ],
         }, 
     ],
};

// tier 3

Class.ct3fastest = {
   PARENT: 'genericTank',
   LABEL: 'Fastest',
   UPGRADE_TOOLTIP: "Fastest reload",
   GUNS: [ {
         POSITION: [ 11, 14, 1.3, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.less_reload, g.less_reload]),
            TYPE: "bullet",
         }, },
     ],
};
Class.ct3strongest = {
   PARENT: 'genericTank',
   LABEL: 'Strongest',
   UPGRADE_TOOLTIP: "Strongest",
   GUNS: [ {
         POSITION: [ 20, 15, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.ct3borer = {
   PARENT: 'genericTank',
   LABEL: 'Borer',
   UPGRADE_TOOLTIP: "Stronger",
   GUNS: [ {
         POSITION: [ 18.5, 2, 1, 0, -2.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18.5, 2, 1, 0, 2.5, 0, 0.35, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 2, 1, 0, 0, 0, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 12.5, 0.6, 6, 0, 0, 0.75, ],
         }, 
     ],
};
Class.ct3builder = {
   PARENT: 'genericTank',
   LABEL: 'Builder',
   UPGRADE_TOOLTIP: "Stronger blocks",
   GUNS: [ {
         POSITION: [ 18, 13, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 13, 1.2, 19, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.more_damage, g.more_damage]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.ct3otrapper = {
   PARENT: 'genericTank',
   LABEL: 'Omega Trapper',
   UPGRADE_TOOLTIP: "Stronger traps",
   GUNS: [ {
         POSITION: [ 15, 13.5, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 13.5, 1.5, 15, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pounder, g.destroyer]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.ct3boomer = {
   PARENT: 'genericTank',
   LABEL: 'Boomer',
   UPGRADE_TOOLTIP: "Stronger",
   GUNS: [ {
         POSITION: [ 16, 11, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 7, 18.5, 0.6, 4, 0, 0, 0, ],
         }, {
         POSITION: [ 3, 11, 1.5, 16, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.boomerang, g.pounder, g.more_damage, {size: 1.65, speed: 3.5}]),
            TYPE: "boomerang",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.ct3allseer = {
   PARENT: 'genericTank',
   LABEL: 'Allseer',
   FACING_TYPE: ["spin", {speed: 0.025}], 
   UPGRADE_TOOLTIP: "More drones",
   GUNS: weaponArray([
         {
         POSITION: [ 6, 10, 1.3, 7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: "4",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, 
     ], 3)
};
Class.ct3spammer = {
   PARENT: 'genericTank',
   LABEL: 'Spammer',
   UPGRADE_TOOLTIP: "Faster reload",
   GUNS: [ {
         POSITION: [ 14, 14, 1.3, -2, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer, g.less_reload, g.less_reload]),
            TYPE: "drone",
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: "10",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, 
     ],
};
Class.ct3spawner = {
   PARENT: 'genericTank',
   LABEL: 'Spawner',
   UPGRADE_TOOLTIP: "Minions",
   GUNS: [ {
         POSITION: [ 7, 9, 1, 10, 0, 0, 0, ],
         }, {
         POSITION: [ 7, 13, 1, 6, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 13, 1, 17, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
            TYPE: "minion",
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            MAX_CHILDREN: 4,
            SYNCS_SKILLS: true,
         }, }, 
     ],
};
Class.ct3swarmgun = {
   PARENT: 'genericTank',
   LABEL: 'Swarmgun',
   UPGRADE_TOOLTIP: "More swarm drones",
   GUNS: [ {
         POSITION: [ 24, 12, 0.6, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.giant_damage, g.omega_damage]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 20, 12, 0.65, 0, 0, 0, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.giant_damage, g.omega_damage]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 16, 12, 0.7, 0, 0, 0, 0.45, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.giant_damage, g.omega_damage]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, 
     ],
};
Class.ct3strongswarm = {
   PARENT: 'genericTank',
   LABEL: 'Swarm',
   UPGRADE_TOOLTIP: "Stronger swarm",
   GUNS: [ {
         POSITION: [ 16, 16.5, 0.6, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.delta_damage, g.omega_damage, g.less_reload]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, 
     ],
};
Class.ct3swarmspammer = {
   PARENT: 'genericTank',
   LABEL: 'Spammy',
   UPGRADE_TOOLTIP: "Fast reload",
   GUNS: [ {
         POSITION: [ 14, 16, 0.75, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.less_reload, g.less_reload, g.delta_damage]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, 
     ],
};
Class.ct3gatler = {
   PARENT: 'genericTank',
   LABEL: 'Gatling Gun',
   UPGRADE_TOOLTIP: "Faster reload",
   GUNS: [ {
         POSITION: [ 10, 12, 1.8, 6, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.homingBullets, g.machineGun, g.less_reload]),
            TYPE: "homingBullet",
         }, }, {
         POSITION: [ 16, 1, 0.6, 6, -3, -30, 0, ],
         }, {
         POSITION: [ 16, 1, 0.6, 6, 3, 30, 0, ],
         }, 
     ],
};
Class.ct3stronghomin = {
   PARENT: 'genericTank',
   LABEL: 'Homing',
   UPGRADE_TOOLTIP: "Stronger",
   GUNS: [ {
         POSITION: [ 20, 15, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.homingBullets, g.pounder, g.destroyer]),
            TYPE: "homingBullet",
         }, }, {
         POSITION: [ 21, 1, 0.6, 0, -8, 0, 0, ],
         }, {
         POSITION: [ 21, 1, 0.6, 0, 8, 0, 0, ],
         }, 
     ],
};
Class.ct3rocket = {
   PARENT: 'genericTank',
   LABEL: 'Rocket Launcher',
   GUNS: [ {
         POSITION: [ 5, 11.5, 0.7, 19, 0, 0, 0, ],
         }, {
         POSITION: [ 22, 14.5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.homingBullets, g.launcher, g.pounder, g.giant_damage]),
            TYPE: "miniHomingMissile",
         }, }, {
         POSITION: [ 23, 1, 0.6, 0, -8, 0, 0, ],
         }, {
         POSITION: [ 23, 1, 0.6, 0, 8, 0, 0, ],
         }, 
     ],
};

// back guns

Class.extraGuns = {
   PARENT: "genericTank",
   LABEL: "Extra Guns",
   COLOR: "evening",
   GLOW: {
       RADIUS: 3,
       COLOR: "evening",
       ALPHA: 0.7,
       RECURSION: 5,
   },
};
Class.backMech = {
   PARENT: 'genericTank',
   LABEL: 'Back Mech',
   UPGRADE_TOOLTIP: "Mech",
   GUNS: [ {
         POSITION: [ 15, 8, 1, 0, 0, -180, 0, ],
         }, {
         POSITION: [ 12, 10.5, 1, 0, 0, 180, 0, ],
         }, {
         POSITION: [ 3, 8, 1.7, 15, 0, 180, 0, ],
         PROPERTIES: {
            MAX_CHILDREN: 5,
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "weakPillbox",
            STAT_CALCULATOR: "trap",
            SYNCS_SKILLS: true,
            DESTROY_OLDEST_CHILD: true,
         }, }, 
     ],
};
Class.miniTechnician = {
   PARENT: 'genericTank',
   LABEL: 'Mini Technician',
   UPGRADE_TOOLTIP: "Stronger mech",
   GUNS: [ {
         POSITION: [ 15, 10.5, 1, 0, 0, -180, 0, ],
         }, {
         POSITION: [ 12, 13, 1, 0, 0, 180, 0, ],
         }, {
         POSITION: [ 3, 10.5, 1.7, 15, 0, -180, 0, ],
         PROPERTIES: {
            MAX_CHILDREN: 6,
            SHOOT_SETTINGS: combineStats([g.trap, g.pounder, {size: 1.5}]),
            TYPE: "weakPillbox",
            STAT_CALCULATOR: "trap",
            SYNCS_SKILLS: true,
            DESTROY_OLDEST_CHILD: true,
         }, }, 
     ],
};
Class.mechark = {
   PARENT: 'genericTank',
   LABEL: 'Mechark',
   UPGRADE_TOOLTIP: "Double Mech",
   GUNS: [ {
         POSITION: [ 15, 8, 1, 0, 5.5, -172.5, 0, ],
         }, {
         POSITION: [ 15, 8, 1, 0, -5.5, 172.5, 0, ],
         }, {
         POSITION: [ 12, 9.5, 1.25, 0, 5.5, -172.5, 0, ],
         }, {
         POSITION: [ 12, 9.5, 1.25, 0, -5.5, 172.5, 0, ],
         }, {
         POSITION: [ 3, 8, 1.7, 15, 5.5, -172.5, 0, ],
         PROPERTIES: {
            MAX_CHILDREN: 5,
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "weakPillbox",
            STAT_CALCULATOR: "trap",
            SYNCS_SKILLS: true,
            DESTROY_OLDEST_CHILD: true,
         }, }, {
         POSITION: [ 3, 8, 1.7, 15, -5.5, 172.5, 1/2, ],
         PROPERTIES: {
            MAX_CHILDREN: 5,
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "weakPillbox",
            STAT_CALCULATOR: "trap",
            SYNCS_SKILLS: true,
            DESTROY_OLDEST_CHILD: true,
         }, }, 
     ],
};
Class.auraGun = {
   PARENT: "genericTank",
   LABEL: "Aura",
   UPGRADE_TOOLTIP: "Aura",
   TURRETS: [
       {
           POSITION: [12.5, 0, 0, 0, 360, 1],
           TYPE: ["miniAura", { COLOR: 17}],
       },
   ],
};
Class.miniAura = addAura(0.85, 1, 0.15);
Class.backTrapper = {
   PARENT: 'genericTank',
   LABEL: 'Back Trapper',
   UPGRADE_TOOLTIP: "Trap",
   GUNS: [ {
         POSITION: [ 15, 7, 1, 0, 0, -180, 0, ],
         }, {
         POSITION: [ 3, 7, 1.7, 15, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.wwarkk = {
   PARENT: 'genericTank',
   LABEL: 'Wwarkk',
   UPGRADE_TOOLTIP: "Waarrk(balanced due to mech)",
   GUNS: [ {
         POSITION: [ 14, 8, 1, 0, 5.5, -172.5, 0, ],
         }, {
         POSITION: [ 14, 8, 1, 0, -5.5, 172.5, 0, ],
         }, {
         POSITION: [ 3, 9, 1.5, 14, 5.5, -172.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 3, 9, 1.5, 14, -5.5, 172.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 14, 9, 1, 0, 0, 180, 0, ],
         }, {
         POSITION: [ 3, 9, 1.5, 14, 0, -180, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.lowPower]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.miniBarricade = {
   PARENT: 'genericTank',
   LABEL: 'Mini Barricade',
   UPGRADE_TOOLTIP: "Two traps",
   GUNS: [ {
         POSITION: [ 19, 8, 1, 0, 0, 180, 0, ],
         }, {
         POSITION: [ 3, 8, 1.7, 18, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pounder, g.minigun]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 3, 8, 1.7, 12, 0, 180, 1/2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.minigun]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.backHybrid = {
   PARENT: 'genericTank',
   LABEL: 'Back Hybrid',
   UPGRADE_TOOLTIP: "Drone",
   GUNS: [ {
         POSITION: [ 6, 9, 1.2, 8, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone]),
            TYPE: ["drone", {INDEPENDENT: true}],
            SYNCS_SKILLS: true,
            AUTOFIRE: true,
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: 3,
         }, }, 
     ],
};
Class.doublebrid = {
   PARENT: 'genericTank',
   LABEL: 'Doublebrid',
   UPGRADE_TOOLTIP: "Double drone guns",
   GUNS: [ {
         POSITION: [ 6, 9, 1.2, 8, 3, -164.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: ["drone", {INDEPENDENT: true}],
            SYNCS_SKILLS: true,
            AUTOFIRE: true,
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: 3,
         }, }, {
         POSITION: [ 6, 9, 1.2, 8, -3, 164.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: ["drone", {INDEPENDENT: true}],
            SYNCS_SKILLS: true,
            AUTOFIRE: true,
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: 3,
         }, }, 
     ],
};
Class.backSwarm = {
   PARENT: 'genericTank',
   LABEL: 'Back Swarm',
   UPGRADE_TOOLTIP: "Swarm",
   GUNS: [ {
         POSITION: [ 14, 10, 0.6, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.more_damage, g.giant_damage]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 12, 10.5, 0.6, 0, 0, 180, 1/2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.more_damage, g.giant_damage]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, 
     ],
};
Class.ctAutoTurret = {
   PARENT: 'genericTank',
   LABEL: 'Auto Turret',
   HAS_NO_RECOIL: true,
   UPGRADE_TOOLTIP: "Auto turret",
   TURRETS: [
       {
           POSITION: [10, 0, 0, 0, 360, 1],
           TYPE: ["autoTankGun", {INDEPENDENT: true}]
       },
   ],
};
Class.ctAutoTurret2 = {
   PARENT: 'genericTank',
   LABEL: 'Auto Turret',
   HAS_NO_RECOIL: true,
   UPGRADE_TOOLTIP: "Auto 4-turret",
   TURRETS: [
       {
           POSITION: [10, 0, 0, 0, 360, 1],
           TYPE: ["auto4gun", {INDEPENDENT: true}]
       },
   ],
};
Class.ctAutoTurret3 = {
   PARENT: 'genericTank',
   LABEL: 'Auto Turret',
   HAS_NO_RECOIL: true,
   UPGRADE_TOOLTIP: "Auto basiception",
   TURRETS: [
       {
           POSITION: [10, 0, 0, 0, 360, 1],
           TYPE: ["basic1Turret", {INDEPENDENT: true}]
       },
   ],
};
Class.ctAutoTurret4 = {
   PARENT: 'genericTank',
   LABEL: 'Auto Turret',
   HAS_NO_RECOIL: true,
   UPGRADE_TOOLTIP: "Auto rifle",
   TURRETS: [
       {
           POSITION: [10, 0, 0, 0, 360, 1],
           TYPE: ["autoRifleGun", {INDEPENDENT: true}]
       },
   ],
};
Class.ctAutoTurret5 = {
   PARENT: 'genericTank',
   LABEL: 'Auto Turret',
   HAS_NO_RECOIL: true,
   UPGRADE_TOOLTIP: "Auto sniper",
   TURRETS: [
       {
           POSITION: [10, 0, 0, 0, 360, 1],
           TYPE: ["sniperTurret", {INDEPENDENT: true}]
       },
   ],
};

// other
Class.flangle = {
    PARENT: "genericFlail",
    LABEL: "Flangle",
    DANGER: 6,
    STAT_NAMES: statnames.mixed,
    GUNS: [
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
    TURRETS: [{
        POSITION: [6, 10, 0, 0, 190, 0],
        TYPE: ["flailBolt3", {
            INDEPENDENT: true
        }]
    }],
    SKILL_CAP: [dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
}
Class.flooster = {
    PARENT: "genericFlail",
    LABEL: "Flooster",
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    GUNS: [
        {
            POSITION: [13, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 1, 220, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
    TURRETS: [{
        POSITION: [6, 10, 0, 0, 190, 0],
        TYPE: ["flailBolt3", {
            INDEPENDENT: true
        }]
    }],
    SKILL_CAP: [dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
}
Class.flace = {
    PARENT: "genericFlail",
    LABEL: "Flace",
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    GUNS: [
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
                TYPE: "bullet",
                LABEL: "thruster",
            },
        },
    ],
    TURRETS: [{
        POSITION: [6, 10, 0, 0, 190, 0],
        TYPE: ["maceBolt3", {
            INDEPENDENT: true
        }]
    }],
    SKILL_CAP: [dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
}
Class.armPart1 = {
   PARENT: "genericTank",
   COLOR: "grey",
   INDEPENDENT: true,
   BORDERLESS: true,
   DRAW_FILL: false,
   TURRETS: [{
        POSITION: [55, 25, 0, 0, 190, 1],
        TYPE: ["bossPart2", {INDEPENDENT: true}],
        },
   ],
   GUNS: [ {
         POSITION: [ 4, 20, 2, -4, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 20, -2, 1, 0, 0, 0, ],
         }, 
     ],
};
Class.armPart2 = {
   PARENT: "genericTank",
   COLOR: "grey",
   INDEPENDENT: true,
   BORDERLESS: true,
   DRAW_FILL: false,
   TURRETS: [{
        POSITION: [20, 10.5, 0, 0, 190, 0],
        TYPE: ["armPart1", {INDEPENDENT: true}],
        },
   ],
   GUNS: [ {
         POSITION: [ 4, 20, 2, -4, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 20, -2, 1, 0, 0, 0, ],
         }, 
     ],
};
Class.armPart3 = {
   PARENT: "genericTank",
   COLOR: "grey",
   INDEPENDENT: true,
   BORDERLESS: true,
   DRAW_FILL: false,
   TURRETS: [{
        POSITION: [20, 10.5, 0, 0, 190, 0],
        TYPE: ["armPart2", {INDEPENDENT: true}],
        },
   ],
   GUNS: [ {
         POSITION: [ 4, 20, 2, -4, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 20, -2, 1, 0, 0, 0, ],
         }, 
     ],
};
Class.armPart4 = {
   PARENT: "genericTank",
   COLOR: "grey",
   INDEPENDENT: true,
   BORDERLESS: true,
   DRAW_FILL: false,
   TURRETS: [{
        POSITION: [20, 10.5, 0, 0, 190, 0],
        TYPE: ["armPart3", {INDEPENDENT: true}],
        },
   ],
   GUNS: [ {
         POSITION: [ 4, 20, 2, -4, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 20, -2, 1, 0, 0, 0, ],
         }, 
     ],
};
Class.randomShitBoss = {
   PARENT: "genericTank",
   LABEL: "VARIANT 1",
   SHAPE: 4,
   SIZE: 35,
   TURRETS: [{
        POSITION: [7.5, 9, 0, 180, 190, 0],
        TYPE: ["armPart4", {INDEPENDENT: true}],
        },
   ],
}
Class.randomShitBoss2 = {
   PARENT: "genericTank",
   LABEL: "VARIANT 2",
   SHAPE: 4,
   SIZE: 35,
   TURRETS: [{
        POSITION: [7.5, 9, 0, 0, 190, 0],
        TYPE: ["armPart4", {INDEPENDENT: true}],
        },
        {
        POSITION: [7.5, 9, 0, 180, 190, 0],
        TYPE: ["armPart4", {INDEPENDENT: true}],
        },
   ],
}
Class.bossPart2 = {
   PARENT: "genericTank",
   SHAPE: 4,
   BODY: {
       HEALTH: Infinity,
   },
   INDEPENDENT: true,
}
Class.armPart11 = {
   PARENT: "genericTank",
   COLOR: "grey",
   INDEPENDENT: true,
   BORDERLESS: true,
   DRAW_FILL: false,
   TURRETS: [{
        POSITION: [55, 25, 0, 0, 190, 1],
        TYPE: ["bossPart22", {INDEPENDENT: true}],
        },
   ],
   GUNS: [ {
         POSITION: [ 4, 20, 2, -4, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 20, -2, 1, 0, 0, 0, ],
         }, 
     ],
};
Class.armPart22 = {
   PARENT: "genericTank",
   COLOR: "grey",
   INDEPENDENT: true,
   BORDERLESS: true,
   DRAW_FILL: false,
   TURRETS: [{
        POSITION: [20, 10.5, 0, 0, 190, 0],
        TYPE: ["armPart11", {INDEPENDENT: true}],
        },
   ],
   GUNS: [ {
         POSITION: [ 4, 20, 2, -4, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 20, -2, 1, 0, 0, 0, ],
         }, 
     ],
};
Class.armPart33 = {
   PARENT: "genericTank",
   COLOR: "grey",
   INDEPENDENT: true,
   BORDERLESS: true,
   DRAW_FILL: false,
   TURRETS: [{
        POSITION: [20, 10.5, 0, 0, 190, 0],
        TYPE: ["armPart22", {INDEPENDENT: true}],
        },
   ],
   GUNS: [ {
         POSITION: [ 4, 20, 2, -4, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 20, -2, 1, 0, 0, 0, ],
         }, 
     ],
};
Class.armPart44 = {
   PARENT: "genericTank",
   COLOR: "grey",
   INDEPENDENT: true,
   BORDERLESS: true,
   DRAW_FILL: false,
   TURRETS: [{
        POSITION: [20, 10.5, 0, 0, 190, 0],
        TYPE: ["armPart33", {INDEPENDENT: true}],
        },
   ],
   GUNS: [ {
         POSITION: [ 4, 20, 2, -4, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 20, -2, 1, 0, 0, 0, ],
         }, 
     ],
};
Class.bossPart22 = {
   PARENT: "genericTank",
   SHAPE: 4,
   TURRETS: [{
        POSITION: [7.5, 9, 0, 0, 190, 0],
        TYPE: ["armPart4", {INDEPENDENT: true}],
        },
   ],
   INDEPENDENT: true,
}
Class.randomShitBoss22 = {
   PARENT: "genericTank",
   INDEPENDENT: true,
   FACING_TYPE: "looseWithMotion",
   SHAPE: 4,
   TURRETS: [{
        POSITION: [7.5, 9, 0, 180, 190, 0],
        TYPE: ["armPart444", {INDEPENDENT: true}],
        },
   ],
}
Class.armPart111 = {
   PARENT: "genericTank",
   COLOR: "grey",
   INDEPENDENT: true,
   BORDERLESS: true,
   DRAW_FILL: false,
   TURRETS: [{
        POSITION: [55, 25, 0, 0, 190, 1],
        TYPE: ["bossPart222", {INDEPENDENT: true}],
        },
   ],
   GUNS: [ {
         POSITION: [ 4, 20, 2, -4, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 20, -2, 1, 0, 0, 0, ],
         }, 
     ],
};
Class.armPart222 = {
   PARENT: "genericTank",
   COLOR: "grey",
   INDEPENDENT: true,
   BORDERLESS: true,
   DRAW_FILL: false,
   TURRETS: [{
        POSITION: [20, 10.5, 0, 0, 190, 0],
        TYPE: ["armPart111", {INDEPENDENT: true}],
        },
   ],
   GUNS: [ {
         POSITION: [ 4, 20, 2, -4, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 20, -2, 1, 0, 0, 0, ],
         }, 
     ],
};
Class.armPart333 = {
   PARENT: "genericTank",
   COLOR: "grey",
   INDEPENDENT: true,
   BORDERLESS: true,
   DRAW_FILL: false,
   TURRETS: [{
        POSITION: [20, 10.5, 0, 0, 190, 0],
        TYPE: ["armPart222", {INDEPENDENT: true}],
        },
   ],
   GUNS: [ {
         POSITION: [ 4, 20, 2, -4, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 20, -2, 1, 0, 0, 0, ],
         }, 
     ],
};
Class.armPart444 = {
   PARENT: "genericTank",
   COLOR: "grey",
   INDEPENDENT: true,
   BORDERLESS: true,
   DRAW_FILL: false,
   TURRETS: [{
        POSITION: [20, 10.5, 0, 0, 190, 0],
        TYPE: ["armPart333", {INDEPENDENT: true}],
        },
   ],
   GUNS: [ {
         POSITION: [ 4, 20, 2, -4, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 20, -2, 1, 0, 0, 0, ],
         }, 
     ],
};
Class.bossPart222 = {
   PARENT: "genericTank",
   SHAPE: 4,
   TURRETS: [{
        POSITION: [7.5, 9, 0, 0, 190, 0],
        TYPE: ["armPart44", {INDEPENDENT: true}],
        },
   ],
   INDEPENDENT: true,
}
Class.defaultBody = {
    PARENT: "genericTank",
    LABEL: "Body",
    BODY: {
      ACCELERATION: base.ACCEL,
      SPEED: base.SPEED,
      HEALTH: base.HEALTH,
      DAMAGE: base.DAMAGE,
      PENETRATION: base.PENETRATION,
      SHIELD: base.SHIELD,
      REGEN: base.REGEN,
      FOV: base.FOV,
   },
   SHAPE: 0,
}
Class.wallBody = {
    PARENT: "genericTank",
    LABEL: "Wall",
    SHAPE: 8,
    UPGRADE_TOOLTIP: "High body health",
    BODY: {
      ACCELERATION: base.ACCEL * 0.95,
      SPEED: base.SPEED * 0.8,
      HEALTH: base.HEALTH * 1.35,
      DAMAGE: base.DAMAGE,
      PENETRATION: base.PENETRATION,
      SHIELD: base.SHIELD * 1.1,
      REGEN: base.REGEN,
      FOV: base.FOV * 0.95,
   },
}
Class.verySharpBody = {
    PARENT: "genericTank",
    LABEL: "Sharp",
    UPGRADE_TOOLTIP: "High body damage",
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "sharpBody",
        },
    ],
    BODY: {
      ACCELERATION: base.ACCEL,
      SPEED: base.SPEED,
      HEALTH: base.HEALTH,
      DAMAGE: base.DAMAGE * 1.35,
      PENETRATION: base.PENETRATION,
      SHIELD: base.SHIELD,
      REGEN: base.REGEN,
      FOV: base.FOV,
   },
   SHAPE: 0,
}
Class.binocularsBody = {
    PARENT: "genericTank",
    LABEL: "Binoculars",
    CONTROLLERS: [["zoom", { distance: 550 }]],
    UPGRADE_TOOLTIP: "Hold right click to zoom",
    TURRETS: [
        {
            POSITION: [9, 0, 0, 45, 360, 1],
            TYPE: ["binocularsDeco", {INVISIBLE: [0.08, 0.03]}],
        },
    ],
    BODY: {
      ACCELERATION: base.ACCEL,
      SPEED: base.SPEED * 0.9,
      HEALTH: base.HEALTH,
      DAMAGE: base.DAMAGE,
      PENETRATION: base.PENETRATION,
      SHIELD: base.SHIELD,
      REGEN: base.REGEN,
      FOV: base.FOV * 1.25,
   },
   SHAPE: 0,
}
Class.defaultTank = {
    PARENT: "genericTank",
    LABEL: "Class",
    GUNS: [],
}
Class.tankBullet = {
    PARENT: "bullet",
    SHAPE: "M -1.5 1 L -1.5 -1 C -0.5 -1 0.5 -1 1.5 0 C 0.5 1 -0.5 1 -1.5 1",
}
Class.realtank = {
   PARENT: "genericTank",
   LABEL: 'Tank',
   UPGRADE_TOOLTIP: "High bullet speed",
   GUNS: [ {
         POSITION: [ 29, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.tankGun, g.less_reload, {size: 0.85}]),
            TYPE: "tankBullet",
         }, }, {
         POSITION: [ 1, 6, 1.3, 21, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.tankGun, g.less_reload, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 2, 7.5, 1, 24, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.tankGun, g.less_reload, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 7, 7, -1.5, 5, 0, 0, 0, ],
         }, 
     ],
};
Class.heavytank = {
   PARENT: 'genericTank',
   LABEL: 'Heavy Tank',
   GUNS: [ {
         POSITION: [ 32, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.heavyTankGun, g.less_reload, {size: 0.85}]),
            TYPE: "tankBullet",
         }, }, {
         POSITION: [ 1, 8, 1.3, 22, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.heavyTankGun, g.less_reload, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 1.5, 9.5, -1.1, 24, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.heavyTankGun, g.less_reload, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 1.5, 8, 1.1, 27, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.heavyTankGun, g.less_reload, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ -0.5, 8, -1.1, 22, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.heavyTankGun, g.less_reload, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 9.5, -1.5, 5, 0, 0, 0, ],
         }, 
     ],
};
Class.snipertank = {
   PARENT: "genericTank",
   LABEL: 'Sniper',
   UPGRADE_TOOLTIP: "High bullet speed",
   GUNS: [ {
         POSITION: [ 35.5, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniperTankGun, g.less_reload, {size: 0.85}]),
            TYPE: "tankBullet",
         }, }, {
         POSITION: [ 1, 6, 1.3, 28.5, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniperTankGun, g.less_reload, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 2, 7.5, 1, 30.5, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniperTankGun, g.less_reload, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 7, 7, -1.5, 5, 0, 0, 0, ],
         }, 
     ],
};
Class.twintank = {
   PARENT: 'genericTank',
   LABEL: 'Twin',
   UPGRADE_TOOLTIP: "Two guns",
   GUNS: [ {
         POSITION: [ 30, 6, 1, 0, -6, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.tankGun, g.less_reload, {size: 0.85}]),
            TYPE: "tankBullet",
         }, }, {
         POSITION: [ 30, 6, 1, 0, 6, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.tankGun, g.less_reload, {size: 0.85}]),
            TYPE: "tankBullet",
         }, }, {
         POSITION: [ 1, 6, 1.3, 23, -6, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.tankGun, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 1, 6, 1.3, 23, 6, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.tankGun, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 2, 7.65, 0.8, 25, -6, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.tankGun, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 2, 7.65, 0.8, 25, 6, 0, 0,.5 ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.tankGun, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 7, 8, -1.5, 4, -3, -15, 0, ],
         }, {
         POSITION: [ 7, 8, -1.5, 4, 3, 15, 0, ],
         }, 
     ],
};
Class.quadBuilder = {
   PARENT: 'genericTank',
   LABEL: 'Quad Builder',
   STAT_NAMES: statnames.trap,
   GUNS: weaponArray([
         {
         POSITION: [ 14, 6, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 6, 1.1, 14, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.weak]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ], 4)
};
Class.bentBoomer = {
   PARENT: 'genericTank',
   LABEL: 'Bent Boomer',
   STAT_NAMES: statnames.trap,
   GUNS: [ {
         POSITION: [ 8, 10, 1, 8, 2, 35, 0, ],
         }, {
         POSITION: [ 8, 10, 1, 8, -2, -35, 0, ],
         }, {
         POSITION: [ 2, 10, 1.3, 16, 2, 35, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.fast, g.twin, g.boomerang]),
            TYPE: "boomerang",
            STAT_CALCULATOR: "block",
         }, }, {
         POSITION: [ 2, 10, 1.3, 16, -2, -35, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.fast, g.twin, g.boomerang]),
            TYPE: "boomerang",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.sniper3gun = {
   PARENT: 'genericTank',
   LABEL: '',
   BODY: {
      FOV: 5,
   },
   COLOR: "grey",
   GUNS: [ {
         POSITION: [ 27, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.auto, g.assassin, g.autosnipe]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 5, 9, -1.5, 8, 0, 0, 0, ],
         }, 
     ],
};
Class.sniper3 = makeRadialAuto("sniper3gun", {isTurret: true, danger: 7, label: "Sniper-3", count: 3})
Class.oldArmsman = makeGuard("rifle", "Old Armsman")
Class.oldspike = {
    PARENT: "genericSmasher",
    LABEL: "Weird Spike",
    BODY: {
        SPEED: base.SPEED * 0.9,
        DAMAGE: base.DAMAGE * 1.15,
    },
    TURRETS: [
        {
            POSITION: [20.5, 0, 0, 0, 360, 0],
            TYPE: "spikeBody1",
        },
        {
            POSITION: [20.5, 0, 0, 180, 360, 0],
            TYPE: "spikeBody2",
        },
    ],
}
Class.quintuplet = {
   PARENT: 'genericTank',
   LABEL: 'Quintuplet',
   BODY: {
      FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 16, 10, 1, 0, -5, 0, 0.667, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet, g.quint]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 10, 1, 0, 5, 0, 0.667, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet, g.quint]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 10, 1, 0, -3, 0, 0.333, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet, g.quint]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 10, 1, 0, 3, 0, 0.333, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet, g.quint]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 10, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet, g.quint]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.scrappedMenu = menu("Scrapped Menu")
Class.scrappedMenu2 = menu("Scrapped Menu")
Class.autoTrapper = makeAuto("trapper", "Auto-Trapper")
Class.railgunTank = {
   PARENT: 'genericTank',
   LABEL: 'Railgun',
   BODY: {
       FOV: 1.25 * base.FOV
   },
   GUNS: [ {
         POSITION: [ 20.5, 7.5, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 24.5, 5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, {pen: 1.35, damage: 1.1, health: 1.1, speed: 2, maxSpeed: 2, reload: 2.25, size: 0.9}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 13, 0.6, 6, 0, 0, 0, ],
         }, 
     ],
};
Class.megaSpawner = {
    PARENT: "genericTank",
    LABEL: "Mega Spawner",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            POSITION: [4.5, 13, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 15, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, {health: 1.2, damage: 1.1, speed: 0.95, maxSpeed: 1.05, reload: 1.2, size: 0.7}]),
                TYPE: "megaMinion",
                STAT_CALCULATOR: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 15, 1, 0, 0, 0, 0],
        },
    ],
}
Class.badDreadnought = {
   PARENT: 'genericTank',
   LABEL: 'Bad Dreadnought',
   TURRETS: [
       {
           POSITION: [20, -5, 0, 0, 360, 0],
           TYPE: ["genericEntity", {COLOR: "grey"}],
       },
   ],
   GUNS: [ {
         POSITION: [ 17, 8, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 6, 17, 1, 15, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, {size: 0.65, reload: 0.85}]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 12, 4, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.15, speed: 0.5, range: 0.05, spray: 4.5, recoil: 0.15, size: 0.45}]),
            TYPE: "bullet",
            STAT_CALCULATOR: "thruster",
            DRAW_FILL: false,
            BORDERLESS: true,
         }, }, {
         POSITION: [ 8.5, 4, 1, 0, -4, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.15, speed: 0.5, range: 0.05, spray: 4.5, recoil: 0.15, size: 0.45}]),
            TYPE: "bullet",
            STAT_CALCULATOR: "thruster",
            DRAW_FILL: false,
            BORDERLESS: true,
         }, }, {
         POSITION: [ 8.5, 4, 1, 0, 4, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.15, speed: 0.5, range: 0.05, spray: 4.5, recoil: 0.15, size: 0.45}]),
            TYPE: "bullet",
            STAT_CALCULATOR: "thruster",
            DRAW_FILL: false,
            BORDERLESS: true,
         }, }, {
         POSITION: [ 8.5, 4, 1, 0, -7.5, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.15, speed: 0.5, range: 0.05, spray: 4.5, recoil: 0.15, size: 0.45}]),
            TYPE: "bullet",
            STAT_CALCULATOR: "thruster",
            DRAW_FILL: false,
            BORDERLESS: true,
         }, }, {
         POSITION: [ 8.5, 4, 1, 0, 7.5, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.15, speed: 0.5, range: 0.05, spray: 4.5, recoil: 0.15, size: 0.45}]),
            TYPE: "bullet",
            STAT_CALCULATOR: "thruster",
            DRAW_FILL: false,
            BORDERLESS: true,
         }, }, 
     ],
};
Class.mender = {
   PARENT: 'genericTank',
   LABEL: 'Mender',
   TURRETS: [
       {
           POSITION: [6.5, 0, 0, 0, 360, 1],
           TYPE: "mendersymbol",
       },
   ],
   GUNS: [ {
         POSITION: [ 13.5, 3.5, 1, 0, -4.5, -7, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 13.5, 3.5, 1, 0, 4.5, 7, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 9, 1, 0, 0, 180, 0, ],
         }, {
         POSITION: [ 6, 17, 1, -20, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.menderHealer, {reload: 60, range: 0.2, speed: 2}]),
            TYPE: "healerBullet",
         }, }, 
     ],
};
Class.prodigy = {
   PARENT: 'genericTank',
   LABEL: 'Prodigy',
   DANGER: 7,
   SHAPE: 6,
   BODY: {
       SPEED: 0.8 * base.SPEED,
       FOV: base.FOV * 1.15,
   },
   STAT_NAMES: statnames.mixed,
   GUNS: weaponArray([
         {
         POSITION: [ 14, 9, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 9, 1.5, 14, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, { range: 0.5, speed: 0.7, maxSpeed: 0.7 }]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 5.25, 9, 1.2, 8, 0, -60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {size: 1.2}]),
            TYPE: "sunchip",
            MAX_CHILDREN: 4,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "necro",
            WAIT_TO_CYCLE: true,
            DELAY_SPAWN: false,
         }, }, 
     ], 3)
};
Class.spawnerdrive = {
    PARENT: "genericTank",
    LABEL: "Spawnerdrive",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, {reload: 0.9, damage: 0.95, health: 0.95}]),
                TYPE: "turretedMinion",
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
Class.rimfire = {
   PARENT: 'genericTank',
   LABEL: 'Rimfire',
   GUNS: [ {
         POSITION: [ 19, 2, 1, 0, 2.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { recoil: 4 }, { recoil: 1.8 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 2, 1, 0, -2.5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { recoil: 4 }, { recoil: 1.8 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 11.5, 3.5, 1, 0, 7, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 11.5, 3.5, 1, 0, -7, 0, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 11, 1, 0, 0, 0, 0, ],
         },
     ],
};
Class.productionist = {
   PARENT: 'genericTank',
   LABEL: 'Productionist',
   GUNS: [ {
         POSITION: [ 16.5, 5.5, 1, 0, -5.5, 0, 0, ],
         }, {
         POSITION: [ 16.5, 5.5, 1, 0, 5.5, 0, 0, ],
         }, {
         POSITION: [ 11, 8.5, 0.85, 1, -5.5, 0, 0, ],
         }, {
         POSITION: [ 11, 8.5, 0.85, 1, 5.5, 0, 0, ],
         }, {
         POSITION: [ 1, 7.5, 1, 16.5, -5.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.babyfactory, {size: 1.2, reload: 1.3}]),
            TYPE: "tinyMinion",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 1, 7.5, 1, 16.5, 5.5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.babyfactory, {size: 1.2, reload: 1.3}]),
            TYPE: "tinyMinion",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, 
     ],
};
Class.taser = {
    PARENT: "vulture",
    LABEL: "Taser",
}
Class.randomMenu = menu("Random")
Class.shotMenu = menu("Strange Shotguns")
const annishotGuns = [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.machineGun, g.shotgun, {size: 1.4, speed: 1.3}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.machineGun, g.shotgun, {size: 1.4, speed: 1.3}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.machineGun, g.shotgun, {size: 1.4, speed: 1.3}]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.machineGun, g.shotgun, {size: 1.4, speed: 1.3}]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.machineGun, g.shotgun, {size: 1.4, speed: 1.3}]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.machineGun, g.shotgun, {size: 1.4, speed: 1.3}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.machineGun, g.shotgun, {size: 1.4, speed: 1.3}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.machineGun, g.shotgun, {size: 1.4, speed: 1.3}]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.machineGun, g.shotgun, {size: 1.4, speed: 1.3}]),
                TYPE: "casing",
            },
        },
]
const machineshotGuns = [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, {damage: 0.9, health: 0.95, reload: 0.75, spray: 1.4}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, {damage: 0.9, health: 0.95, reload: 0.75, spray: 1.4}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, {damage: 0.9, health: 0.95, reload: 0.75, spray: 1.4}]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, {damage: 0.9, health: 0.95, reload: 0.75, spray: 1.4}]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, {damage: 0.9, health: 0.95, reload: 0.75, spray: 1.4}]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, {damage: 0.9, health: 0.95, reload: 0.75, spray: 1.4}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, {damage: 0.9, health: 0.95, reload: 0.75, spray: 1.4}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, {damage: 0.9, health: 0.95, reload: 0.75, spray: 1.4}]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, {damage: 0.9, health: 0.95, reload: 0.75, spray: 1.4}]),
                TYPE: "casing",
            },
        },
]
const minishotGuns = [
        {
            POSITION: [8, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [8, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [8, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [5, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [5, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [5, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [5, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [6, 3, 1, 11, -3, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [6, 3, 1, 11, 3, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [6, 4, 1, 13, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [3, 4, 1, 12, -1, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [3, 4, 1, 11, 1, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [3, 3, 1, 13, -1, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [3, 3, 1, 13, 1, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [3, 2, 1, 13, 2, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [3, 2, 1, 13, -2, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [4, 3, 1, 11, -3, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun]),
                TYPE: "casing",
            },
        },
]
Class.machineShot = {
   PARENT: 'genericTank',
   LABEL: 'Machineshot',
   GUNS: [
         ...machineshotGuns,
         {
         POSITION: [ 15, 14, 1.2, 6, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, g.fake, {damage: 0.9, health: 0.95, reload: 0.75, spray: 1.4}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 15, -1.3, 3, 0, 0, 0, ],
         }, 
     ],
};
Class.annishot = {
   PARENT: 'genericTank',
   LABEL: 'Annishot',
   GUNS: [
         ...annishotGuns,
         {
         POSITION: [ 17, 18.5, 1, 4, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.machineGun, g.shotgun, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 11, 18.5, -1.08, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.minishot = {
   PARENT: 'genericTank',
   LABEL: 'Minishot',
   GUNS: [
         ...minishotGuns,
         {
         POSITION: [ 19, 14, 1, 6, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 14, 1, 6, 0, 0, 1/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 14, 1, 6, 0, 0, 2/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.minigun, g.shotgun, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 14, -1.3, 4, 0, 0, 0, ],
         }, 
     ],
};

Class.developer.UPGRADES_TIER_0 = ["tanks", "bosses", "shapeMenu", "spectator", "levels", "teams", "eggGenerator", "testing", "addons", "dwajlCustomTanks", "fullSkills", "helicopter", "opWoomyTanks", "tracker3", "randomMenu"]
    Class.eggGenerator.UPGRADES_TIER_1 = ["bossGenerator"]
     Class.bossGenerator.UPGRADES_TIER_0 = ["eliteSection", "celestialSection"]
      Class.eliteSection.UPGRADES_TIER_0 = ["destroyerGenerator", "ringGenerator", "gunnerGenerator", "sprayerGenerator", "pelleterGenerator", "battleshipGenerator", "spawnerGenerator", "trapGuardGenerator", "spinnerGenerator", "skimmerGenerator"]
      Class.celestialSection.UPGRADES_TIER_0 = ["paladinCeleGenerator", "freyjaCeleGenerator", "zaphCeleGenerator", "nyxCeleGenerator", "theiaCeleGenerator", "juliusCeleGenerator", "genghisCeleGenerator", "napoleonCeleGenerator"]
    Class.shapeMenu.UPGRADES_TIER_0 = ["sharpSquare", "sharpTriangle", "sharpPentagon", "sharpHexagon"]
    Class.opWoomyTanks.UPGRADES_TIER_0 = ["OPflakgun", "doubletwinfernoautoception", "OPlancer", "triplockRifle", "flakGunder"]
    Class.dwajlCustomTanks.UPGRADES_TIER_0 = ["megaWallThrower", "superWallThrower", "meDoingYourMomButItsReal", "mutatedRanger", "anActualRecoiler", "anActualConstruct", "anActualMegaTrap", "nowMeDoingYourMoms", "heyWhatIsThis", "someRandomAssSpamer", "fuckingkillyourself", "kysKysKysKysKysFuckingKys", "auto10Wrench", "autoAuto10Wrench", "realCrowbar", "megaMono", "colibri", "anActualBiggestMac", "annihiliner", "claws", "autoThreeLaserTwin", "autoThreeLaserDestroyer", "autoThreeLaserDestroyer1", "autoThreeLaserAnnihilator", "autoThreeLaserAnnihilator1", "fuckYouRagnarokAndKronos", "theCannon", "nailliner", "tracker3", "dctPage2"]
    Class.dctPage2.UPGRADES_TIER_0 = ["nai", "lgun", "imageShapeTestTwo", "shortgun", "pincer", "spikeLauncher", "megaSmasherLauncher", "megaSmasherLauncherGrowing", "rotatingBulletLauncher", "uglyStrarapleleprlrp", "crowbarHT", "overspawner", "opOverspawner", "pencil", "battlelauncher", "autoHexaShotgunner", "dctPage3"]
    Class.tanks.UPGRADES_TIER_0 = ["basic", "unavailable", "arenaCloser", "dominators", "sanctuaries", "mothership", "baseProtector", "antiTankMachineGun"]
    Class.dctPage3.UPGRADES_TIER_0 = ["annihilet", "annihishot", "superstapler", "sisisisisisingle", "rightAtYourHouse", "rifleBoomer", "jellyfish", "topBananas", "thatOneTeamer", "thatOneTeamer2", "realSmasherGod", "nerd", "dctPage4"]
    Class.dctPage4.UPGRADES_TIER_0 = ["beak", "niggergun", "heavyRocketeer", "shapeT", "bacniggeria", "abte", "waterGunner", "bruhReally", "brainDamage", "huhWhy", "brokenEarth", "kidBasic", "nailshooter", "staplerLauncher", "omegaSpawner", "omegaSpike", "annihilatorSigma", "dctPage5"]
    Class.dctPage5.UPGRADES_TIER_0 = ["railgun", "railship", "corruptMenu", "basicTestColor", "computer", "computer1", "realWrench", "gunner4", "pi", "realFork", "hammer", "leviathan", "shrapnel", "machinetrapnnel", "dctPage6"]
    Class.dctPage6.UPGRADES_TIER_0 = ["fiveSider", "mutant", "stopper", "theDemon", "desmos1", "hrl", "twint", "realPen", "crossbow2", "revolutionist11", "ttxShoot", "ttxMegaShoot", "ttxOmegaShoot", "omegaOppen", "squareShapeTest", "dctPage7"]
    Class.dctPage7.UPGRADES_TIER_0 = ["omegaBrainDamage", "foots", "randomShitBoss", "pentragon", "hornyranger", "fireworkLauncher", "seer3"]
        Class.randomShitBoss.UPGRADES_TIER_0 = ["randomShitBoss2", "randomShitBoss22", "dwajlCustomTanks"]

    Class.randomMenu.UPGRADES_TIER_0 = ["shotMenu"]
    Class.shotMenu.UPGRADES_TIER_0 = ["machineShot", "annishot", "minishot"]
    // helicopters
    Class.helicopter.UPGRADES_TIER_0 = ["landmineheli", "naheli", "firecop", "aheli5", "swheli"]
    // firesprayers
    Class.firecop.UPGRADES_TIER_3 = ["firecopte"]
    Class.firecopte.UPGRADES_TIER_3 = ["firecopter"]
    // normal attackers
    Class.naheli.UPGRADES_TIER_3 = ["aheli"]
    Class.aheli.UPGRADES_TIER_4 = ["aheli4"]
    // explodes
    Class.landmineheli.UPGRADES_TIER_3 = ["expheli"]
    Class.expheli.UPGRADES_TIER_4 = ["rocketHeli"]
    // drones/minions/swarm
    Class.aheli5.UPGRADES_TIER_3 = ["aheli6"]
    Class.aheli6.UPGRADES_TIER_4 = ["aheli2"]

    Class.swheli.UPGRADES_TIER_3 = ["swheli2"]
    Class.swheli2.UPGRADES_TIER_4 = ["swheli3"]

    Class.helicopter.UPGRADES_TIER_4 = ["airport"]
    // other
    Class.gunner4.UPGRADES_TIER_0 = ["gunner6"]
    Class.corruptMenu.UPGRADES_TIER_0 = ["corruptX", "antiTankCorruptX", "corruptProtector"]
    Class.staplerLauncher.UPGRADES_TIER_0 = ["staplerLauncher1", "staplerLauncher2"]
    Class.shapeT.UPGRADES_TIER_0 = ["shapeTest2"]
    Class.waterGunner.UPGRADES_TIER_0 = ["pissGun", "pissLord"]
        Class.unavailable.UPGRADES_TIER_0 = ["flail", "jumpSmasher", "healer", "literallyAMachineGun", "literallyATank", "master", "volute", "whirlwind", "oldTanks", "scrappedMenu"]
            Class.scrappedMenu.UPGRADES_TIER_0 = ["scrappedMenu2", "rocketeerNo", "crowbarNo", "peashooterPrototype", "autoTrapper", "megaTrapperNo", "railgunTank", "megaSpawner", "badDreadnought"]
            Class.scrappedMenu2.UPGRADES_TIER_0 = ["scrappedMenu", "mender", "prodigy", "spawnerdrive", "rimfire", "productionist", "taser"]
            Class.oldTanks.UPGRADES_TIER_0 = ["bentBoomer", "quadBuilder", "quintuplet", "sniper3", "master", "oldspike", "oldArmsman"]
            Class.flail.UPGRADES_TIER_2 = ["doubleFlail", "mace", "flangle"]
                Class.doubleFlail.UPGRADES_TIER_3 = ["tripleFlail"]
                Class.mace.UPGRADES_TIER_3 = ["bigMama", "itHurtsDontTouchIt", "flace"]
                Class.flangle.UPGRADES_TIER_3 = ["flooster", "flace"]
            Class.volute.UPGRADES_TIER_3 = ["sidewinderOld"]
            Class.whirlwind.UPGRADES_TIER_2 = ["tornado", "hurricane"]
                Class.whirlwind.UPGRADES_TIER_3 = ["hexaWhirl", "munition", "whirl3", "whirlGuard", /*"prophet",*/ "vortex"]
                Class.tornado.UPGRADES_TIER_3 = ["megaTornado", "tempest", "thunderbolt"]
                Class.hurricane.UPGRADES_TIER_3 = ["typhoon", "blizzard"]
        Class.dominators.UPGRADES_TIER_0 = ["destroyerDominator", "gunnerDominator", "trapperDominator", "penDominator", "shotgunDominator", "rocketeerDominator"]
        Class.sanctuaries.UPGRADES_TIER_0 = ["sanctuaryTier1", "sanctuaryTier2", "sanctuaryTier3", "sanctuaryTier4", "sanctuaryTier5", "sanctuaryTier6"]

    Class.bosses.UPGRADES_TIER_0 = ["normalBosses", "other", "themed"]
        Class.themed.UPGRADES_TIER_0 = ["halloween", "bosses"]
        Class.normalBosses.UPGRADES_TIER_0 = ["sentries", "elites", "fallens", "halloween", "mysticals", "nesters", "rogues", "rammers", "terrestrials", "celestials", "customCelestials", "eternals", "devBosses"]
        Class.other.UPGRADES_TIER_0 = ["tieredBosses", "hurricaneBosses", "arBosses", "provokerBosses", "otherShit", "normalBosses"]

            Class.arBosses.UPGRADES_TIER_0 = ["arRoguePalisade", "arNestKeeper", "other"]

            Class.provokerBosses.UPGRADES_TIER_0 = ["provoker", "aggressor", "instigator", "troublemaker", "other"]

            Class.otherShit.UPGRADES_TIER_0 = ["deltaEntomologist", "eliteInferno", "omegaSpawner", "fortressBoss", "deltaSteampunk", "deltaGunner", "otherShit2"]
                Class.otherShit2.UPGRADES_TIER_0 = ["starBoss", "orbitalSpace", "hcatBoss", "demonCore", "nuclearBomb", "deltaSprayer", "otherShit3"]
                    Class.otherShit3.UPGRADES_TIER_0 = ["deltaPelleter", "deltaBattleship", "deltaTrapGuard", "shielderBoss", "astronomic", "other"]

            Class.hurricaneBosses.UPGRADES_TIER_0 = ["eliteBrusher", "katrina", "gustav", "rewrj", "eiwos", "fireiewos", "hurricaneBosses2"]
                Class.hurricaneBosses2.UPGRADES_TIER_0 = ["rewrjElite", "eiwosElite", "fireiewosElite", "miltonElite", "katrinaElite", "gustavElite", "hurricaneBosses3"]
                    Class.hurricaneBosses3.UPGRADES_TIER_0 = ["ultimateHurricane", "other"]

        Class.tieredBosses.UPGRADES_TIER_0 = ["hs1"]
         Class.hs1.UPGRADES_TIER_0 = ["hs2"]
          Class.hs2.UPGRADES_TIER_0 = ["hs3"]
           Class.hs3.UPGRADES_TIER_0 = ["hs4"]
            Class.hs4.UPGRADES_TIER_0 = ["hs5"]
        Class.fallens.UPGRADES_TIER_0 = ["fallenOverlord", "fallenBooster", "fallenFighter", "fallenCluster"] 
        Class.sentries.UPGRADES_TIER_0 = ["sentrySwarm", "sentryGun", "sentryTrap", "shinySentrySwarm", "shinySentryGun", "shinySentryTrap", "sentinelMinigun", "sentinelLauncher", "sentinelCrossbow", "sentryLeaf", "sentryLeaf2", "sentryLeaf3", "sentries2"]
        Class.sentries2.UPGRADES_TIER_0 = ["sentryLeafCap", "missile23Crasher", "quadralsquare", "pumpkinSentinel", "pumpkinSentinelMach", "pumpkinSentinelSmash"]
            Class.quadralsquare.UPGRADES_TIER_0 = ["quadralsquare2", "quadralsquare3", "quadralsquare4", "quadralsquare5"]
        Class.elites.UPGRADES_TIER_0 = ["eliteDestroyer", "eliteFallenRing", "eliteGunner", "eliteSprayer", "elitePelleter", "eliteBattleship", "eliteSpawner", "omegaSpawner", "eliteTrapGuard", "eliteSpinner", "eliteSkimmer"]
        Class.elites2.UPGRADES_TIER_0 = ["legionaryCrasher", "guardian", "defender", "sprayerLegion"]
        Class.mysticals.UPGRADES_TIER_0 = ["sorcerer", "summoner", "metalSummoner", "enchantress", "exorcistor", "shaman"]
         Class.sorcerer.UPGRADES_TIER_0 = ["betasorcerer"]
         Class.betasorcerer.UPGRADES_TIER_0 = ["alphasorcerer"]
         Class.alphasorcerer.UPGRADES_TIER_0 = ["omegasorcerer"]
          Class.summoner.UPGRADES_TIER_0 = ["betaSummoner"]
          Class.betaSummoner.UPGRADES_TIER_0 = ["alphaSummoner"]
          Class.alphaSummoner.UPGRADES_TIER_0 = ["omegaSummoner"]
           Class.enchantress.UPGRADES_TIER_0 = ["betaEnchantress"]
           Class.betaEnchantress.UPGRADES_TIER_0 = ["alphaEnchantress"]
           Class.alphaEnchantress.UPGRADES_TIER_0 = ["omegaEnchantress"]
            Class.exorcistor.UPGRADES_TIER_0 = ["betaexorcistor"]
            Class.betaexorcistor.UPGRADES_TIER_0 = ["alphaexorcistor"]
            Class.alphaexorcistor.UPGRADES_TIER_0 = ["omegaexorcistor"]
             Class.shaman.UPGRADES_TIER_0 = ["betashaman"]
             Class.betashaman.UPGRADES_TIER_0 = ["alphashaman"]
             Class.alphashaman.UPGRADES_TIER_0 = ["omegashaman"]
        Class.nesters.UPGRADES_TIER_0 = ["nestKeeper", "nestWarden", "nestGuardian", "shinyNestKeeper", "shinyNestWarden", "shinyNestGuardian", "legNestKeeper", "legNestWarden", "legNestGuardian"]
        Class.halloween.UPGRADES_TIER_0 = ["halloweenRoguePalisade", "halloweenEliteSkimmer"]
        Class.rogues.UPGRADES_TIER_0 = ["roguePalisade", "rogueArmada", "julius", "genghis", "napoleon", "plutus", "althea", "elpis", "boreas", "gaia"]
	    Class.rammers.UPGRADES_TIER_0 = ["bob", "nemesis"]
        Class.terrestrials.UPGRADES_TIER_0 = ["ares", "gersemi", "ezekiel", "eris", "selene", "plutus", "althea", "elpis"]
        Class.celestials.UPGRADES_TIER_0 = ["paladin", "freyja", "zaphkiel", "nyx", "theia", "atlas", "rhea", "julius", "genghis", "napoleon"]
        Class.customCelestials.UPGRADES_TIER_0 = ["hemera", "supernova", "emperor", "yeahFuckYourself", "colossus", "wavelight", "pointer", "kamaz", "ceres"]
        Class.eternals.UPGRADES_TIER_0 = ["odin", "kronos", "boreas", "gaia"]
        Class.devBosses.UPGRADES_TIER_0 = ["taureonBoss", "zephiBoss", "dogeiscutBoss", "trplnrBoss", "frostBoss", "toothlessBoss", "AEMKShipBoss"]

    Class.testing.UPGRADES_TIER_0 = ["diamondShape", "miscTest", "mmaTest", "vulnturrettest", "onTest", "alphaGunTest", "strokeWidthTest", "testLayeredBoss", "tooltipTank", "turretLayerTesting", "bulletSpawnTest", "propTest", "weaponArrayTest", "radialAutoTest", "makeAutoTest", "imageShapeTest", "turretStatScaleTest", "auraBasic", "auraHealer", "weirdAutoBasic", "ghoster", "gunBenchmark", "switcheroo", ["developer", "developer"], "armyOfOne", "vanquisher", ["ctGuns", "extraGuns"], "testing2"]
    Class.testing2.UPGRADES_TIER_0 = ["testing", "mummifier", "iceBasic", "randomizer", "expander"]

    // Another combined tanks
    Class.defaultTank.UPGRADES_TIER_0 = ["realtank"]
        Class.realtank.UPGRADES_TIER_0 = ["twintank", "snipertank", "heavytank"]
    Class.defaultBody.UPGRADES_TIER_0 = ["wallBody", "verySharpBody", "binocularsBody"]
 
    // Combined Guns
    Class.ctGuns.UPGRADES_TIER_0 = ["ct1B", "ct1T", "ct1D", "ct1S", "ct1H"]
    Class.ct1B.UPGRADES_TIER_0 = ["ct2fB", "ct2sB", "ct2pB"]
        Class.ct2fB.UPGRADES_TIER_0 = ["ct3fastest"]
        Class.ct2sB.UPGRADES_TIER_0 = ["ct3strongest"]
        Class.ct2pB.UPGRADES_TIER_0 = ["ct3borer"]
    Class.ct1T.UPGRADES_TIER_0 = ["ct2bT", "ct2mT", "ct2rT"]
        Class.ct2bT.UPGRADES_TIER_0 = ["ct3builder"]
        Class.ct2mT.UPGRADES_TIER_0 = ["ct3otrapper"]
        Class.ct2rT.UPGRADES_TIER_0 = ["ct3boomer"]
    Class.ct1D.UPGRADES_TIER_0 = ["ct2cD", "ct2sD", "ct2pD"]
        Class.ct2cD.UPGRADES_TIER_0 = ["ct3allseer"]
        Class.ct2sD.UPGRADES_TIER_0 = ["ct3spawner"]
        Class.ct2pD.UPGRADES_TIER_0 = ["ct3spammer"]
    Class.ct1S.UPGRADES_TIER_0 = ["ct2wS", "ct2sS", "ct2mS"]
        Class.ct2wS.UPGRADES_TIER_0 = ["ct3swarmgun"]
        Class.ct2sS.UPGRADES_TIER_0 = ["ct3strongswarm"]
        Class.ct2mS.UPGRADES_TIER_0 = ["ct3swarmspammer"]
    Class.ct1H.UPGRADES_TIER_0 = ["ct2hH", "ct2gH", "ct2mH"]
        Class.ct2hH.UPGRADES_TIER_0 = ["ct3stronghomin"]
        Class.ct2gH.UPGRADES_TIER_0 = ["ct3gatler"]
        Class.ct2mH.UPGRADES_TIER_0 = ["ct3rocket"]

    Class.extraGuns.UPGRADES_TIER_0 = ["backMech", "backTrapper", "backHybrid", "ctAutoTurret", "auraGun"]
    Class.backMech.UPGRADES_TIER_0 = ["miniTechnician", "mechark"]
    Class.backTrapper.UPGRADES_TIER_0 = ["wwarkk", "miniBarricade"]
    Class.backHybrid.UPGRADES_TIER_0 = ["doublebrid", "backSwarm"]
    Class.ctAutoTurret.UPGRADES_TIER_0 = ["ctAutoTurret2", "ctAutoTurret3", "ctAutoTurret4", "ctAutoTurret5"]