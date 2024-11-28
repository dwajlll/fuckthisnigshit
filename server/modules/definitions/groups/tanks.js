const { combineStats, makeAuto, makeCeption, makeOver, makeDeco, makeGuard, makeConq, makeBird, makeRadialAuto, weaponArray } = require('../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../constants.js');
require('./generics.js');
const g = require('../gunvals.js');

// Basic & starting upgrades
Class.basic = {
    PARENT: "genericTank",
    LABEL: "Basic",
    DANGER: 4,
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.fireworkLauncher = {
   PARENT: 'genericTank',
   LABEL: 'Firework Launcher',
   BODY: {
       FOV: 2.5 * base.FOV,
       SPEED: 2 * base.SPEED,
   },
   CONTROLLERS: [["zoom", { distance: 1800 }]],
   GUNS: [ {
         POSITION: [ 17, 10.5, 0.6, 0, 4, 22.5, 0, ],
         }, {
         POSITION: [ 17, 10.5, 0.6, 0, -4, -22.5, 0, ],
         }, {
         POSITION: [ 6.5, 9, 1.1, 4, 4, 22.5, 0, ],
         }, {
         POSITION: [ 6.5, 9, 1.1, 4, -4, -22.5, 0, ],
         }, {
         POSITION: [ 1, 7, 1.5, 17, 6, 15, 0, ],
         }, {
         POSITION: [ 1, 7, 1.5, 17, -6, -15, 0, ],
         }, {
         POSITION: [ 4, 12, 1.25, 18.8, 6, 15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.machineGun, g.launcher, g.rocketeer, {speed: 9, range: 0.15}]),
            TYPE: ["fireworkMissile", {COLOR: "red"}],
            STAT_CALCULATOR: "sustained",
            WAIT_TO_CYCLE: true,
         }, }, {
         POSITION: [ 4, 12, 1.25, 18.8, -6, -15, 1/2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.machineGun, g.launcher, g.rocketeer, {speed: 9, range: 0.15}]),
            TYPE: ["fireworkMissile", {COLOR: "red"}],
            STAT_CALCULATOR: "sustained",
            WAIT_TO_CYCLE: true,
         }, }, 
     ],
};
Class.randomizer = {
   PARENT: 'genericTank',
   LABEL: 'Randomizer',
   GUNS: [ {
         POSITION: [ 19, 5, 1, 0, -3.5, 0, 0, ],
         }, {
         POSITION: [ 19, 5, 1, 0, 3.5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 9, 18, 0.8, 2, 0, 0, 0, ],
         }, 
     ],
};
Class.novaMachine = {
   PARENT: 'genericTank',
   LABEL: 'Nova Machine',
   GUNS: [ {
         POSITION: [ 48, 8.5, 1.5, 12, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.single, {size: 1.2}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8.5, 8.5, -1.8, 6.5, 0, 0, 0, ],
         }, 
     ],
};
Class.novaMachine.PROPS = [
        {
            POSITION: [11.5, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", {COLOR: "white"}],
        },
]
Class.subduer = {
   PARENT: 'genericTank',
   LABEL: 'Subduer',
   BODY: {
        ACCELERATION: base.ACCEL * .9,
        FOV: 1.1,
   },
   GUNS: [ {
         POSITION: [ 23, 5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.woomyhunter, g.hunter2]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 8, 1, 0, 0, 0, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.woomyhunter]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.mitochondrion = {
   PARENT: 'subduer',
   LABEL: 'Mitochondrion',
   GUNS: [ {
         POSITION: [ 26, 2, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.hunter2, g.preda]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 23, 5, 1, 0, 0, 0, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.hunter2, g.preda]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 8, 1, 0, 0, 0, 0.3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.hunter, g.preda]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.subduer2 = makeRadialAuto("autoSubduer", {isTurret: true, danger: 7, label: "Subduer-2", count: 2})
Class.uzi = {
   PARENT: 'genericTank',
   LABEL: 'Uzi',
   BODY: {
        FOV: 1.175,
   },
   GUNS: [ {
         POSITION: [ 19, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 8, 1, 0, 0, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.binary = {
   PARENT: 'genericTank',
   LABEL: 'Binary',
   GUNS: [ {
         POSITION: [ 20, 5, 1, 0, -5.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.woomyhunter, g.hunter2]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 5, 1, 0, 5.5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.woomyhunter, g.hunter2]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 8, 1, 0, -5.5, 0, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.woomyhunter]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 8, 1, 0, 5.5, 0, 0.65, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.woomyhunter]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.blowgun = { // blowjob
   PARENT: 'genericTank',
   LABEL: 'Blowgun',
   BODY: {
        ACCELERATION: base.ACCEL * .85,
        SPEED: base.SPEED * 0.9,
        FOV: 1.1,
   },
   GUNS: [ {
         POSITION: [ 20, 5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.woomyhunter, g.hunter2, g.more_reload]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 8, 1, 0, 0, 0, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.woomyhunter, g.more_reload]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.flanksubduer = {
   PARENT: 'genericTank',
   LABEL: 'Flank Subduer',
   BODY: {
        ACCELERATION: base.ACCEL * .9,
        FOV: 1.1,
   },
   GUNS: weaponArray([
         {
         POSITION: [ 23, 5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.woomyhunter, g.hunter2]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 8, 1, 0, 0, 0, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.woomyhunter]),
            TYPE: "bullet",
         }, }, 
     ], 3)
};
Class.subduerClone = {
   PARENT: 'minion',
   DRAW_HEALTH: true,
   LABEL: 'Submind Probe',
   HITS_OWN_TYPE: "hard",
   CONTROLLERS: ["nearestDifferentMaster" ,"mapAltToFire", "minion", "canRepel", "hangOutNearMaster"],
   BODY: {
        ACCELERATION: base.ACCEL * .9,
        FOV: 1.1,
   },
   PROPS: [
       {
          POSITION: [21, 0, 0, 0, 0],
          TYPE: ["genericEntity", {COLOR: 9}],
       },
   ],
   GUNS: [ {
         POSITION: [ 23, 5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.woomyhunter, g.hunter2, g.half_reload, g.half_damage, g.less_damage, g.less_range]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 8, 1, 0, 0, 0, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.woomyhunter, g.half_reload, g.half_damage, g.less_damage, g.less_range]),
            TYPE: "bullet",
         }, },
     ],
};
Class.submind = {
   PARENT: 'genericTank',
   LABEL: 'Submind',
   BODY: {
        ACCELERATION: base.ACCEL * .9,
        FOV: 1.1,
   },
   PROPS: [
       {
          POSITION: [21, 0, 0, 0, 0],
          TYPE: ["genericEntity", {COLOR: 9}],
       },
   ],
   GUNS: [ {
         POSITION: [ 23, 5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.woomyhunter, g.hunter2]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 8, 1, 0, 0, 0, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.woomyhunter]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 2, 14, 1, 0, 0, 180, 2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.hivemind]),
            TYPE: "subduerClone",
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: 2,
         }, },
     ],
};
// crowba
Class.crowbarTank = {
    PARENT: "genericTank",
    LABEL: "Crowbar",
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
}
Class.crowbarNo = {
    PARENT: "crowbarTank",
}
Class.pryer = {
    PARENT: "genericTank",
    LABEL: "Pryer",
    GUNS: [
        {
            POSITION: [57, 6.5, 1, 0, 0, 0, 0],
        }, {
            POSITION: [5, 8.5, -1.5, 8, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            POSITION: [6, 58, 0, 0, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 48, 0, 0, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
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
}
Class.crank = {
    PARENT: "genericTank",
    LABEL: "Crank",
    GUNS: [
        {
            POSITION: [40.5, 9.5, 1, 0, 0, 0, 0],
        }, {
            POSITION: [6.5, 10.5, -1.5, 6, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            POSITION: [9, 41, 0, 0, 360, 1],
            TYPE: [ "megaAutoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [9, 31, 0, 0, 360, 1],
            TYPE: [ "megaAutoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [9, 21, 0, 0, 360, 1],
            TYPE: [ "megaAutoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        },
    ],
}
Class.chisel = {
    PARENT: "genericTank",
    LABEL: "Chisel",
    GUNS: [
        {
            POSITION: [45.5, 8, 1, 0, 0, 0, 0],
        }, {
            POSITION: [6.5, 9.5, -1.5, 6.5, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            POSITION: [8, 46.5, 0, 0, 360, 1],
            TYPE: [ "auto4gun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [8, 37.5, 0, 0, 360, 1],
            TYPE: [ "auto4gun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [8, 28.5, 0, 0, 360, 1],
            TYPE: [ "auto4gun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [8, 19.5, 0, 0, 360, 1],
            TYPE: [ "auto4gun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        },
    ],
}
Class.lever = {
    PARENT: "genericTank",
    LABEL: "Lever",
    GUNS: [
        {
            POSITION: [36.5, 8, 1, 0, 0, 0, 0],
        }, {
            POSITION: [6.5, 9.5, -1.5, 6.5, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            POSITION: [8, 37.5, 0, 0, 360, 1],
            TYPE: [ "miniSniperTurret", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [8, 28.5, 0, 0, 360, 1],
            TYPE: [ "miniSniperTurret", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [8, 19.5, 0, 0, 360, 1],
            TYPE: [ "miniSniperTurret", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        },
    ],
}
Class.spindle = makeOver('crowbarTank', "Spindle", {count: 1, independent: true, cycle: false})
Class.autoCrowbar = makeAuto("crowbarTank")
Class.dualbar = {
    PARENT: "genericTank",
    LABEL: "Dualbar",
    GUNS: weaponArray([
        {
            POSITION: [37, 6.5, 1, 0, 0, 180, 0],
        }, {
            POSITION: [5, 8.5, -1.5, 8, 0, 180, 0],
        },
    ], 2),
    TURRETS: weaponArray([
        {
            POSITION: [6, 38, 0, 180, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 28, 0, 180, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 18, 0, 180, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        },
    ], 2),
}
Class.spanner = {
    PARENT: "genericTank",
    LABEL: "Spanner",
    GUNS: [
        {
            POSITION: [ 44, 4.5, 1, 0, 0, 0, 0, ],
            PROPERTIES: {
               SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
               TYPE: "bullet",
        }, }, {
            POSITION: [41.5, 6.5, 1, 0, 0, 0, 0],
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
}
Class.wrenchTank = {
    PARENT: "genericTank",
    LABEL: "Wrench",
    GUNS: [
        {
            POSITION: [67, 6.5, 1, 0, 0, 0, 0],
        }, {
            POSITION: [5, 8.5, -1.5, 8, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            POSITION: [6, 68, 0, 0, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 58, 0, 0, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 48, 0, 0, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        },
    ],
}
Class.theUltimateHybrid = {
   PARENT: 'genericTank',
   LABEL: 'The Ultimate Hybrid',
   TURRETS: [
        {
            POSITION: [6, 68, 0, 180, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 58, 0, 180, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 48, 0, 180, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        },
   ],
   GUNS: [ {
         POSITION: [ 19, 2, 1, 0, -2.5, 0, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 2, 1, 0, 2.5, 0, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 2, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 5.5, 7, -1.8, 6.5, 0, 0, 0, ],
         }, {
         POSITION: [ 24, 5, 1, 0, -5, -15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.hunterSecondary, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 24, 5, 1, 0, 5, 15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.hunterSecondary, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 9, 1, 0, -5, -15, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 9, 1, 0, 5, 15, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 13, 1, 0, -3, -20.5, 0.3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 13, 1, 0, 3, 20.5, 0.3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 67, 6.5, 1, 0, 0, -180, 0, ],
         }, {
         POSITION: [ 5, 8.5, -1.5, 8, 0, 180, 0, ],
         }, 
     ],
};
Class.botbasic = {
    PARENT: "genericTank",
    LABEL: "Basic",
    DANGER: 4,
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.iceBasic = {
    PARENT: "genericTank",
    LABEL: "Snowthrower",
    DANGER: 4,
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "iceBullet",
                NEGATIVE_RECOIL: true,
            }
        }
    ]
}
Class.limbA = {
   COLOR: 16,
   CONTROLLERS: ['onlyAcceptInArc'],
   SYNCS_SKILLS: true,
   LABEL: '',
   HAS_NO_RECOIL: true,
   TURRETS: [
        {
            POSITION: [31, 38, 0, -90, 361, 1],
            TYPE: "autoTankGun",
        },
   ],
   GUNS: [ {
         POSITION: [ 26, 8, 1, 0, 0, -90, 0, ],
         }, {
         POSITION: [ 8, 8, -2, 5, 0, -90, 0, ],
         }, 
     ],
};
Class.armA = {
   COLOR: 16,
   CONTROLLERS: ['onlyAcceptInArc'],
   SYNCS_SKILLS: true,
   LABEL: '',
   HAS_NO_RECOIL: true,
   TURRETS: [
        {
            POSITION: [22, 32, 0, -45, 361, 1],
            TYPE: "limbA",
        },
   ],
   GUNS: [ {
         POSITION: [ 26, 8, 1, 0, 0, -45, 0, ],
         }, {
         POSITION: [ 8, 8, -2, 5, 0, -45, 0, ],
         }, {
         POSITION: [ 8, 8, 2, 18, 0, -45, 0, ],
         }, 
     ],
};
Class.limbB = {
   COLOR: 16,
   CONTROLLERS: ['onlyAcceptInArc'],
   SYNCS_SKILLS: true,
   LABEL: '',
   HAS_NO_RECOIL: true,
   TURRETS: [
        {
            POSITION: [31, 38, 0, 90, 361, 1],
            TYPE: "autoTankGun",
        },
   ],
   GUNS: [ {
         POSITION: [ 26, 8, 1, 0, 0, 90, 0, ],
         }, {
         POSITION: [ 8, 8, -2, 5, 0, 90, 0, ],
         }, 
     ],
};
Class.armB = {
   COLOR: 16,
   CONTROLLERS: ['onlyAcceptInArc'],
   SYNCS_SKILLS: true,
   LABEL: '',
   HAS_NO_RECOIL: true,
   TURRETS: [
        {
            POSITION: [22, 32, 0, 45, 361, 1],
            TYPE: "limbB",
        },
   ],
   GUNS: [ {
         POSITION: [ 26, 8, 1, 0, 0, 45, 0, ],
         }, {
         POSITION: [ 8, 8, -2, 5, 0, 45, 0, ],
         }, {
         POSITION: [ 8, 8, 2, 18, 0, 45, 0, ],
         }, 
     ],
};
Class.cephalopod = {
   PARENT: 'genericTank',
   LABEL: 'Cephalopod',
   HAS_NO_RECOIL: true,
   TURRETS: [
        {
            POSITION: [6, 12, 0, 90, 361, 0],
            TYPE: "armA",
        },
        {
            POSITION: [6, 12, 0, -90, 361, 0],
            TYPE: "armB",
        },
   ],
   GUNS: [ {
         POSITION: [ 12, 8, -1.3, 0, 0, -90, 0, ],
         }, {
         POSITION: [ 12, 8, -1.3, 0, 0, 90, 0, ],
         }, 
     ],
};
Class.longlimbA = {
   COLOR: 16,
   CONTROLLERS: ['onlyAcceptInArc'],
   SYNCS_SKILLS: true,
   LABEL: '',
   HAS_NO_RECOIL: true,
   TURRETS: [
        {
            POSITION: [31, 50, 0, -90, 361, 1],
            TYPE: "sniperTurretB",
        },
   ],
   GUNS: [ {
         POSITION: [ 38, 8, 1, 0, 0, -90, 0, ],
         }, {
         POSITION: [ 8, 8, -2, 5, 0, -90, 0, ],
         }, 
     ],
};
Class.longarmA = {
   COLOR: 16,
   CONTROLLERS: ['onlyAcceptInArc'],
   SYNCS_SKILLS: true,
   LABEL: '',
   HAS_NO_RECOIL: true,
   TURRETS: [
        {
            POSITION: [22, 36, 0, -45, 361, 1],
            TYPE: "limbA",
        },
   ],
   GUNS: [ {
         POSITION: [ 38, 8, 1, 0, 0, -45, 0, ],
         }, {
         POSITION: [ 8, 8, -2, 5, 0, -45, 0, ],
         }, {
         POSITION: [ 8, 8, 2, 30, 0, -45, 0, ],
         }, 
     ],
};
Class.longlimbB = {
   COLOR: 16,
   CONTROLLERS: ['onlyAcceptInArc'],
   SYNCS_SKILLS: true,
   LABEL: '',
   HAS_NO_RECOIL: true,
   TURRETS: [
        {
            POSITION: [31, 42, 0, 90, 361, 1],
            TYPE: "sniperTurretB",
        },
   ],
   GUNS: [ {
         POSITION: [ 40, 8, 1, 0, 0, 90, 0, ],
         }, {
         POSITION: [ 8, 8, -2, 5, 0, 90, 0, ],
         }, 
     ],
};
Class.longarmB = {
   COLOR: 16,
   CONTROLLERS: ['onlyAcceptInArc'],
   SYNCS_SKILLS: true,
   LABEL: '',
   HAS_NO_RECOIL: true,
   TURRETS: [
        {
            POSITION: [22, 36, 0, 45, 361, 1],
            TYPE: "limbB",
        },
   ],
   GUNS: [ {
         POSITION: [ 38, 8, 1, 0, 0, 45, 0, ],
         }, {
         POSITION: [ 8, 8, -2, 5, 0, 45, 0, ],
         }, {
         POSITION: [ 8, 8, 2, 30, 0, 45, 0, ],
         }, 
     ],
};
Class.squid = {
   PARENT: 'genericTank',
   LABEL: 'Squid',
   HAS_NO_RECOIL: true,
   TURRETS: [
        {
            POSITION: [6, 16, 0, 90, 361, 0],
            TYPE: "longarmA",
        },
        {
            POSITION: [6, 16, 0, -90, 361, 0],
            TYPE: "longarmB",
        },
   ],
   GUNS: [ {
         POSITION: [ 16, 8, -1.3, 0, 0, -90, 0, ],
         }, {
         POSITION: [ 16, 8, -1.3, 0, 0, 90, 0, ],
         }, 
     ],
};
Class.flamegunAuto = {
   PARENT: 'genericTank',
   COLOR: 16,
   SYNCS_SKILLS: true,
   LABEL: 'Flamegun',
   HAS_NO_RECOIL: true,
   CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
   GUNS: [ {
         POSITION: [ 18, 13, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow, g.stronger, g.stronger, g.less_damage, g.less_damage, g.bit_slow]),
            TYPE: ["flamegunBullet", {MOTION_TYPE: "colorthingy4"}],
         }, }, {
         POSITION: [ 16, 11, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow, g.stronger, g.fake]),
            TYPE: ["bullet", {MOTION_TYPE: "colorthingy4"}],
            COLOR: "#361ad6",
         }, }, {
         POSITION: [ 14, 9, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow, g.stronger, g.fake]),
            TYPE: ["bullet", {MOTION_TYPE: "colorthingy4"}],
         }, }, 
     ],
};
Class.flamelimbA = {
   COLOR: 16,
   CONTROLLERS: ['onlyAcceptInArc'],
   SYNCS_SKILLS: true,
   HAS_NO_RECOIL: true,
   LABEL: '',
   TURRETS: [
        {
            POSITION: [31, 38, 0, -90, 361, 1],
            TYPE: "flamegunAuto",
        },
   ],
   GUNS: [ {
         POSITION: [ 26, 8, 1, 0, 0, -90, 0, ],
         }, {
         POSITION: [ 8, 8, -2, 5, 0, -90, 0, ],
         }, 
     ],
};
Class.flamearmA = {
   COLOR: 16,
   CONTROLLERS: ['onlyAcceptInArc'],
   SYNCS_SKILLS: true,
   HAS_NO_RECOIL: true,
   LABEL: '',
   TURRETS: [
        {
            POSITION: [22, 32, 0, -45, 361, 1],
            TYPE: "flamelimbA",
        },
   ],
   GUNS: [ {
         POSITION: [ 26, 8, 1, 0, 0, -45, 0, ],
         }, {
         POSITION: [ 8, 8, -2, 5, 0, -45, 0, ],
         }, {
         POSITION: [ 8, 8, 2, 18, 0, -45, 0, ],
         }, 
     ],
};
Class.flamelimbB = {
   COLOR: 16,
   CONTROLLERS: ['onlyAcceptInArc'],
   SYNCS_SKILLS: true,
   HAS_NO_RECOIL: true,
   LABEL: '',
   TURRETS: [
        {
            POSITION: [31, 38, 0, 90, 361, 1],
            TYPE: "flamegunAuto",
        },
   ],
   GUNS: [ {
         POSITION: [ 26, 8, 1, 0, 0, 90, 0, ],
         }, {
         POSITION: [ 8, 8, -2, 5, 0, 90, 0, ],
         }, 
     ],
};
Class.flamearmB = {
   COLOR: 16,
   CONTROLLERS: ['onlyAcceptInArc'],
   SYNCS_SKILLS: true,
   HAS_NO_RECOIL: true,
   LABEL: '',
   TURRETS: [
        {
            POSITION: [22, 32, 0, 45, 361, 1],
            TYPE: "flamelimbB",
        },
   ],
   GUNS: [ {
         POSITION: [ 26, 8, 1, 0, 0, 45, 0, ],
         }, {
         POSITION: [ 8, 8, -2, 5, 0, 45, 0, ],
         }, {
         POSITION: [ 8, 8, 2, 18, 0, 45, 0, ],
         }, 
     ],
};
Class.flammenwerfer = {
   PARENT: 'genericTank',
   LABEL: 'Flammenwerfer',
   HAS_NO_RECOIL: true,
   TURRETS: [
        {
            POSITION: [6, 12, 0, 90, 361, 0],
            TYPE: "flamearmA",
        },
        {
            POSITION: [6, 12, 0, -90, 361, 0],
            TYPE: "flamearmB",
        },
   ],
   GUNS: [ {
         POSITION: [ 12, 8, -1.3, 0, 0, -90, 0, ],
         }, {
         POSITION: [ 12, 8, -1.3, 0, 0, 90, 0, ],
         }, 
     ],
};
Class.apothican = {
   PARENT: 'genericTank',
   LABEL: 'Apothican',
   HAS_NO_RECOIL: true,
   TURRETS: [
        {
            POSITION: [6, 12, 0, 90, 361, 0],
            TYPE: "armA",
        },
        {
            POSITION: [6, 12, 0, -90, 361, 0],
            TYPE: "armB",
        },
        {
            POSITION: [6, 12, 0, 90 + 180, 361, 0],
            TYPE: "armA",
        },
        {
            POSITION: [6, 12, 0, -90 + 180, 361, 0],
            TYPE: "armB",
        },
   ],
   GUNS: [ {
         POSITION: [ 12, 8, -1.3, 0, 0, -90, 0, ],
         }, {
         POSITION: [ 12, 8, -1.3, 0, 0, 90, 0, ],
         }, 
     ],
};
Class.boxFood = {
   TYPE: "food",
   LABEL: 'Box',
   COLOR: "#945d0b",
   SIZE: 18.55,
   SHAPE: 4,
   DAMAGE_CLASS: 1,
   CONTROLLERS: ["moveInCircles"],
   HITS_OWN_TYPE: "repel",
   MOTION_TYPE: "drift",
   FACING_TYPE: "turnWithSpeed",
   VARIES_IN_SIZE: true,
   IS_IMMUNE_TO_TILES: false,
   LEVEL_CAP: 1,
   DAMAGE_EFFECTS: false,
   RATEFFECTS: false,
   HEALTH_WITH_LEVEL: false,
   TURRETS: [
       {
           POSITION: [1, 0, 0, 0, 360, 1],
           TYPE: "boxDeco",
       },
   ],
   GUNS: weaponArray([
         {
         POSITION: [ 2, 5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {size: 1.65}]),
            TYPE: ["madSquare", {PERSISTS_AFTER_DEATH: true}],
            SHOOT_ON_DEATH: true,
         }, }, 
     ], 4)
};
Class.boxDeco = {
    SHAPE: "M -1 -1 V -0.9948 L -0.0047 0.0005 L -1 0.9952 v 0.0052 H -0.9948 L 0.0005 0.0056 L 0.9952 1.0004 h 0.0052 v -0.0052 L 0.0056 0.0005 L 1.0004 -0.9948 V -1 h -0.0052 L 0.0005 -0.0047 L -0.9948 -1 Z",
    COLOR: "#945d0b",
}
Class.laser = {
   PARENT: 'genericTank',
   LABEL: 'Light',
   GUNS: [ {
         POSITION: [ 18, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.laser]),
            TYPE: "laserBeam",
         }, }, {
         POSITION: [ 21, 1, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            COLOR: "#ff0000",
         }, }, 
     ],
};
Class.laserTwin = {
   PARENT: 'genericTank',
   LABEL: 'Laser Pointer',
   GUNS: [ {
         POSITION: [ 20, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.laser]),
            TYPE: "laserBeam",
         }, }, {
         POSITION: [ 18, 8, 1, 0, 0, 0, 1/2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.laser]),
            TYPE: "laserBeam",
         }, }, {
         POSITION: [ 23, 1, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            COLOR: "#ff0000",
         }, }, 
     ],
};
Class.laserMinigun = {
   PARENT: 'genericTank',
   LABEL: 'Laser',
   UPGRADE_TOOLTIP: "",
   GUNS: [ {
         POSITION: [ 22, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.laser]),
            TYPE: "laserBeam",
         }, }, {
         POSITION: [ 20, 8, 1, 0, 0, 0, 1/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.laser]),
            TYPE: "laserBeam",
         }, }, {
         POSITION: [ 18, 8, 1, 0, 0, 0, 2/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.laser]),
            TYPE: "laserBeam",
         }, }, {
         POSITION: [ 25, 1, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            COLOR: "#ff0000",
         }, },
     ],
};
Class.kinetic = {
   PARENT: 'genericTank',
   LABEL: 'Kinetic',
   BODY: {
       ACCELERATION: base.ACCEL * 0.8,
   },
   GUNS: [ {
         POSITION: [ 24, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.shell]),
            TYPE: "explodingShell",
         }, }, {
         POSITION: [ 5.5, 11.5, 1, 16, 0, 0, 0, ],
         }, {
         POSITION: [ 5.5, 11.5, 1, 6, 0, 0, 0, ],
         }, {
         POSITION: [ 5.5, 11.5, 1, 7, 0, 180, 0, ],
         }, 
     ],
};
Class.shockRifle = {
   PARENT: 'genericTank',
   LABEL: 'Shock Rifle',
   BODY: {
       FOV: 1.3,
       ACCELERATION: base.ACCEL * 0.8,
   },
   GUNS: [ {
         POSITION: [ 27, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sShell]),
            TYPE: "explodingShell",
         }, }, {
         POSITION: [ 5.5, 11.5, 1, 19, 0, 0, 0, ],
         }, {
         POSITION: [ 5.5, 11.5, 1, 6, 0, 0, 0, ],
         }, {
         POSITION: [ 5.5, 11.5, 1, 7, 0, 180, 0, ],
         }, 
     ],
};
Class.antimatRifle = {
   PARENT: 'genericTank',
   LABEL: 'Anti-Material Rifle',
   BODY: {
       FOV: 1.5,
       ACCELERATION: base.ACCEL * 0.8,
   },
   GUNS: [ {
         POSITION: [ 33, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.ssShell]),
            TYPE: "explodingShell",
         }, }, {
         POSITION: [ 5.5, 11.5, 1, 24, 0, 0, 0, ],
         }, {
         POSITION: [ 5.5, 11.5, 1, 6, 0, 0, 0, ],
         }, {
         POSITION: [ 5.5, 11.5, 1, 7, 0, 180, 0, ],
         }, 
     ],
};
Class.triplockRifle = {
   PARENT: 'genericTank',
   LABEL: 'Triplock Rifle',
   GUNS: [ {
         POSITION: [ 27, 9, 1, 0, -5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sShell, g.double_reload]),
            TYPE: "explodingShell",
         }, }, {
         POSITION: [ 27, 9, 1, 0, 5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sShell, g.double_reload]),
            TYPE: "explodingShell",
         }, }, {
         POSITION: [ 5.5, 11.5, 1, 19, -5, 0, 0.5, ],
         }, {
         POSITION: [ 5.5, 11.5, 1, 19, 5, 0, 0.5, ],
         }, {
         POSITION: [ 9.5, 9.5, -1, 1, -5.3, 0, 0, ],
         }, {
         POSITION: [ 9.5, 9.5, -1, 1, 5.3, 0, 0, ],
         }, {
         POSITION: [ 33, 10, -1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.ssShell, g.double_reload]),
            TYPE: "explodingShell",
         }, }, {
         POSITION: [ 5.5, 12.5, -1, 24, 0, 0, 0, ],
         }, {
         POSITION: [ 12, 12.5, -1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 14, 7.5, -1.3, 0, -5, 172.5, 0, ],
         }, {
         POSITION: [ 14, 7.5, -1.3, 0, 5, -172.5, 0, ],
         }, {
         POSITION: [ 15, 9.5, -1.4, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.inferno = {
   PARENT: 'genericTank',
   LABEL: 'Inferno',
   GUNS: [ {
         POSITION: [ 10, 6, 1.5, 3, 2, 0, 0, ],
         }, {
         POSITION: [ 20, 6, 1, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.firestick]),
            TYPE: "infernoBullet",
         }, }, 
     ],
};
Class.forestfire = {
   PARENT: 'genericTank',
   LABEL: 'Forestfire',
   GUNS: [ {
         POSITION: [ 10, 3.5, 1.5, 4.5, 1.625, 0, 0, ],
         }, {
         POSITION: [ 5, 2, -1.6, 12, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.machineGun, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.half_damage, g.firestick, g.bit_more_damage]),
            TYPE: "infernoBullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ],
};
Class.flaregun = {
   PARENT: 'genericTank',
   LABEL: 'Flare Gun',
   GUNS: [ {
         POSITION: [ 10, 6, 1.5, 3, 2, 0, 0, ],
         }, {
         POSITION: [ 16, 8, 1, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.firestick, g.less_reload]),
            TYPE: ["infernoBullet", {MOTION_TYPE: "flare"}],
         }, }, 
     ],
};
Class.pyro = {
   PARENT: 'genericTank',
   LABEL: 'Pyro',
   GUNS: [ {
         POSITION: [ 10, 6, 1.6, 3, 2, 0, 0, ],
         }, {
         POSITION: [ 9, 9, 1.1, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.blast, g.firestick]),
            TYPE: "infernoBullet",
         }, }, 
     ],
};
Class.backburner = {
   PARENT: 'genericTank',
   LABEL: 'Backburner',
   GUNS: [ {
         POSITION: [ 10, 6, 1.5, 3, 5, 0, 0, ],
         }, {
         POSITION: [ 20, 10, 1.2, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.firestick]),
            TYPE: "infernoBullet",
         }, }, 
     ],
};
Class.oven = {
   PARENT: 'genericTank',
   LABEL: 'Oven',
   GUNS: [ {
         POSITION: [ 10, 6, 1.6, 3, 5, 0, 0, ],
         }, {
         POSITION: [ 9, 15, 1.1, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.blast, g.pounder, g.more_power, g.faster, g.faster, g.more_reload, g.firestick]),
            TYPE: "infernoBullet",
         }, }, 
     ],
};
Class.fireball = {
   PARENT: 'genericTank',
   LABEL: 'Fireball',
   GUNS: [ {
         POSITION: [ 10, 6, 1.5, 6, 5, 20, 0, ],
         }, {
         POSITION: [ 20, 14, 1.2, 5, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.firestick_destroy]),
            TYPE: "infernoBullet",
         }, }, 
     ],
};
Class.firenado = {
   PARENT: 'genericTank',
   LABEL: 'Firenado',
   BODY: {
        ACCELERATION: base.ACCEL * .7,
        FOV: 1.2,
   },
   GUNS: [ {
         POSITION: [ 10, 6, 1.5, 7, 2, 0, 0, ],
         }, {
         POSITION: [ 24, 6, 1, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.firestick]),
            TYPE: "infernoBullet",
         }, }, 
     ],
};
Class.typhoonInferno = {
   PARENT: 'genericTank',
   LABEL: 'Typhoon',
   BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.85,
        FOV: 1.35,
   },
   GUNS: [ {
         POSITION: [ 10, 6, 1.5, 7, 2, 0, 0, ],
         }, {
         POSITION: [ 24, 6, 1, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.firestick]),
            TYPE: "infernoBullet",
         }, }, {
         POSITION: [ 5, 7.6, -1.6, 8, 0, 0, 0, ],
         }, 
     ],
};
Class.twinferno = {
   PARENT: 'genericTank',
   LABEL: 'Twinferno',
   GUNS: [ {
         POSITION: [ 10, 6, 1.5, 3, 5.5, 0, 0, ],
         }, {
         POSITION: [ 10, 6, 1.5, 3, -5.5, 0, 0, ],
         }, {
         POSITION: [ 20, 6, 1, 3, 3.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.firestick, g.less_power, g.less_damage]),
            TYPE: "infernoBullet",
         }, }, {
         POSITION: [ 20, 6, 1, 3, -3.5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.firestick, g.less_power, g.less_damage]),
            TYPE: "infernoBullet",
         }, }, 
     ],
};
Class.doubleferno = {
   PARENT: 'genericTank',
   LABEL: 'Doubleferno',
   GUNS: weaponArray([
         {
         POSITION: [ 10, 6, 1.5, 3, 5.5, 0, 0, ],
         }, {
         POSITION: [ 10, 6, 1.5, 3, -5.5, 0, 0, ],
         }, {
         POSITION: [ 20, 6, 1, 3, 3.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.firestick, g.less_power, g.less_damage]),
            TYPE: "infernoBullet",
         }, }, {
         POSITION: [ 20, 6, 1, 3, -3.5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.firestick, g.less_power, g.less_damage]),
            TYPE: "infernoBullet",
         }, }, 
     ], 2)
};
Class.trinferno = {
   PARENT: 'genericTank',
   LABEL: 'Trinferno',
   GUNS: [ {
         POSITION: [ 10, 6, 1.5, 3, 7, 0, 0, ],
         }, {
         POSITION: [ 10, 6, 1.5, 3, -7, 0, 0, ],
         }, {
         POSITION: [ 18, 4.7, 1, 6, 5.5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.firestick, g.less_power, g.less_damage, g.bit_more_spread]),
            TYPE: "infernoBullet",
         }, }, {
         POSITION: [ 18, 4.7, 1, 6, -5.5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.firestick, g.less_power, g.less_damage, g.bit_more_spread]),
            TYPE: "infernoBullet",
         }, }, {
         POSITION: [ 20, 6, 1, 6, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.firestick, g.less_power, g.less_damage, g.bit_more_spread]),
            TYPE: "infernoBullet",
         }, }, 
     ],
};
Class.revolutionist = {
   PARENT: 'genericTank',
   LABEL: 'Revolutionist',
   TURRETS: [
       {
           POSITION: [34, 0, 0, 0, 360, 0],
           TYPE: "revolutionistRing",
       },     
   ],
   GUNS: [ {
         POSITION: [ 20, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.revolutionist11 = {
   PARENT: 'genericTank',
   LABEL: 'Revolutionist',
   TURRETS: [
       {
           POSITION: [46, 0, 0, 0, 360, 0],
           TYPE: "deuteronRing22",
       },     
   ],
   GUNS: [ {
         POSITION: [ 20, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.equilibrium = {
   PARENT: 'genericTank',
   LABEL: 'Equilibrium',
   TURRETS: [
       {
           POSITION: [34, 0, 0, 0, 360, 0],
           TYPE: "revolutionistRing",
       },     
   ],
   GUNS: [ {
         POSITION: [ 18, 8, 1, 5.5, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flankGuard]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 8, 1, -5.5, 0, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flankGuard]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.subverter = {
   PARENT: 'genericTank',
   LABEL: 'Subverter',
   TURRETS: [
       {
           POSITION: [34, 0, 0, 0, 360, 0],
           TYPE: "subverterRing",
       },     
   ],
   GUNS: [ {
         POSITION: [ 18, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.anarchist = {
   PARENT: 'genericTank',
   LABEL: 'Anarchist',
   TURRETS: [
       {
           POSITION: [34, 0, 0, 0, 360, 0],
           TYPE: "subverterRing",
       },     
   ],
   GUNS: [ {
         POSITION: [ 6, 11, 1.3, 7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone]),
            TYPE: "drone",
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: 6,
            AUTOFIRE: true,
            WAIT_TO_CYCLE: true,
         }, }, 
     ],
};
Class.deuteron = {
   PARENT: 'genericTank',
   LABEL: 'Deuteron',
   TURRETS: [
       {
           POSITION: [34, 0, 0, 0, 360, 0],
           TYPE: "deuteronRing",
       },     
   ],
   GUNS: [ {
         POSITION: [ 18, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.toolbelt = {
   PARENT: 'genericTank',
   LABEL: 'Toolbelt',
   TURRETS: [
       {
           POSITION: [34, 0, 0, 0, 360, 0],
           TYPE: "toolbeltRing",
       },     
   ],
   GUNS: [ {
         POSITION: [ 18, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, 
     ],
};
// pelleters
Class.pelleter = {
   PARENT: 'genericTank',
   LABEL: 'Pelleter',
   GUNS: [ {
         POSITION: [ 17, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 2, 1, 0, -3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ],
};
Class.naturalist = {
   PARENT: 'genericTank',
   LABEL: 'Naturalist',
   GUNS: [ {
         POSITION: [ 5, 2, -1.6, 12, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.machineGun, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.less_damage, g.more_health]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ],
};
Class.naturalistFire = {
   PARENT: 'genericTank',
   LABEL: 'Fire Naturalist',
   GUNS: [ {
         POSITION: [ 5, 2, -1.6, 12, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.fire, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.less_damage, g.more_health]),
            TYPE: "fireBullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ],
};
Class.flamegun = {
   PARENT: 'genericTank',
   LABEL: 'Flamegun',
   GUNS: [ {
         POSITION: [ 18, 13, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow]),
            TYPE: ["flamegunBullet", {MOTION_TYPE: "colorthingy4"}],
         }, }, {
         POSITION: [ 16, 11, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow, g.fake]),
            TYPE: ["bullet", {MOTION_TYPE: "colorthingy4"}],
            COLOR: "#361ad6",
         }, }, {
         POSITION: [ 14, 9, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow, g.fake]),
            TYPE: ["bullet", {MOTION_TYPE: "colorthingy4"}],
         }, }, 
     ],
};
Class.firegun = {
   PARENT: 'genericTank',
   LABEL: 'Firegun',
   GUNS: [ {
         POSITION: [ 18, 13, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow, g.pounder, g.less_reload]),
            TYPE: ["flamegunBullet", {MOTION_TYPE: "colorthingy4", COLOR: "#ff0033"}],
         }, }, {
         POSITION: [ 16, 11, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow, g.pounder, g.less_reload, g.fake]),
            TYPE: ["bullet", {MOTION_TYPE: "colorthingy4"}],
            COLOR: "#ff0033",
         }, }, {
         POSITION: [ 14, 9, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow, g.pounder, g.less_reload, g.fake]),
            TYPE: ["bullet", {MOTION_TYPE: "colorthingy4"}],
         }, }, 
     ],
};
Class.entomologist = {
   PARENT: 'genericTank',
   LABEL: 'Entomologist',
   GUNS: [ {
         POSITION: [ 5, 2, -1.95, 12, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bee, g.twin, g.machineGun, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.less_damage, g.more_health]),
            TYPE: "bee",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ],
};
Class.quadralsquare = {
    PARENT: "sentry",
    LABEL: "Square Sentry",
    SIZE: 11,
    FACING_TYPE: "spin",
    SHAPE: 4,
    COLOR: "gold",
    GUNS: [],
    BODY: {
        FOV: 0.65,
        ACCELERATION: 0.7,
        DAMAGE: base.DAMAGE,
        SPEED: 0.65 * base.SPEED,
        HEALTH: 0.4 * base.HEALTH,
    },
    TURRETS: weaponArray([
        {
          POSITION: [10.5, 8.5, 0, 0, 360, 0],
          TYPE: ["autoTankGun9", {extraStats: [g.noless_damage, g.less_power, g.half_damage]}],
        },
    ], 4)
};
Class.quadralsquare2 = {
    PARENT: "sentry",
    LABEL: "Square Sentry",
    SIZE: 17.5,
    FACING_TYPE: "spin",
    SHAPE: 4,
    COLOR: "gold",
    GUNS: [],
    BODY: {
        FOV: 0.7,
        ACCELERATION: 0.7,
        DAMAGE: base.DAMAGE,
        SPEED: 0.65 * base.SPEED,
        HEALTH: 0.7 * base.HEALTH,
    },
    TURRETS: weaponArray([
        {
          POSITION: [11, 8.5, 0, 0, 360, 0],
          TYPE: ["megaAutoTankGun9", {extraStats: [g.noless_damage, g.less_power, g.half_damage]}],
        },
    ], 4)
};
Class.quadralsquare3 = {
    PARENT: "sentry",
    LABEL: "Square Sentry",
    SIZE: 24.5,
    FACING_TYPE: "spin",
    SHAPE: 4,
    COLOR: "gold",
    GUNS: [],
    BODY: {
        FOV: 0.65,
        ACCELERATION: 0.7,
        DAMAGE: base.DAMAGE,
        SPEED: 0.65 * base.SPEED,
        HEALTH: 0.95 * base.HEALTH,
    },
    TURRETS: weaponArray([
        {
          POSITION: [11, 8.5, 0, 0, 360, 0],
          TYPE: ["auto4gun9", {extraStats: [g.noless_damage, g.less_power, g.half_damage]}],
        },
    ], 4)
};
Class.quadralsquare4 = {
    PARENT: "sentry",
    LABEL: "Square Sentry",
    SIZE: 29.75,
    FACING_TYPE: "spin",
    SHAPE: 4,
    COLOR: "gold",
    GUNS: [],
    BODY: {
        FOV: 0.7,
        ACCELERATION: 0.7,
        DAMAGE: base.DAMAGE,
        SPEED: 0.75 * base.SPEED,
        HEALTH: 1.2 * base.HEALTH,
    },
    TURRETS: [
        {
          POSITION: [28, 0, 0, 0, 360, 0],
          TYPE: "quadralRing",
        },
    ],
};
Class.quadralsquare5 = {
    PARENT: "sentry",
    LABEL: "Square Sentry",
    SIZE: 36.5,
    FACING_TYPE: "spin",
    SHAPE: 4,
    COLOR: "gold",
    GUNS: [],
    BODY: {
        FOV: 0.7,
        ACCELERATION: 0.7,
        DAMAGE: base.DAMAGE,
        SPEED: 0.7 * base.SPEED,
        HEALTH: 1.85 * base.HEALTH,
    },
    TURRETS: weaponArray([
        {
          POSITION: [12, 8.5, 0, 0, 360, 0],
          TYPE: "machine2",
        },
    ], 4)
};
Class.diploid = {
   PARENT: 'genericTank',
   LABEL: 'Diploid',
   GUNS: [ {
         POSITION: [ 5, 2, -1.6, 12, -3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.machineGun, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.half_damage]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 5, 2, -1.6, 12, 3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.machineGun, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.half_damage]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ],
};
Class.triploid = {
   PARENT: 'genericTank',
   LABEL: 'Triploid',
   GUNS: [ {
         POSITION: [ 5, 2, -1.6, 12, -3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.machineGun, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.half_damage]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 5, 2, -1.6, 12, 3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.machineGun, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.half_damage]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 2, -1.6, 12, 0, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.machineGun, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.half_damage, g.double_reload]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ],
};
Class.trinaturalist = {
   PARENT: 'genericTank',
   LABEL: 'Flank Naturalist',
   GUNS: weaponArray([
         {
         POSITION: [ 5, 2, -1.6, 12, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.machineGun, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.less_damage, g.more_health]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ], 3)
};
Class.acclimator = {
   PARENT: 'genericTank',
   LABEL: 'Acclimator',
   GUNS: weaponArray([
         {
         POSITION: [ 5, 2, -1.6, 12, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.machineGun, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.less_damage, g.more_health]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ], 6)
};
Class.borer = {
   PARENT: 'genericTank',
   LABEL: 'Borer',
   BODY: {
       FOV: 1.2,
   },
   GUNS: [ {
         POSITION: [ 22, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 2, 1, 0, -3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ],
};
Class.bohrer = {
   PARENT: 'genericTank',
   LABEL: 'Bohrer',
   BODY: {
       FOV: 1.2,
   },
   TURRETS: [
       {
           POSITION: [34, 0, 0, 0, 360, 0],
           TYPE: "revolutionistRing",
       },     
   ],
   GUNS: [ {
         POSITION: [ 22, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 2, 1, 0, -3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ],
};
Class.triborer = {
   PARENT: 'genericTank',
   LABEL: 'Tri-Borer',
   BODY: {
       FOV: 1.2,
   },
   GUNS: weaponArray([
         {
         POSITION: [ 22, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 2, 1, 0, -3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ], 3)
};
Class.pentaborer = {
   PARENT: 'genericTank',
   LABEL: 'Penta Borer',
   BODY: {
       FOV: 1.2,
   },
   GUNS: weaponArray([
         {
         POSITION: [ 22, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 2, 1, 0, -3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.bore]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ], 5)
};
Class.puntgun = {
   PARENT: 'genericTank',
   LABEL: 'Punt Gun',
   GUNS: [ {
         POSITION: [ 18, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 2, 1, 0, -3, 0, 1/6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, 3, 0, 1/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, -3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, 3, 0, 2/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, -3, 0, 5/6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ],
};
Class.flakgun = {
   PARENT: 'genericTank',
   LABEL: 'Flak Gun',
   GUNS: [ {
         POSITION: [ 18, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.less_damage]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 18, 2, 1, 0, -3, 0, 1/6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.less_damage]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, 3, 0, 1/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.less_damage]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, -3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.less_damage]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, 3, 0, 2/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.less_damage]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, -3, 0, 5/6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.less_damage]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         PROPERTIES: {
            COLOR: "#ff0000",
         }, },
     ],
};
Class.flakGunder = {
   PARENT: 'genericTank',
   LABEL: 'Flak Gunder',
   GUNS: [ {
         POSITION: [ 18, 4.5, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.more_damage, g.pounder]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 18, 4.5, 1, 0, -3, 0, 1/6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.more_damage, g.pounder]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 16, 4.5, 1, 0, 3, 0, 1/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.more_damage, g.pounder]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 16, 4.5, 1, 0, -3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.more_damage, g.pounder]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 14, 4.5, 1, 0, 3, 0, 2/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.more_damage, g.pounder]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 14, 4.5, 1, 0, -3, 0, 5/6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.more_damage, g.pounder]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 4.5, 10.5, -1.4, 7.5, 0, 0, 0, ],
         PROPERTIES: {
            COLOR: "#ff0000",
         }, },
     ],
};
Class.OPflakgun1 = {
   PARENT: 'genericTank',
   LABEL: 'Hexa Flak Gun',
   GUNS: weaponArray([
         {
         POSITION: [ 18, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.less_damage]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 18, 2, 1, 0, -3, 0, 1/6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.less_damage]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, 3, 0, 1/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.less_damage]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, -3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.less_damage]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, 3, 0, 2/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.less_damage]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, -3, 0, 5/6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.less_damage]),
            TYPE: "explodingFlakBullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         PROPERTIES: {
            COLOR: "ff0000",
         }, },
     ], 6)
};
Class.punter = {
   PARENT: 'genericTank',
   LABEL: 'Punter',
   GUNS: [ {
         POSITION: [ 18, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triplet, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 2, 1, 0, -3, 0, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triplet, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, 3, 0, 0.3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triplet, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, -3, 0, 0.45, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triplet, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, 3, 0, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triplet, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, -3, 0, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triplet, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 2, 1, 0, 0, 0, 0.9, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triplet, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 2, 1, 0, 0, 0, 1.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triplet, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, 0, 0, 3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.triplet, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ],
};
Class.puntMini = {
   PARENT: 'genericTank',
   LABEL: 'Punt Mini',
   GUNS: [ {
         POSITION: [ 20, 2, 1, 0, 3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 2, 1, 0, -3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 2, 1, 0, -3, 0, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, 3, 0, 0.3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, -3, 0, 0.45, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, 3, 0, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, -3, 0, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt, g.half_recoil]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0.75, ],
         }, 
     ],
};
Class.tripunt = {
   PARENT: 'genericTank',
   LABEL: 'Tri-Punt Gun',
   GUNS: weaponArray([
         {
         POSITION: [ 18, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 2, 1, 0, -3, 0, 1/6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, 3, 0, 1/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, -3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, 3, 0, 2/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, -3, 0, 5/6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ], 3)
};
Class.pentapunt = {
   PARENT: 'genericTank',
   LABEL: 'Penta Punt Gun',
   GUNS: weaponArray([
         {
         POSITION: [ 18, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 2, 1, 0, -3, 0, 1/6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, 3, 0, 1/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, -3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, 3, 0, 2/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, -3, 0, 5/6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.punt]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ], 5)
};
Class.tripelleter = {
   PARENT: 'genericTank',
   LABEL: 'Tri-Pelleter',
   GUNS: weaponArray([
         {
         POSITION: [ 17, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 2, 1, 0, -3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ], 3)
};
Class.pentapellet = {
   PARENT: 'genericTank',
   LABEL: 'Penta Pelleter',
   GUNS: weaponArray([
         {
         POSITION: [ 17, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 2, 1, 0, -3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ], 5)
};
// lancers!!! <3 woomy arras
Class.lancer = {
   PARENT: 'genericLancer',
   LABEL: 'Lancer',
   BODY: {
       SPEED: base.SPEED * 1.5,
       ACCELERATION: base.ACCEL * 0.7
   },
   GUNS: [ {
         POSITION: [ 8, 4, 1.4, 6, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
         }, }, {
         POSITION: [ 8, 4, 1.4, 8.5, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
         }, }, {
         POSITION: [ 25, 0.3, -55, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.OPlancer = {
   PARENT: 'genericLancer',
   LABEL: 'One Hundred Twenty-Lancer',
   BODY: {
       SPEED: base.SPEED * 1.5,
       ACCELERATION: base.ACCEL * 0.7
   },
   GUNS: weaponArray([
         {
         POSITION: [ 8, 4, 1.4, 6, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
         }, }, {
         POSITION: [ 8, 4, 1.4, 8.5, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
         }, }, {
         POSITION: [ 25, 0.3, -55, 0, 0, 0, 0, ],
         }, 
     ], 120)
};
Class.serrator = {
   PARENT: 'genericLancer',
   LABEL: 'Serrator',
   BODY: {
       SPEED: base.SPEED * 1.5,
       ACCELERATION: base.ACCEL * 0.7
   },
   GUNS: [ {
         POSITION: [ 4, 7, 1.7, 10, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 5, 1.7, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 3, 1.7, 20, 0, 0, 0, ],
         }, {
         POSITION: [ 8, 4, 1.4, 6, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_damage, g.more_damage]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
         }, }, {
         POSITION: [ 8, 4, 1.4, 8.5, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance, g.more_damage]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
         }, }, {
         POSITION: [ 25, 0.3, -55, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.slayer = {
   PARENT: 'genericLancer',
   LABEL: 'Slayer',
   BODY: {
       SPEED: base.SPEED * 1.5,
       ACCELERATION: base.ACCEL * 0.7
   },
   GUNS: [ {
         POSITION: [ 4, 3, 1.7, 20, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 4, 1.7, 17.5, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 5, 1.7, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 6, 1.7, 12.5, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 7, 1.7, 10, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 8, 1.7, 7.5, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 9, 1.7, 5, 0, 0, 0, ],
         }, {
         POSITION: [ 8, 4, 1.4, 6, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance, g.more_damage, g.more_damage, g.more_damage]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 8, 4, 1.4, 8.5, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance, g.more_damage, g.more_damage, g.more_damage]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 25, 0.3, -55, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.knight = {
   PARENT: 'genericLancer',
   LABEL: 'Knight',
   BODY: {
       SPEED: base.SPEED * 1.5,
       ACCELERATION: base.ACCEL * 0.7
   },
   TURRETS: [
       {
           POSITION: [18, 18, 0, 180, 0, 1],
           TYPE: 'backShieldTurret',
       },
   ],
   GUNS: [ {
         POSITION: [ 4, 3, 1.7, 20, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 4, 1.7, 17.5, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 5, 1.7, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 6, 1.7, 12.5, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 7, 1.7, 10, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 8, 1.7, 7.5, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 9, 1.7, 5, 0, 0, 0, ],
         }, {
         POSITION: [ 8, 4, 1.4, 6, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance, g.more_damage, g.more_damage, g.more_damage]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 8, 4, 1.4, 8.5, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.lance, g.more_damage, g.more_damage, g.more_damage]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 25, 0.3, -55, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.flanklancer = {
   PARENT: 'genericLancer',
   LABEL: 'Tri-Lancer',
   BODY: {
       SPEED: base.SPEED * 1.5,
       ACCELERATION: base.ACCEL * 0.7
   },
   GUNS: weaponArray([
         {
         POSITION: [ 8, 4, 1.4, 6, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
         }, }, {
         POSITION: [ 8, 4, 1.4, 8.5, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
         }, }, {
         POSITION: [ 25, 0.3, -55, 0, 0, 0, 0, ],
         }, 
     ], 3)
};
Class.hexalancer = {
   PARENT: 'genericLancer',
   LABEL: 'Hexa Lancer',
   BODY: {
       SPEED: base.SPEED * 1.5,
       ACCELERATION: base.ACCEL * 0.7
   },
   GUNS: weaponArray([
         {
         POSITION: [ 8, 4, 1.4, 6, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
         }, }, {
         POSITION: [ 8, 4, 1.4, 8.5, 0, 0, 0, ],
         PROPERTIES: {
            AUTOFIRE: true,
            SHOOT_SETTINGS: combineStats([g.lance]),
            TYPE: ["bullet", { DRAW_FILL: false, BORDERLESS: true}],
         }, }, {
         POSITION: [ 25, 0.3, -55, 0, 0, 0, 0, ],
         }, 
     ], 6)
};
Class.pi = {
    PARENT: "genericTank",
    LABEL: "π",
    DANGER: 4,
    COLOR: "picolor",
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
    TURRETS: [
        {
            POSITION: [16.5, 0, 0, 0, 360, 1],
            TYPE: ['piSymbol', { FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }] }]
        },
    ],
    GUNS: [
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 14,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.op]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.basicTestColor = {
    PARENT: "genericTank",
    LABEL: "Color",
    DANGER: 4,
    COLOR: "evening",
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.corruptX = {
    PARENT: "genericTank",
    LABEL: "Corrupt X",
    DANGER: 4,
    COLOR: 19,
    UPGRADE_TOOLTIP: "DESTRUCTION.",
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
    TURRETS: [
        {
            POSITION: [16.5, 0, 0, 0, 360, 1],
            TYPE: ['corruptx', { FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }] }]
        },
    ],
    GUNS: [
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 10,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.kidBasic = {
    PARENT: "genericTank",
    LABEL: "Basic",
    DANGER: 4,
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
    TURRETS: [
        {
            POSITION: [12, -1, 0, 0, 360, 1],
            TYPE: ['capSymbol', { FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }] }]
        },
    ],
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.brokenEarth = {
   PARENT: 'genericTank',
   LABEL: 'broken earth',
   SHAPE: "M 1.782 -0.594 A 0.594 0.594 90 0 0 -1.782 -0.594 L 1.782 -0.594 L 1.782 0.594 L -1.782 0.594 A 0.594 0.594 90 0 0 1.782 0.594 Z",
   GUNS: [ {
         POSITION: [ 18, 14, 1, -9, 0, -90, 0, ],
         }, {
         POSITION: [ 6, 18, 1, -3, 0, 0, 0, ],
         }, {
         POSITION: [ 1, 18, 1, -0.5, 0, 0, 0, ],
         }, {
         POSITION: [ 1, 19, 1, -0.5, 0, -90, 0, ],
         }, {
         POSITION: [ 1, 22, 1, -0.5, 0, -37.5, 0, ],
         }, {
         POSITION: [ 1, 22, 1, -0.5, 0, 37.5, 0, ],
         }, 
     ],
};
Class.brainDamage = {
    PARENT: "genericTank",
    LABEL: "basiC",
    SHAPE: "M -0.4147 0.8294 C -1.0368 0.8294 -1.4515 -0.2074 -0.8294 -0.2074 C 0 -0.4147 -0.2074 -0.6221 0.4147 -1.0368 C 0.8294 -1.2442 1.0368 -0.8294 1.0368 -0.4147 C 1.0368 -0.2074 1.0368 0.2074 0.8294 0.4147 C 0.4147 0.8294 0 0.8294 -0.4147 0.8294",
    DANGER: 4,
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 6.5,
                ASPECT: 1.3,
                X: 0,
                Y: -2.3,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.retarded]),
                TYPE: "speedBullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}
Class.huhWhy = {
   PARENT: 'genericTank',
   LABEL: 'huh why',
   SHAPE: "M -1 0 A 1 1 90 0 0 1 0 C 1 0 0 0 0 0 A 1 1 0 0 0 -2 0 L 0 0",
   GUNS: [ {
         POSITION: [ 15, 8, 1, -7, 3, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.twin = {
    PARENT: "genericTank",
    LABEL: "Twin",
    GUNS: [
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: 5.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: -5.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.sniper = {
    PARENT: "genericTank",
    LABEL: "Sniper",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.mutant = {
   PARENT: 'genericTank',
   LABEL: 'Mutant',
   SHAPE: "M -0.64 0.64 A 0.64 0.64 90 0 0 0.64 0.64 A 0.64 0.64 90 0 0 0.64 -0.64 A 0.64 0.64 90 0 0 -0.64 -0.64 A 0.64 0.64 90 0 0 -0.64 0.64",
   GUNS: [ {
         POSITION: [ 18, 8, 1, 4, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 12, 10, 1.4, 12, 0, -90, 0.1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 7, 1, 4, 0, -180, 0, ],
         }, {
         POSITION: [ 3, 7, 1.7, 19, 0, -180, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 24, 8.5, 1, 4, 0, 90, 0.3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.machineGun = {
    PARENT: "genericTank",
    LABEL: "Machine Gun",
    GUNS: [
        {
            POSITION: {
                LENGTH: 12,
                WIDTH: 10,
                ASPECT: 1.4,
                X: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.flankGuard = {
    PARENT: "genericTank",
    LABEL: "Flank Guard",
    BODY: {
        SPEED: 1.1 * base.SPEED
    },
    GUNS: weaponArray({
        POSITION: {
            LENGTH: 18,
            WIDTH: 8
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet"
        }
    }, 3)
}
Class.megaWallThrower = {
   PARENT: 'genericTank',
   LABEL: 'Wall Thrower',
   SHAPE: 4,
   SIZE: 14,
   GUNS: [ {
         POSITION: [ 40, 7, 1, 0, 0, -15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.wallThrower]),
            TYPE: "smallGravel",
         }, }, {
         POSITION: [ 40, 7, 1, 0, 0, 15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.wallThrower]),
            TYPE: "smallGravel",
         }, }, {
         POSITION: [ 4, 7, 2, 41, 0, -15, 0, ],
         }, {
         POSITION: [ 4, 7, 2, 41, 0, 15, 0, ],
         }, {
         POSITION: [ 47, 11, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.wallThrower]),
            TYPE: "smallGravel",
         }, }, {
         POSITION: [ 5, 11, 2, 47, 0, 0, 0, ],
         }, 
     ],
};
Class.superWallThrower = {
   PARENT: 'genericTank',
   LABEL: 'Super Wall Thrower',
   SHAPE: 4,
   SIZE: 14,
   GUNS: [ {
         POSITION: [ 7, 3, 8, -5, 0, 0, 0, ],
         }, {
         POSITION: [ 29, 24, 1, 2, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.wallThrower]),
            TYPE: "smallGravel",
         }, }, {
         POSITION: [ 8, 23, 1.5, 28, 0, 0, 0, ],
         }, 
     ],
};
Class.director = {
    PARENT: "genericTank",
    LABEL: "Director",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 6,
                WIDTH: 11,
                ASPECT: 1.3,
                X: 7
            },
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 6,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}
Class.pounder = {
    PARENT: "genericTank",
    LABEL: "Pounder",
    GUNS: [
        {
            POSITION: {
                LENGTH: 20.5,
                WIDTH: 12
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.trapper = {
    PARENT: "genericTank",
    LABEL: "Trapper",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 7
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 15
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}
Class.mechTank = {
   PARENT: 'genericTank',
   LABEL: 'Mech',
   GUNS: [ {
         POSITION: [ 3, 8, 1.7, 15, 0, 0, 0, ],
         PROPERTIES: {
            MAX_CHILDREN: "6",
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "weakPillbox",
            STAT_CALCULATOR: "trap",
            SYNCS_SKILLS: true,
            DESTROY_OLDEST_CHILD: true,
         }, }, {
         POSITION: [ 12, 10.5, 1, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.machineTrapper = {
    PARENT: "genericTank",
    LABEL: "Machine Trapper",
    STAT_NAMES: statnames.trap,
    GUNS: [ {
          POSITION: [ 15, 9, 1.4, 0, 0, 0, 0, ],
          }, {
          POSITION: [ 3, 13, 1.4, 16, 0, 0, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.trap, g.trapMachineGun]),
             TYPE: "trap",
         }, }, 
     ],
};
Class.mineLauncher = {
   PARENT: 'genericTank',
   LABEL: 'Mine Launcher',
   STAT_NAMES: statnames.expTrap,
   GUNS: [ {
         POSITION: [ 17, 10, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 2, 10, 0, 0, 0, ],
         }, {
         POSITION: [ 3, 10, 1.7, 16, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.expTrap, g.launcher]),
            TYPE: "explosiveTrap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.minefield = {
   PARENT: 'genericTank',
   LABEL: 'Minefield',
   STAT_NAMES: statnames.expTrap,
   GUNS: [ {
         POSITION: [ 16, 11, 1.4, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 16, 6, 1.8, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 16, 8, -1.8, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 3, 16, 1.4, 17, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.expTrap1, g.launcher, g.expMachineGun]),
            TYPE: "explosiveTrap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.grenadeLauncher = {
   PARENT: 'genericTank',
   LABEL: 'Grenade Launcher',
   STAT_NAMES: statnames.expTrap,
   GUNS: [ {
         POSITION: [ 16, 12, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ -7, 6, 0, 16, -3, 0, 0, ],
         }, {
         POSITION: [ -7, 6, 0, 16, 3, 0, 0, ],
         }, {
         POSITION: [ -7, 2, 0, 16, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 12, 1.1, 17, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.expTrap, g.setExpTrap]),
            TYPE: "explosiveBlock",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.bomb = {
   PARENT: 'genericTank',
   LABEL: 'Bomb',
   STAT_NAMES: statnames.expTrap,
   GUNS: [ {
         POSITION: [ 17, 15, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 7.5, 2, 10, 0, 0, 0, ],
         }, {
         POSITION: [ 3, 15, 1.7, 16, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.expTrap, g.launcher, g.destroyer, { RELOAD: 7.5 }]),
            TYPE: "explosiveTrap",
            STAT_CALCULATOR: "trap",
            MAX_CHILDREN: 4,
            DESTROY_OLDEST_CHILD: true,
         }, }, 
     ],
};
Class.megaTrapper = {
   PARENT: 'genericTank',
   LABEL: 'Mega Trapper',
   STAT_NAMES: statnames.trap,
   GUNS: [ {
         POSITION: [ 16, 14, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 14, 1.7, 13.5, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pounder, g.destroyer, {speed: 1.5, size: 1.5, pen: 1.2}]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.megaTrapperNo = {
    PARENT: "megaTrapper"
}
Class.pen = {
   PARENT: 'genericTank',
   LABEL: 'Pen',
   GUNS: [ {
         POSITION: [ 19, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 3, 8, 1.7, 13, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.fortifier = {
   PARENT: 'genericTank',
   LABEL: 'Fortifier',
   GUNS: [ {
         POSITION: [ 29, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4, 8, 1.3, 22, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 4, 8, 1.3, 18, 0, 0, 1/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 4, 8, 1.3, 14, 0, 0, 2/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.incarcerator = {
   PARENT: 'genericTank',
   LABEL: 'Incarcerator',
   GUNS: [ {
         POSITION: [ 19, 8, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 3, 8, 1.7, 13, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 18, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.lockup = {
   PARENT: 'genericTank',
   LABEL: 'Lockup',
   BODY: {
       FOV: 1.2 * base.FOV
   },
   GUNS: [ {
         POSITION: [ 19, 8, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 3, 8, 1.7, 13, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 24, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.jailer = {
   PARENT: 'genericTank',
   LABEL: 'Jailer',
   GUNS: [ {
         POSITION: [ 18, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 8, 1, 0, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 3, 8, 1.7, 15, 0, -180, 0, ],
         PROPERTIES: {
            MAX_CHILDREN: "6",
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "weakPillbox",
            STAT_CALCULATOR: "trap",
            SYNCS_SKILLS: true,
            DESTROY_OLDEST_CHILD: true,
         }, }, {
         POSITION: [ 12, 10.5, 1, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.megaAutoPen = {
   PARENT: 'genericTank',
   LABEL: 'Mega Auto-Pen',
   GUNS: [ {
         POSITION: [ 19, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 3, 8, 1.7, 13, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
    TURRETS: [
        {
            POSITION: [12, 0, 0, 0, 360, 1],
            TYPE: "megaAutoTankGun",
        },
    ],
};
Class.stall = {
   PARENT: 'genericTank',
   LABEL: 'Stall',
   GUNS: [ {
         POSITION: [ 24, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 12, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 12, 1.1, 19, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrapPen]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.operator = {
   PARENT: 'genericTank',
   LABEL: 'Operator',
   GUNS: [ {
         POSITION: [ 21, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 3, 8, 1.7, 15, 0, 0, 0, ],
         PROPERTIES: {
            MAX_CHILDREN: "6",
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "weakPillbox",
            STAT_CALCULATOR: "trap",
            SYNCS_SKILLS: true,
            DESTROY_OLDEST_CHILD: true,
         }, }, {
         POSITION: [ 12, 10.5, 1, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.hurdle = {
   PARENT: 'genericTank',
   LABEL: 'Hurdle',
   GUNS: [ {
         POSITION: [ 24, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 18, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 18, 1.2, 19, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrapPen, g.construct]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.desmos = {
    PARENT: "genericTank",
    LABEL: "Desmos",
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 8, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, 90, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, -90, 0]
        }
    ]
}
Class.desmos1 = {
    PARENT: "genericTank",
    LABEL: "flamethrower and desmos had sex",
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 8, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["slowestGrowBullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, 90, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, -90, 0]
        }
    ]
}
Class.smasher = {
    PARENT: "genericSmasher",
    LABEL: "Smasher",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ]
}
Class.healer = {
    PARENT: "genericTank",
    LABEL: "Healer",
    STAT_NAMES: statnames.heal,
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol"
        }
    ],
    GUNS: [
        {
            POSITION: {
                LENGTH: 8,
                WIDTH: 9,
                ASPECT: -0.5,
                X: 12.5
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet"
            }
        }
    ]
}

// Twin upgrades
Class.doubleTwin = {
    PARENT: "genericTank",
    LABEL: "Double Twin",
    DANGER: 6,
    GUNS: weaponArray([
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.tripleShot = {
    PARENT: "genericTank",
    LABEL: "Triple Shot",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 8,
                Y: -2,
                ANGLE: -17.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 8,
                Y: 2,
                ANGLE: 17.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 22,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.twint = {
    PARENT: "genericTank",
    LABEL: "Twin't",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 8,
                Y: -2,
                ANGLE: -17.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 8,
                Y: 2,
                ANGLE: 17.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot]),
                TYPE: "bullet"
            }
        }
    ]
}

// Double Twin upgrades
Class.tripleTwin = {
    PARENT: "genericTank",
    LABEL: "Triple Twin",
    DANGER: 7,
    GUNS: weaponArray([
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ], 3)
}
Class.hewnDouble = {
    PARENT: "genericTank",
    LABEL: "Hewn Double",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 5.5, 205, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, -5.5, -205, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.doubleTwin, g.hewnDouble]),
                TYPE: "bullet"
            }
        }
    ]
}

// Triple Shot upgrades
Class.pentaShot = {
    PARENT: "genericTank",
    LABEL: "Penta Shot",
    DANGER: 7,
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
Class.spreadshot = {
    PARENT: "genericTank",
    LABEL: "Spreadshot",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [13, 4, 1, 0, -0.5, -75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [13, 4, 1, 0, 0.5, 75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [14.5, 4, 1, 0, -0.5, -60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [14.5, 4, 1, 0, 0.5, 60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [16, 4, 1, 0, -0.5, -45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [16, 4, 1, 0, 0.5, 45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [17.5, 4, 1, 0, -0.5, -30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [17.5, 4, 1, 0, 0.5, 30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [19, 4, 1, 0, -1, -15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [19, 4, 1, 0, 1, 15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin, g.spreadshot]),
                TYPE: "bullet",
                LABEL: "Spread"
            }
        },
        {
            POSITION: [12, 8, 1, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.spreadshotMain, g.spreadshot]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.bentDouble = {
    PARENT: "genericTank",
    LABEL: "Bent Double",
    DANGER: 7,
    GUNS: weaponArray([
        {
            POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.doubleTwin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.doubleTwin]),
                TYPE: "bullet"
            }
        }
    ], 2)
}
Class.triplet = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Triplet",
    BODY: {
        FOV: 1.05 * base.FOV
    },
    GUNS: [
        {
            POSITION: [18, 10, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 10, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet"
            }
        }
    ]
}

// Sniper upgrades
Class.assassin = {
    PARENT: "genericTank",
    DANGER: 6,
    LABEL: "Assassin",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0]
        }
    ]
}
Class.hunter = {
    PARENT: "genericTank",
    LABEL: "Hunter",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.rifle = {
    PARENT: "genericTank",
    LABEL: "Rifle",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: [20, 12, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.marksman = {
    PARENT: "genericTank",
    LABEL: "Marksman",
    DANGER: 6,
    BODY: {
        FOV: 1.2 * base.FOV
    },
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 8
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 13
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 18
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet"
            }
        }
    ]
}

// Assassin upgrades
Class.ranger = {
    PARENT: "genericTank",
    LABEL: "Ranger",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.5 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [32, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
}
Class.hornyranger = {
    PARENT: "genericTank",
    LABEL: "Horny Ranger",
    DANGER: 7,
    COLOR: "#94afc4",
    BODY: {
        SPEED: 1.25 * base.SPEED,
        FOV: 1.5 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [39, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.hornyranger, g.half_half_half_range, {reload: 0.0374, spray: 2, damage: 0.5, speed: 3.54, recoil: 0.01}]),
                TYPE: ["bullet", {COLOR: "white"}],
            },
        },
        {
            POSITION: [30, 5.25, 1, 0, 0, 0, 0.193],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.hornyranger, g.half_half_half_range, {reload: 0.035, spray: 1.94, damage: 0.5, speed: 2.96, recoil: 0.01}]),
                TYPE: ["bullet", {COLOR: "white"}],
                DRAW_FILL: false,
                BORDERLESS: true,
            },
        },
        {
            POSITION: [29.5, 3.55, 1, 0, 0, 0, 0.225],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.half_half_half_range, {reload: 0.024, spray: 1.64, damage: 0.5, speed: 3.45, recoil: 0.01}]),
                TYPE: ["bullet", {COLOR: "white"}],
                DRAW_FILL: false,
                BORDERLESS: true,
            },
        },
        {
            POSITION: [31, 4.5, 1, 0, 0, 0, 0.383],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.half_half_half_range, {reload: 0.019, spray: 1.84, damage: 0.5, speed: 2.552, recoil: 0.01}]),
                TYPE: ["bullet", {COLOR: "white"}],
                DRAW_FILL: false,
                BORDERLESS: true,
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
}
Class.stalker = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Stalker",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.35 * base.FOV
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    GUNS: [
        {
            POSITION: [27, 8, -1.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.single = {
    PARENT: "genericTank",
    LABEL: "Single",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
        }
    ]
}
Class.mech = {
   PARENT: 'genericTank',
   LABEL: 'Mech',
   GUNS: [ {
         POSITION: [ 15, 14, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 3, 14, 1.7, 15, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.lowPower, { shudder: 0.4, speed: 0.9, reload: 2 }]),
            MAX_CHILDREN: 6,
            TYPE: "weakPillbox",
            STAT_CALCULATOR: "trap",
            SYNCS_SKILLS: true,
            DESTROY_OLDEST_CHILD: true,
         }, }, {
         POSITION: [ 12, 17, 1, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.coordinator = {
   PARENT: 'genericTank',
   LABEL: 'Coordinator',
   MAX_CHILDREN: 6,
   GUNS: [ {
         POSITION: [ 2, 14, 1.1, 13, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.single]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            MAX_CHILDREN: 6,
            WAIT_TO_CYCLE: true
         }, }, {
         POSITION: [ 7.5, 14, -1.3, 5, 0, 0, 0, ],
         }, 
     ],
};
Class.ternion = {
   PARENT: 'genericTank',
   LABEL: 'Ternion',
    GUNS: weaponArray([
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
        }
    ], 3)
}
Class.duo = {
   PARENT: 'genericTank',
   LABEL: 'Duo',
   GUNS: [ {
         POSITION: [ 19, 7.5, 1, 0, -5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single, g.twin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 7.5, 1, 0, 5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single, g.twin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 11.5, 17.5, -1.1, 0.5, 0, 0, 0, ],
         }, 
     ],
};
Class.tricker = {
   PARENT: 'genericTank',
   LABEL: 'Tricker',
   GUNS: [ {
         POSITION: [ 17, 8, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 5.5, 8, -1.8, 6.5, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 8, 1.5, 17, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.single]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.gadgetGun = {
    PARENT: "genericTank",
    LABEL: "Gadget Gun",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [13, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [7.5, 11.3, -1.5, 4.5, 0, 0, 0]
        }
    ]
}
Class.trigadgetGun = {
    PARENT: "genericTank",
    LABEL: "Gadget Gun",
    DANGER: 7,
    GUNS: weaponArray([
        {
            POSITION: [13, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.machineGun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [7.5, 11.3, -1.5, 4.5, 0, 0, 0]
        }
    ], 3)
}
Class.mono = {
   PARENT: 'genericTank',
   LABEL: 'Mono',
   GUNS: [ {
         POSITION: [ 22, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single, { damage: 0.9 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 3.5, 8, -1.5, 14, 0, 0, 0, ],
         }, {
         POSITION: [ 8.3, 12, 1, 5, 0, 0, 0, ],
         }, 
     ],
};
Class.bruiser = {
    PARENT: "genericTank",
    LABEL: "Bruiser",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.pounder]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [11, 11, -1.8, 1.5, 0, 0, 0]
        }
    ]
}
Class.sharpshooter = {
    PARENT: "genericTank",
    LABEL: "Sharpshooter",
    DANGER: 7,
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single, g.sniper]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
        }
    ]
}

// Hunter upgrades
Class.predator = {
    PARENT: "genericTank",
    LABEL: "Predator",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.hunterSecondary, g.predator]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.predator]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 16, 1, 0, 0, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.predator]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.crowbarPredator = {
   PARENT: 'genericTank',
   LABEL: 'Crowbary Predator',
   TURRETS: [
        {
            POSITION: [6, 38, 0, 180, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 28, 0, 180, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 18, 0, 180, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        },
   ],
   GUNS: [ {
         POSITION: [ 24, 10, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.sniper, g.hunter, g.hunterSecondary, g.hunterSecondary, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 14, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.sniper, g.hunter, g.hunterSecondary, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 18, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.sniper, g.hunter, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 37, 6.5, 1, 0, 0, -180, 0, ],
         }, {
         POSITION: [ 5, 8.5, -1.5, 8, 0, -180, 0, ],
         }, 
     ],
};
Class.xHunter = {
    PARENT: "genericTank",
    LABEL: "X-Hunter",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: [["zoom", { distance: 550 }]],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 12, -1.2, 7, 0, 0, 0]
        }
    ]
}
Class.dual = {
    PARENT: "genericTank",
    LABEL: "Dual",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [18, 7, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowPower]),
                TYPE: "bullet",
                LABEL: "Small"
            }
        },
        {
            POSITION: [18, 7, 1, 0, -5.5, 0, .5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowPower]),
                TYPE: "bullet",
                LABEL: "Small"
            }
        },
        {
            POSITION: [16, 8.5, 1, 0, 5.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 8.5, 1, 0, -5.5, 0, .75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet"
            }
        }
    ]
}

// Rifle upgrades
Class.musket = {
    PARENT: "genericTank",
    LABEL: "Musket",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: [16, 19, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [18, 7, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 7, 1, 0, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.crossbow = {
    PARENT: "genericTank",
    LABEL: "Crossbow",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: [12.5, 2.5, 1, 0, 3.5, 35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12.5, 2.5, 1, 0, -3.5, -35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 2.5, 1, 0, 3.5, 35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [15, 2.5, 1, 0, -3.5, -35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 3.5, 1, 0, 4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 3.5, 1, 0, -4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.crossbow, { speed: 0.7, maxSpeed: 0.7 }, { recoil: 0.5 }]),
                TYPE: "bullet"
            }
        }
    ]
}

// Marksman upgrades
Class.deadeye = {
    PARENT: "genericTank",
    LABEL: "Deadeye",
    DANGER: 7,
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.4 * base.FOV
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8,
                ASPECT: 1.3,
                X: 10
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8,
                ASPECT: 1.3,
                X: 15
            }
        },
        {
            POSITION: {
                LENGTH: 23,
                WIDTH: 8,
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, { pen: 2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0]
        }
    ]
}
Class.nimrod = {
    PARENT: "genericTank",
    LABEL: "Nimrod",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 12,
                ASPECT: 1.25,
                X: 8
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 12,
                ASPECT: 1.25,
                X: 13
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, { pen: 2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 21,
                WIDTH: 12,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, { pen: 2 }]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.revolver = {
    PARENT: "genericTank",
    LABEL: "Revolver",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 12,
                ASPECT: 1.25,
                X: 8
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 12,
                ASPECT: 1.25,
                X: 13
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 12
            }
        },
        {
            POSITION: {
                LENGTH: 24,
                WIDTH: 7
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, { pen: 2 }]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.fork = {
    PARENT: "genericTank",
    LABEL: "Fork",
    DANGER: 7,
    BODY: {
        FOV: 1.2 * base.FOV
    },
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 8
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 13
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 18
            }
        },
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 8.5,
                ASPECT: 1.3,
                X: 23
            }
        },
        {
            POSITION: {
                LENGTH: 29,
                WIDTH: 8.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, { pen: 2 }]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.realFork = {
    PARENT: "genericTank",
    LABEL: "Fork..",
    DANGER: 7,
    SHAPE: "M -0.7735 -0.2255 C -5.0065 -0.059 -6.6359 -0.4299 -8.404 -0.71 L -8.8705 -0.431 L -8.8765 0.3295 L -8.44 0.5995 C -6.8725 0.331 -3.907 -0.0035 -0.751 0.259 C -0.577 0.292 -0.391 0.4555 -0.208 0.694 C -0.133 0.778 3.059 0.8395 3.476 0.5845 C 2.5295 0.4975 1.6111 0.5395 0.6785 0.517 C 0.647 0.469 0.626 0.385 0.6905 0.3445 C 1.5455 0.307 2.639 0.34 3.575 0.2155 C 2.9045 0.1315 1.556 0.1075 0.7025 0.1165 C 0.6545 0.052 0.6545 -0.017 0.7025 -0.089 C 1.4375 -0.1025 2.663 -0.0215 3.5675 -0.179 C 2.684 -0.2405 1.6925 -0.323 0.713 -0.2975 C 0.6515 -0.3635 0.635 -0.416 0.707 -0.488 C 1.5755 -0.5135 2.5865 -0.4565 3.5105 -0.5435 C 3.4745 -0.6725 1.6205 -0.683 0.641 -0.749 C 0.3395 -0.761 0.056 -0.761 -0.214 -0.689 C -0.3655 -0.4895 -0.529 -0.287 -0.769 -0.227",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [ {
          POSITION: [ 14, 1, -2.5, -1, 0, 0, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.op, g.machineGunner]),
             TYPE: "bullet",
          }, }, {
          POSITION: [ 14, 0.5, -2.5, 52, -2, 0, 0, ],
          }, {
          POSITION: [ 14, 0.5, -2.5, 52, 2, 0, 0, ],
          }, {
          POSITION: [ 14, 0.5, -2.5, 52, -5.5, 0, 0, ],
          }, {
          POSITION: [ 14, 0.5, -2.5, 52, 5.5, 0, 0, ],
          }, {
          POSITION: [ 5, 8, 1.5, 47, 0, 0, 0, ],
          }, {
          POSITION: [ 41, 6.5, 1.2, 5, 0, 0, 0, ],
         }, 
     ],
};
// Machine Gun upgrades
Class.minigun = {
    PARENT: "genericTank",
    LABEL: "Minigun",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.gunner = {
    PARENT: "genericTank",
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
                TYPE: "bullet"
            }
        }
    ]
}
Class.sprayer = {
    PARENT: "genericTank",
    LABEL: "Sprayer",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.lowPower, g.pelleter, { recoil: 1.15 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet"
            }
        }
    ]
}

// Minigun upgrades
Class.streamliner = {
    PARENT: "genericTank",
    LABEL: "Streamliner",
    DANGER: 7,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [
        {
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.barricade = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Barricade",
    STAT_NAMES: statnames.trap,
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
Class.barrilder = {
   PARENT: 'genericTank',
   LABEL: 'Buildercade',
   GUNS: [ {
         POSITION: [ 24, 10.5, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 10.5, 1.1, 22, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.minigun, { size: 1.5, range: 0.5 }]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, {
         POSITION: [ 2, 10.5, 1.1, 18, 0, 0, 1/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.minigun, { size: 1.5, range: 0.5 }]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, {
         POSITION: [ 2, 10.5, 1.1, 14, 0, 0, 2/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.minigun, { size: 1.5, range: 0.5 }]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.buildliner = {
   PARENT: 'genericTank',
   LABEL: 'Buildliner',
   GUNS: [ {
         POSITION: [ 32, 10.5, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 10.5, 1.1, 30, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.minigun, g.streamliner, { size: 1.5, range: 0.5 }]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, {
         POSITION: [ 2, 10.5, 1.1, 26, 0, 0, 1/5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.minigun, g.streamliner, { size: 1.5, range: 0.5 }]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, {
         POSITION: [ 2, 10.5, 1.1, 22, 0, 0, 2/5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.minigun, g.streamliner, { size: 1.5, range: 0.5 }]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, {
         POSITION: [ 2, 10.5, 1.1, 18, 0, 0, 3/5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.minigun, g.streamliner, { size: 1.5, range: 0.5 }]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, {
         POSITION: [ 2, 10.5, 1.1, 14, 0, 0, 4/5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.minigun, g.streamliner, { size: 1.5, range: 0.5 }]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};

// Gunner upgrades
Class.nailgun = {
    PARENT: "genericTank",
    LABEL: "Nailgun",
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
Class.staplerTank = {
   PARENT: 'nailgun',
   LABEL: 'Stapler',
   GUNS: [ {
         POSITION: [ 18, 2, 1, 0, -5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 2, 1, 0, 5, 0, 0.1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 2, 1, 0, -2.5, 0, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 2, 1, 0, 2.5, 0, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 2, 1, 0, 0, 0, 0.7, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 7.5, 12, -1.5, 4.5, 0, 0, 0, ],
         }, 
     ],
};
Class.sniperNailgun = {
    PARENT: "genericTank",
    LABEL: "Nailgun",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            POSITION: [23, 2, 1, 0, -2.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 2, 1, 0, 2.5, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [24, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.pelleter, g.power, g.twin, g.nailgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
        },
    ],
}
Class.nailshooter = {
    PARENT: "genericTank",
    LABEL: "Nailgun",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailshoot]),
                TYPE: "nail",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailshoot]),
                TYPE: "nail",
            },
        },
        {
            POSITION: [20, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailshoot]),
                TYPE: "nail",
            },
        },
        {
            POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
        },
    ],
}
Class.staplerLauncher = {
   PARENT: 'genericTank',
   LABEL: 'Stapler Launcher',
   BODY: {
       FOV: base.FOV * 2.5,
   },
   GUNS: [ {
         POSITION: [ 21, 11, 1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 16, 18, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.nailahShooter, g.pounder]),
            TYPE: "stapler",
         }, }, {
         POSITION: [ 11, 18, -1.1, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.staplerLauncher1 = {
   PARENT: 'genericTank',
   LABEL: 'Stapler Launcher',
   BODY: {
       FOV: base.FOV * 0.95,
   },
   GUNS: [ {
         POSITION: [ 21, 11, 1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 16, 18, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.nailahShooter, g.pounder]),
            TYPE: "stapler",
         }, }, {
         POSITION: [ 11, 18, -1.1, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.staplerLauncher2 = {
   PARENT: 'genericTank',
   LABEL: 'Stapler Launcher',
   BODY: {
       FOV: base.FOV * 2,
   },
   GUNS: [ {
         POSITION: [ 21, 11, 1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 16, 18, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.nailahShooter1, g.pounder]),
            TYPE: "stapler",
         }, }, {
         POSITION: [ 11, 18, -1.1, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.machineGunner = {
    PARENT: "genericTank",
    LABEL: "Machine Gunner",
    DANGER: 7,
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

// Sprayer upgrades
Class.redistributor = {
    PARENT: "genericTank",
    LABEL: "Redistributor",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [26, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 10, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.atomizer = {
    PARENT: "genericTank",
    LABEL: "Atomizer",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [5, 7.5, 1.3, 18.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }, g.atomizer]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.focal = {
    PARENT: "genericTank",
    LABEL: "Focal",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [25, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.lowPower, g.machineGun, { recoil: 1.15 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 10, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.focal]),
                TYPE: "bullet",
            },
        },
    ],
}

// Flank Guard upgrades
Class.hexaTank = {
    PARENT: "genericTank",
    LABEL: "Hexa Tank",
    DANGER: 6,
    GUNS: weaponArray({
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
            TYPE: "bullet"
        }
    }, 6, 0.5)
}
Class.triAngle = {
    PARENT: "genericTank",
    LABEL: "Tri-Angle",
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 6,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front",
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
Class.foots = {
    PARENT: "genericTank",
    LABEL: "Foots",
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
        {
            POSITION: [14.5, 1.5, 10, 0, 360, -1],
            TYPE: "footDeco",
        },
        {
            POSITION: [14.5, 1.5, -10, 0, 360, -1],
            TYPE: "footDeco2",
        },
    ],
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
}
Class.auto3 = makeRadialAuto("autoTankGun", {isTurret: true, danger: 6, label: "Auto-3"})

// Hexa Tank upgrades
Class.octoTank = {
    PARENT: "genericTank",
    LABEL: "Octo Tank",
    DANGER: 7,
    GUNS: weaponArray([
        // Must be kept like this to preserve visual layering
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.spam]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 8, 1, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.spam]),
                TYPE: "bullet"
            }
        }
    ], 4)
}
Class.cyclone = {
    PARENT: "genericTank",
    LABEL: "Cyclone",
    DANGER: 7,
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

// Tri-Angle upgrades
Class.fighter = {
    PARENT: "genericTank",
    LABEL: "Fighter",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Side",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Side",
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
Class.booster = {
    PARENT: "genericTank",
    LABEL: "Booster",
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
Class.surfer = {
    PARENT: "genericTank",
    LABEL: "Surfer",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: "swarm",
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

// Auto-3 upgrades
Class.auto5 = makeRadialAuto("autoTankGun", {isTurret: true, danger: 7, label: "Auto-5", count: 5})
Class.auto2 = makeRadialAuto("autoTankGun", {isTurret: true, danger: 7, label: "Auto-2", count: 2})
Class.lightAuto2 = makeRadialAuto("light2", {isTurret: true, danger: 7, label: "Light-2", count: 2})
    Class.lightAuto3 = makeRadialAuto("light2", {isTurret: true, danger: 7, label: "Light-3", count: 3})
        Class.lightAuto5 = makeRadialAuto("light2", {isTurret: true, danger: 7, label: "Light-5", count: 5})
Class.laserPointerAuto2 = makeRadialAuto("laserPointer2", {isTurret: true, danger: 7, label: "Laser Pointer-2", count: 2})
    Class.laserPointerAuto3 = makeRadialAuto("laserPointer2", {isTurret: true, danger: 7, label: "Laser Pointer-3", count: 3})
        Class.laserPointerAuto5 = makeRadialAuto("laserPointer2", {isTurret: true, danger: 7, label: "Laser Pointer-5", count: 5})
Class.laserAuto2 = makeRadialAuto("laser2", {isTurret: true, danger: 7, label: "Laser-2", count: 2})
    Class.laserAuto3 = makeRadialAuto("laser2", {isTurret: true, danger: 7, label: "Laser-3", count: 3})
Class.ion = makeRadialAuto("plasmaTurret", {isTurret: true, danger: 7, label: "Ion", count: 2})
Class.sprite = makeRadialAuto("plasmaSnipeTurret", {isTurret: true, danger: 7, label: "Sprite", count: 2})
Class.minigunAuto2 = makeRadialAuto("minigun2", {isTurret: true, danger: 7, label: "Minigun-2", count: 2})
Class.minigunAuto3 = makeRadialAuto("minigun2", {isTurret: true, danger: 7, label: "Minigun-3", count: 3})
Class.singleAuto2 = makeRadialAuto("single2", {isTurret: true, danger: 7, label: "Single-2", count: 2})
Class.megaAuto2 = makeRadialAuto("megaAutoTankGun", {isTurret: true, danger: 7, label: "Mega-2", count: 2})
Class.machineAuto2 = makeRadialAuto("machine2", {isTurret: true, danger: 7, label: "Machine-2", count: 2})
    Class.machineAuto3 = makeRadialAuto("machine2", {isTurret: true, danger: 7, label: "Machine-3", count: 3})
    Class.machineAuto5 = makeRadialAuto("machine2", {isTurret: true, danger: 7, label: "Machine-5", count: 5})
Class.directorAuto2 = makeRadialAuto("director2", {isTurret: true, danger: 7, label: "Director-2", count: 2})
    Class.directorAuto3 = makeRadialAuto("director2", {isTurret: true, danger: 7, label: "Director-3", count: 3})
    Class.directorAuto5 = makeRadialAuto("director2", {isTurret: true, danger: 7, label: "Director-5", count: 5})
Class.trapperAuto2 = makeRadialAuto("trapper2", {isTurret: true, danger: 7, label: "Trapper-2", count: 2})
    Class.trapperAuto3 = makeRadialAuto("trapper2", {isTurret: true, danger: 7, label: "Trapper-3", count: 3})
    Class.trapperAuto5 = makeRadialAuto("trapper2", {isTurret: true, danger: 7, label: "Trapper-5", count: 5})
    Class.constructAuto2 = makeRadialAuto("construct2", {isTurret: true, danger: 7, label: "Constructor-2", count: 2})
    Class.boomerAuto2 = makeRadialAuto("boomer2", {isTurret: true, danger: 7, label: "Boomer-2", count: 2})
Class.launcherAuto2 = makeRadialAuto("launcher2", {isTurret: true, danger: 7, label: "Launcher-2", count: 2})
Class.skimmerAuto2 = makeRadialAuto("skimmer2", {isTurret: true, danger: 7, label: "Skimmer-2", count: 2})
Class.twisterAuto2 = makeRadialAuto("twister2", {isTurret: true, danger: 7, label: "Twister-2", count: 2})
Class.shrapnelAuto2 = makeRadialAuto("shrapnel2", {isTurret: true, danger: 7, label: "Shrapnel-2", count: 2})
Class.crossbow2 = makeRadialAuto("crossbowTurret", {isTurret: true, danger: 7, label: "take ur shit suggestion", count: 2})
Class.builderAuto2 = makeRadialAuto("builder2", {isTurret: true, danger: 7, label: "Builder-2", count: 2})
Class.engineerAuto2 = makeRadialAuto("engineer2", {isTurret: true, danger: 7, label: "Engineer-2", count: 2})
Class.auto2pellet = makeRadialAuto("pelletAutoTurret", {isTurret: true, danger: 7, label: "Pelleter-2", count: 2})
Class.auto3pelleter = makeRadialAuto("pelletAutoTurret", {isTurret: true, danger: 7, label: "Pelleter-3", count: 3})
Class.auto5pelleter = makeRadialAuto("pelletAutoTurret", {isTurret: true, danger: 7, label: "Pelleter-5", count: 5})
Class.paddock = makeRadialAuto("stallAutoGun", {isTurret: true, danger: 7, label: "Paddock", count: 3})
Class.autoHexaShotgunner = makeRadialAuto("hexaShotgun", {isTurret: true, danger: 7, label: "Auto Hexa Shotgunner", count: 4})
Class.mega3 = makeRadialAuto("megaAutoTankGun", {isTurret: true, danger: 7, size: 14, label: "Mega-3", body: {SPEED: 0.95 * base.SPEED}})
Class.mega5 = makeRadialAuto("megaAutoTankGun", {isTurret: true, danger: 7, size: 14, label: "Mega-5", count: 5, body: {SPEED: 0.95 * base.SPEED}})
Class.ultra3 = makeRadialAuto("ultraAutoTankGun", {isTurret: true, danger: 7, size: 14, label: "Ultra-3", body: {SPEED: 0.95 * base.SPEED}})
Class.auto10 = makeRadialAuto("autoRanger", {isTurret: true, danger: 7, label: "Auto-10 Ranger", count: 10, body: {SIZE: 20}})
Class.autoThreeLaser = makeRadialAuto("autoLaser", {isTurret: true, danger: 7, label: "Auto-3 Laser", count: 3, body: {SIZE: 20}})
Class.autoThreeLaserTwin = makeRadialAuto("autoLaserTwin", {isTurret: true, danger: 7, label: "Auto-5 Laser Twin", count: 5, body: {SIZE: 20}})
Class.autoThreeLaserDestroyer = makeRadialAuto("autoLaserDestroyer", {isTurret: true, danger: 7, label: "Auto-3 Laser Destroyer", count: 3, body: {SIZE: 20}})
Class.autoThreeLaserDestroyer1 = makeRadialAuto("autoLaserDestroyer", {isTurret: true, danger: 7, label: "fuck yourself", count: 5, body: {SIZE: 20}})
Class.autoThreeLaserAnnihilator = makeRadialAuto("autoLaserAnnihilator", {isTurret: true, danger: 7, label: "realllll", count: 5, body: {SIZE: 20}})
Class.autoThreeLaserAnnihilator1 = makeRadialAuto("autoLaserAnnihilator", {isTurret: true, danger: 7, label: "realllll", count: 3, body: {SIZE: 20}})
Class.auto10Wrench = makeRadialAuto("wrenchTurret", {isTurret: true, danger: 7, label: "Auto-10 Wrench", count: 15, body: {SIZE: 35}})
Class.autoConstructtMinion = makeRadialAuto("autoConstructt", {isTurret: true, danger: 7, label: "Auto-6 Constructor", count: 6, body: {SIZE: 20}})
Class.auto4 = makeRadialAuto("auto4gun", {isTurret: true, danger: 7, size: 13, x: 6, angle: 45, label: "Auto-4", count: 4})
Class.auto6 = makeRadialAuto("auto4gun", {isTurret: true, danger: 7, size: 13, x: 6, angle: 45, label: "Auto-6", count: 6})
Class.batter4 = makeRadialAuto("batter4gun", {isTurret: true, danger: 7, size: 13, x: 6, angle: 45, label: "Batter-4", count: 4})
Class.gunner4 = makeRadialAuto("gunner4gun", {isTurret: true, danger: 7, size: 13, x: 6, angle: 45, label: "Gunner-4", count: 4})
Class.gunner6 = makeRadialAuto("gunner4gun", {isTurret: true, danger: 7, size: 13, x: 6, angle: 45, label: "Gunner-6", count: 6})
Class.banshee = makeRadialAuto("bansheegun", {isTurret: true, danger: 7, size: 10, arc: 80, label: "Banshee", body: {SPEED: 0.8 * base.SPEED, FOV: 1.1 * base.FOV}})
Class.banshee.GUNS = weaponArray({
    POSITION: [6, 11, 1.2, 8, 0, 60, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
        TYPE: "drone",
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: "drone",
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
    },
}, 3)

// Director upgrades
Class.overseer = {
    PARENT: "genericTank",
    LABEL: "Overseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: weaponArray({
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
        }
    }, 2)
}
Class.overseerr = {
    PARENT: "genericTank",
    LABEL: "Overseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 2,
    GUNS: weaponArray({
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
        }
    }, 2)
}
Class.cruiser = {
    PARENT: "genericTank",
    LABEL: "Cruiser",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}
Class.tripleer = {
   PARENT: 'genericTank',
   LABEL: 'Triple Cruiser',
   DANGER: 6,
   FACING_TYPE: "locksFacing",
   STAT_NAMES: statnames.swarm,
   GUNS: [ {
         POSITION: [ 7, 7.5, 0.6, 5.5, 4, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 7, 7.5, 0.6, 5.5, -4, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 8.5, 7.5, 0.6, 6.5, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.more_health]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, 
     ],
};
Class.tricruiser = {
    PARENT: "genericTank",
    LABEL: "Tri-Cruiser",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: weaponArray([
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
    ], 3)
}
Class.underseer = {
    PARENT: "genericTank",
    LABEL: "Underseer",
    DANGER: 6,
    NECRO: true,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: weaponArray({
        POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {reload: 0.8}]),
            TYPE: "sunchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "necro",
            WAIT_TO_CYCLE: true,
            DELAY_SPAWN: false,
        }
    }, 2)
}
Class.spawner = {
    PARENT: "genericTank",
    LABEL: "Spawner",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
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
Class.omegaSpawner = {
    PARENT: "genericTank",
    LABEL: "ez spawner",
    DANGER: 6,
    SIZE: 25,
    STAT_NAMES: statnames.drone,
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
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "cMinion",
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
Class.manager = {
    PARENT: "genericTank",
    LABEL: "Manager",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer, { reload: 0.5 }]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
            },
        },
    ],
}
Class.bigCheese = {
    PARENT: "genericTank",
    LABEL: "Big Cheese",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            POSITION: [16, 16, 1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bigCheese]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 1,
            },
        },
    ],
}

// Overseer upgrades
Class.overlord = {
    PARENT: "genericTank",
    LABEL: "Overlord",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: weaponArray({
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
        }
    }, 4)
}
Class.overdrive = {
    PARENT: "genericTank",
    LABEL: "Overdrive",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: weaponArray({
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "turretedDrone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true,
            MAX_CHILDREN: 4
        }
    }, 2)
}
Class.commander = {
    PARENT: "genericTank",
    LABEL: "Commander",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        ...weaponArray({
            POSITION: [8, 11, 1.3, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: "drone",
            },
        }, 3),
        ...weaponArray({
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        }, 3, 1/3),
    ]
}

// Cruiser upgrades
Class.carrier = {
    PARENT: "genericTank",
    LABEL: "Carrier",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            POSITION: [7, 8, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 2, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, -2, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}
Class.minigarrier = {
   PARENT: 'genericTank',
   LABEL: 'Minigarrier',
   GUNS: [ {
         POSITION: [ 9, 6.8, 0.6, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier, g.twin, g.more_damage, g.faster, g.minigun]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 9, 6.8, 0.6, 8, 2, 30, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier, g.twin, g.more_damage, g.faster, g.minigun]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 9, 6.8, 0.6, 8, -2, -30, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier, g.twin, g.more_damage, g.faster, g.minigun]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 7, 7.8, 0.6, 7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier, g.twin, g.more_damage, g.faster, g.minigun]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 7, 7.8, 0.6, 7, 2, 30, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier, g.twin, g.more_damage, g.faster, g.minigun]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 7, 7.8, 0.6, 7, -2, -30, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier, g.twin, g.more_damage, g.faster, g.minigun]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, 
     ],
};
Class.battleship = {
    PARENT: "genericTank",
    LABEL: "Battleship",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: 1.2 * base.FOV
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
                LABEL: "Guided"
            }
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: "swarm",
                LABEL: "Autonomous"
            }
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: "swarm",
                LABEL: "Autonomous"
            }
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
                LABEL: "Guided"
            }
        }
    ]
}
Class.fortress = {
    PARENT: "genericTank",
    LABEL: "Fortress",
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        ...weaponArray(
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        }, 3, 1/3),
        ...weaponArray([
            {
                POSITION: [14, 9, 1, 0, 0, 0, 0],
            },
            {
                POSITION: [4, 9, 1.5, 14, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, { range: 0.5, speed: 0.7, maxSpeed: 0.7 }]),
                    TYPE: "trap",
                    STAT_CALCULATOR: "trap",
                },
            }
        ], 3)
    ],
}

// Underseer upgrades
Class.necromancer = {
    PARENT: "genericTank",
    LABEL: "Necromancer",
    DANGER: 7,
    NECRO: true,
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: weaponArray({
        POSITION: [5.25, 12, 1.2, 8, 0, 0, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "sunchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "necro",
            WAIT_TO_CYCLE: true,
            DELAY_SPAWN: false,
        },
    }, 4, 0.75),
}
Class.maleficitor = {
    PARENT: "genericTank",
    LABEL: "Maleficitor",
    DANGER: 7,
    NECRO: true,
    TOOLTIP: "Press R and wait to turn your drones invisible.",
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.1,
    },
    SHAPE: 4,
    MAX_CHILDREN: 20,
    GUNS: [
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.maleficitor]),
                TYPE: [
                    "sunchip",
                    {
                        INVISIBLE: [0.06, 0.03],
                    },
                ],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "necro",
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false,
            },
        },
    ],
}
Class.infestor = {
    PARENT: "genericTank",
    LABEL: "Infestor",
    DANGER: 7,
    NECRO: true,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.1,
    },
    MAX_CHILDREN: 20,
    GUNS: weaponArray([
        {
            POSITION: [7.25, 6, 1.2, 6, -5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {reload: 0.5}]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "necro",
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false,
            }
        },
        {
            POSITION: [7.25, 6, 1.2, 6, 5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {reload: 0.5}]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "necro",
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false,
            }
        }
    ], 2)
}

// Spawner upgrades
Class.factory = {
    PARENT: "genericTank",
    LABEL: "Factory",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1, 15.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: "minion",
                MAX_CHILDREN: 6,
                STAT_CALCULATOR: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [12, 14, 1, 0, 0, 0, 0],
        },
    ],
}
Class.factoryMin = {
    PARENT: "genericTank",
    LABEL: "Factory",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1, 15.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: "squareAutoMinion",
                MAX_CHILDREN: 6,
                STAT_CALCULATOR: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [12, 14, 1, 0, 0, 0, 0],
        },
    ],
}

// Pounder upgrades
Class.destroyer = {
    PARENT: "genericTank",
    LABEL: "Destroyer",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.artillery = {
    PARENT: "genericTank",
    LABEL: "Artillery",
    DANGER: 6,
    GUNS: [
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
    ],
}
Class.forger = {
    PARENT: "genericTank",
    LABEL: "Forger",
    DANGER: 6,
    GUNS: [
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
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "setTrap",
                STAT_CALCULATOR: "block"
            }
        }
    ],
}
Class.launcher = {
    PARENT: "genericTank",
    LABEL: "Launcher",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
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
        },
    ],
}
Class.cluster = {
   PARENT: 'genericTank',
   LABEL: 'Cluster',
   BODY: {
       FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 5, 7.2, -1.25, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 13, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.half_half_range]),
            TYPE: "clustermissile",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.recursor = {
   PARENT: 'genericTank',
   LABEL: 'Recursor',
   BODY: {
       FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 5, 7.2, -1.25, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 13, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pounder, g.launcher, g.less_reload, g.half_half_range]),
            TYPE: "clustermissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 17, 13, 1.25, -4.5, 0, 0, 1/2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pounder, g.launcher, g.less_reload, g.half_half_range]),
            TYPE: "clustermissile",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.flock = {
   PARENT: 'genericTank',
   LABEL: 'Flock',
   BODY: {
       FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 5, 7.2, -1.25, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 13, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.half_half_range]),
            TYPE: "flockmissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 4, 5, -0.6, 13, -4, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.half_half_range, g.fake]),
            TYPE: "bullet",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 4, 5, -0.6, 13, 4, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.half_half_range, g.fake]),
            TYPE: "bullet",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.bombard = {
   PARENT: 'genericTank',
   LABEL: 'Bombard',
   BODY: {
       FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 5, 9.7, -1.25, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 15.5, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.launcher, g.less_reload, g.half_half_range, {size: 1.15, recoil: 0.5}]),
            TYPE: "clustermissile",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.neutron = {
   PARENT: 'genericTank',
   LABEL: 'Neutron',
   BODY: {
       FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 5, 3.7, -1.25, 16.6, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 7.2, 1.25, 14.5, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 13, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.half_half_range]),
            TYPE: "neutronmissile",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.shell = {
   PARENT: 'genericTank',
   LABEL: 'Shell',
   BODY: {
       FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 15, 8.5, 1.5, 1.75, 0, 0, 0, ],
         }, {
         POSITION: [ 15, 12, 1.25, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 12.55, 8.5, 1.1, 5.5, 0, 0, 0, ],
         }, {
         POSITION: [ 15.7, 9.5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.half_half_range, {size: 1.4}]),
            TYPE: "flankClusterMissile",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.mine = {
   PARENT: 'genericTank',
   LABEL: 'Mine',
   BODY: {
       FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 5, 7.2, -1.25, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 13, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.half_half_range]),
            TYPE: "twinclustermissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 13, 5.15, 1, 0, -3.85, 0, 0, ],
         }, {
         POSITION: [ 13, 5.15, 1, 0, 3.85, 0, 0, ],
         }, 
     ],
};
Class.ticker = {
   PARENT: 'genericTank',
   LABEL: 'Ticker',
   BODY: {
       FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 10, 14, -0.5, 9, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 13, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.half_half_range]),
            TYPE: "skimclustermissile",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.molotov = {
   PARENT: 'genericTank',
   LABEL: 'Molotov',
   BODY: {
       FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 5, 7.2, -1.25, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 13, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.hive, g.half_range, {size: 1.5}]),
            TYPE: "hiveClusterMissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 17, 12, 1, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.strafe = {
   PARENT: 'genericTank',
   LABEL: 'Strafe',
   BODY: {
       FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 14.5, 4, 1, 0, -7, -7, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, {size: 1.5}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14.5, 4, 1, 0, 7, 7, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, {size: 1.5}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 5, 7.2, -1.25, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 13, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.half_half_range]),
            TYPE: "clustermissile",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.hypercluster = {
   PARENT: 'genericTank',
   LABEL: 'Hypercluster',
   BODY: {
       FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 5, 7.2, -1.25, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 3.5, -1.2, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 13, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.half_half_range, g.more_health]),
            TYPE: "hyperclustermissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 17, 7.3, 1.35, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.half_half_range, g.more_health, g.fake]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.gimmicker = {
   PARENT: 'genericTank',
   LABEL: 'Gimmicker',
   BODY: {
       FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 5, 7.2, -1.25, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 13, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.half_half_range]),
            TYPE: "autoClusterMissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 3.7, 8, 1, 13.3, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.half_half_range, g.fake]),
            TYPE: "bullet",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.grenade = {
   PARENT: 'genericTank',
   LABEL: 'Grenade',
   BODY: {
       FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 10, 13, -0.5, 9, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 13, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.less_reload, g.half_half_range]),
            TYPE: "explodingSpinMissile",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.firework = {
   PARENT: 'genericTank',
   LABEL: 'Firework',
   BODY: {
       FOV: base.FOV * 1.1,
   },
   GUNS: [ {
         POSITION: [ 5, 15.6, 1.1, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 13, 1.25, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.rocketeer, g.less_reload, g.half_halfrange]),
            TYPE: "rocketeerCluster", // DESTROY EVERYTHING!!!
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.footDeco = {
    SHAPE: "M -0.8023 -0.3683 C -0.1421 -0.3967 0.3195 -0.4553 0.3846 -0.4725 C 0.5456 -0.4865 0.6598 -0.4903 0.8531 -0.5 c 0.1495 0.0284 0.2549 0.083 0.2769 0.1871 c -0.0038 0.2203 -0.4254 0.1609 -0.431 0.0943 c -0.0231 0.0089 -0.0408 0.0202 -0.0284 0.0449 c 0.0129 0.0026 0.169 0.0272 0.1781 0.0239 c 0.0222 -0.0079 0.1292 -0.0074 0.1257 -0.006 c 0.0733 0.0186 0.088 0.0568 0.0778 0.1033 c 0.0027 0.0402 -0.015 0.0598 -0.0359 0.0763 l -0.2065 -0.0269 c -0.0674 -0.0005 -0.0745 0.003 -0.1223 0.0064 l 0.0055 0.0041 c 0.1161 -0.0114 0.2754 0.0002 0.3008 0.0314 c 0.0277 0.0176 0.0241 0.038 0.0242 0.0584 c -0.0181 0.0419 -0.0349 0.067 -0.0586 0.0778 c -0.1646 -0.0048 -0.2727 -0.0412 -0.2985 -0.0251 l -0.0059 0.0026 l 0.0096 0.0028 c 0.0731 -0.0024 0.1388 0.0115 0.205 0.0242 c 0.0745 0.0292 0.0198 0.0771 -0.0135 0.1063 c -0.0354 0.0274 -0.0759 0.0447 -0.1212 0.0524 l -0.2529 -0.0329 l -0.0077 0.0106 c 0 0 0.0332 -0.01 0.0392 -0.0115 c 0.006 -0.0015 0.1578 0.0246 0.1578 0.0246 c 0.0221 0.0701 -0.1559 0.1659 -0.2252 0.1425 c -0.1114 0.0246 -0.2152 0.0381 -0.3083 0.0359 c -0.2519 -0.0192 -0.598 -0.1399 -0.7304 -0.1781 c -0.1253 -0.0203 -0.2258 -0.0296 -0.3233 -0.0374 c -0.1752 0.0079 -0.2473 -0.1553 -0.232 -0.2829 c 0.0026 -0.246 0.0992 -0.3426 0.3457 -0.3772 z",
};
Class.footDeco2 = {
    SHAPE: "M -0.8023 0.3683 C -0.1421 0.3967 0.3195 0.4553 0.3846 0.4725 C 0.5456 0.4865 0.6598 0.4903 0.8531 0.5 c 0.1495 -0.0284 0.2549 -0.083 0.2769 -0.1871 c -0.0038 -0.2203 -0.4254 -0.1609 -0.431 -0.0943 c -0.0231 -0.0089 -0.0408 -0.0202 -0.0284 -0.0449 c 0.0129 -0.0026 0.169 -0.0272 0.1781 -0.0239 c 0.0222 0.0079 0.1292 0.0074 0.1257 0.006 c 0.0733 -0.0186 0.088 -0.0568 0.0778 -0.1033 c 0.0027 -0.0402 -0.015 -0.0598 -0.0359 -0.0763 l -0.2065 0.0269 c -0.0674 0.0005 -0.0745 -0.003 -0.1223 -0.0064 l 0.0055 -0.0041 c 0.1161 0.0114 0.2754 -0.0002 0.3008 -0.0314 c 0.0277 -0.0176 0.0241 -0.038 0.0242 -0.0584 c -0.0181 -0.0419 -0.0349 -0.067 -0.0586 -0.0778 c -0.1646 0.0048 -0.2727 0.0412 -0.2985 0.0251 l -0.0059 -0.0026 l 0.0096 -0.0028 c 0.0731 0.0024 0.1388 -0.0115 0.205 -0.0242 c 0.0745 -0.0292 0.0198 -0.0771 -0.0135 -0.1063 c -0.0354 -0.0274 -0.0759 -0.0447 -0.1212 -0.0524 l -0.2529 0.0329 l -0.0077 -0.0106 c 0 0 0.0332 0.01 0.0392 0.0115 c 0.006 0.0015 0.1578 -0.0246 0.1578 -0.0246 c 0.0221 -0.0701 -0.1559 -0.1659 -0.2252 -0.1425 c -0.1114 -0.0246 -0.2152 -0.0381 -0.3083 -0.0359 c -0.2519 0.0192 -0.598 0.1399 -0.7304 0.1781 c -0.1253 0.0203 -0.2258 0.0296 -0.3233 0.0374 c -0.1752 -0.0079 -0.2473 0.1553 -0.232 0.2829 c 0.0026 0.246 0.0992 0.3426 0.3457 0.3772 z",
};
Class.miniRocketShooter = {
   PARENT: 'genericTank',
   LABEL: 'Shrapnel',
   GUNS: [ {
         POSITION: [ 19.5, 7, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.shrapnelNuke, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 9.5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.shrapnelNuke]),
            TYPE: "miniNuke",
         }, }, {
         POSITION: [ 8, 9.5, -1.4, 5, 0, 0, 0, ],
         }, 
     ],
};
Class.omegaOppen = {
   PARENT: 'genericTank',
   LABEL: 'Omega Oppenheimer',
   BODY: {
    ACCELERATION: base.ACCEL * 5,
   },
   GUNS: [ {
         POSITION: [ 19.5, 15, -1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.more_damage, g.more_health, g.more_power, g.double_reload, g.best_reload, g.shrapnelNuke, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 16.5, -1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.more_damage, g.more_health, g.more_power, g.double_reload, g.best_reload, g.shrapnelNuke]),
            TYPE: "megaMiniNuke",
         }, }, {
         POSITION: [ 11, 16.5, -1.2, 2, 0, 0, 0, ],
         },
     ],
};
Class.ttxShoot = {
   PARENT: 'genericTank',
   LABEL: 'TTX Shooter',
   BODY: {
    FOV: 1.55,
    SPEED: base.SPEED * 2,
    ACCELERATION: base.ACCEL * 10,
   },
   GUNS: [ {
         POSITION: [ 20, 12, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.shrapnelNuke, g.fake, {reload: 0.35}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18.5, 14, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.shrapnelNuke, {speed: 4, reload: 0.35}]),
            TYPE: "ttxShoe",
         }, }, {
         POSITION: [ 12, 14, -1.4, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.ttxMegaShoot = {
   PARENT: 'genericTank',
   LABEL: 'Mega-TTX Shooter',
   BODY: {
    FOV: 1.55,
    SPEED: base.SPEED * 2,
    ACCELERATION: base.ACCEL * 10,
   },
   GUNS: [ {
         POSITION: [ 20, 12, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.annihilator, g.shrapnelNuke, g.fake, {reload: 0.35}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18.5, 14, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.annihilator, g.shrapnelNuke, g.half_range, {speed: 5.5, reload: 0.35}]),
            TYPE: "ttxBigShoe",
         }, }, {
         POSITION: [ 12, 14, -1.4, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.ttxOmegaShoot = {
   PARENT: 'genericTank',
   LABEL: 'Omega-TTX Shooter',
   BODY: {
    FOV: 1.7,
    SPEED: base.SPEED * 2,
    ACCELERATION: base.ACCEL * 10,
   },
   GUNS: [ {
         POSITION: [ 20, 12, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.shrapnelNuke, g.fake, {reload: 0.35}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18.5, 14, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.annihilator, g.more_damage, g.shrapnelNuke, g.half_range, {speed: 5.5, reload: 0.35, size: 1.5}]),
            TYPE: "ttxBiggestShoe",
         }, }, {
         POSITION: [ 12, 14, -1.4, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.icbm = {
   PARENT: 'genericTank',
   LABEL: 'ICBM',
   BODY: {
        ACCELERATION: base.ACCEL * 0.8,
        SPEED: base.SPEED * 0.825,
        FOV: 1.2
   },
   GUNS: [ {
         POSITION: [ 19.5, 7, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.faster, g.shrapnelNuke, g.double_size, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 9.5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.faster, g.shrapnelNuke]),
            TYPE: "icbmShoe",
         }, }, {
         POSITION: [ 8, 9.5, -1.4, 5, 0, 0, 0, ],
         }, {
         POSITION: [ 11.12, 9.5, -1.4, 5, 0, -180, 0, ],
         }, 
     ],
};
Class.shotgun = {
    PARENT: "genericTank",
    LABEL: "Shotgun",
    DANGER: 7,
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

// Destroyer upgrades
Class.annihilator = {
    PARENT: "genericTank",
    LABEL: "Annihilator",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.annihilatorSigma = {
    PARENT: "genericTank",
    LABEL: "that one sigma kids on anni",
    DANGER: 7,
    TURRETS: [
        {
            POSITION: [11.5, 0, 0, 0, 360, 1],
            TYPE: ['sigmaSymbol', { FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }] }]
        },
    ],
    GUNS: [
        {
            POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.weak]),
                TYPE: "bullet",
            },
        },
    ],
}

// Artillery upgrades
Class.mortar = {
    PARENT: "genericTank",
    LABEL: "Mortar",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [13, 3, 1, 0, -8, -7, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [13, 3, 1, 0, 8, 7, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
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
    ],
}
Class.ordnance = {
    PARENT: "genericTank",
    LABEL: "Ordnance",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [17, 3, 1, 0, -5.75, -6, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 5.75, 6, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 11, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet",
            },
        },
    ],
}
Class.beekeeper = {
    PARENT: "genericTank",
    LABEL: "Beekeeper",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [14, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bee]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [14, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bee]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
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
    ],
}
Class.fieldGun = {
    PARENT: "genericTank",
    LABEL: "Field Gun",
    BODY: {
        FOV: base.FOV * 1.1,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [15, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [15, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery]),
                TYPE: "minimissile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}

// Launcher upgrades
Class.skimmer = {
    PARENT: "genericTank",
    LABEL: "Skimmer",
    DANGER: 7,
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer]),
                TYPE: "missile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}
Class.halloweenSkimmer = {
   PARENT: 'genericTank',
   LABEL: 'Evil Skimmer',
   DANGER: 7,
   BODY: {
        FOV: 1.15 * base.FOV,
   },
   GUNS: [ {
         POSITION: [ 10, 14, -0.5, 9, 0, 0, 0, ],
         PROPERTIES: {
            COLOR: "#4d4337",
         }, }, {
         POSITION: [ 10, 11, 0.5, 9, 0, 0, 0, ],
         PROPERTIES: {
            COLOR: "#7c664f",
         }, }, {
         POSITION: [ 17, 15, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer]),
            TYPE: ["halloweenMissile", {COLOR: "#ff9000"}],
            STAT_CALCULATOR: "sustained",
            COLOR: "#4d4337",
         }, }, {
         POSITION: [ 17, 3, 1.8, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.fake]),
            TYPE: "bullet",
            STAT_CALCULATOR: "sustained",
            COLOR: "#7c664f",
         }, }, {
         POSITION: [ 14, 17, 0.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.fake]),
            TYPE: "bullet",
            STAT_CALCULATOR: "sustained",
            COLOR: "#7c664f",
         }, },
     ],
};
Class.scorcher = {
   PARENT: 'skimmer',
   LABEL: 'Scorcher',
   GUNS: [ {
         POSITION: [ 10, 11, -0.5, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.rocketeer, g.half_half_half_range, {range: 1.5}]),
            TYPE: "scorchermissile", // LETS GOOO DESTROY EVERYTHING!!!!!!!!!
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 16, 17, 0.65, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.skidder = {
   PARENT: 'skimmer',
   LABEL: 'Skidder',
   GUNS: [ {
         POSITION: [ 16, 5, 1, 0, -6, -7.5, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 5, 1, 0, 6, 7.5, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 10, 14, -0.5, 9, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 15, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer]),
            TYPE: "missile",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.grazer = {
   PARENT: 'skimmer',
   LABEL: 'Grazer',
   GUNS: [ {
         POSITION: [ 10, 14, -0.5, 9, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 15, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.less_reload]),
            TYPE: "grazermissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ -4, 8, 2.215, 1, -6.5, 129.5, 0, ],
         }, {
         POSITION: [ -4, 8, 2.215, 1, 6.5, -129.5, 0, ],
         }, 
     ],
};
Class.bowler = {
   PARENT: 'skimmer',
   LABEL: 'Bowler',
   GUNS: [ {
         POSITION: [ 10, 14, -0.5, 9, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 15, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.less_reload]),
            TYPE: "bowlermissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 14, 5.4, 1, 0, -4.5, 0, 0, ],
         }, {
         POSITION: [ 14, 5.4, 1, 0, 4.5, 0, 0, ],
         }, {
         POSITION: [ 11.5, 5.4, 1, 0, -4.5, 0, 0, ],
         }, {
         POSITION: [ 11.5, 5.4, 1, 0, 4.5, 0, 0, ],
         }, 
     ],
};
Class.torpedo = {
   PARENT: 'skimmer',
   LABEL: 'Torpedo',
   GUNS: [ {
         POSITION: [ 10, 14, -0.5, 9, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 15, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.less_reload]),
            TYPE: "torpedomissile",
            STAT_CALCULATOR: "sustained"
         }, }, {
         POSITION: [ 12.5, 7, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 3.5, 7, 2.1, 13.5, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.less_reload, g.fake]),
            TYPE: "torpedomissile",
            STAT_CALCULATOR: "sustained"
         }, }, 
     ],
};
Class.bazooka = {
    PARENT: "skimmer",
    LABEL: "Bazooka",
    GUNS: [
        {
            POSITION: [10, 16.5, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 17.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.half_reload, g.more_damage]),
                TYPE: "bazookamissile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}
Class.ladle = {
   PARENT: 'skimmer',
   LABEL: 'Ladle',
   GUNS: [ {
         POSITION: [ 10, 14, -0.5, 9, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 15, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.less_reload]),
            TYPE: "ladlemissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 3, 15, 1, 14, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.less_reload, g.fake]),
            TYPE: "ladlemissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 15, 3, 1, 2, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.less_reload, g.fake]),
            TYPE: "ladlemissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 1e-23, 15, 1, 14, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.less_reload, g.fake]),
            TYPE: "ladlemissile",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.hyperskimmer = {
   PARENT: 'skimmer',
   LABEL: 'Hyperskimmer',
   GUNS: [ {
         POSITION: [ 10, 14, -0.5, 9, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 7, -0.5, 9, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 15, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.less_reload]),
            TYPE: "hyperskimMissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 17, 6, 1.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.less_reload, g.fake]),
            TYPE: "bullet",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.ream = {
   PARENT: 'skimmer',
   LABEL: 'Ream',
   GUNS: [ {
         POSITION: [ 10, 14, -0.5, 9, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 15, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.less_reload]),
            TYPE: "autoskimMissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 4, 8, 1, 13, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, g.less_reload, g.fake]),
            TYPE: "bullet",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.shrapnel = {
   PARENT: 'genericTank',
   LABEL: 'Shrapnel',
   BODY: {
      FOV: base.FOV * 1.3,
   },
   GUNS: [ {
         POSITION: [ 14, 6.5, -1.4, 6, 0, 0, 0, ],
         }, {
         POSITION: [ 12, 9, -1.4, 6, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.launcher, g.shrapnel]),
            TYPE: "shrapnelBullet",
         }, }, {
         POSITION: [ 8, 10.5, -1.6, 5, 0, 0, 0, ],
         }, 
     ],
};
Class.machinetrapnnel = {
   PARENT: 'genericTank',
   LABEL: 'Machinetrapnnel',
   GUNS: [ {
         POSITION: [ 12, 11, 1.3, 11, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 15, 1.3, 24, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 12.9, -1.2, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.shrapnel]),
            TYPE: "machinetrapnnelbullet",
         }, }, {
         POSITION: [ 17, 0.06, -100, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 14, 0.2, -100, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 12, 13.5, -1.4, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.twister = {
    PARENT: "genericTank",
    LABEL: "Twister",
    TOOLTIP: "Hold right click to reverse missile rotation.",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 13, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 14, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, { reload: 4/3 }]),
                TYPE: "spinmissile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}
Class.heavyTwister = {
   PARENT: 'genericTank',
   LABEL: 'Heavy Twister',
   GUNS: [ {
         POSITION: [ 11.5, 11.5, -0.5, 9, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 13, -0.5, 9, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 14, -1.4, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.artillery, g.artillery, g.skimmer, g.more_health, { reload: 4/3 }]),
            TYPE: "hyperspinmissile",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.hyperTwister = {
   PARENT: 'genericTank',
   LABEL: 'Hyper Twister',
   GUNS: [ {
         POSITION: [ 12.5, 12.5, -0.5, 9, 0, 0, 0, ],
         }, {
         POSITION: [ 10.5, 14.5, -0.5, 9, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 17, -1.16, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.pounder, g.destroyer, g.artillery, g.artillery, g.skimmer, g.more_health, { reload: 4/3 }]),
            TYPE: "megaspinmissile",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.swarmer = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Swarmer",
    GUNS: [
        {
            POSITION: [15, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.hive]),
                TYPE: "hive",
            },
        },
        {
            POSITION: [15, 12, 1, 5, 0, 0, 0],
        },
    ],
}
Class.myriad = {
   PARENT: 'genericTank',
   LABEL: 'Myriad',
   GUNS: [ {
         POSITION: [ 19, 16.6, -1.2, 1, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.less_reload, g.hive]),
            TYPE: "myriadHive",
         }, }, {
         POSITION: [ 19, 14.6, 1, 1, 0, 0, 0, ],
         },
     ],
};
Class.hypermyriad = {
   PARENT: 'genericTank',
   LABEL: 'Hyper Myriad',
   GUNS: [ {
         POSITION: [ 19, 16.6, -1.2, 1, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.less_reload, g.hive]),
            TYPE: "hypermyriadHive",
         }, }, {
         POSITION: [ 19, 14.6, 1, 1, 0, 0, 0, ],
         }, {
         POSITION: [ 19, 10, 1, 1, 0, 0, 0, ],
         },
     ],
};
Class.rocketeer = {
    PARENT: "genericTank",
    LABEL: "Rocketeer",
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [10, 12.5, -0.7, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.rocketeer]),
                TYPE: "rocketeerMissile",
                STAT_CALCULATOR: "sustained",
            },
        },
        {
            POSITION: [17, 18, 0.65, 0, 0, 0, 0],
        },
    ],
}
Class.rocketeerNo = {
    PARENT: "rocketeer",
}
Class.hrl = {
   PARENT: 'genericTank',
   LABEL: 'Homing Rocket Launcher',
   GUNS: [ {
         POSITION: [ 12, 10, 0.86, 1, -5, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.less_reload, g.destroyer, g.launcher, g.rocketeer, {speed: 3}]),
            TYPE: "assdestroyerMissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 12, 10, 0.86, 1, 5, 52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.less_reload, g.destroyer, g.launcher, g.rocketeer, {speed: 3}]),
            TYPE: "assdestroyerMissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 12, 10, 0.86, 1, -5, -90, 0.35, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.less_reload, g.destroyer, g.launcher, g.rocketeer, {speed: 3}]),
            TYPE: "assdestroyerMissile",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 12, 10, 0.86, 1, 5, 90, 0.35, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.less_reload, g.destroyer, g.launcher, g.rocketeer, {speed: 3}]),
            TYPE: "assdestroyerMissile",
            STAT_CALCULATOR: "sustained",
         }, }, 
     ],
};
Class.fiveSider = {
   PARENT: 'genericTank',
   LABEL: '5-Sider',
   GUNS: [ {
         POSITION: [ 25, 7, -1.4, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.launcher, g.rocketeer, g.shrapnel, g.fake]),
            TYPE: "bullet",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 22, 10, -1.4, 0, 0, 0, 0.5/2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.launcher, g.rocketeer, g.shrapnel, g.fake]),
            TYPE: "bullet",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 20, 12, 1.3, 0, 0, 0, 1/2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.launcher, g.rocketeer, g.shrapnel,]),
            TYPE: "fiveSiderBullet",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 12, 14, -1.4, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.leviathan = {
    PARENT: "genericTank",
    LABEL: "Leviathan",
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [10, 14.5, -0.7, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.destroyer, g.launcher, g.rocketeer, g.half_range, { reload: 1.75}]),
                TYPE: "rocketeerMissile",
                STAT_CALCULATOR: "sustained",
            },
        },
        {
            POSITION: [17, 20, 0.65, 0, 0, 0, 0],
        },
    ],
}

// Trapper upgrades
Class.builder = {
    PARENT: "genericTank",
    LABEL: "Builder",
    DANGER: 6,
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "setTrap",
                STAT_CALCULATOR: "block"
            }
        }
    ]
}
Class.triTrapper = {
    PARENT: "genericTank",
    LABEL: "Tri-Trapper",
    DANGER: 6,
    STAT_NAMES: statnames.trap,
    GUNS: weaponArray([
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flankGuard]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ], 3)
}
Class.trapGuard = makeGuard({
    PARENT: "genericTank",
    LABEL: "Trap",
    STAT_NAMES: statnames.mixed,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
                TYPE: "bullet"
            }
        }
    ]
})
Class.peashooterPrototype = makeGuard({
   PARENT: 'genericTank',
   LABEL: 'Peashooter',
   STAT_NAMES: statnames.mixed,
   GUNS: [ {
         POSITION: [ 20, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 7, 7.5, 0.6, 7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, 
     ],
})
Class.peashooterPrototype.LABEL = ("Peashooter")

// Builder upgrades
Class.construct = { // it's "construct" and not "constructor" because "constructor" breaks things
    PARENT: "genericTank",
    LABEL: "Constructor",
    STAT_NAMES: statnames.trap,
    DANGER: 7,
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
Class.engineerExtra = {
   PARENT: 'genericTank',
   LABEL: 'Ultimate Shielder Engineer Turret',
   GUNS: [ {
         POSITION: [ 5, 13, 1, 10.5, 0, 0, 0, ],
         }, {
         POSITION: [ 3, 16, 1, 15.5, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 16, 1.3, 18, 0, 0, 0, ],
         PROPERTIES: {
            MAX_CHILDREN: 6,
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, {reload: 1.15, health: 1.35, damage: 1.1, speed: 1.25}]),
            TYPE: "pillbox",
            SYNCS_SKILLS: true,
            DESTROY_OLDEST_CHILD: true,
            STAT_CALCULATOR: "block",
         }, }, {
         POSITION: [ 5, 16, 1, 7, 0, 0, 0, ],
         }, {
         POSITION: [ 7, 7.5, 0.6, 7, 0, -150, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.flankGuard]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 7, 7.5, 0.6, 7, 0, 150, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.flankGuard]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 11.5, 6.5, 0.6, 5, 2, -145.5, 0.35, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.flankGuard, {reload: 1.15, speed: 1.65}]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 11.5, 6.5, 0.6, 5, -2, 145.5, 0.35, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.flankGuard, {reload: 1.15, speed: 1.65}]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, 
     ],
};
Class.engineer = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Engineer",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.75 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 6,
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "pillbox",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
                STAT_CALCULATOR: "block"
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
}
Class.boomer = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Boomer",
    STAT_NAMES: statnames.trap,
    FACING_TYPE: "locksFacing",
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            POSITION: [5, 10, 1, 13, 0, 0, 0],
        },
        {
            POSITION: [6, 10, -1.5, 7, 0, 0, 0],
        },
        {
            POSITION: [2, 10, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.boomerang]),
                TYPE: "boomerang",
                STAT_CALCULATOR: "block"
            },
        },
    ],
}
Class.arboomer = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Recoiler",
    STAT_NAMES: statnames.trap,
    FACING_TYPE: "locksFacing",
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            POSITION: [5, 13.5, 1, 13, 0, 0, 0],
        },
        {
            POSITION: [9, 13.5, -1.3, 4, 0, 0, 0],
        },
        {
            POSITION: [2, 13.5, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.construct, g.boomerang]),
                TYPE: "boomerang",
                STAT_CALCULATOR: "block"
            },
        },
    ],
}
Class.miniRecoiler = {
   PARENT: 'genericTank',
   LABEL: 'Mini Recoiler',
   GUNS: [ {
         POSITION: [ 5, 13.5, 1, 12.45, 0, 0, 0, ],
         }, {
         POSITION: [ 7, 13.5, -1.3, 5, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 13.5, 1.3, 18, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.pounder, g.boomerang]),
            TYPE: "boomerang",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.megaRecoiler = {
   PARENT: 'genericTank',
   LABEL: 'Mega Recoiler',
   GUNS: [ {
         POSITION: [ 12, 17.4, -1.15, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 17.4, 1, 12.45, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 17.4, 1.3, 17, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.pounder, g.destroyer, g.less_reload, g.boomerang]),
            TYPE: "boomerang",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.assembler = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: 'Assembler',
    STAT_NAMES: statnames.trap,
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

// Tri-Trapper upgrades
Class.hexaTrapper = makeAuto({
    PARENT: "genericTank",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    STAT_NAMES: statnames.trap,
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
    ], 6, 0.5),
}, "Hexa-Trapper")
Class.septaTrapper = {
    PARENT: "genericTank",
    LABEL: "Septa-Trapper",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
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
Class.architect = makeRadialAuto("architectGun", {isTurret: true, danger: 7, size: 12, label: "Architect", body: {SPEED: 1.1 * base.SPEED}})
Class.mastermind = makeRadialAuto("constructorTurret", {isTurret: true, danger: 7, size: 12, label: "Mastermind", body: {SPEED: 1.1 * base.SPEED}})
Class.originator = makeRadialAuto("engiTurret", {isTurret: true, danger: 7, size: 12, label: "Originator", body: {SPEED: 1.1 * base.SPEED}})
Class.ricochet = makeRadialAuto("boomTurret", {isTurret: true, danger: 7, size: 12, label: "Ricochet", body: {SPEED: 1.1 * base.SPEED}})
Class.artist = makeRadialAuto("forgerTurret", {isTurret: true, danger: 7, size: 12, label: "Artist", body: {SPEED: 1.1 * base.SPEED}})
Class.castleAuto = {
    PARENT: 'genericTank',
    LABEL: 'Castle',
    FACING_TYPE: ["spin", {speed: 0.02}],
    BODY: {
        SPEED: 1.1 * base.SPEED,
    },
    TURRETS: [
        {
            POSITION: [12, 8, 0, 60, 360, 0],
            TYPE: "architectGun",
        },
        {
            POSITION: [12, 8, 0, 180, 360, 0],
            TYPE: "architectGun",
        },
        {
            POSITION: [12, 8, 0, 300, 360, 0],
            TYPE: "architectGun",
        },
    ],
    GUNS: weaponArray([
         {
         POSITION: [ 7, 8, 0.6, 7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, g.carrier]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, 
     ], 3)
};
Class.inventor = makeRadialAuto("architectGun", {isTurret: true, danger: 7, size: 12, label: "Inventor", count: 7, body: {SPEED: 1.1 * base.SPEED}})
Class.designer = makeRadialAuto("architectGun", {isTurret: true, danger: 7, size: 12, label: "Designer", count: 6, body: {SPEED: 1.1 * base.SPEED}})
Class.designer.TURRETS.push(
        {
            POSITION: [10, 0, 0, 0, 180, 1],
            TYPE: ["autoTurret", {INDEPENDENT: true, COLOR: 16}],
        },
)
Class.architectGuard = {
   PARENT: 'genericTank',
   LABEL: 'Architect Guard',
   TURRETS: [
        {
            POSITION: [12, 8, 0, 90, 180, 0],
            TYPE: "architectGun",
        },
        {
            POSITION: [12, 8, 0, 180, 180, 0],
            TYPE: "architectGun",
        },
        {
            POSITION: [12, 8, 0, 270, 180, 0],
            TYPE: "architectGun",
        },
   ],
   GUNS: [ {
         POSITION: [ 18, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, 
     ],
};

// Trap Guard upgrades
Class.nailer = makeConq("nailgun", "Nailer")
Class.bushwhacker = makeGuard("sniper", "Bushwhacker")
Class.guardianTank = makeGuard("hunter", "Guardian")
Class.trooper = makeGuard("puntgun", "Trooper")
Class.custodian = makeGuard("single", "Custodian")
Class.gunnerTrapper = {
    PARENT: "genericTank",
    LABEL: "Gunner Trapper",
    DANGER: 7,
    STAT_NAMES: statnames.mixed,
    BODY: {
        FOV: 1.25 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { recoil: 4 }, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { recoil: 4 }, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [13, 11, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 11, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, { speed: 1.2 }, { recoil: 0.5 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}
Class.bomber = {
    PARENT: "genericTank",
    LABEL: "Bomber",
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 130, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle]),
                TYPE: "bullet",
                LABEL: "Wing",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 230, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle]),
                TYPE: "bullet",
                LABEL: "Wing",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}
Class.conqueror = {
    PARENT: "genericTank",
    DANGER: 7,
    LABEL: "Conqueror",
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    REVERSE_TARGET_WITH_TANK: true,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap]),
                TYPE: "setTrap",
                STAT_CALCULATOR: "block"
            },
        },
    ],
}
Class.bulwark = {
    PARENT: "genericTank",
    LABEL: "Bulwark",
    STAT_NAMES: statnames.mixed,
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 8, 1, 0, 5.5, 185, 0],
        },
        {
            POSITION: [3, 9, 1.5, 14, 5.5, 185, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
        {
            POSITION: [14, 8, 1, 0, -5.5, 175, 0],
        },
        {
            POSITION: [3, 9, 1.5, 14, -5.5, 175, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}

// Desmos upgrades
Class.helix = {
    PARENT: "genericTank",
    LABEL: "Helix",
    DANGER: 6,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 6, -4/3, 0, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            },
        },
        {
            POSITION: [20, 6, -4/3, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: true}]]}]
            },
        },
        {
            POSITION: [3.625, 7.5, 2.75, 5.75, -6.75, 90, 0],
        },
        {
            POSITION: [3.625, 7.5, 2.75, 5.75, 6.75, -90, 0],
        },
        {
            POSITION: [6, 8, 0.25, 10.5, 0, 0, 0],
        },
    ],
}
Class.sidewinder = {
    PARENT: "genericTank",
    LABEL: "Sidewinder",
    DANGER: 6,
    STAT_NAMES: statnames.desmos,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    GUNS: [
        {
            POSITION: [10, 8.5, 1.4, 7, 0, 0, 0]
        },
        {
            POSITION: [20, 8, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [4.25, 11, 2, 2.25, -4.25, 92.5, 0]
        },
        {
            POSITION: [4.25, 11, 2, 2.25, 4.25, -92.5, 0]
        }
    ]
}
Class.undertow = {
    PARENT: "genericTank",
    LABEL: "Undertow",
    DANGER: 6,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    GUNS: [
        {
            POSITION: [14, 12, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, { reload: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [11.25, 8, 0.15, 4.25, 4, 13.5, 0]
        },
        {
            POSITION: [11.25, 8, 0.15, 4.25, -4, -13.5, 0]
        }
    ]
}
Class.repeater = {
    PARENT: "genericTank",
    LABEL: "Repeater",
    GUNS: [
        {
            POSITION: [20, 10, 0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["splitterBullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [4.625, 9.5, 2, 0.375, -8, 91.5, 0]
        },
        {
            POSITION: [4.625, 9.5, 2, 0.375, 8, -91.5, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, -4.75, 50, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, 4.75, -50, 0]
        }
    ]
}

// Helix upgrades
Class.triplex = {
    PARENT: "genericTank",
    LABEL: "Triplex",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [18, 7, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, {speed: 1.25, maxSpeed: 1.25}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 7, -4/3, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            },
        },
        {
            POSITION: [18, 7, -4/3, 0, 0, -45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: true}]]}]
            },
        },
        {
            POSITION: [3.75, 10, 2.125, 1, -4.25, 10, 0],
        },
        {
            POSITION: [3.75, 10, 2.125, 1, 4.25, -10, 0],
        },
        {
            POSITION: [5, 6, 0.5, 10.5, 0, 22.5, 0],
        },
        {
            POSITION: [5, 6, 0.5, 10.5, 0, -22.5, 0],
        },
    ],
}
Class.quadruplex = {
    PARENT: "genericTank",
    LABEL: "Quadruplex",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 8, -4/3, 0, 0, 45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, { reload: 2 }]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: true, amplitude: 180, yOffset: 50}]]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, 135, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, -45, 0]
        },
        {
            POSITION: [20, 8, -4/3, 0, 0, -45, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, { reload: 2 }]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: false, amplitude: 180, yOffset: -50}]]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, 45, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, -135, 0]
        },
        {
            POSITION: [20, 8, -4/3, 0, 0, 135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, { reload: 2 }]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: false, amplitude: 180, yOffset: 50}]]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, -135, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, 45, 0]
        },
        {
            POSITION: [20, 8, -4/3, 0, 0, -135, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.twin, { reload: 2 }]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: true, amplitude: 180, yOffset: -50}]]}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, -45, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, 135, 0]
        },
    ],
}

// Sidewinder upgrades
Class.coil = {
    PARENT: "genericTank",
    LABEL: "Coil",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    GUNS: [
        {
            POSITION: [20, 8, 0.75, 0, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: [["snake", {invert: false}]]}]
            },
        },
        {
            POSITION: [20, 8, 0.75, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: [["snake", {invert: true}]]}]
            },
        },
        {
            POSITION: [21, 4, 0.75, 0, -5, 0, 0]
        },
        {
            POSITION: [21, 4, 0.75, 0, 5, 0, 0]
        },
        {
            POSITION: [3.625, 7.5, 2.75, 5.75, -6.75, 90, 0],
        },
        {
            POSITION: [3.625, 7.5, 2.75, 5.75, 6.75, -90, 0],
        },
        {
            POSITION: [6, 8, 0.25, 10.5, 0, 0, 0],
        }
    ]
}
Class.python = {
    PARENT: "genericTank",
    LABEL: "Python",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank is a placeholder!"
}
Class.ranch = {
    PARENT: "genericTank",
    LABEL: "Ranch",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
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
                MAX_CHILDREN: 3,
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
        {
            POSITION: [5, 7.5, 2.5, 1, -4.5, 95, 0],
        },
        {
            POSITION: [5, 7.5, 2.5, 1, 4.5, -95, 0],
        },
    ],
}
Class.oroboros = {
    PARENT: "genericTank",
    LABEL: "Oroboros",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank is a placeholder!"
}
Class.cocciPart1 = {
    PARENT: "genericSmasher",
    LABEL: "",
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [20, -22, 0, 0, 90/4, 0],
            TYPE: "smasher",
            VULNERABLE: true
        },
    ]
}
Class.cocciPart2 = {
    PARENT: "genericSmasher",
    LABEL: "",
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [20, -22, 0, 0, 90/3, 0],
            TYPE: "cocciPart1",
            VULNERABLE: true
        },
    ]
}
Class.cocciPart3 = {
    PARENT: "genericSmasher",
    LABEL: "",
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [20, -22, 0, 0, 90/2, 0],
            TYPE: "cocciPart2",
            VULNERABLE: true
        },
    ]
}
Class.cocci = {
    PARENT: "genericSmasher",
    LABEL: "Cocci",
    UPGRADE_TOOLTIP: "[DEV NOTE] this is a very early prototype and probably won't work so well lol",
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        },
        {
            POSITION: [20, -22, 0, 0, 90, 0],
            TYPE: "cocciPart3",
            VULNERABLE: true
        }
    ]
}

// Undertow upgrades
Class.riptide = {
    PARENT: "genericTank",
    LABEL: "Riptide",
    DANGER: 7,
    UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    GUNS: [
        {
            POSITION: [6.5, 23.5, 0.25, 3, 0, 180, 0],
        },
        {
            POSITION: [18, 16, 0.75, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, { size: 0.9, reload: 1.2 }]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [17, 16, 0.1, 0.25, 4, 13.5, 0]
        },
        {
            POSITION: [17, 16, 0.1, 0.25, -4, -13.5, 0]
        }
    ]
}

// Repeater upgrades
Class.iterator = {
    PARENT: "genericTank",
    LABEL: "Iterator",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [22, 8, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
                TYPE: ["superSplitterBullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [4.625, 10.5, 2.75, 0.375, -7, 91.5, 0]
        },
        {
            POSITION: [4.625, 10.5, 2.75, 0.375, 7, -91.5, 0]
        },
        {
            POSITION: [4, 9, 3, 1.5, -5, 95, 0]
        },
        {
            POSITION: [4, 9, 3, 1.5, 5, -95, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, -1.5, -5.25, 50, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, -1.5, 5.25, -50, 0]
        }
    ]
}
Class.duplicator = {
    PARENT: "genericTank",
    LABEL: "Duplicator",
    DANGER: 7,
    STAT_NAMES: statnames.desmos,
    GUNS: [
        {
            POSITION: [20, 8, -4/3, 0, 0, 20, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["splitterBullet", {CONTROLLERS: [["snake", {invert: false}]]}]
            }
        },
        {
            POSITION: [20, 8, -4/3, 0, 0, -20, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.desmos]),
                TYPE: ["splitterBullet", {CONTROLLERS: [["snake", {invert: true}]]}]
            }
        },
        {
            POSITION: [5.625, 9.5, 2, 0.375-1, -8, 111.5, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, 4.75, -30, 0]
        },
        {
            POSITION: [5.625, 9.5, 2, 0.375-1, 8, -111.5, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0, -4.75, 30, 0]
        },
        {
            POSITION: [17, 8, 0.65, 0, 0, 0, 0]
        },
        {
            POSITION: [18, 8, 0.25, 0, 0, 0, 0]
        },
    ]
}

// Smasher upgrades
Class.megaSmasher = {
    PARENT: "genericSmasher",
    LABEL: "Mega-Smasher",
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
Class.spike = {
    PARENT: "genericSmasher",
    LABEL: "Spike",
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
Class.sharpspike = {
    PARENT: "genericSmasher",
    LABEL: "Sharp Spike",
    BODY: {
        SPEED: base.SPEED * 1.1,
        DAMAGE: base.DAMAGE * 1.3,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "sharpBody",
        },
        {
            POSITION: [20, 0, 0, 45, 360, 0],
            TYPE: "sharpBody",
        },
    ],
}
Class.omegaSpike = {
    PARENT: "genericSmasher",
    LABEL: "Omega Spike",
    BODY: {
        SPEED: base.SPEED * 0.9,
        DAMAGE: base.DAMAGE * 1.1,
    },
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: ['omegaSymbol', { FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }] }]
        },
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
Class.landmine = {
    PARENT: "genericSmasher",
    LABEL: "Landmine",
    INVISIBLE: [0.06, 0.01],
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
Class.dominatorSpawner = {
    PARENT: "genericTank",
    LABEL: "Dominator Spawner",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 1.2,
        FOV: 2.1,
    },
    GUNS: [
        {
            POSITION: [4.5, 63, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 65, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "gunnerDominatorMinion",
                STAT_CALCULATOR: "drone",
                AUTOFIRE: false,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [1, 65, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "gunnerDominatorMinion2",
                STAT_CALCULATOR: "drone",
                AUTOFIRE: false,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [1, 65, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "gunnerDominatorMinion3",
                STAT_CALCULATOR: "drone",
                AUTOFIRE: false,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [1, 65, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "baseProtectorMinion",
                STAT_CALCULATOR: "drone",
                AUTOFIRE: false,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 65, 1, 0, 0, 0, 0],
        },
    ],
}
Class.shurikenn = {
   PARENT: 'genericTank',
   LABEL: 'Shurikenn',
   DANGER: 7,
   GUNS: [ {
         POSITION: [ 29, 12, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 29, 12, 1, 0, 0, -90, 0.03, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 29, 12, 1, 0, 0, 180, 0.06, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 29, 12, 1, 0, 0, 90, 0.09, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 5, 12, 1.5, 18, 0, 0, 0.01, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 5, 12, 1.5, 18, 0, -90, 0.02, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 5, 12, 1.5, 18, 0, -180, 0.03, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 5, 12, 1.5, 18, 0, 90, 0.04, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
         }, }, 
     ],
};
Class.mega = {
   PARENT: 'genericTank',
   LABEL: 'Mega',
   DANGER: 6,
   GUNS: [ {
         POSITION: [ 18, 8, 1, 0, 0, -150, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 8, 1, 0, 0, -135, 0.1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 8, 1, 0, 0, 150, 0.1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 8, 1, 0, 0, 135, 0.1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 20, 1, 0, 0, 0, 0.1, ],
         }, {
         POSITION: [ 4, 15, 1, 16, 0, 0, 0.1, ],
         }, {
         POSITION: [ 5, 20, 1.5, 19, 0, 0, 0, ],
         PROPERTIES: {
            MAX_CHILDREN: 26,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.streamliner]),
            TYPE: "autoConstructtMinion",
            STAT_CALCULATOR: "drone",
            SYNCS_SKILLS: true,
         }, }, 
     ],
};
Class.trapShooter = {
   PARENT: 'genericTank',
   LABEL: 'Trap Shooter',
   SHAPE: -3,
   GUNS: [ {
         POSITION: [ 10, 8, 1, 0, 0, -60, 0, ],
         }, {
         POSITION: [ 10, 8, 1, 0, 0, 60, 0, ],
         }, {
         POSITION: [ 10, 8, 1, 0, 0, -180, 0, ],
         }, {
         POSITION: [ 4, 8, 1.5, 10, 0, -60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.streamliner, g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 4, 8, 1.5, 10, 0, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.streamliner, g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 4, 8, 1.5, 10, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.streamliner, g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.blockShooter = {
   PARENT: 'genericTank',
   LABEL: 'Block Shooter',
   SHAPE: -4,
   GUNS: [ {
         POSITION: [ 18, 11, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 18, 11, 1, 0, 0, -90, 0, ],
         }, {
         POSITION: [ 18, 11, 1, 0, 0, -180, 0, ],
         }, {
         POSITION: [ 18, 11, 1, 0, 0, 90, 0, ],
         }, {
         POSITION: [ 3, 11, 1.5, 19, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.streamliner]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block"
         }, }, {
         POSITION: [ 3, 11, 1.5, 19, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.streamliner]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block"
         }, }, {
         POSITION: [ 3, 11, 1.5, 19, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.streamliner]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block"
         }, }, {
         POSITION: [ 3, 11, 1.5, 19, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.streamliner]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block"
         }, }, 
     ],
};
Class.boomerangShooter = {
   PARENT: 'genericTank',
   LABEL: 'Boomerang Shooter',
   SHAPE: -5,
   GUNS: [ {
         POSITION: [ 13, 6, -2, 0, 0, -37.5, 0, ],
         }, {
         POSITION: [ 13, 6, -2, 0, 0, -112.5, 0, ],
         }, {
         POSITION: [ 13, 6, -2, 0, 0, 180, 0, ],
         }, {
         POSITION: [ 13, 6, -2, 0, 0, 112.5, 0, ],
         }, {
         POSITION: [ 13, 6, -2, 0, 0, 30, 0, ],
         }, {
         POSITION: [ 3, 6, 1, 14, 0, -37.5, 0, ],
         }, {
         POSITION: [ 3, 6, 1, 14, 0, -112.5, 0, ],
         }, {
         POSITION: [ 3, 6, 1, 14, 0, -180, 0, ],
         }, {
         POSITION: [ 3, 6, 1, 14, 0, 112.5, 0, ],
         }, {
         POSITION: [ 3, 6, 1, 14, 0, 30, 0, ],
         }, {
         POSITION: [ 3, 6, 1.5, 18, 0, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.boomerang]),
            TYPE: "boomerang",
            STAT_CALCULATOR: "block"
         }, }, {
         POSITION: [ 3, 6, 1.5, 18, 0, -112.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.boomerang]),
            TYPE: "boomerang",
            STAT_CALCULATOR: "block"
         }, }, {
         POSITION: [ 3, 6, 1.5, 18, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.boomerang]),
            TYPE: "boomerang",
            STAT_CALCULATOR: "block"
         }, }, {
         POSITION: [ 3, 6, 1.5, 18, 0, 112.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.boomerang]),
            TYPE: "boomerang",
            STAT_CALCULATOR: "block"
         }, }, {
         POSITION: [ 3, 6, 1.5, 18, 0, 30, 0, ],
         PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.boomerang]),
             TYPE: "boomerang",
             STAT_CALCULATOR: "block"
         }, }, 
     ],
};
Class.anActualRecoiler = {
   PARENT: "genericTank",
   LABEL: "an actual RECOILER",
   GUNS: [ {
         POSITION: [ 9, 8, 5, -6, 0, 0, 0, ],
         }, {
         POSITION: [ 12, 31, -1.3, 3, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 31, 1, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 31, 1.5, 25, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.boomerang, g.trap, g.setTrap, g.destroyerDominator]),
            TYPE: "boomerang",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.meDoingYourMomButItsReal = {
   PARENT: "genericTank",
   LABEL: "me doing your mom but its real",
   BODY: {
      FOV: base.FOV * 4.5,
   },
   GUNS: [ {
         POSITION: [ 15, 8, -2, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 250, 8, 1, 16, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.assassin, g.annihilator]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.randomAssTanks = {
   PARENT: "genericTank",
   LABEL: "random ass tanks",
   SHAPE: 6,
   SIZE: 29,
   GUNS: [ {
         POSITION: [ 4, 6, 7, -4, 0, 0, 0, ],
         }, {
         POSITION: [ 14, 6, 1, 0.5, -18, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 6, 1, 0.5, 18, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 13, 6, -3, 0.5, 0, 0, 0, ],
         }, {
         POSITION: [ 21, 6, 1, 14, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.mutatedRanger = {
   PARENT: 'genericTank',
   LABEL: 'mutated ranger',
   BODY: {
      FOV: base.FOV * 1.5,
   },
   GUNS: [ {
         POSITION: [ 15, 8, -2, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 15, 8, -2, 0, 0, -52.5, 0, ],
         }, {
         POSITION: [ 20, 8, -2, 0, 0, -172.5, 0, ],
         }, {
         POSITION: [ 13, 10, -2, 0, 0, 105, 0, ],
         }, {
         POSITION: [ 50, 10, 1, 14, 0, 105, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "casing",
         }, }, {
         POSITION: [ 3, 8, 1, 20, 0, -172.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.streamliner, g.destroyer]),
            TYPE: "bee",
         }, }, {
         POSITION: [ 5, 8, 1.3, 16, 0, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.shotgun, g.machineGun, g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 5, 8, 1.3, 16, 0, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.shotgun, g.machineGun, g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 5, 8, 1.3, 16, 0, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.shotgun, g.machineGun, g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 5, 8, 1.3, 16, 0, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.shotgun, g.machineGun, g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 5, 8, 1.3, 16, 0, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.shotgun, g.machineGun, g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 5, 8, 1.3, 16, 0, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.shotgun, g.machineGun, g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 5, 8, 1.3, 16, 0, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.shotgun, g.machineGun, g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 5, 8, 1.3, 16, 0, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.shotgun, g.machineGun, g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 8, 1, 16, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.assassin]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.anActualConstruct = {
   PARENT: 'genericTank',
   LABEL: 'an actual CONSTRUCTOR',
   GUNS: [ {
         POSITION: [ 6, 21, 3, -6, 0, 0, 0, ],
         }, {
         POSITION: [ 31, 63, 1, 1, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 63, 1.2, 32, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.construct, g.destroyerDominator]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.anActualMegaTrap = {
   PARENT: 'genericTank',
   LABEL: 'go eat ur shit bro',
   SHAPE: 4,
   SIZE: 30,
   GUNS: [ {
         POSITION: [ 15, 14, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 15, 14, 1, 0, 0, -90, 0, ],
         }, {
         POSITION: [ 15, 14, 1, 0, 0, 180, 0, ],
         }, {
         POSITION: [ 15, 14, 1, 0, 0, 90, 0, ],
         }, {
         POSITION: [ 2, 14, 1.3, 15, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.construct, g.destroyerDominator]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, {
         POSITION: [ 2, 14, 1.3, 15, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.construct, g.destroyerDominator]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, {
         POSITION: [ 2, 14, 1.3, 15, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.construct, g.destroyerDominator]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, {
         POSITION: [ 2, 14, 1.3, 15, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.construct, g.destroyerDominator]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.nowMeDoingYourMoms = {
   PARENT: 'genericTank',
   LABEL: 'now me doing your moms',
   SIZE: 20,
   MAX_CHILDREN: 13,
   COLOR: 8,
   BODY: {
      FOV: base.FOV * 2,
   },
   GUNS: [ {
         POSITION: [ 15, 13, -1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 300, 13, 1, 14.5, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.machineGun]),
            TYPE: "boosterMinion",
         }, }, 
     ],
};
Class.heyWhatIsThis = {
   PARENT: 'genericTank',
   LABEL: 'hey what is this',
   GUNS: [ {
         POSITION: [ 52, 11, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.assassin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 14, -2, 40, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
            TYPE: ["bullet", {CONTROLLERS: ['snake']}]
         }, }, {
         POSITION: [ 6, 11, -2, 33, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
            TYPE: ["bullet", {CONTROLLERS: ['snake']}]
         }, }, {
         POSITION: [ 6, 7, -2, 26, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.desmos]),
            TYPE: ["bullet", {CONTROLLERS: ['snake']}]
         }, }, {
         POSITION: [ 6, 30, 2, -8, 0, 0, 0, ],
         }, {
         POSITION: [ 8, 11, 1, -1, -20, 0, 0, ],
         }, {
         POSITION: [ 8, 11, 1, -1, 20, 0, 0, ],
         }, {
         POSITION: [ 4, 11, 1.5, 7, 20, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 4, 11, 1.5, 7, -20, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
         }, }, 
     ],
};
Class.someRandomAssSpamer = {
   PARENT: 'genericTank',
   LABEL: 'some random ass spamer',
   GUNS: [ {
         POSITION: [ 27, 3, 1, -10, -40, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 27, 3, 1, -10, 40, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 29, 3, 1, -10, 35, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 29, 3, 1, -10, -35, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 31, 3, 1, -10, -30, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 31, 3, 1, -10, 30, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 33, 3, 1, -10, 25, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 33, 3, 1, -10, -25, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 35, 3, 1, -10, -20, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 35, 3, 1, -10, 20, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 37, 3, 1, -10, 15, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 37, 3, 1, -10, -15, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 39, 3, 1, -10, -10, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 39, 3, 1, -10, 10, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 39, 3, 1, -10, 5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 39, 3, 1, -10, -5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 41, 3, 1, -10, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 41, 12, 1, -10, -49, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 41, 12, 1, -10, 49, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 16, 1, -10, 64, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 16, 1, -10, -64, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 16, 1, -10, -64, 7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 16, 1, -10, -64, 15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 16, 1, -10, -64, 22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 16, 1, -10, -64, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 16, 1, -10, 64, -7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 16, 1, -10, 64, -15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 16, 1, -10, 64, -22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 16, 1, -10, 64, -30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 4, 1, -10, 64, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 4, 1, -10, 64, -7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 4, 1, -10, 64, -15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 4, 1, -10, 64, -22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 4, 1, -10, 64, -30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 4, 1, -10, -64, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 4, 1, -10, -64, 7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 4, 1, -10, -64, 15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 4, 1, -10, -64, 22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 52, 4, 1, -10, -64, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, 7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, 15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, 22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, 37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, 52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, 67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, -7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, -15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, -22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, -30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, -60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, -67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 75, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -75, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 82.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -82.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 75, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -75, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, 64, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 4, 1, -10, -64, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 11, 1, -10, 64, -67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 11, 1, -10, -64, 67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 16, 1, -10, 64, -60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 16, 1, -10, -64, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.fuckingkillyourself = {
   PARENT: 'genericTank',
   LABEL: 'Fuckingkillyourself',
   MAX_CHILDREN: 60,
   GUNS: [ {
         POSITION: [ 18, 3, 1, 0, -40, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 3, 1, 0, 40, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 3, 1, 0, -35, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 3, 1, 0, 35, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 3, 1, 0, -30, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 3, 1, 0, 30, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 24, 3, 1, 0, -25, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 24, 3, 1, 0, 25, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 26, 3, 1, 0, -20, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 26, 3, 1, 0, 20, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 28, 3, 1, 0, -15, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 28, 3, 1, 0, 15, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 30, 3, 1, 0, -10, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 30, 3, 1, 0, 10, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 32, 3, 1, 0, -5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 32, 3, 1, 0, 5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 32, 3, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 32, 3, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -105, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 105, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -112.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 112.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -127.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 127.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -142.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 142.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -150, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 150, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -157.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 157.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -165, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 165, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -172.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 172.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -82.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 82.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -75, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 75, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, -7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 1, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "autosunchip",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "autosunchip",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, -7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "autosunchip",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, 7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "autosunchip",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, -15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "autosunchip",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, 15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "autosunchip",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, -22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "missile",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, 22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "missile",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "hypermissile",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, 37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "hypermissile",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "hive",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "hive",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "pillbox",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, 52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "pillbox",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, -60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "turretedDrone",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "turretedDrone",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, 97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, -97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, 82.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, -82.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, 75, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, -75, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, 67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, -67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, -60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, 52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, 37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, -30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, 22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, -22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, 15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, -15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, -61, 7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 32, 13, 1, -39, 61, -7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "minion",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, -7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, 7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, -15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, 15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, -22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, 22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, -30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, 37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -60, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 75, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -75, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 82.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -82.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 105, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -105, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 112.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -112.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 127.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -127.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, -20, 135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 0, 0, 1, -20, 20, -135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "swarm",
         }, }, {
         POSITION: [ 5, 5, 1, -29, -29, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, 29, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, -29, -7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, 29, 7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, -29, -15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, 29, 15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, -29, -22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, 29, 22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, -29, -30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, 29, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, -29, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, 29, 37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, -29, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, 29, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, -29, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, 29, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, -29, 97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, 29, -97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, -29, 105, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, 29, -105, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, -29, 112.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, 29, -112.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, -29, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, 29, -120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, -29, 127.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, 29, -127.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, -29, 135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, {
         POSITION: [ 5, 5, 1, -29, 29, -135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.destroyerDominator]),
            TYPE: "flare",
         }, }, 
     ],
};
Class.kysKysKysKysKysFuckingKys = {
   PARENT: 'genericTank',
   LABEL: 'kys kys kys kys kys fucking kys',
   GUNS: [ {
         POSITION: [ 19, 12, -1.5, -3, 0, 0, 0, ],
         }, {
         POSITION: [ 6, 12, 1.5, 17, 0, 0, 0, ],
         }, {
         POSITION: [ 8, 18, 1, 24, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.hive]),
            TYPE: "megaswarmer",
         }, }, 
     ],
};
Class.realCrowbar = {
   PARENT: "genericTank",
   LABEL: "Real Crowbar",
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
Class.crowbarHT = {
   PARENT: "genericTank",
   LABEL: "Crowbar Heavy Twin",
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
            TYPE: [ "autoDestroyerTwin", { GUN_STAT_SCALE: g.twin, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 28, 0, 0, 360, 1],
            TYPE: [ "autoDestroyerTwin", { GUN_STAT_SCALE: g.twin, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 18, 0, 0, 360, 1],
            TYPE: [ "autoDestroyerTwin", { GUN_STAT_SCALE: g.twin, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        },
    ],
},
Class.carrierCrowbar = {
   PARENT: "genericTank",
   LABEL: "Battleship Crowbar",
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
            TYPE: [ "autoBattleshipTurret", { GUN_STAT_SCALE: g.battleship, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 28, 0, 0, 360, 1],
            TYPE: [ "autoBattleshipTurret", { GUN_STAT_SCALE: g.battleship, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 18, 0, 0, 360, 1],
            TYPE: [ "autoBattleshipTurret", { GUN_STAT_SCALE: g.battleship, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        },
    ],
},
Class.crowbarSpawner = {
   PARENT: 'genericTank',
   LABEL: 'Crowbar Spawner',
   DANGER: 7,
   SIZE: 30,
   BODY: {
      FOV: base.FOV * 3.2,
   },
   MAX_CHILDREN: 12,
   GUNS: [ {
         POSITION: [ 52, 13, 1, 17, 0, 0, 0, ],
         }, {
         POSITION: [ 15, 14, -1.4, 3, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 8, 1, 69.8, 0, 0, 0, ],
         }, {
         POSITION: [ 7, 13, 1, 73.8, 0, 0, 0, ],
         PROPERTIES: {
         SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
         TYPE: "realCrowbarMinion",
         STAT_CALCULATOR: "drone",
         SYNCS_SKILLS: true,
         }, }, 
     ],
};
Class.compass = {
   PARENT: 'genericTank',
   LABEL: 'Compass',
   GUNS: [ {
         POSITION: [ 70, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 4, 1, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 4, 1, -4, -5, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 4, 1, -4, 5, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4, 8, 1.5, 14, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 4, 8, 1.5, 22, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 4, 8, 1.5, 30, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 4, 8, 1.5, 38, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 4, 8, 1.5, 46, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 4, 8, 1.5, 54, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 4, 8, 1.5, 62, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.minigun, { range: 0.5 }]),
            TYPE: "trap",
         }, }, 
     ],
};
Class.sniperTrapper = {
   PARENT: 'genericTank',
   LABEL: 'Sniper Trapper',
   GUNS: [ {
         POSITION: [ 27, 8, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 6, 8, 2, 27, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.trap]),
            TYPE: "trap",
         }, }, 
     ],
};
Class.assassinTrapper = {
   PARENT: 'genericTank',
   LABEL: 'Assassin Trapper',
   GUNS: [ {
         POSITION: [ 37, 8, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 15, 8, -2, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 8, 2, 38, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.assassin, g.trap, g.sniper, g.basic]),
            TYPE: "trap",
         }, }, 
     ],
};
Class.rangerTrapper = {
   PARENT: 'genericTank',
   LABEL: 'Ranger Trapper',
   GUNS: [ {
         POSITION: [ 48, 8, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 15, 8, -2, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 8, 2, 49, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.assassinBuilder = {
   PARENT: 'genericTank',
   LABEL: 'Assassin Builder',
   GUNS: [ {
         POSITION: [ 35, 12, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 15, 12, -1.7, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 12, 1.5, 36, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.assassin, g.trap, g.setTrap]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.sniperConstruct = {
   PARENT: 'genericTank',
   LABEL: 'Sniper Constructor',
   GUNS: [ {
         POSITION: [ 30, 17, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 17, 1.5, 31, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sniper, g.construct, g.trap, g.setTrap]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.actualFortress = {
   PARENT: 'genericTank',
   LABEL: 'Actual Fortress',
   GUNS: [ {
         POSITION: [ 14, 10, 1.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
         }, }, {
         POSITION: [ 14, 10, 1.5, 0, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
         }, }, {
         POSITION: [ 14, 10, 1.5, 0, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
         }, }, {
         POSITION: [ 14, 10, 1.5, 0, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
         }, }, {
         POSITION: [ 18, 8, 1, 0, 0, -45, 0, ],
         }, {
         POSITION: [ 18, 8, 1, 0, 0, -135, 0, ],
         }, {
         POSITION: [ 18, 8, 1, 0, 0, 135, 0, ],
         }, {
         POSITION: [ 18, 8, 1, 0, 0, 45, 0, ],
         }, {
         POSITION: [ 5, 8, 2, 19, 0, -45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 5, 8, 2, 19, 0, -135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 5, 8, 2, 19, 0, 135, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.trap]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 5, 8, 2, 19, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.trap]),
            TYPE: "trap",
         }, }, 
     ],
};
Class.syringe = {
   PARENT: 'genericTank',
   LABEL: 'Syringe',
   SIZE: 17,
   GUNS: [ {
         POSITION: [ 70, 5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 65, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 60, 14, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 55, 18, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 50, 22, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 45, 26, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.hunterSecondary, g.hunterSecondary, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 30, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.hunterSecondary, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 35, 34, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunterSecondary, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 30, 38, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.predator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 12.5, 3, -6, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 11, 3, -9, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 8, 3, -13, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 3, -17, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 3, -19, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 3, -21, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 3, -23, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 3, -25, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 14, 3, -28, 0, 0, 0, ],
         }, 
     ],
};
Class.megaMono = {
   PARENT: 'genericTank',
   LABEL: 'Mega-Mono',
   GUNS: [ {
         POSITION: [ 15, 20, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 7, 13, -1.5, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 8, 13, -1, 23, 0, 0, 0, ],
         }, {
         POSITION: [ 8, 9, -1.5, 31, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 9, 1, 39, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.single, g.destroyer, g.annihilator]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.theWall = {
   PARENT: 'genericTank',
   LABEL: 'The Wall',
   GUNS: [ {
         POSITION: [ 46, 19, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 19, 1.5, 47, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.construct]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, {
         POSITION: [ 4, 19, 1.5, 35, 0, 0, 0.1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.construct]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, {
         POSITION: [ 4, 19, 1.5, 23, 0, 0, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.construct]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.colibri = {
   PARENT: 'genericTank',
   LABEL: 'Colibri',
   GUNS: [ {
         POSITION: [ 16, 8, 1, 0, 0, -157.5, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weak, g.flankGuard, g.triAngle, g.weakThruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 8, 1, 0, 0, 157.5, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weak, g.flankGuard, g.triAngle, g.weakThruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 8, 1, 0, 0, -180, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weak, g.flankGuard, g.triAngle, g.weakThruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 4, 1, 0, -3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 4, 1, 0, 3, 0, 0.08, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 5, 1, 0, 0, 0, 0.17, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 13, 12, -1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 9, 3, 1, -1, 15, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 9, 3, 1, -1, 23, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 9, 3, 1, -1, -23, 180, 0.1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 9, 3, 1, -1, -15, -180, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 2, 32.6, -1.5, 1, 0, 0, 0.3, ],
         }, 
     ],
};
Class.anActualBiggestMac = {
   PARENT: 'genericTank',
   LABEL: 'an actual BIGGEST MAC',
   GUNS: [ {
         POSITION: [ 2, 16, 5, -3, 0, 0, 0, ],
         }, {
         POSITION: [ 37, 80, 1, -1, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.annihilator, g.destroyer, g.pounder, g.realAnnihilator]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.annihiliner = {
   PARENT: 'genericTank',
   LABEL: 'Annihiliner',
   GUNS: [ {
         POSITION: [ 115, 20, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 110, 20, 1, 0, 0, 0, 0.05, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 105, 20, 1, 0, 0, 0, 0.1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 100, 20, 1, 0, 0, 0, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 95, 20, 1, 0, 0, 0, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 90, 20, 1, 0, 0, 0, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 85, 20, 1, 0, 0, 0, 0.3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 80, 20, 1, 0, 0, 0, 0.35, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 75, 20, 1, 0, 0, 0, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 70, 20, 1, 0, 0, 0, 0.45, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 65, 20, 1, 0, 0, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 60, 20, 1, 0, 0, 0, 0.55, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 55, 20, 1, 0, 0, 0, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 50, 20, 1, 0, 0, 0, 0.65, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 45, 20, 1, 0, 0, 0, 0.7, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 20, 1, 0, 0, 0, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 35, 20, 1, 0, 0, 0, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 30, 20, 1, 0, 0, 0, 0.85, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 25, 20, 1, 0, 0, 0, 0.9, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner, g.annihilator, g.destroyer, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 25, 10, 1, 0, -5, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster, g.thruster, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 25, 10, 1, 0, 5, -180, 0.1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster, g.thruster, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 27, 10, 1, 0, 0, 180, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster, g.thruster, g.machineGun]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.vindicator = {
   PARENT: 'genericTank',
   LABEL: 'Vindicator',
   BODY: {
       SPEED: 0.8 * base.SPEED,
       FOV: 1.7 * base.FOV,
   },
   GUNS: [ {
         POSITION: [ 67, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.assassin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 8, -2, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.watchingTower = {
   PARENT: 'genericTank',
   LABEL: 'Watching Tower',
   BODY: {
      SPEED: 0.8 * base.SPEED,
      FOV: base.FOV * 1.9,
   },
   GUNS: [ {
         POSITION: [ 85, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.assassin, g.assassin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 8, -2, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.tower = {
   PARENT: 'genericTank',
   LABEL: 'Tower',
   BODY: {
      SPEED: 0.8 * base.SPEED,
      FOV: base.FOV * 2.1,
   },
   GUNS: [ {
         POSITION: [ 122, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, g.assassin, g.assassin, g.assassin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 8, -2, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.claws = {
   PARENT: 'genericTank',
   LABEL: 'Claws',
   GUNS: [ {
         POSITION: [ 18, 8, 1, 0, 0, -60, 0, ],
         }, {
         POSITION: [ 18, 8, 1, 0, 0, 60, 0, ],
         }, {
         POSITION: [ 18, 8, 1, 17, 0, -60, 0, ],
         }, {
         POSITION: [ 18, 8, 1, 17, 0, 60, 0, ],
         }, {
         POSITION: [ 18, 8, 1, 33, -4, -52.5, 0, ],
         }, {
         POSITION: [ 18, 8, 1, 33, 4, 52.5, 0, ],
         }, {
         POSITION: [ 4, 8, 1, 49, -9, -45, 0, ],
         }, {
         POSITION: [ 4, 8, 1, 49, 9, 45, 0, ],
         }, {
         POSITION: [ 4, 8, 1, 52, -13, -37.5, 0, ],
         }, {
         POSITION: [ 4, 8, 1, 52, 13, 37.5, 0, ],
         }, {
         POSITION: [ 4, 8, 1, 54, -26, -22.5, 0, ],
         }, {
         POSITION: [ 4, 8, 1, 54, 26, 22.5, 0, ],
         }, {
         POSITION: [ 4, 8, 1, 54, -31, -15, 0, ],
         }, {
         POSITION: [ 4, 8, 1, 54, 31, 15, 0, ],
         }, {
         POSITION: [ 4, 8, 1, 54, -34, -7.5, 0, ],
         }, {
         POSITION: [ 4, 8, 1, 54, 34, 7.5, 0, ],
         }, {
         POSITION: [ 4, 8, 1, 51, -38, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.laserBeam]),
            TYPE: "laserBeam",
         }, }, {
         POSITION: [ 4, 8, 1, 51, 38, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.laserBeam]),
            TYPE: "laserBeam",
         }, }, {
         POSITION: [ 4, 8, 1, 51, -27, -22, 0, ],
         }, {
         POSITION: [ 4, 8, 1, 51, 27, 22, 0, ],
         }, 
     ],
};
Class.fuckYouRagnarokAndKronos = {
   PARENT: 'genericTank',
   LABEL: 'Middle Finger',
   GUNS: [ {
         POSITION: [ 36, 14, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 42, 10, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.finger, g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 13, 14, -1.4, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.airplane = {
   PARENT: 'genericTank',
   LABEL: 'Airplane1',
   GUNS: [ {
         POSITION: [ 7, 22, -4, -3, 0, 0, 0, ],
         }, {
         POSITION: [ 22, 3, 1, -3, 5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 3, 1, -3, -5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 3, 1, -1, 2, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 3, 1, -1, -2, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.gunner, { speed: 1.2 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 13, -1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 8, 2, 1, 4.5, -42, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 2, 1, 4.5, 42, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 2, 1, 4.5, -36, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 2, 1, 4.5, 36, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 2, 1, 4.5, -30, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 2, 1, 4.5, 30, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 2, 1, 4.5, -24, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 2, 1, 4.5, 24, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.thruster]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.theCannon = {
   PARENT: 'genericTank',
   LABEL: 'The Cannon',
   GUNS: [ {
         POSITION: [ 50, 6, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 7, 1, 22, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 8, 1, 26, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 9, 1, 31, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 10, 1, 36, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 11, 1, 41, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 12, 1, 46, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.annihilator, g.destroyer, g.pounder, g.realAnnihilatorTwo, g.fingerTwo]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 8, -1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 12, 13, -1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 0, -12, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 0, 12, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 4, -17, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 4, 17, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 8, -22, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 8, 22, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 12, -25, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 12, 25, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 15, -26, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 15, 26, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 19, -26, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 19, 26, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 23, -26, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 23, 26, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 26, -26, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 26, 26, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 29, -25, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 29, 25, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 33, -22, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 33, 22, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 38, -20, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 38, 20, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 42, -18, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 42, 18, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 45, -15, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 45, 15, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 46, -10, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 46, 10, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 2, -14, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 2, 14, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 6, -20, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 6, 20, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 13, -26, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 13, 26, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 31, -24, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 31, 24, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 40, -19, 0, 0, ],
         }, {
         POSITION: [ 5, 5, 1, 40, 19, 0, 0, ],
         }, {
         POSITION: [ 19, 8, 1, 14, -30, 0, 0, ],
         }, {
         POSITION: [ 19, 8, 1, 14, 30, 0, 0, ],
         }, {
         POSITION: [ 3, 18, 1, 23, -14, 0, 0, ],
         }, {
         POSITION: [ 3, 18, 1, 23, 14, 0, 0, ],
         }, {
         POSITION: [ 7, 1, 1, 21, -14, 0, 0, ],
         }, {
         POSITION: [ 7, 1, 1, 21, 14, 0, 0, ],
         }, {
         POSITION: [ 7, 1, 1, 21, -20, 0, 0, ],
         }, {
         POSITION: [ 7, 1, 1, 21, 20, 0, 0, ],
         }, {
         POSITION: [ 10, 3, 1, 20, -9, 0, 0, ],
         }, {
         POSITION: [ 10, 3, 1, 20, 9, 0, 0, ],
         }, {
         POSITION: [ 57, 1, 1, 20, -9, 0, 0, ],
         }, {
         POSITION: [ 57, 1, 1, 20, 9, 0, 0, ],
         }, {
         POSITION: [ 45, 1, 1, 19, -8, 0, 0, ],
         }, {
         POSITION: [ 45, 1, 1, 19, 8, 0, 0, ],
         }, {
         POSITION: [ 11, 14, 1, 64, 0, 0, 0, ],
         }, {
         POSITION: [ 11, 0, 1, 64, 0, 0, 0, ],
         }, {
         POSITION: [ 7, 0, 1, 64, -4, 0, 0, ],
         }, {
         POSITION: [ 7, 0, 1, 64, 4, 0, 0, ],
         }, {
         POSITION: [ 7, 0, 1, -12, -3, 0, 0, ],
         }, {
         POSITION: [ 7, 0, 1, -12, 3, 0, 0, ],
         }, {
         POSITION: [ 7, 0, 1, -12, -3, -7.5, 0, ],
         }, {
         POSITION: [ 7, 0, 1, -12, 3, 7.5, 0, ],
         }, {
         POSITION: [ 16, 4, 1, -12, -3, -60, 0, ],
         }, {
         POSITION: [ 16, 4, 1, -12, 3, 60, 0, ],
         }, {
         POSITION: [ 16, 3, 1, -13, -3, 30, 0, ],
         }, {
         POSITION: [ 16, 3, 1, -13, 3, -30, 0, ],
         }, {
         POSITION: [ 16, 2, 1, -15, -3, 30, 0, ],
         }, {
         POSITION: [ 16, 2, 1, -15, 3, -30, 0, ],
         }, {
         POSITION: [ 16, 1, 1, -17, -3, 30, 0, ],
         }, {
         POSITION: [ 16, 1, 1, -17, 3, -30, 0, ],
         }, 
     ],
};
Class.nailliner = {
   PARENT: 'genericTank',
   LABEL: 'Nailliner',
   GUNS: [ {
         POSITION: [ 37, 5, 1, 0, -3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 37, 5, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 34, 5, 1, 0, -3, 0, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 34, 5, 1, 0, 3, 0, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 31, 5, 1, 0, -3, 0, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 31, 5, 1, 0, 3, 0, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 28, 5, 1, 0, -3, 0, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 28, 5, 1, 0, 3, 0, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 25, 5, 1, 0, -3, 0, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 25, 5, 1, 0, 3, 0, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 5, 1, 0, -3, 0, 1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 5, 1, 0, 3, 0, 1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 5, 1, 0, -3, 0, 1.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 5, 1, 0, 3, 0, 1.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 41, 6, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 38, 6, 1, 0, 0, 0, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 35, 6, 1, 0, 0, 0, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 32, 6, 1, 0, 0, 0, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 29, 6, 1, 0, 0, 0, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 26, 6, 1, 0, 0, 0, 1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 23, 6, 1, 0, 0, 0, 1.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 6, 1, 0, 0, 0, 1.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 11, -1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 20, 7, -1.5, 0, 0, 180, 0, ],
         }, {
         POSITION: [ 14, 12, -1.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.nai = {
   PARENT: 'genericTank',
   LABEL: 'Nai',
   GUNS: [ {
         POSITION: [ 20, 2, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
         }, 
     ],
};
Class.lgun = {
   PARENT: 'genericTank',
   LABEL: 'lgun',
   GUNS: [ {
         POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
         }, 
     ],
};
Class.shortgun = {
   PARENT: 'genericTank',
   LABEL: 'Shortgun',
   GUNS: [ {
         POSITION: [ 16, 2, 1, 0, -2, 0, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.destroyer]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, 2, 0, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.destroyer]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 2, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.destroyer]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 13, 6, -1.8, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.pincer = {
   PARENT: 'genericTank',
   LABEL: 'pincer?',
   GUNS: [ {
         POSITION: [ 44, 1, 1, 0, -1.8, 0, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.annihilator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 44, 1, 1, 0, 1.8, 0, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.annihilator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 46, 1, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.annihilator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 5, -1.8, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.spikeLauncher = {
   PARENT: 'genericTank',
   LABEL: 'Spike Launcher',
   GUNS: [ {
         POSITION: [ 24, 10, 1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 22, 11, 2, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.spikeLauncher, g.launcher, g.rocketeer]),
            TYPE: "spikeMissile",
         }, }, 
     ],
};
Class.megaSmasherLauncher = {
   PARENT: 'genericTank',
   LABEL: 'Mega Smasher Launcher',
   GUNS: [ {
         POSITION: [ 18, 10, 1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 15.5, 14, 1.8, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.annihilator, g.rocketeer, g.megaLauncher]),
            TYPE: "megaSmasherMissile",
         }, }, 
     ],
};
Class.megaSmasherLauncherGrowing = {
   PARENT: 'genericTank',
   LABEL: 'Mega Smasher Launcher Grow',
   GUNS: [ {
         POSITION: [ 18, 10, 1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 15.5, 14, 1.8, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.annihilator, g.rocketeer, g.megaLauncherS]),
            TYPE: "msglGrow",
         }, }, 
     ],
};
Class.rotatingBulletLauncher = {
   PARENT: 'genericTank',
   LABEL: 'testing',
   BODY: {
      FOV: base.FOV * 2.2,
   },
   GUNS: [ {
         POSITION: [ 18, 10, 1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 15.5, 14, 1.8, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.annihilator, g.rotatingBulletVal]),
            TYPE: "rotatingBullet",
         }, }, 
     ],
};
Class.uglyStrarapleleprlrp = {
   PARENT: 'genericTank',
   LABEL: 'ugly strarapleleprlrp',
   GUNS: [ {
         POSITION: [ 16.5, 2, 1, 0, -6, 0, 0.05, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16.5, 2, 1, 0, 6, 0, 0.1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18.5, 2, 1, 0, -4, 0, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18.5, 2, 1, 0, 4, 0, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20.5, 2, 1, 0, -2, 0, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20.5, 2, 1, 0, 2, 0, 0.3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22.5, 2, 1, 0, 0, 0, 0.35, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 13, 14, -1.4, 0, 0, 0, 0.4, ],
         }, 
     ],
};
Class.overspawner = {
    PARENT: "genericTank",
    LABEL: "Overspawner",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: weaponArray({
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer]),
            TYPE: "spawneredDrone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
        }
    }, 2)
}
Class.opOverspawner = {
    PARENT: "genericTank",
    LABEL: "Op Overspawner",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: weaponArray({
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer, g.machineGun, g.streamliner]),
            TYPE: "opSpawneredDrone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
        }
    }, 2)
}
Class.pencil = {
   PARENT: 'genericTank',
   LABEL: 'Pencil',
   GUNS: [ {
         POSITION: [ 30, 2, 1, 0, 2.5, 0, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 30, 2, 1, 0, -2.5, 0, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 31, 2, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 16, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 16, 1.25, 17, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.construct]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.battlelauncher = {
   PARENT: 'genericTank',
   LABEL: 'Battlelauncher',
   GUNS: [ {
         POSITION: [ 34, 11, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 30, 11, 2, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 27, 10, 3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.hive2, g.rocketeer, g.skimmer, g.annihilator]),
            TYPE: "mgs",
         }, }, {
         POSITION: [ 14, 10, -2, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 7, -2, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 19, 5, -2, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 8, 5, 2, 19, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.hive2, g.rocketeer, g.skimmer, g.annihilator, g.fake]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.fatgun = {
   PARENT: 'genericTank',
   LABEL: 'Fatgun',
   GUNS: [ {
         POSITION: [ 19, 8, 1, 0, 3.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.annihilator, g.destroyer]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 8, 1, 0, -3.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.annihilator, g.destroyer]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.annihilator, g.destroyer]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 11, 15, -1.3, 1.5, 0, 0, 0, ],
         }, 
     ],
};
Class.rangergun = {
   PARENT: 'genericTank',
   LABEL: 'Rangergun',
   GUNS: [ {
         POSITION: [ 49, 4, 1, 0, -2.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.sniper, g.assassin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 49, 4, 1, 0, 2.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.sniper, g.assassin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 50, 4, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.sniper, g.assassin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 4, -1.8, 0, -2.5, 0, 0, ],
         }, {
         POSITION: [ 14, 4, -1.8, 0, 2.5, 0, 0, ],
         }, {
         POSITION: [ 15, 4, -1.8, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.annihilet = {
   PARENT: 'genericTank',
   LABEL: 'Annihilet',
   GUNS: [ {
         POSITION: [ 18, 20, 1, 0, -5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet, g.pounder, g.destroyer, g.annihilator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 20, 1, 0, 5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet, g.pounder, g.destroyer, g.annihilator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 20, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet, g.pounder, g.destroyer, g.annihilator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4, 15, 2, -4, 0, 0, 0, ],
         }, 
     ],
};
Class.annihishot = {
   PARENT: 'genericTank',
   LABEL: 'Annihishot',
   GUNS: [ {
         POSITION: [ 18.5, 19.5, 1, 0, 0, -52.5, 3/4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.twin, g.tripleShot]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18.5, 19.5, 1, 0, 0, 52.5, 3/4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.twin, g.tripleShot]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20.5, 19.5, 1, 0, 0, -37.5, 2/4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.twin, g.tripleShot]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20.5, 19.5, 1, 0, 0, 37.5, 2/4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.twin, g.tripleShot]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22.5, 19.5, 1, 0, 0, -22.5, 1/4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.twin, g.tripleShot]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22.5, 19.5, 1, 0, 0, 22.5, 1/4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.twin, g.tripleShot]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 25.5, 19.5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.twin, g.tripleShot]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.superstapler = {
   PARENT: 'genericTank',
   LABEL: 'Superstapler',
   GUNS: [ {
         POSITION: [ 18, 1, 1, 0, -6, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 1, 1, 0, 6, 0, 0.05, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 1, 1, 0, -5, 0, 0.1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 1, 1, 0, 5, 0, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 1, 1, 0, -4, 0, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 1, 1, 0, 4, 0, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 1, 1, 0, -3, 0, 0.3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 1, 1, 0, 3, 0, 0.35, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 1, 1, 0, -2, 0, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 22, 1, 1, 0, 2, 0, 0.45, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 23, 1, 1, 0, -1, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 23, 1, 1, 0, 1, 0, 0.55, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 24, 1, 1, 0, 0, 0, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, g.machineGun]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 13, -1.5, 0, 0, 0, 0.65, ],
         }, 
     ],
};
Class.sisisisisisingle = {
   PARENT: 'genericTank',
   LABEL: 'Sisisisisisingle',
   GUNS: [ {
         POSITION: [ 56, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op, g.machineGun, g.noSpread]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 49, 8, -1.8, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 43, 9, -1.8, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 37, 10, -1.8, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 30, 11, -1.8, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 24, 11, -1.8, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 16, 11, -1.8, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.rightAtYourHouse = {
   PARENT: 'genericTank',
   LABEL: 'Bomb Launcher',
   GUNS: [ {
         POSITION: [ 39, 7, 1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 37, 12, 1.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.launcher, g.bombLauncher]),
            TYPE: "bombBullet",
         }, }, 
     ],
};
Class.rifleBoomer = {
   PARENT: 'genericTank',
   LABEL: 'Rifle Boomer',
   GUNS: [ {
         POSITION: [ 25, 14, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 30, 10, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 13, 14, -1.4, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 11, 1.3, 30.5, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.boomerang, g.sniper, g.rifle]),
            TYPE: "boomerang",
            STAT_CALCULATOR: "block"
         }, }, 
     ],
};
Class.jellyfish = {
   PARENT: 'genericTank',
   LABEL: 'Fog',
   SHAPE: 8,
   SIZE: 19,
   COLOR: 7,
   GUNS: [ {
         POSITION: [ 13, 4, 1, 0, -4, -180, 0, ],
         }, {
         POSITION: [ 13, 4, 1, 0, 4, 180, 0, ],
         }, {
         POSITION: [ 2, 4, 1.5, 13, -4, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunnerTrapper, g.bigThruster, { range: 0.004 }]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 2, 4, 1.5, 13, 4, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunnerTrapper, g.bigThruster, { range: 0.004 }]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 14, 6, 1, 0, 0, 180, 0, ],
         }, {
         POSITION: [ 2, 6, 1.5, 14, 0, 180, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunnerTrapper, g.bigThruster, g.pounder, { range: 0.004 }]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 14, 11, 1.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineWeaker, g.machineWeaker, g.destroyer, { range: 0.3 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 9, 1.5, 0, 0, 0, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineWeaker, g.machineWeaker, g.destroyer, { range: 0.3 }]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.topBananas = {
   PARENT: 'genericTank',
   LABEL: 'Top Bananas',
   GUNS: [ {
         POSITION: [ 19, 15, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 19, 15, 1, 0, 0, -180, 0, ],
         }, {
         POSITION: [ 14, 19, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 14, 19, 1, 0, 0, 180, 0, ],
         }, {
         POSITION: [ 3, 19, 1, 18, 0, 0, 0, ],
         PROPERTIES: {
            MAX_CHILDREN: 1,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.topBanana]),
            TYPE: "minion",
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 3, 19, 1, 18, 0, -180, 0, ],
         PROPERTIES: {
            MAX_CHILDREN: 1,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.topBanana]),
            TYPE: "minion",
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, 
     ],
};
Class.thatOneTeamer = {
   PARENT: 'genericTank',
   LABEL: 'that one teamer',
   MAX_CHILDREN: 13,
   HAS_NO_RECOIL: true,
   GUNS: [ {
         POSITION: [ 12, 19, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 19, 1.5, 13, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pounder, g.destroyer, g.annihilator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "pentaMinion",
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "barricadeMinion",
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "septaMinion",
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "constructMinion",
            SYNCS_SKILLS: true,
         }, }, 
     ],
};
Class.thatOneTeamer2 = {
   PARENT: 'genericTank',
   LABEL: 'boss of all the teamers',
   MAX_CHILDREN: 24,
   HAS_NO_RECOIL: true,
   GUNS: [ {
         POSITION: [ 12, 19, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 19, 1.5, 13, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pounder, g.destroyer, g.annihilator]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "pentaMinion",
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "barricadeMinion",
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "septaMinion",
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "shotgunMinion",
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "cycloneMinion",
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "machinegMinion",
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "assMinion",
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "constructMinion",
            SYNCS_SKILLS: true,
         }, }, 
     ],
};
Class.realSmasherGod = {
   PARENT: 'genericTank',
   LABEL: 'real smasher god',
   MAX_CHILDREN: 30,
   GUNS: [ {
         POSITION: [ 14, 3, 1, 0, -8, 7.5, 0, ],
         }, {
         POSITION: [ 14, 3, 1, 0, 8, -7.5, 0, ],
         }, {
         POSITION: [ 2, 3, 2, 15, -8, 7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.machineGunner]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 2, 3, 2, 15, 8, -7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.machineGunner]),
            TYPE: "trap",
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "smashermMinion",
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "smasherMinion",
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "landmineMinion",
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "spikeMinion",
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "autoSmasherMinion",
            SYNCS_SKILLS: true,
         }, }, 
     ],
};
Class.nerd = {
   PARENT: 'genericTank',
   LABEL: 'nerd',
   BODY: {
      HEALTH: base.HEALTH * 100000000000000000000,
      DAMAGE: base.DAMAGE * 5,
   },
   GUNS: [ {
         POSITION: [ 18, 6, 1, 1, -8, -120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 6, 1, 1, -8, 41.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 10, 6, 1, 1, -17, 28, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 10, 6, 1, 1, -17, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 10, 6, 1, 1, -17, -12, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, 172.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, -172.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, 30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, -30, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, -112.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, 112.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, 26.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, -26.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, -170.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, 170.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, 1, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, -1, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, 7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, -7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, 17.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, -17.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, -8, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, 8, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, 99.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, -99.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, 97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, -97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, -120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, 21, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, -21, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, -120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, -17, 35, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 24, 1, 1, 17, -35, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, -17, -52.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, 17, 52.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, -17, 150, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, 17, -150, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, -17, 37.5, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, 17, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, -17, -37.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, 17, 37.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, -17, -105, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, 17, 105, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, -17, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, 17, 180, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, -17, 157.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, 17, -157.5, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, -17, -97.5, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, 17, 97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, -17, 52.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, 17, -52.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, -17, -90, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 8, 10, 1, 1, 17, 90, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, -17, -7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, 17, 7.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, -17, -142.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, 17, 142.5, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, -17, 22.5, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, 17, -22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, -17, 22.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, 17, -22.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, -17, -157.5, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, 17, 157.5, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, -17, 120, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, 17, -120, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, -17, -15, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, 17, 15, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, -17, -97.5, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, 17, 97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, -17, 75, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, 17, -75, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, -17, -75, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, 17, 75, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, -17, -82.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, 17, 82.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, -17, 112.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, 17, -112.5, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, -17, 97.5, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, 17, -97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, -17, -82.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 10, 1, 1, 17, 82.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, 7.5, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, -7.5, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, 7.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, -7.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, 0, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 0, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, 0, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -7.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 7.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -7.5, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 7.5, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 15, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -15, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 15, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -22.5, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 22.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -30, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 30, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -45, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 45, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 97.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, 157.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, -157.5, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, 15, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, -15, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -165, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 165, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -135, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 135, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, 37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, -37.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, 180, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, -180, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -150, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 150, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -112.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 112.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -112.5, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 112.5, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, 105, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, -105, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -105, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 105, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, 105, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, -105, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -97.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 97.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, 120, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, -120, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -97.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 97.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -97.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 97.5, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, 105, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, -105, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -97.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 97.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -112.5, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 112.5, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, -17, -67.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 40, 2, 1, 1, 17, 67.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, -17, -30, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, 17, 30, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, -17, -45, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, 17, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, -17, -157.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, 17, 157.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, -17, 165, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, 17, -165, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, -17, 75, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, 17, -75, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, -17, -75, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, 17, 75, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, -17, -142.5, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, 17, 142.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, -17, -120, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, 17, 120, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, -17, -52.5, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, 17, 52.5, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, -17, -150, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, 17, 150, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, -17, -112.5, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, 17, 112.5, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, -17, -45, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, 17, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, -17, 0, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 149, 0, 1, 1, 17, 0, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.machineGunner]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.beak = {
   PARENT: 'genericTank',
   LABEL: 'Beak',
   GUNS: [ {
         POSITION: [ 13, 2, 1, 0, -9, 0, 0, ],
         }, {
         POSITION: [ 13, 2, 1, 0, 9, 0, 0, ],
         }, {
         POSITION: [ 1, 2, 1.5, 14, -9, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.gunner, g.streamliner]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 1, 2, 1.5, 14, 9, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.gunner, g.streamliner]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 16, 2, 1, 0, -6, 0, 0, ],
         }, {
         POSITION: [ 16, 2, 1, 0, 6, 0, 0, ],
         }, {
         POSITION: [ 1, 2, 1.5, 17, -6, 0, 1/4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.gunner, g.streamliner]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 1, 2, 1.5, 17, 6, 0, 1/4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.gunner, g.streamliner]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 20, 2, 1, 0, -3, 0, 0, ],
         }, {
         POSITION: [ 20, 2, 1, 0, 3, 0, 0, ],
         }, {
         POSITION: [ 1, 2, 1.5, 21, -3, 0, 2/4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.gunner, g.streamliner]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 1, 2, 1.5, 21, 3, 0, 2/4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.gunner, g.streamliner]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 24, 2, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 1, 2, 1.5, 25, 0, 0, 3/4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.gunner, g.streamliner]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, 
     ],
};
Class.pen1Dominator = {
   PARENT: 'genericTank',
   LABEL: 'Pen Dominator',
   GUNS: [ {
         POSITION: [ 23, 8, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4, 8, 1.5, 14, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: "trap",
         }, }, 
     ],
};
Class.heavyRocketeer = {
   PARENT: 'genericTank',
   LABEL: 'Heavy Rocketeer',
   GUNS: [ {
         POSITION: [ 25, 8, 1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 21, 13, -1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.heavyRocketeer]),
            TYPE: "heavyRocket",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 12, 15, -1.3, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.shapeT = {
   PARENT: 'genericTank',
   LABEL: 'Shape Test',
   SHAPE: [[-5],[4],[-5,-4],[-4,-5],[4,-5],[5,-4],[5,4],[4,5],[-4,5],[-5,4]],
   GUNS: [ {
         POSITION: [ 18, 8, 1, 0, 0, 0, 0, ],
         }, 
     ],
};
Class.shapeTest2 = {
   PARENT: 'genericTank',
   SHAPE: [[-3,0],[-2,-1],[-2,-2],[2,-3],[3,-1],[1,0],[3,1],[2,3],[-2,2],[-2,1],[-3,0]],
   LABEL: 'Shape Test 2',
   GUNS: [ {
         POSITION: [ 14, 16, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.sniper, g.assassin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 12, 1, 0, 0, 0, 0.3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.sniper, g.assassin]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.bacniggeria = {
   PARENT: 'genericTank',
   LABEL: 'Bacniggeria',
   GUNS: [ {
         POSITION: [ 14, 16, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.sniper, g.assassin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 12, 1, 0, 0, 0, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.sniper, g.assassin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 8, 1, 0, 0, 0, 0.3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.sniper, g.assassin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 3, 1, 0, 0, 0, 0.45, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, g.sniper, g.assassin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 5, 1, 0, 3, -90, 0.9, ],
         }, {
         POSITION: [ 16, 5, 1, 0, -3, 90, 0.9, ],
         }, 
     ],
};
Class.abte = {
   PARENT: 'genericTank',
   LABEL: 'assault best things ever',
   GUNS: [ {
         POSITION: [ 12, 20, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 20, 1.5, 13, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pounder, g.destroyer, g.annihilator, g.machineGunner]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "crowbarMinion",
            SYNC_SKILLS: true,
            MAX_CHILDREN: 20,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "nailgunMinion",
            SYNC_SKILLS: true,
            MAX_CHILDREN: 20,
         }, }, 
     ],
};
Class.abte2 = {
   PARENT: 'genericTank',
   LABEL: 'assault best things ever',
   GUNS: [ {
         POSITION: [ 12, 20, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 20, 1.5, 13, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pounder, g.destroyer, g.annihilator, g.machineGunner]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "crowbarMinion",
            SYNC_SKILLS: true,
            MAX_CHILDREN: 20,
         }, }, {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.spawnner]),
            TYPE: "nailgunMinion",
            SYNC_SKILLS: true,
            MAX_CHILDREN: 20,
         }, }, 
     ],
};
Class.waterGunner = {
    PARENT: "genericTank",
    LABEL: "Water Gunner",
    DANGER: 7,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [14, 3, 4, -3, 5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.waterGunner]),
                TYPE: "waterdrop",
            },
        },
        {
            POSITION: [14, 3, 4, -3, -5, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.waterGunner]),
                TYPE: "waterdrop",
            },
        },
        {
            POSITION: [14, 3, 4, 0, 2.5, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.waterGunner]),
                TYPE: "waterdrop",
            },
        },
        {
            POSITION: [14, 3, 4, 0, -2.5, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.waterGunner]),
                TYPE: "waterdrop",
            },
        },
        {
            POSITION: [14, 3, 4, 3, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.waterGunner]),
                TYPE: "waterdrop",
            },
        },
    ],
}
Class.pissGun = {
   PARENT: 'genericTank',
   LABEL: 'piss',
   COLOR: 10,
   GUNS: [ {
         POSITION: [ 27, 4, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.piss]),
            TYPE: "piss",
         }, }, 
     ],
};
Class.pissLord = {
   PARENT: 'genericTank',
   LABEL: 'piss lord',
   GUNS: [ {
         POSITION: [ 24, 4, 1, 0, -3, 0, 0.1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.piss]),
            TYPE: "piss",
         }, }, {
         POSITION: [ 24, 4, 1, 0, 3, 0, 0.1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.piss]),
            TYPE: "piss",
         }, }, {
         POSITION: [ 30, 4, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.piss]),
            TYPE: "piss",
         }, }, 
     ],
}
Class.bruhReally = {
   PARENT: 'genericTank',
   LABEL: 'GhufjdbhjkAlatoor',
   SHAPE: "M 0 -1 S -1 -2 -1 0 S 0 1 0 1 S 1 2 1 0 C 1 0 2 -1 0 -1",
   GUNS: [ {
         POSITION: [ 18, 19.5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 19.5, 1, 0, 0, 0, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.pounder, g.destroyer, g.annihilator]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
};
Class.railgun = {
   PARENT: 'genericTank',
   LABEL: 'Railgun',
   GUNS: [ {
         POSITION: [ 33, 3, 1, 0, -6, 0, 0, ],
         }, {
         POSITION: [ 33, 3, 1, 0, 6, 0, 0, ],
         }, {
         POSITION: [ 2, 11, 1, 13, 0, 0, 0/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.railgunFake, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 2, 11, 1, 19, 0, 0, 1/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.railgunFake, g.pounder]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 2, 11, 1, 25, 0, 0, 2/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.railgun, g.pounder]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.computer = {
   PARENT: 'genericTank',
   LABEL: 'Computer',
   MAX_CHILDREN: 1,
   SHAPE: "M 1.2462 0.6224 L -1.1991 0.6229 C -1.2321 0.6256 -1.2538 0.607 -1.2586 0.5797 L -1.2554 -0.9252 C -1.2522 -0.9506 -1.2288 -0.9647 -1.2171 -0.9626 L 1.2495 -0.963 C 1.2658 -0.961 1.2853 -0.9453 1.2848 -0.928 L 1.2901 0.5826 C 1.2828 0.5999 1.2708 0.6148 1.2462 0.6224 L 0.0955 0.6226 C 0.1007 0.7568 0.1351 0.8867 0.1499 0.9121 L 0.4718 0.9145 L 0.5989 0.9778 L -0.5671 0.9763 L -0.4414 0.9141 L -0.1224 0.9154 C -0.0846 0.8329 -0.067 0.7329 -0.0642 0.6234",
   GUNS: [ {
         POSITION: [ 10, 10, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.cursor, { range: 0.05 }]),
            TYPE: "cursor",
         }, }, 
     ],
};
Class.computer1 = {
   PARENT: 'genericTank',
   LABEL: 'Computer',
   MAX_CHILDREN: 1,
   SHAPE: "M 1.2462 0.6224 L -1.1991 0.6229 C -1.2321 0.6256 -1.2538 0.607 -1.2586 0.5797 L -1.2554 -0.9252 C -1.2522 -0.9506 -1.2288 -0.9647 -1.2171 -0.9626 L 1.2495 -0.963 C 1.2658 -0.961 1.2853 -0.9453 1.2848 -0.928 L 1.2901 0.5826 C 1.2828 0.5999 1.2708 0.6148 1.2462 0.6224 L 0.0955 0.6226 C 0.1007 0.7568 0.1351 0.8867 0.1499 0.9121 L 0.4718 0.9145 L 0.5989 0.9778 L -0.5671 0.9763 L -0.4414 0.9141 L -0.1224 0.9154 C -0.0846 0.8329 -0.067 0.7329 -0.0642 0.6234",
   GUNS: [ {
         POSITION: [ 10, 10, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.cursor, { size: 6 }]),
            TYPE: "cursor1",
         }, }, 
     ],
};
Class.realWrench = {
   PARENT: "genericTank",
   LABEL: "Wrench..",
   SHAPE: "M -4.2476 1.2303 C -4.9147 1.4554 -5.4397 0.609 -4.6724 0.3662 L -0.566 -0.1627 C 0.0045 -0.2348 0.277 -1.0674 0.9201 -1.0172 C 1.3401 -0.8475 1.7258 -0.5635 1.7485 -0.4323 C 1.7696 -0.415 1.7418 -0.2761 1.6505 -0.2508 L 0.9664 -0.2999 L 0.9846 0.1135 C 1.0282 0.148 1.0465 0.1544 1.1148 0.1688 L 1.1799 0.186 L 1.8003 0.3207 C 1.8756 0.5502 1.4597 0.8231 0.878 0.9073 L 0.8486 0.8846 C 0.7468 0.9113 0.6086 1.0132 0.5433 0.9648 L 0.5497 0.8727 C 0.4732 0.8489 0.4697 0.7981 0.4809 0.7719 C 0.3443 0.6967 -0.0845 0.4416 -0.4678 0.4555 L -4.2474 1.2307",
    GUNS: [
        {
            POSITION: [67, 6.5, 1, 0, 0, 0, 0],
        }, {
            POSITION: [5, 8.5, -1.5, 8, 0, 0, 0],
        },
    ],
    TURRETS: [
        {
            POSITION: [6, 68, 0, 0, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 58, 0, 0, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        }, {
            POSITION: [6, 48, 0, 0, 360, 1],
            TYPE: [ "autoTankGun", { GUN_STAT_SCALE: g.flankGuard, INDEPENDENT: true, HAS_NO_RECOIL: true } ],
        },
    ],
},
Class.hammer = {
   PARENT: 'genericTank',
   LABEL: 'hammer',
   SIZE: 15,
   SHAPE: "M -0.9925 0.0923 L -0.9925 -0.09 L -0.8103 -0.2723 L 1.3767 -0.2723 L 1.3767 -0.819 L 1.559 -1.0012 L 2.1058 -1.0012 L 2.288 -0.819 L 2.288 0.8212 L 2.1058 1.0035 L 1.559 1.0035 L 1.3767 0.8212 L 1.3767 0.2745 L -0.8103 0.2745 L -0.9925 0.0923",
   GUNS: [ {
            POSITION: [ 10, 15.5, 1, 15.5, 0, 0, 0, ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.op, {
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
Class.stopper = {
   PARENT: 'genericTank',
   LABEL: 'Stopper',
   COLOR: "white",
   SHAPE: "M -1.0008 0.3336 L -1.0008 -0.3336 L -0.3336 -1.0008 L 0.3336 -1.0008 L 1.0008 -0.3336 L 1.0008 0.3336 L 0.3336 1.0008 L -0.3336 1.0008 L -1.0008 0.3336",
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
         POSITION: [ 18, 11, 0.6, -2, -4.4, 0, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.op, {size: 1.8}]),
            TYPE: "stopSignBullet",
         }, }, {
         POSITION: [ 18, 11, 0.6, -2, 4.4, 0, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.op, {size: 1.8}]),
            TYPE: "stopSignBullet",
         }, }, 
     ],
};
Class.tailrotor = {
   PARENT: 'genericTank',
   FACING_TYPE: ["spin", { speed: -0.5 }],
   GUNS: weaponArray({
       POSITION: {
           LENGTH: 80,
           WIDTH: 5,
           ASPECT: 0.6,
        }
    }, 4)
}
Class.normalrotor = {
   PARENT: 'genericTank',
   FACING_TYPE: ["spin", { speed: 0.5 }],
   GUNS: weaponArray({
       POSITION: {
           LENGTH: 80,
           WIDTH: 5,
           ASPECT: 0.6,
        }
    }, 4)
}
Class.tailrotor2 = {
   PARENT: 'genericTank',
   FACING_TYPE: ["spin", { speed: -0.75 }],
   GUNS: weaponArray({
       POSITION: {
           LENGTH: 80,
           WIDTH: 5,
           ASPECT: 0.15,
        }
    }, 4)
}
Class.normalrotor2 = {
   PARENT: 'genericTank',
   FACING_TYPE: ["spin", { speed: 0.75 }],
   GUNS: weaponArray({
       POSITION: {
           LENGTH: 80,
           WIDTH: 5,
           ASPECT: 0.15,
        }
    }, 4)
}
Class.theDemon = {
   PARENT: 'genericTank',
   LABEL: 'The Demon',
   GUNS: [ {
         POSITION: [ 11, 12, 1.3, 9, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroyer, g.machineGun, g.gunner, g.launcher, {size: 1.5, speed: 0.05}]),
            TYPE: "thedemonBullet",
            COLOR: "explosive",
         }, }, {
         POSITION: [ 5, 16, 0.8, 5.8, 0, 0, 0, ],
         }, {
         POSITION: [ 17, 3, 0.1, 5.8, 0, 0, 0, ],
         PROPERTIES: {
            COLOR: "evening",
         }, }, {
         POSITION: [ 17, 3, 0.1, 6, 4, 7.5, 0, ],
         PROPERTIES: {
            COLOR: "evening",
         }, }, {
         POSITION: [ 17, 3, 0.1, 6, -4, -7.5, 0, ],
         PROPERTIES: {
            COLOR: "evening",
         }, }, {
         POSITION: [ 9, 0.5, 0.1, 6, 2, 0, 0, ],
         PROPERTIES: {
            COLOR: "rainbow",
         }, }, {
         POSITION: [ 9, 0.5, 0.1, 6, -2, 0, 0, ],
         PROPERTIES: {
            COLOR: "rainbow",
         }, }, {
         POSITION: [ 9, 0.5, 0.1, 6, -6, -7.5, 0, ],
         PROPERTIES: {
            COLOR: "rainbow",
         }, }, {
         POSITION: [ 9, 0.5, 0.1, 6, 6, 7.5, 0, ],
         PROPERTIES: {
            COLOR: "rainbow",
         }, }, {
         POSITION: [ 9, 0.5, 0.1, 6, -2, -7.5, 0, ],
         PROPERTIES: {
            COLOR: "rainbow",
         }, }, {
         POSITION: [ 9, 0.5, 0.1, 6, 2, 7.5, 0, ],
         PROPERTIES: {
            COLOR: "rainbow",
         }, }, {
         POSITION: [ 19, 7, 0, -26, -4, 15, 0, ],
         PROPERTIES: {
            COLOR: "evening",
         }, }, {
         POSITION: [ 19, 7, 0, -26, 4, -15, 0, ],
         PROPERTIES: {
            COLOR: "evening",
         }, }, {
         POSITION: [ 9, 3, 0, -16, -4, 15, 0, ],
         PROPERTIES: {
            COLOR: "explosive",
         }, }, {
         POSITION: [ 9, 3, 0, -16, 4, -15, 0, ],
         PROPERTIES: {
            COLOR: "explosive",
         }, }, {
         POSITION: [ 2, 3, 0, -11, -4, 90, 0, ],
         }, {
         POSITION: [ 2, 3, 0, -11, 4, -90, 0, ],
         }, 
     ],
};
Class.realPen = {
   PARENT: 'genericTank',
   LABEL: 'Pen',
   GUNS: [ {
         POSITION: [ 26, 10, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            COLOR: "#ffa420",
         }, }, {
         POSITION: [ 26, 4, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            COLOR: "#ff9900",
         }, }, {
         POSITION: [ 1, 4, 1, 29, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.penDraw]),
            TYPE: ["penBullet", {COLOR: "#000000"}],
         }, }, {
         POSITION: [ 8, 0.185, -55, 26, 0, 0, 0, ],
         PROPERTIES: {
            COLOR: "#151719",
         }, },
     ],
};
Class.omegaBrainDamage = {
    PARENT: "genericTank",
    LABEL: "The Ultimate Brain Damage",
    SHAPE: "m -0.8868 0.0107 c -0.1524 0.1137 -0.092 0.0263 -0.0402 0.174 c 0.022 0.0867 0.018 0.176 0.1238 0.2544 C -0.3551 0.6231 0.1348 0.6259 0.636 0.5797 C 0.7987 0.4502 0.7603 0.2444 0.6661 0.0174 C 0.2136 0.156 0.1609 -0.3908 -0.0702 -0.6319 C -0.0432 -0.2278 -1.0201 -0.3123 -1.4925 -0.0696 C -1.7138 -0.152 -1.6599 -0.2587 -1.5829 -0.3675 C -0.8104 -0.4345 -0.4016 -0.6941 -0.0802 -1 C 0.236 -0.5892 0.5222 -0.3216 0.723 -0.4612 C 0.629 -0.2717 0.9858 -0.0772 1.0979 0.0308 C 1.2033 0.1021 1.399 0.8628 1.0744 0.911 C 0.4002 1.0156 -0.2704 1.0616 -0.9269 0.8742 C -1.2661 0.7646 -1.2767 0.478 -1.275 0.1848 C -1.2731 -0.0603 -1.3524 0.0095 -1.2616 -0.0094 C -1.0345 -0.25 -0.932 -0.0211 -0.8868 0.0107 Z",
    TURRETS: weaponArray([
        {
            POSITION: [5, -9.5, 0, 65, 360, 0],
            TYPE: "autoTankGun",
        },
    ], 93)
}

// Healer upgrades
Class.medic = {
    PARENT: "genericTank",
    LABEL: "Medic",
    BODY: {
       FOV: base.FOV * 1.2,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 16.5, 0, 0, 0],
        },
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.sniper]),
                TYPE: "healerBullet",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
}
Class.ambulance = {
    PARENT: "genericTank",
    LABEL: "Ambulance",
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }, g.healer]),
                TYPE: "healerBullet",
                LABEL: "Front",
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
    STAT_NAMES: statnames.heal,
}
Class.ambulance3 = {
    PARENT: "genericTank",
    LABEL: "Ambulance",
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "radiationSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.triAngle, g.triAngleFront, { recoil: 4 }, g.healer]),
                TYPE: "healerBullet",
                LABEL: "Front",
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
    STAT_NAMES: statnames.heal,
}
Class.surgeon = {
    PARENT: "genericTank",
    LABEL: "Surgeon",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 2,
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, { speed: 0.7, maxSpeed: 0.7 }]),
                TYPE: "surgeonPillbox",
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "block"
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
    STAT_NAMES: statnames.heal,
}
Class.paramedic = {
    PARENT: "genericTank",
    LABEL: "Paramedic",
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [8, 9, -0.5, 10, 0, -17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.healer]),
                TYPE: "healerBullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 10, 0, 17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.healer]),
                TYPE: "healerBullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
}

// Bird tanks
Class.falcon = makeBird("assassin", "Falcon")
Class.avian = makeBird("single", "Avian")
Class.vulture = makeBird({
    PARENT: "genericTank",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            POSITION: [22, 7, -1.5, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [20, 7.5, -1.5, 0, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, {size: 7/7.5}]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 8, -1.5, 0, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, {size: 7/8}]),
                TYPE: "bullet"
            }
        }
    ]
}, "Vulture")
Class.phoenix = makeBird("sprayer", "Phoenix")
Class.eagle = makeBird("pounder", "Eagle")
Class.cacatua = makeBird("operator", "Cacatua")
Class.cockatiel = makeBird("pen", "Cockatiel")
Class.parakeet = makeBird("stall", "Parakeet")
Class.crow = makeBird("ranger", "Crow")
Class.airplane1 = makeBird("airplane", "Airplane")

// Hybrid tanks
Class.hybridSkimmer = makeOver('skimmer', "Dipper", {count: 1, independent: true, cycle: false})
Class.bentHybrid = makeOver('tripleShot', "Bent Hybrid", {count: 1, independent: true, cycle: false})
Class.nesterTank = makeOver('cluster', "Nester", {count: 1, independent: true, cycle: false})
Class.poacher = makeOver('hunter', "Poacher", {count: 1, independent: true, cycle: false})
Class.hybridpelleter = makeOver('pelleter', "Hybrid Pelleter", {count: 1, independent: true, cycle: false})
Class.hybridborer = makeOver('borer', "Hybrid Borer", {count: 1, independent: true, cycle: false})
Class.hybridpunt = makeOver('puntgun', "Spitter", {count: 1, independent: true, cycle: false})
Class.hybridcruiser = makeOver('cruiser', "Debaucher", {count: 1, independent: true, cycle: false})
Class.hybridgunner = makeOver('gunner', "Barrage", {count: 1, independent: true, cycle: false})
Class.revolutionbrid = makeOver('revolutionist', "Revolutionbrid", {count: 1, independent: true, cycle: false})
Class.delayer = makeOver('stall', "Delayer", {count: 1, independent: true, cycle: false})
Class.utilizer = makeOver('operator', "Utilizer", {count: 1, independent: true, cycle: false})
Class.hybridInferno = makeOver('inferno', "Hybrid Inferno", {count: 1, independent: true, cycle: false})
Class.interner = makeOver('pen', "Interner", {count: 1, independent: true, cycle: false})
Class.armsman = makeOver('rifle', "Armsman", {count: 1, independent: true, cycle: false})
Class.cropDuster = makeOver('minigun', "Crop Duster", {count: 1, independent: true, cycle: false})
Class.hybrid = makeOver('destroyer', "Hybrid", {count: 1, independent: true, cycle: false})
Class.assistant = makeOver('single', "Assistant", {count: 1, independent: true, cycle: false})

// Helicopters
Class.helicopter = {
   PARENT: 'genericHelicopter',
   LABEL: 'Helicopter',
   UPGRADE_TOOLTIP: "Become a powerful helicopter! CREDIT TO: Yharon",
};
Class.aheli = {
   PARENT: 'genericHelicopter',
   LABEL: 'Attack Helicopter',
   UPGRADE_TOOLTIP: "A strong helicopter with high bullet penetration.",
   GUNS: [ {
         POSITION: [ 20, 7.8, 1, 20, 0, 0, 0, ],
         }, {
         POSITION: [ 20, 2, 1, 20, -3, 0, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, {damage: 0.1, health: 5, speed: 2, maxspeed: 4, reload: 0.4}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 2, 1, 20, 3, 0, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, {damage: 0.1, health: 5, speed: 2, maxspeed: 4, reload: 0.4}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 2, 1, 20, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, {damage: 0.1, health: 5, speed: 2, maxspeed: 4, reload: 0.4}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 10, 12, 1, 20, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.landmineheli = {
   PARENT: 'genericHelicopter',
   LABEL: 'Armed Helicopter',
   UPGRADE_TOOLTIP: "Launches explosive landmines on the ground.",
   GUNS: [ {
         POSITION: [ 14, 14, 1, -7, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.noSpeed, g.setLandmine, g.pounder]),
            TYPE: "heliLandmine",
         }, }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.rocketHeli = {
   PARENT: 'genericHelicopter',
   LABEL: 'AH-64 Apache',
   UPGRADE_TOOLTIP: "Launches a powerful rocket.",
   TURRETS: [
       {
           POSITION: [10, 10, 0, 0, 360, 1],
           TYPE: 'normalrotor2',
       },
       {
           POSITION: [5, -40, 0, 0, 360, 1],
           TYPE: ["tailrotor2", {COLOR: "grey"}]
       },
   ],
   GUNS: [ {
         POSITION: [ 11, 10, 0.8, 29, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.launcher, g.pounder, g.shrapnelheli, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 9, 12, 0.8, 29, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.launcher, g.pounder, g.shrapnelheli, {recoil: 0.5, speed: 1.7}]),
            TYPE: "shrapnelBulletHeli",
         }, }, {
         POSITION: [ 11, 13.5, 0.9, 19, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.firecopter = {
   PARENT: 'genericHelicopter',
   LABEL: 'Firecopter',
   UPGRADE_TOOLTIP: "Cremates enemies using fire.",
   TURRETS: [
       {
           POSITION: [10, 10, 0, 0, 360, 1],
           TYPE: 'normalrotor2',
       },
       {
           POSITION: [5, -40, 0, 0, 360, 1],
           TYPE: ["tailrotor2", {COLOR: "grey"}]
       },
   ],
   GUNS: [ {
         POSITION: [ 16, 8, 1.4, 21.5, -0.5, -7.5, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.fireheli, {size: 0.7}]),
            TYPE: "fireBullet",
         }, }, {
         POSITION: [ 16, 8, 1.4, 21.5, 0.5, 7.5, 0.3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.fireheli, {size: 0.7}]),
            TYPE: "fireBullet",
         }, }, {
         POSITION: [ 18, 10, 1.4, 21.5, 0, 0, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.fireheli, {size: 0.7}]),
            TYPE: "fireBullet",
         }, }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.aheli2 = {
   PARENT: 'genericHelicopter',
   LABEL: 'Kamov Ka-52 Alligator',
   MAX_CHILDREN: 14,
   UPGRADE_TOOLTIP: "Spawns a lot of turreted drones.",
   TURRETS: [
       {
           POSITION: [10, 10, 0, 0, 360, 1],
           TYPE: 'normalrotor2',
       },
       {
           POSITION: [5, -40, 0, 0, 360, 1],
           TYPE: ["tailrotor2", {COLOR: "grey"}]
       },
   ],
   GUNS: [ {
         POSITION: [ 12, 10, 1.5, 0, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.droneheli, {damage: 0.08, health: 2.5}]),
            TYPE: "turretedDrone2",
            STAT_CALCULATOR: "drone",
         }, }, {
         POSITION: [ 12, 10, 1.5, 0, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.droneheli, {damage: 0.08, health: 2.5}]),
            TYPE: "turretedDrone2",
            STAT_CALCULATOR: "drone",
         }, }, {
         POSITION: [ 14, 7, 1.5, 0, 0, -90, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.droneheli, {damage: 0.07, health: 2.5}]),
            TYPE: "turretedDrone",
            STAT_CALCULATOR: "drone",
         }, }, {
         POSITION: [ 14, 7, 1.5, 0, 0, 90, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.droneheli, {damage: 0.07, health: 2.5}]),
            TYPE: "turretedDrone",
            STAT_CALCULATOR: "drone",
         }, }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.aheli5 = {
   PARENT: 'genericHelicopter',
   LABEL: 'Eurocopter Tiger',
   UPGRADE_TOOLTIP: "Spawns a lot of drones.",
   MAX_CHILDREN: 8,
   GUNS: [ {
         POSITION: [ 14, 8, 1.7, 0, 11, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.droneheli, {damage: 0.05, health: 2}]),
            TYPE: "drone",
            STAT_CALCULATOR: "drone",
         }, }, {
         POSITION: [ 14, 8, 1.7, 0, -11, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.droneheli, {damage: 0.05, health: 2}]),
            TYPE: "drone",
            STAT_CALCULATOR: "drone",
         }, }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.aheli6 = {
   PARENT: 'genericHelicopter',
   LABEL: 'Mi-28N',
   UPGRADE_TOOLTIP: "Spawns a lot, more drones.",
   MAX_CHILDREN: 12,
   GUNS: [ {
         POSITION: [ 13, 12, 1.7, 0, 9, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.droneheli, {damage: 0.065, health: 2.25}]),
            TYPE: "drone",
            STAT_CALCULATOR: "drone",
         }, }, {
         POSITION: [ 13, 12, 1.7, 0, -9, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.droneheli, {damage: 0.065, health: 2.25}]),
            TYPE: "drone",
            STAT_CALCULATOR: "drone",
         }, }, {
         POSITION: [ 15, 9, 1.5, 0, 9, -90, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.droneheli, {damage: 0.065, health: 2.25}]),
            TYPE: "drone",
            STAT_CALCULATOR: "drone",
         }, }, {
         POSITION: [ 15, 9, 1.5, 0, -9, 90, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.droneheli, {damage: 0.065, health: 2.25}]),
            TYPE: "drone",
            STAT_CALCULATOR: "drone",
         }, }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.expheli = {
   PARENT: "genericHelicopter",
   LABEL: "Boeing AH-6 Little Bird",
   MAX_CHILDREN: 12,
   UPGRADE_TOOLTIP: "Launches dangerous exploding traps.",
   GUNS: [ {
         POSITION: [ 26, 10, 1, -5, 5, -90, 0, ],
         }, {
         POSITION: [ 26, 10, 1, -5, -5, 90, 0, ],
         }, {
         POSITION: [ 26, 10, 0.1, -5, 5, -90, 0, ],
         }, {
         POSITION: [ 26, 10, 0.1, -5, -5, 90, 0, ],
         }, {
         POSITION: [ 3, 10, 1.7, 13, 5, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trapheli, g.minigun, g.lowPower, {size: 1.4, speed: 0.5, range: 0.5}]),
            TYPE: "explosiveTrapHeli",
            STAT_CALCULATOR: "trap",
            MAX_CHILDREN: 3,
            DESTROY_OLDEST_CHILD: true,
         }, }, {
         POSITION: [ 3, 10, 1.7, 13, -5, 90, 1/4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trapheli, g.minigun, g.lowPower, {size: 1.4, speed: 0.5, range: 0.5}]),
            TYPE: "explosiveTrapHeli",
            STAT_CALCULATOR: "trap",
            MAX_CHILDREN: 3,
            DESTROY_OLDEST_CHILD: true,
         }, }, {
         POSITION: [ 3, 10, 1.7, 20, 5, -90, 2/4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trapheli, g.minigun, g.lowPower, {size: 1.4, speed: 0.5, range: 0.5}]),
            TYPE: "explosiveTrapHeli",
            STAT_CALCULATOR: "trap",
            MAX_CHILDREN: 3,
            DESTROY_OLDEST_CHILD: true,
         }, }, {
         POSITION: [ 3, 10, 1.7, 20, -5, 90, 3/4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pounder, g.minigun, {size: 1.4, speed: 0.5, range: 0.5}]),
            TYPE: "explosiveTrapHeli",
            STAT_CALCULATOR: "trap",
            MAX_CHILDREN: 3,
            DESTROY_OLDEST_CHILD: true,
         }, }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.airport = {
   PARENT: 'genericHelicopter',
   LABEL: 'Airport',
   UPGRADE_TOOLTIP: "Spawns very strong minions.",
   BODY: {
       SPEED: 2.3,
   },
   TURRETS: [
       {
           POSITION: [10, 10, 0, 0, 360, 1],
           TYPE: 'normalrotor2',
       },
       {
           POSITION: [5, -40, 0, 0, 360, 1],
           TYPE: ["tailrotor2", {COLOR: "grey"}]
       },
   ],
   GUNS: [ {
         POSITION: [ 20, 16, 1, 0, 0, -180, 0, ],
         }, {
         POSITION: [ 14, 19, 1, 0, 0, 180, 0, ],
         }, {
         POSITION: [ 3, 19, 1, 19, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factoryheli, g.pounder, {reload: 4.9, health: 0.4}]),
            TYPE: "miniHeli",
            MAX_CHILDREN: 2,
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.aheli4 = {
   PARENT: 'genericHelicopter',
   LABEL: 'Mil Mi-24',
   UPGRADE_TOOLTIP: "Strong tank with a lot of penetration.",
   TURRETS: [
       {
           POSITION: [11.5, 19.5, -6.5, 0, 360, 0],
           TYPE: ["auto4gunMirror", { COLOR: 17}],
       },
       {
           POSITION: [11.5, 19.5, 6.5, 0, 360, 0],
           TYPE: ["auto4gunMirror", { COLOR: 17}],
       },
       {
           POSITION: [10, 10, 0, 0, 360, 1],
           TYPE: 'normalrotor2',
       },
       {
           POSITION: [5, -40, 0, 0, 360, 1],
           TYPE: ["tailrotor2", {COLOR: "grey"}]
       },
   ],
   GUNS: [ {
         POSITION: [ 20, 5.8, 1, 20, 0, 0, 0, ],
         }, {
         POSITION: [ 20, 2, 1, 20, -1.9, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, {damage: 0.1, health: 5, speed: 2, maxspeed: 4, reload: 0.4}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 2, 1, 20, 1.9, 0, 0.35, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, {damage: 0.1, health: 5, speed: 2, maxspeed: 4, reload: 0.4}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 10, 10, 1, 20, 0, 0, 0.1, ],
         }, {
         POSITION: [ 1, 10, 1, 35, 0, 0, 0.8, ],
         }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.naheli = {
   PARENT: 'genericHelicopter',
   LABEL: 'Bell 47',
   UPGRADE_TOOLTIP: "A normal attacker helicopter, high penetration.",
   GUNS: [ {
         POSITION: [ 20, 5.8, 1, 20, 0, 0, 0, ],
         }, {
         POSITION: [ 20, 2, 1, 20, 1.9, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, {damage: 0.1, health: 5, speed: 2, maxspeed: 4, reload: 0.4}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 2, 1, 20, -1.9, 0, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, {damage: 0.1, health: 5, speed: 2, maxspeed: 4, reload: 0.4}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 10, 10, 1, 20, 0, 0, 0, ],
         }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.firecop = {
   PARENT: 'genericHelicopter',
   LABEL: 'Z-8',
   UPGRADE_TOOLTIP: "Sprays fire and burns enemies.",
   GUNS: [ {
         POSITION: [ 19, 6, 1.2, 20, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.fireheli, {size: 0.55}]),
            TYPE: "fireBullet",
         }, }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.firecopte = {
   PARENT: 'genericHelicopter',
   LABEL: 'Z-10',
   UPGRADE_ENEMIES: "Burns enemies, burns...",
   GUNS: [ {
         POSITION: [ 19, 7, 1.2, 20, -1.5, -7.5, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.fireheli, {size: 0.65}]),
            TYPE: "fireBullet",
         }, }, {
         POSITION: [ 19, 7, 1.2, 20, 1.5, 7.5, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.fireheli, {size: 0.65}]),
            TYPE: "fireBullet",
         }, }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         }, 
     ],
};
Class.swheli = {
   PARENT: 'genericHelicopter',
   LABEL: 'H-4',
   STAT_CALCULATOR: "Summons powerful swarm drones.",
   GUNS: [ {
         POSITION: [ 15, 11, 0.6, 0, 8, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarmheli]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 15, 11, 0.6, 0, -8, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarmheli]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         },
     ],
};
Class.swheli2 = {
   PARENT: 'genericHelicopter',
   LABEL: 'Z-19',
   UPGRADE_TOOLTIP: "More swarm drones, faster swarm drones!",
   GUNS: [ {
         POSITION: [ 15, 11, 0.6, 0, 8, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarmheli]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 15, 11, 0.6, 0, -8, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarmheli]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 20, 6, 0.6, 0, 8, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarmheli, g.sniper]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 20, 6, 0.6, 0, -8, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarmheli, g.sniper]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         },
     ],
};
Class.swheli3 = {
   PARENT: 'genericHelicopter',
   LABEL: 'K-MAX',
   UPGRADE_TOOLTIP: "Too much swarm drones... Dreadnought's worst nightmare",
   TURRETS: [
       {
           POSITION: [10, 10, 0, 0, 360, 1],
           TYPE: 'normalrotor2',
       },
       {
           POSITION: [5, -40, 0, 0, 360, 1],
           TYPE: ["tailrotor2", {COLOR: "grey"}]
       },
   ],
   GUNS: [ {
         POSITION: [ 15, 11, 0.6, 0, 8, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarmheli]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 15, 11, 0.6, 0, -8, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarmheli]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 13, 8, 0.6, 0, 3, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarmheliSpam]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 13, 8, 0.6, 0, -3, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarmheliSpam]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 13, 8, 0.6, 0, 13, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarmheliSpam]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 13, 8, 0.6, 0, -13, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarmheliSpam]),
            TYPE: "swarm",
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 10, 15, 1e-7, -39, 0, 0, 0, ],
         }, {
         POSITION: [ 40, 9, 0.5, 0, 0, 180, 0, ],
         },
     ],
};

// Back Mega Trapper Tanks
// Over tanks
Class.overgunner = makeOver({
    PARENT: "genericTank",
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, { speed: 0.7, maxSpeed: 0.7 }, g.flankGuard, { recoil: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
    ],
})
Class.squareShapeTest = {
    PARENT: "genericTank",
    SHAPE: "M -1 -1 V -0.152 H -0.152 V -1 Z M 0.1524 -1 V -0.152 H 1.0004 V -1 Z M -1 0.1524 V 1.0004 H -0.152 V 0.1524 Z m 1.1524 0 V 1.0004 H 1.0004 V 0.1524 Z",
    SIZE: 45,
}
Class.overtrapper = makeOver({
    PARENT: "genericTank",
    LABEL: "Trapper",
    DANGER: 6,
    STAT_NAMES: statnames.mixed,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        }
    ]
})

// Ceptions
Class.pelletCeption = makeCeption("pelleter")
Class.boreception = makeCeption("borer")
Class.puntception = makeCeption("puntgun")
Class.gunnerception = makeCeption("gunner")
Class.cruiserception = makeCeption("cruiser")
Class.OPflakgun = makeCeption("OPflakgun1")

Class.infernoception = makeCeption("inferno")
Class.doubletwinfernoautoception = makeCeption("trinferno")

// Auto tanks
Class.autoDouble = makeAuto("doubleTwin", "Auto-Double")
Class.autoSkimmer = makeAuto("skimmer", "Auto-Skimmer")
Class.autoCluster = makeAuto("cluster", "Auto-Cluster")
Class.autoAssassin = makeAuto("assassin")
Class.autoGunner = makeAuto("gunner")
Class.autoCockatiel = makeAuto("cockatiel")
Class.autoPen = makeAuto("pen")
Class.autopellet = makeAuto("pelleter")
Class.autoBorer = makeAuto("borer")
Class.autoPunt = makeAuto("puntgun")
Class.autoIncarcerator = makeAuto("incarcerator")
Class.autoInterner = makeAuto("interner")
Class.autoSingle = makeAuto("single")
Class.audioboard = makeAuto("revolutionist")
Class.autoOperator = makeAuto("operator")
Class.autoStall = makeAuto("stall")
Class.autoTwinferno = makeAuto("twinferno")
Class.autoInferno = makeAuto("inferno")
Class.autoTriAngle = makeAuto("triAngle")
Class.autoOverseer = makeAuto("overseer")
Class.autoAuto10Wrench = makeAuto("auto10Wrench")
Class.autoAuto110Wrench = makeAuto("autoAuto10Wrench")
Class.autoAuto210Wrench = makeAuto("autoAuto110Wrench")
Class.autoAuto310Wrench = makeAuto("autoAuto210Wrench")
Class.autoCruiser = makeAuto("cruiser")
Class.autoSpawner = makeAuto("spawner")
Class.autoBuilder = makeAuto("builder")
Class.autoSmasher = makeAuto({
    PARENT: "genericSmasher",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody"
        }
    ],
    SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl]
}, "Auto-Smasher", {type: "autoSmasherTurret", size: 11})

// Upgrade Paths
Class.basic.UPGRADES_TIER_1 = ["twin", "sniper", "machineGun", "flankGuard", "director", "subduer", "pounder", "pelleter", "trapper", "auto2", "laser", "desmos"]
    Class.subduer.UPGRADES_TIER_2 = ["minigun", "sprayer", "mitochondrion", "subduer2", "binary", "blowgun", "flanksubduer", "hunter", "pen", "submind"]
        Class.subduer.UPGRADES_TIER_4 = ["uzi"]
    Class.laser.UPGRADES_TIER_2 = ["laserTwin", "lightAuto2"]
        Class.laserTwin.UPGRADES_TIER_3 = ["laserMinigun", "laserPointerAuto2"]
            Class.laserMinigun.UPGRADES_TIER_4 = ["laserAuto3"]
    Class.auto2.UPGRADES_TIER_3 = ["auto3", "singleAuto2", "megaAuto2", "machineAuto2", "auto2pellet", "directorAuto2", "ion", "trapperAuto2", "lightAuto2", "revolutionist", "cephalopod"]
        Class.cephalopod.UPGRADES_TIER_4 = ["apothican", "flammenwerfer", "squid"]
        Class.megaAuto2.UPGRADES_TIER_4 = ["mega3", "builderAuto2", "launcherAuto2"]
        Class.lightAuto2.UPGRADES_TIER_4 = ["lightAuto3", "laserPointerAuto2"]
            Class.lightAuto3.UPGRADES_TIER_4 = ["lightAuto5", "laserPointerAuto3", "laserAuto3"]
                Class.laserPointerAuto3.UPGRADES_TIER_4 = ["laserAuto3"]
                    Class.lightAuto2.UPGRADES_TIER_3 = ["laserAuto2"]
        Class.launcherAuto2.UPGRADES_TIER_4 = ["skimmerAuto2", "twisterAuto2", "shrapnelAuto2"]
        Class.machineAuto2.UPGRADES_TIER_4 = ["machineAuto3", "minigunAuto2"]
        Class.machineAuto3.UPGRADES_TIER_4 = ["machineAuto5"]
        Class.directorAuto2.UPGRADES_TIER_4 = ["directorAuto3"]
        Class.directorAuto3.UPGRADES_TIER_4 = ["directorAuto5"]
        Class.trapperAuto2.UPGRADES_TIER_4 = ["trapperAuto3", "builderAuto2"]
        Class.builderAuto2.UPGRADES_TIER_4 = ["architect", "constructAuto2", "boomerAuto2", "engineerAuto2"]
        Class.trapperAuto3.UPGRADES_TIER_4 = ["architect", "trapperAuto5"]
        Class.revolutionist.UPGRADES_TIER_4 = ["subverter", "revolutionbrid", "audioboard", "bohrer", "equilibrium"]
            Class.subverter.UPGRADES_TIER_4 = ["toolbelt", "deuteron", "anarchist"]
    Class.basic.UPGRADES_TIER_2 = ["smasher", "lancer"]
    Class.pelleter.UPGRADES_TIER_2 = ["tripelleter", "puntgun", "hybridpelleter", "auto2pellet", "gunner", "cruiser", "gunnerTrapper", "borer", "autopellet", "naturalist"]
        Class.hybridpelleter.UPGRADES_TIER_3 = ["hybridborer", "hybridpunt", "hybridcruiser", "hybridgunner"]
        Class.autopellet.UPGRADES_TIER_3 = ["autoBorer", "autoPunt", "pelletCeption", "autoGunner", "autoCruiser"]
            Class.autoBorer.UPGRADES_TIER_4 = ["boreception"]
            Class.autoPunt.UPGRADES_TIER_4 = ["puntception"]
        Class.pelletCeption.UPGRADES_TIER_4 = ["gunnerception", "boreception", "puntception", "cruiserception"]
    Class.auto2pellet.UPGRADES_TIER_3 = ["auto3pelleter"]
        Class.auto3pelleter.UPGRADES_TIER_4 = ["auto5pelleter"]
    Class.tripelleter.UPGRADES_TIER_3 = ["pentapellet", "tripunt", "triborer", "tricruiser", "auto3pelleter", "trinaturalist"]
        Class.pentapellet.UPGRADES_TIER_4 = ["pentaborer", "auto5pelleter", "pentapunt"]
    Class.trinaturalist.UPGRADES_TIER_4 = ["acclimator"]
    Class.borer.UPGRADES_TIER_3 = ["autoBorer", "hybridborer", "nailgun", "triborer"]
    Class.naturalist.UPGRADES_TIER_3 = ["diploid", "trinaturalist", "entomologist", "flamegun"]
        Class.diploid.UPGRADES_TIER_4 = ["triploid"]
        Class.flamegun.UPGRADES_TIER_4 = ["firegun"]
    Class.puntgun.UPGRADES_TIER_4 = ["punter", "autoPunt", "tripunt", "flakgun", "puntMini", "hybridpunt", "trooper"]
        Class.smasher.UPGRADES_TIER_3 = ["megaSmasher", "spike", "autoSmasher", "landmine"]
        Class.healer.UPGRADES_TIER_3 = ["medic", "ambulance", "surgeon", "paramedic"]

    Class.lancer.UPGRADES_TIER_3 = ["serrator", "flanklancer"]
    Class.serrator.UPGRADES_TIER_4 = ["slayer"]
    Class.slayer.UPGRADES_TIER_4 = ["knight"]
    Class.flanklancer.UPGRADES_TIER_4 = ["hexalancer"]

    Class.twin.UPGRADES_TIER_2 = ["doubleTwin", "tripleShot", "gunner", "hexaTank", "helix"]
        Class.twin.UPGRADES_TIER_3 = ["dual", "bulwark", "musket"]
        Class.doubleTwin.UPGRADES_TIER_3 = ["tripleTwin", "hewnDouble", "autoDouble", "bentDouble"]
        Class.tripleShot.UPGRADES_TIER_3 = ["pentaShot", "spreadshot", "bentHybrid", "bentDouble", "triplet", "triplex"]

    Class.sniper.UPGRADES_TIER_2 = ["assassin", "hunter", "minigun", "rifle", "marksman"]
        Class.sniper.UPGRADES_TIER_3 = ["bushwhacker"]
        Class.assassin.UPGRADES_TIER_3 = ["ranger", "falcon", "stalker", "autoAssassin", "single", "deadeye"]
        Class.hunter.UPGRADES_TIER_3 = ["predator", "xHunter", "poacher", "ordnance", "dual", "nimrod"]
        Class.rifle.UPGRADES_TIER_3 = ["musket", "crossbow", "armsman", "revolver"]
        Class.marksman.UPGRADES_TIER_3 = ["deadeye", "nimrod", "revolver", "fork"]

    Class.machineGun.UPGRADES_TIER_2 = ["artillery", "minigun", "gunner", "sprayer", "inferno", "naturalist", "machineAuto2"]
        Class.inferno.UPGRADES_TIER_3 = ["firenado", "twinferno", "backburner", "pyro", "hybridInferno", "flaregun", "autoInferno"]
            Class.firenado.UPGRADES_TIER_4 = ["typhoonInferno"]
            Class.backburner.UPGRADES_TIER_4 = ["fireball", "oven"]
            Class.pyro.UPGRADES_TIER_4 = ["oven"]
            Class.flaregun.UPGRADES_TIER_4 = ["forestfire"]
            Class.autoInferno.UPGRADES_TIER_4 = ["infernoception", "autoTwinferno"]
            Class.twinferno.UPGRADES_TIER_4 = ["trinferno", "autoTwinferno", "doubleferno"]
        Class.minigun.UPGRADES_TIER_3 = ["streamliner", "nailgun", "cropDuster", "barricade", "vulture", "laserMinigun", "minigunAuto2"]
        Class.machineGun.UPGRADES_TIER_3 = ["machineTrapper"]
        Class.gunner.UPGRADES_TIER_3 = ["autoGunner", "nailgun", "auto4", "machineGunner", "gunnerTrapper", "cyclone", "overgunner"]
            Class.autoGunner.UPGRADES_TIER_4 = ["gunnerception"]
        Class.sprayer.UPGRADES_TIER_3 = ["redistributor", "phoenix", "atomizer", "focal"]

    Class.flankGuard.UPGRADES_TIER_2 = ["hexaTank", "triAngle", "auto3", "trapGuard", "triTrapper"]
        Class.flankGuard.UPGRADES_TIER_3 = ["tripleTwin", "quadruplex"]
        Class.hexaTank.UPGRADES_TIER_3 = ["octoTank", "cyclone", "hexaTrapper"]
        Class.triAngle.UPGRADES_TIER_3 = ["fighter", "booster", "falcon", "bomber", "autoTriAngle", "surfer", "eagle", "phoenix", "vulture", "crow"]
        Class.auto3.UPGRADES_TIER_3 = ["auto5", "mega3", "banshee", "crowbarTank", "directorAuto3", "trapperAuto3", "auto3pelleter", "machineAuto3"]
            Class.crowbarTank.UPGRADES_TIER_4 = ["pryer", "crank", "chisel", "lever", "spindle", "autoCrowbar", "dualbar", "spanner", "wrenchTank"]
        Class.auto4.UPGRADES_TIER_3 = ["batter4", "auto6"]
        Class.mega3.UPGRADES_TIER_3 = ["mega5", "ultra3"]

    Class.director.UPGRADES_TIER_2 = ["overseer", "cruiser", "underseer", "spawner", "directorAuto2"]
        Class.director.UPGRADES_TIER_3 = ["manager", "bigCheese"]
        Class.overseer.UPGRADES_TIER_3 = ["overlord", "overtrapper", "overgunner", "banshee", "autoOverseer", "overdrive", "commander"]
        Class.cruiser.UPGRADES_TIER_3 = ["carrier", "battleship", "fortress", "autoCruiser", "commander", "tricruiser"]
            Class.autoCruiser.UPGRADES_TIER_4 = ["cruiserception"]
        Class.underseer.UPGRADES_TIER_3 = ["necromancer", "maleficitor", "infestor"]
        Class.spawner.UPGRADES_TIER_3 = ["factory", "autoSpawner", "ranch"]

    Class.pounder.UPGRADES_TIER_2 = ["destroyer", "kinetic", "builder", "artillery", "launcher"]
        Class.kinetic.UPGRADES_TIER_3 = ["shockRifle", "miniRocketShooter", "ion"]
            Class.shockRifle.UPGRADES_TIER_4 = ["antimatRifle", "icbm", "sprite"]
            Class.ion.UPGRADES_TIER_4 = ["sprite"]
                Class.miniRocketShooter.UPGRADES_TIER_4 = ["icbm"]
        Class.pounder.UPGRADES_TIER_3 = ["shotgun", "eagle"]
        Class.destroyer.UPGRADES_TIER_3 = ["conqueror", "annihilator", "hybrid", "construct"]
        Class.artillery.UPGRADES_TIER_3 = ["mortar", "ordnance", "beekeeper", "fieldGun", "forger"]
        Class.launcher.UPGRADES_TIER_3 = ["skimmer", "twister", "swarmer", "cluster", "rocketeer", "fieldGun", "miniRocketShooter"]
            Class.skimmer.UPGRADES_TIER_4 = ["autoSkimmer", "hybridSkimmer", "hyperskimmer", "ream", "ladle", "bazooka", "torpedo", "bowler", "grazer", "skidder", "ticker", "scorcher"]
            Class.cluster.UPGRADES_TIER_4 = ["autoCluster", "gimmicker", "nesterTank", "hypercluster", "strafe", "molotov", "firework", "grenade", "ticker", "mine", "shell", "neutron", "bombard", "flock", "recursor"]
        Class.rocketeer.UPGRADES_TIER_4 = ["leviathan", "firework"]

    Class.trapper.UPGRADES_TIER_2 = ["builder", "triTrapper", "trapGuard", "pen", "mechTank", "trapperAuto2"]
        Class.trapper.UPGRADES_TIER_3 = ["barricade", "overtrapper", "machineTrapper"]
        Class.trapper.UPGRADES_TIER_4 = ["megaTrapper", "mineLauncher"]
        Class.mineLauncher.UPGRADES_TIER_4 = ["bomb", "grenadeLauncher", "minefield"]
        Class.megaTrapper.UPGRADES_TIER_4 = ["bomb"]
        Class.builder.UPGRADES_TIER_3 = ["construct", "autoBuilder", "engineer", "boomer", "assembler", "architect", "conqueror"]
            Class.architect.UPGRADES_TIER_4 = ["mastermind", "originator", "ricochet", "artist", "paddock", "castleAuto", "inventor", "designer", "architectGuard"]
        Class.construct.UPGRADES_TIER_4 = ["constructAuto2"]
        Class.engineer.UPGRADES_TIER_4 = ["engineerAuto2"]
        Class.boomer.UPGRADES_TIER_4 = ["boomerAuto2"]
        Class.triTrapper.UPGRADES_TIER_3 = ["fortress", "hexaTrapper", "septaTrapper", "architect"]
        Class.trapGuard.UPGRADES_TIER_3 = ["bushwhacker", "gunnerTrapper", "bomber", "conqueror", "bulwark"]

    Class.desmos.UPGRADES_TIER_2 = ["helix", "sidewinder", "undertow"]
        Class.helix.UPGRADES_TIER_3 = ["triplex", "quadruplex", "coil", "duplicator"]
        Class.sidewinder.UPGRADES_TIER_3 = ["coil", "python", "ranch", "oroboros", "cocci"]
        Class.undertow.UPGRADES_TIER_3 = ["riptide"]
        Class.repeater.UPGRADES_TIER_3 = ["iterator", "duplicator"]

    Class.pen.UPGRADES_TIER_4 = ["stall", "incarcerator", "operator", "cockatiel", "interner", "autoPen", "fortifier"]
    Class.autoPen.UPGRADES_TIER_4 = ["megaAutoPen", "autoStall", "autoIncarcerator", "autoOperator", "autoInterner", "autoCockatiel"]
    Class.stall.UPGRADES_TIER_4 = ["hurdle", "autoStall", "paddock", "delayer"]
    Class.operator.UPGRADES_TIER_4 = ["jailer", "cacatua", "utilizer", "autoOperator"]
    Class.incarcerator.UPGRADES_TIER_4 = ["lockup", "jailer", "autoIncarcerator"]
    Class.interner.UPGRADES_TIER_4 = ["delayer", "utilizer", "autoInterner"]
    Class.cockatiel.UPGRADES_TIER_4 = ["parakeet", "cacatua", "autoCockatiel"]
    Class.ranger.UPGRADES_TIER_4 = ["crow"]
    Class.assassinTrapper.UPGRADES_TIER_4 = ["rangerTrapper"]
    Class.single.UPGRADES_TIER_4 = ["duo", "sharpshooter", "gadgetGun", "ternion", "coordinator", "bruiser", "tricker", "mono", "avian", "custodian", "assistant", "autoSingle"]
    Class.botbasic.UPGRADES_TIER_0 = [["ctGuns", "extraGuns"]]