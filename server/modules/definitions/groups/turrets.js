const { combineStats, makeDeco, weaponArray, makeTurret } = require('../facilitators.js');
const { base } = require('../constants.js');
const g = require('../gunvals.js');

// Radial Auto Guns
Class.autoTankGun = makeTurret({
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.half_recoil]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.miniSniperTurret = makeTurret({
    GUNS: [
        {
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.sniper, g.faster]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0]
        }
    ]
}, {canRepel: true, limitFov: true, fov: 3.5})
Class.weakAutoTankGun = makeTurret({
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.half_recoil, g.lowPower]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.autoTankGunHalfReload = makeTurret({
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto_turret, g.half_reload]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.decoTankGun = {
    TURRETS: [
         {
             POSITION: [ 12, 0, 0, 0, 0, 1 ],
             TYPE: ["genericEntity", {COLOR: "white"}],
         },
    ],
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.half_recoil]),
                TYPE: "bullet",
            },
        },
    ],
};
Class.CminigunTurret = {
    TURRETS: [
         {
             POSITION: [ 12, 0, 0, 0, 0, 1 ],
             TYPE: ["genericEntity", {COLOR: "white"}],
         },
    ],
    GUNS: [
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.half_power]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.half_power]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.half_power]),
                TYPE: "bullet"
            }
        }
    ]
};
Class.ClauncherTurret = {
    TURRETS: [
         {
             POSITION: [ 12, 0, 0, 0, 0, 1 ],
             TYPE: ["genericEntity", {COLOR: "white"}],
         },
    ],
    GUNS: [
        {
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.fast, g.low_power]),
                TYPE: "minimissile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
};
Class.sniperGuard = {
   TURRETS: [
        {
            POSITION: [ 12, 0, 0, 0, 0, 1 ],
            TYPE: ["genericEntity", {COLOR: "white"}],
        },
   ],
   GUNS: [ {
         POSITION: [ 13, 8, 1, 0, 0, 180, 0, ],
         }, {
         POSITION: [ 4, 8, 1.7, 13, 0, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
         }, }, {
         POSITION: [ 24, 8.5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.miniSteamTurret = makeTurret({
    GUNS: [
        {
            POSITION: [14.5, 14.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 14.5, 1.1, 14.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.auto]),
                TYPE: "setTrap",
                STAT_CALCULATOR: "block"
            }
        }
    ]
}, {canRepel: true, limitFov: true, fov: 3})
Class.eye = {
    COLOR: "black",
    TURRETS: [
        {
            POSITION: [11, 4, 0, 0, 360, 1],
            TYPE: ["genericEntity", {COLOR: "orange"}],
        },
    ],
};
Class.halloweenEye = {
    COLOR: "black",
    TURRETS: [
        {
            POSITION: [10, 5, 0, 0, 360, 1],
            TYPE: ["genericEntity", {COLOR: "#ff9000"}],
        },
    ],
};
Class.orbitalEye = {
    COLOR: "black",
    TURRETS: [
        {
            POSITION: [11, 4, 0, 0, 360, 1],
            TYPE: ["genericEntity", {COLOR: "veryLightGrey"}],
        },
    ],
};
Class.plasmaTurret = makeTurret({
   GUNS: [ {
         POSITION: [ 28, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.flankGuard, g.one_fourth_reload, g.one_fifth_reload, g.auto, g.less_damage, g.less_pen, g.less_power, g.no_recoil]),
            TYPE: "plasmaBullet",
         }, }, {
         POSITION: [ 5.5, 11.5, 1, 19, 0, 0, 0, ],
         }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.shrapnelGustav = {
   GUNS: weaponArray([
         {
         POSITION: [ 19.5, 7, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.shrapnelNuke, g.fake]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 9.5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.shrapnelNuke]),
            TYPE: "miniNuke",
         }, }, {
         POSITION: [ 8, 9.5, -1.4, 5, 0, 0, 0, ],
         }, 
     ], 2)
};
Class.plasmaSnipeTurret = makeTurret({
   GUNS: [ {
         POSITION: [ 32, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.pounder, g.flankGuard, g.one_fourth_reload, g.one_fifth_reload, g.auto, g.less_damage, g.less_pen, g.less_power, g.no_recoil]),
            TYPE: "plasmaBullet",
         }, }, {
         POSITION: [ 5.5, 11.5, 1, 23, 0, 0, 0, ],
         }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.autoTankGun9 = makeTurret({
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.half_recoil, g.half_damage, g.half_reload]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.pelletAutoTurret = makeTurret({
   GUNS: [ {
         POSITION: [ 17, 2, 1, 0, 3, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.half_reload]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 2, 1, 0, -3, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pure_gunner, g.faster, g.pellet, g.half_reload]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.naturalistFireTurret = makeTurret({
   GUNS: weaponArray([
         {
         POSITION: [ 5, 2, -1.6, 12, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.fire, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.less_damage, g.more_health, g.firestick]),
            TYPE: "fireBullet",
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ], 2)
}, {canRepel: true, limitFov: true, fov: 3})
Class.naturalistFireTurretElite = makeTurret({
   GUNS: weaponArray([
         {
         POSITION: [ 5, 2, -1.6, 12, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.fire, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.less_damage, g.more_health, g.firestick]),
            TYPE: "fireBullet",
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ], 3)
}, {canRepel: true, limitFov: true, fov: 3})
Class.entomologistKatrina = makeTurret({
   GUNS: weaponArray([
         {
         POSITION: [ 5, 2, -1.95, 12, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.machineGun, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.more_health]),
            TYPE: "bee",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ], 2)
}, {canRepel: true, limitFov: true, fov: 3})
Class.entomologistKatrinaElite = makeTurret({
   GUNS: weaponArray([
         {
         POSITION: [ 5, 2, -1.95, 12, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.machineGun, g.pure_gunner, g.faster, g.pellet, g.double_reload, g.more_health, g.less_damage]),
            TYPE: "bee",
         }, }, {
         POSITION: [ 4.5, 8.5, -1.6, 7.5, 0, 0, 0, ],
         }, 
     ], 4)
}, {canRepel: true, limitFov: true, fov: 3})
Class.flamegunKatrina = makeTurret({
   GUNS: [ {
         POSITION: [ 18, 13, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow, g.pounder, g.less_reload]),
            TYPE: ["flamegunBullet", {MOTION_TYPE: "colorthingy4", COLOR: "#474747"}],
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 16, 11, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow, g.pounder, g.less_reload, g.fake]),
            TYPE: ["bullet", {MOTION_TYPE: "colorthingy4"}],
            COLOR: "#474747",
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 14, 9, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow, g.pounder, g.less_reload, g.fake]),
            TYPE: ["bullet", {MOTION_TYPE: "colorthingy4"}],
            AUTOFIRE: true,
         }, }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.flamegunKatrinaElite = makeTurret({
   GUNS: [ {
         POSITION: [ 18, 13, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow, g.pounder, g.destroyer, g.less_reload, g.less_reload]),
            TYPE: ["flamegunBullet", {MOTION_TYPE: "colorthingy4", COLOR: "#474747"}],
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 16, 11, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow, g.pounder, g.destroyer, g.less_reload, g.less_reload, g.fake]),
            TYPE: ["bullet", {MOTION_TYPE: "colorthingy4"}],
            COLOR: "#474747",
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 14, 9, 1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.sidethrow, g.pounder, g.destroyer, g.less_reload, g.less_reload, g.fake]),
            TYPE: ["bullet", {MOTION_TYPE: "colorthingy4"}],
            AUTOFIRE: true,
         }, }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.autoLancerSpawner = makeTurret({
   GUNS: [ {
         POSITION: [ 5, 11, 1, 9.5, 0, -90, 0, ],
         }, {
         POSITION: [ 5, 11, 1, 9.5, 0, 90, 0, ],
         }, {
         POSITION: [ 2, 14, 1, 14.5, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: "lancerMinion",
            MAX_CHILDREN: 1,
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 2, 14, 1, 14.5, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: "lancerMinion",
            MAX_CHILDREN: 1,
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 12, 14, 1, -0.5, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: "lancerMinion",
            MAX_CHILDREN: 1,
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 12, 14, 1, -0.5, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory]),
            TYPE: "lancerMinion",
            MAX_CHILDREN: 1,
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 20, 0.3, -55, 0, 0, -90, 0, ],
         }, {
         POSITION: [ 20, 0.3, -55, 0, 0, 90, 0, ],
         }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.autoLancerSpawnerElite = makeTurret({
   GUNS: [ {
         POSITION: [ 5, 12.5, 1, 9.5, 0, -90, 0, ],
         }, {
         POSITION: [ 5, 12.5, 1, 9.5, 0, 90, 0, ],
         }, {
         POSITION: [ 2, 15.5, 1, 14.5, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.destroyer]),
            TYPE: "lancerMinion",
            MAX_CHILDREN: 1,
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 2, 15.5, 1, 14.5, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.destroyer]),
            TYPE: "lancerMinion",
            MAX_CHILDREN: 1,
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 12, 15.5, 1, -0.5, 0, -90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.destroyer]),
            TYPE: "lancerMinion",
            MAX_CHILDREN: 1,
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 12, 15.5, 1, -0.5, 0, 90, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.destroyer]),
            TYPE: "lancerMinion",
            MAX_CHILDREN: 1,
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 20, 0.3, -55, 0, 0, -90, 0, ],
         }, {
         POSITION: [ 20, 0.3, -55, 0, 0, 90, 0, ],
         }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.autoRifleGun = makeTurret({
    GUNS: [
        {
            POSITION: [20, 12, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.flankGuard]),
                TYPE: "bullet"
            }
        }
    ]
}, {canRepel: true, limitFov: true, fov: 3})
Class.stallAutoGun = makeTurret({
   HAS_NO_RECOIL: true,
   GUNS: [ {
         POSITION: [ 24, 9.5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 18, 16.5, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 2, 16.5, 1.1, 19, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap1, g.flankGuard]),
            TYPE: "setTrap",
            STAT_CALCULATOR: "block",
         }, }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.autoRailgun = makeTurret({
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
}, {canRepel: true, limitFov: true, fov: 3})
Class.autoSentryLeaf = makeTurret({
   SHAPE: "M -0.35 0 L 1.05 0 C 1.05 -0.7 0.7 -1.05 0 -1.05 C -0.35 -1.05 -0.7 -0.7 -1.4 0 C -0.7 0.7 -0.35 1.05 0 1.05 C 0.7 1.05 1.05 0.7 1.05 0",
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
}, {canRepel: true, limitFov: true, fov: 3})
Class.hexaShotgun = makeTurret({
    GUNS: weaponArray([
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [15, 14, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, g.fake]),
                TYPE: "casing",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [8, 14, -1.3, 4, 0, 0, 0],
        },
    ], 3, 0.5),
}, {canRepel: true, limitFov: true, fov: 3})
Class.autoDestroyerTwin = makeTurret({
   GUNS: [ {
         POSITION: [ 20, 15, 1, 0, -10, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.twin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 20, 15, 1, 0, 10, 0, 0.3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.twin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 6, 8.7, 4, -6, 0, 0, 0.6, ],
         }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.spawnerception = {
   GUNS: [ {
         POSITION: [ 5, 14, 1, 17, 0, -90, 0, ],
         }, {
         POSITION: [ 5, 14, 1, 17, 0, 90, 0, ],
         }, {
         POSITION: [ 13, 18, 1, 5, 0, -90, 0, ],
         }, {
         POSITION: [ 13, 18, 1, 5, 0, 90, 0, ],
         }, {
         POSITION: [ 3, 18, 1, 22, 0, -90, 0, ],
         PROPERTIES: {
            MAX_CHILDREN: 2,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.twin, g.weak, g.weak, g.weak]),
            TYPE: "minion",
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 3, 18, 1, 22, 0, 90, 0.15, ],
         PROPERTIES: {
            MAX_CHILDREN: 2,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.twin, g.weak, g.weak, g.weak]),
            TYPE: "minion",
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, 
    ],
},
Class.opSpawnerception = {
   GUNS: [ {
         POSITION: [ 5, 14, 1, 17, 0, -90, 0, ],
         }, {
         POSITION: [ 5, 14, 1, 17, 0, 90, 0, ],
         }, {
         POSITION: [ 13, 18, 1, 5, 0, -90, 0, ],
         }, {
         POSITION: [ 13, 18, 1, 5, 0, 90, 0, ],
         }, {
         POSITION: [ 3, 18, 1, 22, 0, -90, 0, ],
         PROPERTIES: {
            MAX_CHILDREN: 12,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.twin, g.weak, g.weak, g.machineGun, g.streamliner]),
            TYPE: "minion",
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 3, 18, 1, 22, 0, 90, 0.15, ],
         PROPERTIES: {
            MAX_CHILDREN: 12,
            SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.twin, g.weak, g.weak, g.machineGun, g.streamliner]),
            TYPE: "minion",
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, 
    ],
},
Class.autoLaser = makeTurret({
    GUNS: [ {
          POSITION: [ 3, 5, 2, 30, 0, 0, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.laserBeamAuto]),
             TYPE: "laserBeam",
          }, }, {
          POSITION: [ 3, 9, -2, 27, 0, 0, 0, ],
          }, {
          POSITION: [ 26, 10, 1, 0, 0, 0, 0, ],
          }, {
          POSITION: [ 19, 2, 1, 0, 0, 0, 0, ],
          }, {
          POSITION: [ 19, 2, 1, 0, 0, -7.5, 0, ],
          }, {
          POSITION: [ 19, 2, 1, 0, 0, 7.5, 0, ],
         }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.autoLaserTwin = makeTurret({
       GUNS: [ {
         POSITION: [ 3, 4, 2, 32, -5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.laserBeamAuto, g.twin]),
            TYPE: "laserBeam",
         }, }, {
         POSITION: [ 3, 4, 2, 32, 5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.laserBeamAuto, g.twin]),
            TYPE: "laserBeam",
         }, }, {
         POSITION: [ 3, 5, -2, 28, 5, 0, 0, ],
         }, {
         POSITION: [ 3, 5, -2, 28, -5, 0, 0, ],
         }, {
         POSITION: [ 27, 7, 1, 0, -5, 0, 0, ],
         }, {
         POSITION: [ 27, 7, 1, 0, 5, 0, 0, ],
         }, {
         POSITION: [ 18, 1, 1, 0, -5, -7.5, 0, ],
         }, {
         POSITION: [ 18, 1, 1, 0, 5, 7.5, 0, ],
         }, {
         POSITION: [ 22, 1, 1, 0, 0, 0, 0, ],
         }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.autoLaserDestroyer = makeTurret({
       GUNS: [ {
         POSITION: [ 3, 7, 2, 31, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.laserBeamAuto, g.destroyer]),
            TYPE: "laserBeamBig",
         }, }, {
         POSITION: [ 3, 12, -2, 27, 0, 0, 0, ],
         }, {
         POSITION: [ 26, 18, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 20, 4, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 20, 4, 1, 0, 0, -15, 0, ],
         }, {
         POSITION: [ 20, 4, 1, 0, 0, 15, 0, ],
         }, {
         POSITION: [ 26, 1, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 26, 1, 1, 0, 0, -15, 0, ],
         }, {
         POSITION: [ 26, 1, 1, 0, 0, 15, 0, ],
         }, {
         POSITION: [ 5, 1, 7, 21, 0, 0, 0, ],
         }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.autoLaserAnnihilator = makeTurret({
       GUNS: [ {
         POSITION: [ 5, 11, 2, 31, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.laserBeamAuto, g.annihilator, g.destroyer]),
            TYPE: "laserBeam",
         }, }, {
         POSITION: [ 5, 17, -2, 25, 0, 0, 0, ],
         }, {
         POSITION: [ 24, 27, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 7, 5.5, 5, -8, 0, 0, 0, ],
         }, {
         POSITION: [ 32, 2.5, 3, -8, 0, 0, 0, ],
         }, {
         POSITION: [ 32, 0.5, 1, -8, 0, -15, 0, ],
         }, {
         POSITION: [ 32, 0.5, 1, -8, 0, 15, 0, ],
         }, {
         POSITION: [ 34, 1.5, 1, -8, 0, -30, 0, ],
         }, {
         POSITION: [ 34, 1.5, 1, -8, 0, 30, 0, ],
         }, {
         POSITION: [ 34, 1.5, 1, -8, 0, -22.5, 0, ],
         }, {
         POSITION: [ 34, 1.5, 1, -8, 0, 22.5, 0, ],
         }, {
         POSITION: [ 22, 0.5, 1, -8, 0, -75, 0, ],
         }, {
         POSITION: [ 22, 0.5, 1, -8, 0, 75, 0, ],
         }, {
         POSITION: [ 22, 0.5, 1, -8, 0, -67.5, 0, ],
         }, {
         POSITION: [ 22, 0.5, 1, -8, 0, 67.5, 0, ],
         }, {
         POSITION: [ 22, 0.5, 1, -8, 0, 45, 0, ],
         }, {
         POSITION: [ 22, 0.5, 1, -8, 0, -45, 0, ],
         }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})

Class.autoRanger = makeTurret({
    GUNS: [
        {
            POSITION: [32, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, { reload: 0.5}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
}, {limitFov: true, independent: true})
Class.autoBattleshipTurret = makeTurret({
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
}, {limitFov: true, independent: true})
Class.autoConstructt = makeTurret({
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
}, {limitFov: true, independent: true})
Class.bansheegun = makeTurret({
    GUNS: [
        {
            POSITION: [26, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, { reload: 1.5 }]),
                TYPE: "bullet",
            },
        },
    ],
}, {limitFov: true, independent: true})
Class.auto4gun = makeTurret({
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, -3.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, { speed: 0.7, maxSpeed: 0.7 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, { speed: 0.7, maxSpeed: 0.7 }]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true})
Class.auto4gun7 = makeTurret({
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, -3.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, g.giant_damage, g.faster, { speed: 1, maxSpeed: 1 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, g.giant_damage, g.faster, { speed: 1, maxSpeed: 1 }]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true})
Class.auto4gun9 = makeTurret({
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, -3.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, g.half_damage, g.half_reload, { speed: 0.7, maxSpeed: 0.7 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, g.half_damage, g.half_reload, { speed: 0.7, maxSpeed: 0.7 }]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true})
Class.auto4gunMirror = makeTurret({
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, -3.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, {speed: 1.6, maxspeed: 2}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, {speed: 1.6, maxspeed: 2}]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true})
Class.batter4gun = makeTurret({
    GUNS: [ {
          POSITION: [ 16, 4, 1, 0, -3.5, 0, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, { speed: 0.7, maxSpeed: 0.7 }]),
             TYPE: "bullet",
          }, }, {
          POSITION: [ 16, 4, 1, 0, 3.5, 0, 0, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, { speed: 0.7, maxSpeed: 0.7 }]),
             TYPE: "bullet",
          }, }, {
          POSITION: [ 18, 4, 1, 0, 0, 0, 0.5, ],
          PROPERTIES: {
             SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, { speed: 0.7, maxSpeed: 0.7 }]),
             TYPE: "bullet",
         }, }, 
     ],
}, {canRepel: true, limitFov: true})
Class.gunner4gun = makeTurret({
    GUNS: [ {
         POSITION: [ 16, 4, 1, 0, -6.5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, g.gunner, { speed: 0.7, maxSpeed: 0.7 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 4, 1, 0, 6.5, 0, 0.75, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, g.gunner, { speed: 0.7, maxSpeed: 0.7 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 4, 1, 2, 3.5, 0, 0.25, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, g.gunner, { speed: 0.7, maxSpeed: 0.7 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 4, 1, 2, -3.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, g.gunner, { speed: 0.7, maxSpeed: 0.7 }]),
            TYPE: "bullet",
         }, }, 
     ],
}, {canRepel: true, limitFov: true})
Class.bigauto4gun = makeTurret({
    GUNS: [
        {
            POSITION: [14, 5, 1, 0, -4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.twin, g.power, { reload: 2 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 5, 1, 0, 4.5, 0, 0.33],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.twin, g.power, { reload: 2 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 5, 1, 0, 0, 0, 0.67],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.twin, g.power, { reload: 2 }]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.giantauto4gun = makeTurret({
   GUNS: [ {
         POSITION: [ 14.5, 6.5, 1, 0, -4.85, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.twin, g.power, g.more_damage, g.more_health, { reload: 2 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14.5, 6.5, 1, 0, 4.85, 0, 0.33, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.twin, g.power, g.more_damage, g.more_health, { reload: 2 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16.5, 6.5, 1, 0, 0, 0, 0.67, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.twin, g.power, g.more_damage, g.more_health, { reload: 2 }]),
            TYPE: "bullet",
         }, }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.megaAutoTankGun = makeTurret({
    GUNS: [
        {
            POSITION: [22, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true})
Class.megaAutoTurret = makeTurret({
    GUNS: [
        {
            POSITION: [22, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.pelleter, g.power, { recoil: 1.15 }, g.turret]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true})
Class.megaAutoTankGun9 = makeTurret({
    GUNS: [
        {
            POSITION: [22, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.half_damage, g.half_reload]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true})
Class.ultraAutoTankGun = makeTurret({
   GUNS: [ {
         POSITION: [ 22, 19, 1, 0, 0, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator]),
            TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true})
Class.architectGun = makeTurret({
    GUNS: [
        {
            POSITION: [20, 16, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 16, 1.1, 20, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.flankGuard]),
                TYPE: "setTrap",
                STAT_CALCULATOR: "block"
            },
        },
    ],
}, {canRepel: true, limitFov: true, fov: 3})

// NPC turrets
Class.trapTurret = makeTurret({
    GUNS: [
        {
            POSITION: [16, 14, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 14, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.lowPower, { shudder: 0.4, speed: 0.9, reload: 2 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}, {limitFov: true, aiSettings: {SKYNET: true, FULL_VIEW: true, independent: true, extraStats: []}})
Class.baseTrapTurret = makeTurret({
    GUNS: [
        {
            POSITION: [16, 15.5, 1, 0, 0, 0, 0],
        }, {
            POSITION: [4, 15.5, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pounder, g.hexaTrapper, {reload: 1.3, size: 1.2, health: 1.35, damage: 1.4, speed: 0.9, shudder: 0.1}]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
                AUTOFIRE: true,
            },
        },
    ],
}, {independent: true, hasAI: false, extraStats: []})
Class.baseMegaTrapTurret = makeTurret({
    GUNS: [
        {
            POSITION: [16, 17, 1, 0, 0, 0, 0],
        }, {
            POSITION: [5, 17, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pounder, g.hexaTrapper, {reload: 1.315, size: 1.25, health: 1.6, damage: 1.58, speed: 0.9, shudder: 0.1}]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
                AUTOFIRE: true,
            },
        },
    ],
}, {independent: true, hasAI: false, extraStats: []})
Class.halloweenBaseTrapTurret = makeTurret({
   GUNS: [ {
         POSITION: [ 16, 14, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            COLOR: "#4d4337",
         }, }, {
         POSITION: [ 16, 17, 0.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            COLOR: "#7c664f",
         }, }, {
         POSITION: [ 4, 14, 1.8, 16, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pounder, g.hexaTrapper, {reload: 1.3, size: 1.2, health: 1.35, damage: 1.4, speed: 0.9, shudder: 0.1}]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
            AUTOFIRE: true,
            COLOR: "#4d4337",
         }, }, {
         POSITION: [ 4, 8, 1.3, 16, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.pounder, g.hexaTrapper, g.fake, {reload: 1.3, size: 1.2, health: 1.35, damage: 1.4, speed: 0.9, shudder: 0.1}]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
            AUTOFIRE: true,
            COLOR: "#7c664f",
         }, }, 
     ],
}, {independent: true, hasAI: false, extraStats: []})
Class.terrestrialTrapTurret = makeTurret({
    GUNS: [
        {
            POSITION: [13, 14, 1, 0, 0, 0, 0],
        }, {
            POSITION: [4, 14, 1.8, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pounder, g.hexaTrapper, {reload: 1.3, size: 1.2, health: 1.35, damage: 1.4, speed: 0.9, shudder: 0.1}]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
                AUTOFIRE: true,
            },
        },
    ],
}, {independent: true, hasAI: false, extraStats: []})
Class.basicialTrapTurret = makeTurret({
    GUNS: [
        {
            POSITION: [13, 8, 1, 0, 0, 0, 0],
        }, {
            POSITION: [4, 8, 1.8, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexaTrapper, {reload: 1.3, size: 1.2, health: 1.35, damage: 1.4, speed: 0.9, shudder: 0.1}]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
                AUTOFIRE: true,
            },
        },
    ],
}, {independent: true, hasAI: false, extraStats: []})
const shottrapTurretProperties = {
    SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.shotgun, g.machineGun, { reload: 0.65, speed: 0.7, maxSpeed: 0.1, damage: 0.7, range: 0.5 }]),
    AUTOFIRE: true,
    TYPE: "shotTrapBox",
    STAT_CALCULATOR: "block",
}
Class.shottrapTurret = makeTurret({
    GUNS: [{
        POSITION: [ 4, 1.5, 1, 11, -3, 0, 0 ], PROPERTIES: shottrapTurretProperties,
    }, {
        POSITION: [ 4, 2,   1, 11,  3, 0, 0 ], PROPERTIES: shottrapTurretProperties,
    }, {
        POSITION: [ 4, 1.5, 1, 13,  0, 0, 0 ], PROPERTIES: shottrapTurretProperties,
    }, {
        POSITION: [ 1, 2,   1, 11,  1, 0, 0 ], PROPERTIES: shottrapTurretProperties,
    }, {
        POSITION: [ 1, 2,   1, 12, -1, 0, 0 ], PROPERTIES: shottrapTurretProperties,
    }, {
        POSITION: [ 1, 1.5, 1, 11,  1, 0, 0 ], PROPERTIES: shottrapTurretProperties,
    }, {
        POSITION: [ 1, 2,   1, 13, -1, 0, 0 ], PROPERTIES: shottrapTurretProperties,
    }, {
        POSITION: [ 1, 2.5, 1, 13,  1, 0, 0 ], PROPERTIES: shottrapTurretProperties,
    }, {
        POSITION: [ 1, 2,   1, 13,  2, 0, 0 ], PROPERTIES: shottrapTurretProperties,
    }, {
        POSITION: [ 1, 2,   1, 13, -2, 0, 0 ], PROPERTIES: shottrapTurretProperties,
    }, {
        POSITION: [ 1, 2.5, 1, 13, -2, 0, 0 ], PROPERTIES: shottrapTurretProperties,
    }, {
        POSITION: [ 1, 2.5, 1, 13,  2, 0, 0 ], PROPERTIES: shottrapTurretProperties,
    }, {
        POSITION: [ 1, 2,   1, 13, -2, 0, 0 ], PROPERTIES: shottrapTurretProperties,
    }, {
        POSITION: [ 16, 14, -1.4,  0, 0, 0, 0 ], 
    }, {
        POSITION: [  6, 14,  1.6, 16, 0, 0, 0 ], PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, g.shotgun, g.machineGun, {reload: 0.65}, g.fake]),
            AUTOFIRE: true,
            TYPE: "bullet"
        }
    }]
}, {limitFov: true, aiSettings: {SKYNET: true, FULL_VIEW: true, independent: true, extraStats: []}})
Class.machineTripleTurret = {
    PARENT: "genericTank",
    FACING_TYPE: ["spin", {speed: 0.06}],
    INDEPENDENT: true,
    COLOR: -1,
    GUNS: weaponArray({
        POSITION: [12, 10, 1.4, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.flankGuard]),
            TYPE: "bullet",
            AUTOFIRE: true,
        },
    }, 3)
}
Class.fiveRailgun = {
    PARENT: "genericTank",
    FACING_TYPE: ["spin", {speed: 0.09}],
    INDEPENDENT: true,
    COLOR: 7,
    GUNS: weaponArray({
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
        },
    }, 5)
}
Class.launcherTurret = makeTurret('launcher', {canRepel: true, limitFov: true, extraStats: []})
Class.skimmerTurret = makeTurret('skimmer', {canRepel: true, limitFov: true, extraStats: [], color: 'mirror'})
Class.halloweenSkimmerTurret = makeTurret('halloweenSkimmer', {canRepel: true, limitFov: true, extraStats: [], color: "#7c664f"})
Class.kronosSkimmerTurret = makeTurret({
    GUNS: [
        {
            POSITION: [8, 20, -0.25, 11, 0, 0, 0],
        }, {
            POSITION: [15, 18, -0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, { reload: 2, health: 1.7, damage: 1.4, resist: 1.2 }]),
                TYPE: "kronosMissile",
            },
        },
    ],
}, {canRepel: true, limitFov: true, fov: 10, independent: true, extraStats: []})
Class.autoSmasherLauncherTurret = makeTurret({
    GUNS: [
        {
            POSITION: [4, 11, 1.2, 16, 0, 0, 0],
        }, {
            POSITION: [18, 19, -0.7, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, { reload: 2, health: 1.9, damage: 1.2, resist: 1.2, speed: 1.3, maxSpeed: 1.3, range: 2.5 }]),
                TYPE: "autoSmasherMissile",
            },
        },
    ],
}, {canRepel: true, limitFov: true, fov: 10, independent: true, extraStats: []})
Class.twisterTurret = makeTurret('twister', {canRepel: true, limitFov: true, color: 'mirror', extraStats: [{speed: 1.3, maxSpeed: 1.3}]})
Class.bigTwistTurret = makeTurret('heavyTwister', {canRepel: true, limitFov: true, color: 'mirror', extraStats: [{speed: 1.3, maxSpeed: 1.3}]})
Class.hypeTwistTurret = makeTurret('hyperTwister', {canRepel: true, limitFov: true, color: 'mirror', extraStats: [{speed: 1.3, maxSpeed: 1.3}]})
Class.hyperTwisterTurret = makeTurret({
    GUNS: [
        {
            POSITION: [10, 13, -0.5, 9, 0, 0, 0],
        }, {
            POSITION: [17, 14, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.artillery, g.skimmer, { speed: 1.3, maxSpeed: 1.3 }, { reload: 4/3 }]),
                TYPE: "hyperspinmissile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}, {canRepel: true, limitFov: true, color: 'mirror', extraStats: []})
Class.rocketeerTurret = makeTurret('rocketeer', {canRepel: true, limitFov: true})
Class.fieldGunTurret = makeTurret('fieldGun', {canRepel: true, limitFov: true})
Class.twinTurret = makeTurret('twin', {canRepel: true, limitFov: true, fov: 3})
Class.bruiserTurret = makeTurret('bruiser', {canRepel: true, limitFov: true, fov: 3})
Class.mechTurret = makeTurret('mech', {canRepel: true, limitFov: true, fov: 3})
Class.sniperTurret = makeTurret('sniper', {canRepel: true, limitFov: true, fov: 3})
Class.sniperTurretB = makeTurret('sniper', {canRepel: true, limitFov: true, fov: 3, extraStats: [g.flankGuard, g.half_recoil]})
Class.basic1Turret = makeTurret('basic', {canRepel: true, limitFov: true, fov: 1.5})
Class.singleTurret = makeTurret('single', {canRepel: true, limitFov: true, fov: 3})
Class.rifleTurret = makeTurret('rifle', {canRepel: true, limitFov: true, fov: 3})
Class.pentashotTurret = makeTurret('pentaShot', {canRepel: true, limitFov: true})
Class.borerTurret = makeTurret('borer', {canRepel: true, limitFov: true, fov: 2})
Class.penTurret = makeTurret('pen', {canRepel: true, limitFov: true, fov: 2})
Class.subduerTurret = makeTurret('subduer', {canRepel: true, limitFov: true, fov: 2})
Class.hunterTurret = makeTurret('hunter', {canRepel: true, limitFov: true, fov: 2})
Class.guardianTankTurret = makeTurret('guardianTank', {canRepel: true, limitFov: true, fov: 2})
Class.predatorTurret = makeTurret('predator', {canRepel: true, limitFov: true, fov: 2})
Class.predatorBossTurret = makeTurret('predator', {canRepel: true, limitFov: true, fov: 2})
Class.predatorBossTurret.PROPS = [
        {
            POSITION: [13.5, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", {COLOR: "white"}],
        },
]
Class.crowbarPredatorBossTurret = makeTurret('crowbarPredator', {canRepel: true, limitFov: true, fov: 2})
Class.crowbarPredatorBossTurret.PROPS = [
        {
            POSITION: [14, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", {COLOR: "white"}],
        },
]
Class.nailerBossTurret = makeTurret('nailer', {canRepel: true, limitFov: true, fov: 2})
Class.nailerBossTurret.PROPS = [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", {COLOR: 14}],
        },
]
Class.bossFlockPurpleTurret = makeTurret('flock', {canRepel: true, limitFov: true, fov: 2})
Class.bossFlockPurpleTurret.PROPS = [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", {COLOR: 14}],
        },
]
Class.ultimateHybridTurret = makeTurret('theUltimateHybrid', {canRepel: true, limitFov: true, fov: 2})
Class.ultimateHybridTurret.PROPS = [
        {
            POSITION: [15.5, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", {COLOR: "white"}],
        },
        {
            POSITION: [8.5, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", {COLOR: 9}],
        },
]
Class.sniperNailgunTurret = makeTurret('sniperNailgun', {canRepel: true, limitFov: true, fov: 2})
Class.staplerTurret = makeTurret('staplerTank', {canRepel: true, limitFov: true, fov: 2, extraStats: [g.faster, g.faster]})
Class.mitochonTurret = makeTurret('mitochondrion', {canRepel: true, limitFov: true, fov: 2, extraStats: [g.faster]})
Class.flakTurret = makeTurret('flakgun', {canRepel: true, limitFov: true, fov: 2, extraStats: [g.faster, g.faster]})
Class.forgerBossTurret = makeTurret('forger', {canRepel: true, limitFov: true, fov: 2})
Class.megaTrapperTurret = makeTurret('megaTrapper', {canRepel: true, limitFov: true, fov: 2, extraStats: [g.flankGuard]})
Class.tripelletTurret = makeTurret('tripelleter', {canRepel: true, limitFov: true, fov: 2, extraStats: [g.half_reload, g.faster]})
Class.machineGunTurret = makeTurret('machineGun', {canRepel: true, limitFov: true, fov: 2})
Class.autoSubduer = makeTurret('subduer', {canRepel: true, limitFov: true, fov: 2})
Class.pellTurret = makeTurret('pelleter', {canRepel: true, limitFov: true, fov: 2})
Class.pellTurret2 = makeTurret('pelleter', {canRepel: true, limitFov: true, fov: 2, extraStats: [g.half_reload, g.half_reload, g.omega_damage, g.faster, g.op]})
Class.borecepTurret = makeTurret('boreception', {canRepel: true, limitFov: true, fov: 2, extraStats: [g.half_reload, g.half_reload, g.omega_damage, g.faster]})
Class.borecepBossTurret = makeTurret('boreception', {canRepel: true, limitFov: true, fov: 2, extraStats: [g.half_reload, g.faster]})
Class.pellcepTurret = makeTurret('pelletCeption', {canRepel: true, limitFov: true, fov: 2, extraStats: [g.half_reload, g.half_reload, g.omega_damage, g.faster]})
Class.boreTurret2 = makeTurret('borer', {canRepel: true, limitFov: true, fov: 2, extraStats: [g.half_reload, g.half_reload, g.omega_damage, g.faster, g.op]})
Class.natTurret = makeTurret('naturalist', {canRepel: true, limitFov: true, fov: 2, extraStats: [g.half_reload, g.half_reload, g.omega_damage, g.faster]})
Class.entoTurret = makeTurret('entomologist', {canRepel: true, limitFov: true, fov: 2, extraStats: [g.half_reload, g.half_reload, g.omega_damage, g.faster]})
Class.shrapnelTurret = makeTurret('miniRocketShooter', {canRepel: true, limitFov: true, fov: 2})
Class.naturalistTurret = makeTurret('naturalist', {canRepel: true, limitFov: true, fov: 2})
Class.entomologTurret = makeTurret('entomologist', {canRepel: true, limitFov: true, fov: 2})
Class.trinaturalTurret = makeTurret('trinaturalist', {canRepel: true, limitFov: true, fov: 2})
Class.acclimateTurret = makeTurret('acclimator', {canRepel: true, limitFov: true, fov: 2})
Class.puntTurret = makeTurret('puntgun', {canRepel: true, limitFov: true, fov: 2})
Class.tripuntTurret = makeTurret('tripunt', {canRepel: true, limitFov: true, fov: 2})
Class.trigadgetTurret = makeTurret('trigadgetGun', {canRepel: true, limitFov: true, fov: 2})
Class.rangTurret = makeTurret('ranger', {canRepel: true, limitFov: true, fov: 2})
Class.assassTurret = makeTurret('assassin', {canRepel: true, limitFov: true, fov: 2})
Class.crossbowTurret = makeTurret('crossbow', {canRepel: true, limitFov: true})
Class.sidewinderTurret = makeTurret('sidewinder', {canRepel: true, limitFov: true})
Class.minigunTurret = makeTurret('minigun', {canRepel: true, limitFov: true})
Class.sprayerTurret = makeTurret('sprayer', {canRepel: true, limitFov: true, fov: 2})
Class.novaTurret = makeTurret('novaMachine', {canRepel: true, limitFov: true, fov: 2})
Class.focalTurret = makeTurret('focal', {canRepel: true, limitFov: true, fov: 2})
Class.toolbeltTwin = makeTurret('twin', {canRepel: true, limitFov: true, extraStats: [g.one_fifth_reload, g.more_speed]})
Class.toolbeltMachine = makeTurret('machineGun', {canRepel: true, limitFov: true, extraStats: [g.one_fifth_reload, g.more_speed]})
Class.toolbeltPound = makeTurret('pounder', {canRepel: true, limitFov: true, extraStats: [g.one_fifth_reload, g.more_speed]})
Class.toolbeltSniper = makeTurret('sniper', {canRepel: true, limitFov: true, extraStats: [g.one_fifth_reload, g.more_speed]})
Class.single2 = makeTurret('single', {canRepel: true, limitFov: true, extraStats: [g.flankGuard, g.auto, g.more_reload]})
Class.light2 = makeTurret('laser', {canRepel: true, limitFov: true, extraStats: [g.auto]})
Class.laserPointer2 = makeTurret('laserTwin', {canRepel: true, limitFov: true, extraStats: [g.auto]})
Class.laser2 = makeTurret('laserMinigun', {canRepel: true, limitFov: true, extraStats: [g.auto]})
Class.machine2 = makeTurret('machineGun', {canRepel: true, limitFov: true})
Class.pelleter2 = makeTurret('pelleter', {canRepel: true, limitFov: true})
Class.director2 = makeTurret('director', {canRepel: true, limitFov: true})
Class.trapper2 = makeTurret('trapper', {canRepel: true, limitFov: true, extraStats: [g.half_reload]})
Class.constructorTurret = makeTurret('construct', {canRepel: true, limitFov: true, extraStats: [g.flankGuard]})
Class.engiTurret = makeTurret('engineer', {canRepel: true, limitFov: true, extraStats: [g.flankGuard]})
Class.shielderTurret = makeTurret('engineerExtra', {canRepel: true, limitFov: true, extraStats: [g.flankGuard]})
Class.boomTurret = makeTurret('boomer', {canRepel: true, limitFov: true, extraStats: [g.flankGuard]})
Class.forgerTurret = makeTurret('forger', {canRepel: true, limitFov: true, extraStats: [g.flankGuard]})
Class.launcher2 = makeTurret('launcher', {canRepel: true, limitFov: true})
Class.minigun2 = makeTurret('minigun', {canRepel: true, limitFov: true})
Class.construct2 = makeTurret('construct', {canRepel: true, limitFov: true})
Class.boomer2 = makeTurret('boomer', {canRepel: true, limitFov: true})
Class.streamliner2 = makeTurret('streamliner', {canRepel: true, limitFov: true})
Class.skimmer2 = makeTurret('skimmer', {canRepel: true, limitFov: true})
Class.twister2 = makeTurret('twister', {canRepel: true, limitFov: true})
Class.shrapnel2 = makeTurret('miniRocketShooter', {canRepel: true, limitFov: true})
Class.builder2 = makeTurret('builder', {canRepel: true, limitFov: true})
Class.engineer2 = makeTurret('engineer', {canRepel: true, limitFov: true})
Class.streamlinerTurret = makeTurret('streamliner', {canRepel: true, limitFov: true, fov: 2})
Class.redistTurret = makeTurret('redistributor', {canRepel: true, limitFov: true, fov: 2})
Class.fireworkTurret = makeTurret('firework', {canRepel: true, limitFov: true, fov: 2})
Class.mirrorFireworkTurret = makeTurret('firework', {canRepel: true, limitFov: true, fov: 2})
Class.hyperclusterTurret = makeTurret('hypercluster', {canRepel: true, limitFov: true, fov: 2})
Class.slowhyperclusterTurret = makeTurret('hypercluster', {canRepel: true, limitFov: true, fov: 2, extraStats: [g.half_reload]})
Class.mineTurret = makeTurret('mine', {canRepel: true, limitFov: true, fov: 2})
Class.flockTurret = makeTurret('flock', {canRepel: true, limitFov: true, fov: 2})
Class.bossFlockTurret = makeTurret('flock', {canRepel: true, limitFov: true, fov: 2, extraStats: [g.more_reload, g.more_health]})
Class.bombardTurret = makeTurret('bombard', {canRepel: true, limitFov: true, fov: 2})
Class.overseerrTurret = makeTurret('overseerr', {canRepel: true, limitFov: true})
Class.annihilatorTurret = makeTurret('annihilator', {canRepel: true, limitFov: true})
Class.bigcheeseTurret = makeTurret('bigCheese', {canRepel: true, limitFov: true})
Class.leviathanTurret = makeTurret('leviathan', {canRepel: true, limitFov: true})
Class.desmosTurret = makeTurret('desmos', {canRepel: true, limitFov: true})
Class.helixTurret = makeTurret('helix', {canRepel: true, limitFov: true})
Class.xhunterTurret = makeTurret('xHunter', {canRepel: true, limitFov: true})
Class.shotgunTurret = makeTurret('shotgun', {canRepel: true, limitFov: true})
Class.boomerTurret = makeTurret('boomer', {canRepel: true, limitFov: true, color: 'mirror', extraStats: []})
Class.arBoomerTurret = makeTurret('arboomer', {canRepel: true, limitFov: true, color: 'mirror', extraStats: []})
Class.recoilerTurret = makeTurret('miniRecoiler', {canRepel: true, limitFov: true, color: 'mirror', extraStats: []})
Class.megarecoilTurret = makeTurret('megaRecoiler', {canRepel: true, limitFov: true, color: 'mirror', extraStats: []})
Class.triTrapGuardTurret = {
    PARENT: "genericTank",
    COLOR: -1,
    FACING_TYPE: ["spin", { independent: true }],
    GUNS: weaponArray([
        {
            POSITION: [17, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [13, 8, 1, 0, 0, 60, 0],
        }, {
            POSITION: [4, 8, 1.7, 13, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ], 3),
}
Class.eliteSpinnerCyclone = {
    PARENT: "genericTank",
    COLOR: -1,
    FACING_TYPE: ["spin", { speed: -0.1, independent: true }],
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
Class.brusherCyclone = {
    PARENT: "genericTank",
    COLOR: "evening",
    FACING_TYPE: ["spin", { speed: -0.25, independent: true }],
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
Class.barricadeTurret = makeTurret('barricade', {aiSettings: {SKYNET: true, FULL_VIEW: true, independent: true, extraStats: []}})
Class.barrilderTurret = makeTurret('barrilder', {aiSettings: {SKYNET: true, FULL_VIEW: true, independent: true, extraStats: []}})
Class.buildlinerTurret = makeTurret('buildliner', {aiSettings: {SKYNET: true, FULL_VIEW: true, independent: true, extraStats: []}})
Class.artilleryTurret = makeTurret('artillery', {canRepel: true, limitFov: true, extraStats: []})
Class.nailgunTurret = makeTurret('nailgun', {canRepel: true, limitFov: true, extraStats: []})
Class.crowbarTurret = makeTurret({
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
}, {canRepel: true, limitFov: true, extraStats: []})
Class.wrenchTurret = makeTurret({
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
}, {canRepel: true, limitFov: true, extraStats: []})
Class.protoSwarmerTurret = makeTurret({
    GUNS: [
        {
            POSITION: [10, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.hive, {speed: 1.3, maxSpeed: 0.5, health: 1.3, range: 1.3}]),
                TYPE: "protoHive",
            },
        }, {
            POSITION: [11, 12, 1, 5, 0, 0, 0],
        },
    ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.swarmTurret = makeTurret({
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: 'autoswarm',
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.crasherSpawner = makeTurret({
    MAX_CHILDREN: 4,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak, {health: 1.1}]),
                TYPE: [
                    "drone",
                    {
                        LABEL: "Crasher",
                        DRAW_HEALTH: true,
                    },
                ],
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: "drone",
            },
        },
    ],
}, {independent: true, aiSettings: {chase: true}, label: 'Spawned', color: 'pink'})
Class.genghisLowerTurret = makeTurret({
    MAX_CHILDREN: 4,
    GUNS: [
        {
            POSITION: [7, 11, 0.6, 6, 0, 0, 0.5],
        }, {
            POSITION: [2, 12, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.babyfactory, { reload: 1.5, health: 2, damage: 2, range: 2 }]),
                TYPE: ["tinyMinion", {INDEPENDENT: true, COLOR: "veryLightGrey"}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.altheaLowerTurret = makeTurret({
    MAX_CHILDREN: 4,
    GUNS: [
        {
            POSITION: [7, 10, 0.6, 6, 0, 0, 0.5],
        }, {
            POSITION: [2, 11, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.babyfactory, { reload: 1.45, health: 1.65, damage: 1.65, range: 1.8 }]),
                TYPE: ["tinyMinion", {INDEPENDENT: true, COLOR: "veryLightGrey"}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.altheaAuto4gun = makeTurret({
   GUNS: [ {
         POSITION: [ 16, 3, 1, 0, -3.5, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, { speed: 0.85, maxSpeed: 0.85, damage: 0.9, health: 0.85 }]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 3, 1, 0, 3.5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, { speed: 0.85, maxSpeed: 0.85, damage: 0.9, health: 0.85 }]),
            TYPE: "bullet",
         }, }, 
     ],
}, {canRepel: true, limitFov: true})
Class.gaiaTwinProductionist = makeTurret({
   MAX_CHILDREN: 1,
   GUNS: [ {
         POSITION: [ 7, 11, 0.6, 6, -3, -16.5, 0, ],
         }, {
         POSITION: [ 7, 11, 0.6, 6, 3, 16.5, 0, ],
         }, {
         POSITION: [ 2, 12, 1, 13, -3, -16.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.babyfactory, { reload: 1.35, health: 2, damage: 2, range: 2 }]),
            TYPE: ["tinyMinion", {INDEPENDENT: true, COLOR: "veryLightGrey"}],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, {
         POSITION: [ 2, 12, 1, 13, 3, 16.5, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.babyfactory, { reload: 1.35, health: 2, damage: 2, range: 2 }]),
            TYPE: ["tinyMinion", {INDEPENDENT: true, COLOR: "veryLightGrey"}],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
         }, }, 
     ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.gaiaSpawner = makeTurret({
   GUNS: [ {
         POSITION: [ 17, 10, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 13.5, 20, 0.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 1.5, 12, 0.8, 17, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, {reload: 1.15, damage: 1.5, health: 2, size: 1.5}]),
            TYPE: "gaiaMinion",
            STAT_CALCULATOR: "drone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            MAX_CHILDREN: 2,
         }, }, 
     ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.overnyxTurret = makeTurret({
    MAX_CHILDREN: 3,
    GUNS: [
        {
            POSITION: [7, 11, 0.6, 6, 0, 0, 0.5],
        }, {
            POSITION: [2, 12, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.babyfactory, { reload: 1.5, health: 2, damage: 2, range: 2 }]),
                TYPE: ["tinyTwinMinion", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.cruiserTurret = makeTurret('cruiser', {canRepel: true, limitFov: true})
Class.tripleerTurret = makeTurret('tripleer', {canRepel: true, limitFov: true})
Class.carrierTurret = makeTurret('carrier', {canRepel: true, limitFov: true})
Class.minigarrierTurret = makeTurret('minigarrier', {canRepel: true, limitFov: true})
Class.napoleonLowerTurret = makeTurret({
    GUNS: [
        {
            POSITION: [8, 8, 0.6, 6, 0, 30, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bee, g.pounder]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: "swarm",
            },
        }, {
            POSITION: [8, 8, 0.6, 6, 0, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bee, g.pounder]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.elpisLowerTurret = makeTurret({
    GUNS: [
        {
            POSITION: [8, 8, 0.6, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bee, g.pounder, {damage: 1.15, health: 1.15, reload: 1.05}]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.napoleonLowerCarrier = makeTurret({
   GUNS: [ {
         POSITION: [ 8, 9, 0.6, 6, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bee, g.pounder, {reload: 1.1, damage: 1.15, health: 1.2}]),
            TYPE: ["turretedBee", { INDEPENDENT: true }],
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 8, 9, 0.6, 6, -1, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bee, g.pounder, {reload: 1.1, damage: 1.15, health: 1.2}]),
            TYPE: ["bee", { INDEPENDENT: true }],
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 8, 9, 0.6, 6, 1, 37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.bee, g.pounder, {reload: 1.1, damage: 1.15, health: 1.2}]),
            TYPE: ["bee", { INDEPENDENT: true }],
            STAT_CALCULATOR: "swarm",
         }, }, {
         POSITION: [ 6, 3, 1, 6, 0, 0, 0, ],
         }, 
     ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.gunnerCruiserTurret = makeTurret({
    GUNS: [
        {
            POSITION: [4, 7.5, 0.6, 6, 4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, {maxSpeed: 1.1}]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        }, {
            POSITION: [4, 7.5, 0.6, 6, -4.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battleship, {maxSpeed: 1.1}]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        }, {
            POSITION: [16, 3, 1, 0, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, {health: 1.2, damage: 1.2, speed: 1.2, maxSpeed: 0.9}]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [16, 3, 1, 0, 3, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, {health: 1.2, damage: 1.2, speed: 1.2, maxSpeed: 0.9}]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true, independent: true, fov: 10, extraStats: []})
Class.juliusLowerTurret = makeTurret({
    MAX_CHILDREN: 3,
    GUNS: [
        {
            POSITION: [8.5, 11, 0.6, 6, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {size: 0.8, health: 1.5, damage: 1.5, density: 1.2, maxSpeed: 0.8}]),
                TYPE: "minichip",
                STAT_CALCULATOR: "drone",
            },
        },
    ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.plutusLowerTurret = makeTurret({
    MAX_CHILDREN: 3,
    GUNS: [
        {
            POSITION: [8, 9.5, 0.6, 6, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {size: 0.85, health: 1.05, damage: 1.05, density: 1.1, maxSpeed: 0.85, reload: 0.95}]),
                TYPE: "minichip",
                STAT_CALCULATOR: "drone",
            },
        },
    ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.protoLauncherTurret = makeTurret({
    GUNS: [
        {
            POSITION: [10, 7.5, 1, 7.5, 0, 0, 0],
        },
        {
            POSITION: [15.5, 11.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, {reload: 0.95, damage: 0.85, health: 0.95, speed: 1.1}]),
                TYPE: "minimissile",
                STAT_CALCULATOR: "sustained",
            },
        },
    ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.swarmerTurret = makeTurret('swarmer', {canRepel: true, limitFov: true, extraStats: []})
Class.myriadTurret = makeTurret('myriad', {canRepel: true, limitFov: true, extraStats: []})
Class.hypermyriadTurret = makeTurret('hypermyriad', {canRepel: true, limitFov: true, extraStats: []})
Class.basicTurret = makeTurret({
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.autoTurret, g.pelleter, g.twin, g.power, { speed: 0.7, maxSpeed: 0.7 }]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.tripletTurret = makeTurret({
    GUNS: [
        {
            POSITION: [18, 10, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [18, 10, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [21, 10, 1.2, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triplet]),
                TYPE: "bullet",
            },
        },
    ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.napoleonUpperTurret = makeTurret({
    GUNS: [
        {
            POSITION: [12, 17, -0.6, 0, 0, 0, 0],
        }, {
            POSITION: [16, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, { reload: 1.2, health: 1.2, damage: 1.2, speed: 0.93, maxSpeed: 0.93, range: 1.5 }]),
                TYPE: ["turretedBullet", {COLOR: "veryLightGrey"}],
            },
        },
    ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.alpeaUpperTurret = makeTurret({
    GUNS: [
        {
            POSITION: [12.5, 15.5, -0.6, 0, 0, 0, 0],
        }, {
            POSITION: [16.5, 10.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, { reload: 1.25, health: 1.05, damage: 1.05, speed: 0.98, maxSpeed: 0.98, range: 1.5 }]),
                TYPE: ["turretedBullet", {COLOR: "veryLightGrey"}],
            },
        },
    ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.napoleonAuraTurret = makeTurret({
   GUNS: [ {
         POSITION: [ 10, 9, 1.4, 15, 0, 0, 0, ],
         }, {
         POSITION: [ 12, 20, 0.75, 1, 0, 0, 0, ],
         }, {
         POSITION: [ 21.5, 14, 1.1, 1, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, {speed: 1.35, damage: 0.95, health: 1.15}]),
            TYPE: "auraBullet",
         }, }, 
     ],
}, {canRepel: true, limitFov: true, extraStats: []})
Class.napoleonUpperMachine = makeTurret({
   GUNS: [ {
         POSITION: [ 12, 19, -0.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 16, 12.5, 1.15, 0, 0, 0, 2/3, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, { reload: 1.23, health: 1.25, damage: 1.25, speed: 0.95, maxSpeed: 0.95, range: 1.5 }]),
            TYPE: ["machinedBullet", {COLOR: "veryLightGrey"}],
         }, }, 
     ],
}, {canRepel: true, limitFov: true, extraStats: []})

// Mounted Turrets
Class.autoTurret = makeTurret({
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret]),
                TYPE: "bullet",
            },
        },
    ],
}, {label: "Turret", fov: 0.8, extraStats: []})
Class.droneAutoTurret = makeTurret({
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret, g.overdrive]),
                TYPE: "bullet",
            },
        },
    ],
}, {label: "Turret", fov: 0.8, extraStats: []})
Class.droneAutoTurret2 = makeTurret({
    GUNS: [
        {
            POSITION: [27.5, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.pelleter, g.power, { recoil: 1.15 }, g.turret, g.overdrive]),
                TYPE: "bullet",
            },
        },
    ],
}, {label: "Turret", fov: 0.8, extraStats: []})
Class.bulletAutoTurret = makeTurret({
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.turret, {speed: 0.8, maxSpeed: 0.8, reload: 1.2, health: 1.4}]),
                TYPE: "bullet",
            },
        },
    ]
}, {label: "Turret", fov: 0.8, extraStats: []})
Class.bulletAutoMachine = makeTurret({
   GUNS: [ {
         POSITION: [ 16, 12, 1.4, 8, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.pelleter, g.power, g.turret, {speed: 0.8, maxSpeed: 0.8, reload: 1.2, health: 1.4}]),
            TYPE: "bullet",
         }, }, 
     ],
}, {label: "Machine Turret", fov: 0.8, extraStats: []})
Class.autoSmasherTurret = makeTurret({
    GUNS: [
        {
            POSITION: [20, 6, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret, { speed: 1.2 }, g.machineGun, g.pounder, { reload: 0.75 }, { reload: 0.75 }]),
                TYPE: "bullet",
                STAT_CALCULATOR: "fixedReload",
            },
        },
        {
            POSITION: [20, 6, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret, { speed: 1.2 }, g.machineGun, g.pounder, { reload: 0.75 }, { reload: 0.75 }]),
                TYPE: "bullet",
                STAT_CALCULATOR: "fixedReload",
            },
        },
    ],
}, {label: "Turret", fov: 0.8, extraStats: []})
Class.pillboxTurret = makeTurret({
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minionGun, g.turret, g.power, g.autoTurret, { density: 0.1 }]),
                TYPE: "bullet",
            },
        },
    ],
}, {extraStats: []})
Class.pillboxWeakTurret = makeTurret({
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minionGun, g.turret, g.power, g.autoTurret, { density: 0.05 }]),
                TYPE: "bullet",
            },
        },
    ],
}, {extraStats: []})
Class.pillboxWeakestTurret = makeTurret({
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.weakest, g.minionGun, g.turret, g.autoTurret, { density: 0.05 }]),
                TYPE: "bullet",
            },
        },
    ],
}, {extraStats: []})
Class.autoSmasherMissileTurret = makeTurret({
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [19, 6, 1, 0, 4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pelleter, g.power, g.turret]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [19, 6, 1, 0, -4.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pelleter, g.power, g.turret]),
                TYPE: "bullet"
            }
        }
    ],
}, {fov: 5, independent: true, aiSettings: {SKYNET: true, BLIND: true}, extraStats: []})
Class.legionaryTwin = makeTurret({
    GUNS: [
        {
            POSITION: [18, 7, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pelleter, g.power, g.turret, {reload: 0.85}]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [18, 7, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pelleter, g.power, g.turret, {reload: 0.85}]),
                TYPE: "bullet"
            }
        }
    ],
}, {fov: 5, independent: true, extraStats: []})

// Healer turrets
Class.sanctuaryHealer = {
    PARENT: "genericTank",
    LABEL: "",
    COLOR: "grey",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    FACING_TYPE: ["spin", { speed: -0.05 }],
    TURRETS: [{ 
        POSITION: { SIZE: 13, LAYER: 1 },
        TYPE: ['healerSymbol', { FACING_TYPE: ["noFacing", { angle: Math.PI / 2 }] }]
    }],
}
Class.surgeonPillboxTurret = {
    PARENT: "genericTank",
    LABEL: "",
    COLOR: "grey",
    HAS_NO_RECOIL: true,
    FACING_TYPE: ["spin", { speed: 0.08 }],
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: weaponArray({
        POSITION: [17, 11, 1, 0, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.minionGun, g.turret, g.power, g.autoTurret, { density: 0.1 }]),
            TYPE: "healerBullet",
            AUTOFIRE: true,
        },
    }, 2, 0.5)
}

// Miscellaneous
Class.baseSwarmTurret = makeTurret({
    GUNS: [
        {
            POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.baseProtector]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.baseProtector]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.baseProtector]),
                TYPE: ["swarm", { INDEPENDENT: true, AI: { LIKES_SHAPES: true }}],
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}, {label: "Protector", independent: true, aiSettings: {NO_LEAD: true, LIKES_SHAPES: true}})
Class.baseSwarmTurretCorrupt = makeTurret({
    COLOR: 19,
    GUNS: [
        {
            POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.baseProtector, g.op]),
                TYPE: "swarmX",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.baseProtector, g.op]),
                TYPE: "swarmX",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.baseProtector, g.op]),
                TYPE: ["swarmX", { INDEPENDENT: true, AI: { LIKES_SHAPES: true }}],
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
}, {label: "Protector", independent: true, aiSettings: {NO_LEAD: true, LIKES_SHAPES: true}})
Class.antiTankMachineGunArm = {
    PARENT: "genericTank",
    COLOR: "grey",
    CONTROLLERS: ["mapTargetToGoal"],
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
    GUNS: [
        {
            POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15.85, 3, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0],
        },
    ],
}
Class.antiTankCorruptXArm = {
    PARENT: "genericTank",
    COLOR: 19,
    CONTROLLERS: ["mapTargetToGoal"],
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
    TURRETS: [
        {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: ['corruptx', { FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }] }]
        },
    ],
    GUNS: [
        {
            POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15.85, 3, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0],
        },
    ],
}
Class.niggergunArm = {
    PARENT: "genericTank",
    COLOR: "grey",
    CONTROLLERS: ["mapTargetToGoal"],
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
    GUNS: [
        {
         POSITION: [ 14, 2, 1, 0, -6, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 14, 2, 1, 0, 6, 0, 0.05, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, -3, 0, 0.1, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 2, 1, 0, 3, 0, 0.15, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op, {recoil: 0, spray: 0.1}]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 12, 14, -1.4, 0.25, 0, 0, 0.3, ],
        },
    ],
}

Class.tracker3gun = makeTurret({
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [10, 10, -2, 20, 0, 0, 0]
        }
    ]
}, {canRepel: true, limitFov: true, fov: 3})

Class.seer3gun = makeTurret({
    GUNS: [
        {
            POSITION: [7750, 0.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: "№ff0000",
                ALPHA: 0.05,
        }, },
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [13.5, 10, -1.65, 18.5, 0, 0, 0]
        }
    ]
}, {canRepel: true, limitFov: true, fov: 9999999999})

// Decorations
Class.circleDeco = makeDeco(0)
Class.lineDeco = makeDeco(2)
Class.triangleDeco = makeDeco(3)
Class.squareDeco = makeDeco(4)
Class.pentagonDeco = makeDeco(5)
Class.hexagonDeco = makeDeco(6)
Class.binocularsDeco = makeDeco(4)
Class.sharpDeco = makeDeco("M -0.7 0.5 L -1.2 0 L -0.7 -0.5 L 1.3 0 L -0.7 0.5")
Class.overdriveDeco = makeDeco(4)
Class.ttxTriangle = makeDeco(3)
Class.mendersymbol = makeDeco(3)
Class.stopsignDeco = makeDeco("M -1.0008 0.3336 L -1.0008 -0.3336 L -0.3336 -1.0008 L 0.3336 -1.0008 L 1.0008 -0.3336 L 1.0008 0.3336 L 0.3336 1.0008 L -0.3336 1.0008 L -1.0008 0.3336")
Class.explosiveDeco = makeDeco(7)
Class.landmiDeco = makeDeco(0)
Class.stopsignDeco2 = makeDeco("M -2.5136 0.6185 Q -2.4231 0.6185 -2.3654 0.6048 Q -2.3051 0.5883 -2.2694 0.5636 Q -2.2338 0.5362 -2.2201 0.5005 Q -2.2063 0.4649 -2.2063 0.421 Q -2.2063 0.3277 -2.2941 0.2674 Q -2.3819 0.2043 -2.5959 0.1329 Q -2.6891 0.1 -2.7824 0.0589 Q -2.8757 0.015 -2.9497 -0.0481 Q -3.0238 -0.1139 -3.0704 -0.2045 Q -3.1171 -0.2977 -3.1171 -0.4294 Q -3.1171 -0.5611 -3.0677 -0.6653 Q -3.0183 -0.7723 -2.9278 -0.8464 Q -2.8373 -0.9204 -2.7083 -0.9589 Q -2.5794 -1 -2.4176 -1 Q -2.2255 -1 -2.0856 -0.9589 Q -1.9457 -0.9177 -1.8552 -0.8683 L -1.9787 -0.5309 Q -2.0582 -0.5721 -2.157 -0.6022 Q -2.253 -0.6352 -2.3901 -0.6352 Q -2.5438 -0.6352 -2.6123 -0.5913 Q -2.6782 -0.5501 -2.6782 -0.4623 Q -2.6782 -0.4102 -2.6535 -0.3746 Q -2.6288 -0.3389 -2.5849 -0.3087 Q -2.5383 -0.2813 -2.4807 -0.2566 Q -2.4203 -0.2346 -2.349 -0.21 Q -2.2009 -0.1551 -2.0911 -0.1002 Q -1.9814 -0.0481 -1.9101 0.0232 Q -1.836 0.0945 -1.8003 0.1905 Q -1.7647 0.2866 -1.7647 0.4237 Q -1.7647 0.6898 -1.9512 0.8379 Q -2.1378 0.9833 -2.5136 0.9833 Q -2.6398 0.9833 -2.7413 0.9669 Q -2.8428 0.9532 -2.9223 0.9312 Q -2.9991 0.9093 -3.0567 0.8846 Q -3.1116 0.8599 -3.15 0.8379 L -3.0293 0.4978 Q -2.9443 0.5444 -2.8208 0.5828 Q -2.6946 0.6185 -2.5136 0.6185 Z M -0.2221 -0.9561 V -0.5913 H -0.7954 V 0.9449 H -1.2234 V -0.5913 H -1.7967 V -0.9561 Z M 0.2068 -0.007 Q 0.2068 0.1329 0.2397 0.2454 Q 0.2753 0.3579 0.3384 0.4402 Q 0.4043 0.5197 0.4975 0.5636 Q 0.5908 0.6075 0.7115 0.6075 Q 0.8295 0.6075 0.9227 0.5636 Q 1.0187 0.5197 1.0818 0.4402 Q 1.1477 0.3579 1.1806 0.2454 Q 1.2163 0.1329 1.2163 -0.007 Q 1.2163 -0.1469 1.1806 -0.2593 Q 1.1477 -0.3746 1.0818 -0.4541 Q 1.0187 -0.5364 0.9227 -0.5803 Q 0.8295 -0.6242 0.7115 -0.6242 Q 0.5908 -0.6242 0.4975 -0.5775 Q 0.4043 -0.5337 0.3384 -0.4514 Q 0.2753 -0.3718 0.2397 -0.2566 Q 0.2068 -0.1441 0.2068 -0.007 Z M 1.6579 -0.007 Q 1.6579 0.2372 1.5838 0.4237 Q 1.5125 0.6075 1.3863 0.7337 Q 1.2602 0.8571 1.0846 0.9202 Q 0.9118 0.9833 0.7115 0.9833 Q 0.5167 0.9833 0.3439 0.9202 Q 0.1711 0.8571 0.0422 0.7337 Q -0.0868 0.6075 -0.1608 0.4237 Q -0.2349 0.2372 -0.2349 -0.007 Q -0.2349 -0.2511 -0.1581 -0.4349 Q -0.0813 -0.6214 0.0477 -0.7476 Q 0.1793 -0.8738 0.3494 -0.9369 Q 0.5222 -1 0.7115 -1 Q 0.9063 -1 1.0791 -0.9369 Q 1.2519 -0.8738 1.3809 -0.7476 Q 1.5098 -0.6214 1.5838 -0.4349 Q 1.6579 -0.2511 1.6579 -0.007 Z M 2.4434 -0.9781 Q 2.8686 -0.9781 3.0963 -0.8272 Q 3.324 -0.679 3.324 -0.3389 Q 3.324 0.004 3.0935 0.1576 Q 2.8631 0.3085 2.4352 0.3085 H 2.3007 V 0.9449 H 1.8728 V -0.9287 Q 2.0127 -0.9561 2.1691 -0.9671 Q 2.3254 -0.9781 2.4434 -0.9781 Z M 2.4708 -0.6132 Q 2.4242 -0.6132 2.3776 -0.6105 Q 2.3337 -0.6077 2.3007 -0.605 V -0.0563 H 2.4352 Q 2.6574 -0.0563 2.7698 -0.1167 Q 2.8823 -0.177 2.8823 -0.3416 Q 2.8823 -0.4212 2.8521 -0.4733 Q 2.8247 -0.5254 2.7698 -0.5556 Q 2.7177 -0.5885 2.6409 -0.5995 Q 2.5641 -0.6132 2.4708 -0.6132 Z")
Class.assemblerEffect = {
    PARENT: "bullet",
    MOTION_TYPE: 'assembler',
    LABEL: '',
    BODY: {
        DAMAGE: 0,
        RANGE: 10
    },
    ALPHA: 0.8
}
Class.assemblerDot = {
    LABEL: '',
    SHAPE: -4,
    COLOR: "darkGrey",
    INDEPENDENT: true
}
Class.healerSymbol = {
    SHAPE: [[0.3, -0.3],[1,-0.3],[1,0.3],[0.3,0.3],[0.3,1],[-0.3,1],[-0.3,0.3],[-1,0.3],[-1,-0.3],[-0.3,-0.3],[-0.3,-1],[0.3,-1]],
    SIZE: 13,
    COLOR: "red",
}
Class.capSymbol = {
    SHAPE: "M 1.185 -0.013 C 1.4271 -0.1825 1.7274 -0.4358 2.1639 -0.4358 C 2.2655 -0.3974 2.367 -0.359 2.4686 -0.3206 C 2.5248 -0.3815 2.3043 -0.5036 2.1588 -0.5974 C 1.9209 -0.7429 1.6832 -0.8884 1.4454 -1.0339 C 1.4313 -1.2217 1.3608 -1.4423 1.1639 -1.6207 C 1.0715 -1.9331 1.0103 -2.21 0.4659 -2.4307 C 0.2924 -2.534 -0.2005 -2.6935 -0.5008 -2.5903 C -0.5244 -2.5918 -0.5478 -2.5934 -0.5439 -2.6102 C -0.5109 -2.6347 -0.5632 -2.7002 -0.666 -2.6765 C -0.7441 -2.6608 -0.8409 -2.6344 -0.802 -2.543 C -1.0954 -2.4418 -1.3207 -2.2399 -1.6494 -1.9255 C -1.6633 -1.8551 -1.8745 -1.672 -1.8042 -1.414 C -1.8844 -1.0459 -1.9549 -1.0505 -1.8469 -0.8206 C -1.8423 -0.7346 -1.8375 -0.6485 -1.8282 -0.5624 C -1.7953 -0.4546 -1.7625 -0.3466 -1.7106 -0.2021 C -1.4871 -0.2636 -1.2445 -0.2887 -1.0021 -0.3137 C -0.7303 -0.1144 0.1109 0.6794 0.6668 0.3136",
    COLOR: 6,
}
Class.sigmaSymbol = {
    SHAPE: "M -0.7178 0.983 C -0.9313 0.9473 -0.09 0.2828 0.1079 0.027 C 0.1142 -0.0694 -0.614 -0.6842 -0.7619 -0.895 C -0.7599 -0.9111 -0.7607 -0.9621 -0.7089 -0.9716 C -0.2284 -0.9704 0.2521 -0.9693 0.7326 -0.9682 C 0.7438 -0.9575 0.7596 -0.946 0.7823 -0.9409 C 0.7828 -0.84 0.7832 -0.739 0.7821 -0.638 C 0.7908 -0.6046 0.6826 -0.599 0.6803 -0.6355 C 0.6337 -0.7329 0.6548 -0.754 0.5587 -0.7877 C 0.3046 -0.7878 0.0506 -0.7879 -0.2035 -0.788 C -0.1946 -0.6903 0.2314 -0.3296 0.4488 -0.1005 C 0.4692 -0.0112 -0.1596 0.4656 -0.2502 0.6854 L 0.5113 0.6824 C 0.6648 0.6686 0.6709 0.484 0.7234 0.4901 C 0.7897 0.4967 0.7785 0.5416 0.7834 0.5641 C 0.7688 0.8282 0.828 0.9662 0.7433 0.9902 L 0.7408 0.9902 L -0.714 0.9826",
    COLOR: "#fde910",
},
Class.pill = {
    SHAPE: "M -2 -1 A 1 1 0 0 0 -2 1 L 0 1 L 0 -1 L -2 -1",
    COLOR: 10,
}
Class.pill1 = {
    SHAPE: "M 2 1 A 1 1 0 0 0 2 -1 L 0 -1 L 0 1 L 2 1",
    COLOR: 12,
}
Class.omegaSymbol = {
    SHAPE: "M -1.3181 0.7129 L -1.2054 0.7112 L -1.0302 0.9706 L -0.5721 0.9706 L -0.5686 0.815 C -1.678 0.6099 -1.678 -1.253 0.0026 -1.2282 C 1.8043 -1.186 1.5714 0.6525 0.5624 0.8126 L 0.5668 0.9702 L 1.0264 0.9761 L 1.1942 0.7168 L 1.3151 0.7138 L 1.3209 1.1734 L 0.2045 1.1763 L 0.2045 0.7787 C 1.0136 0.5999 1.324 -1.0155 -0.0053 -1.0543 C -1.3539 -1.0252 -0.9512 0.6727 -0.209 0.7697 L -0.209 1.1773 L -1.3151 1.1725 L -1.3199 0.7115",
    COLOR: "#fde910",
},
Class.leafSymbol = {
    SHAPE: "M -1.078 -0.2156 A 0.2156 0.2156 90 0 0 -1.078 0.2156 L -0.6468 0.2156 L -0.8624 0.4312 A 0.2156 0.2156 90 0 0 -0.4312 0.4312 L -0.2156 0.2156 L 0 0.2156 L -0.2156 0.6468 A 0.2156 0.2156 90 0 0 0.2156 0.6468 L 0.4312 0.2156 L 1.078 0.2156 A 0.2156 0.2156 90 0 0 1.078 -0.2156 L 0.4312 -0.2156 L 0.2156 -0.6468 A 0.2156 0.2156 90 0 0 -0.2156 -0.6468 L 0 -0.2156 L -0.2156 -0.2156 L -0.4312 -0.4312 A 0.2156 0.2156 90 0 0 -0.8624 -0.4312 L -0.6468 -0.2156 L -1.078 -0.2156 Z",
    SIZE: 5,
    COLOR: "#228b22",
}
Class.corruptx = {
    SHAPE: "M -0.7736 -0.6022 C -0.6327 -0.3622 -0.2212 -0.1946 -0.2365 -0.2517 C -0.2327 -0.4117 -0.4002 -0.6669 -0.6174 -0.7774 L 0.59 -0.7774 C 0.4224 -0.6403 0.2205 -0.4956 0.2205 -0.2479 C 0.4644 -0.2936 0.59 -0.3889 0.7538 -0.5907 L 0.7538 0.5672 C 0.6281 0.4224 0.5025 0.2662 0.2168 0.2168 C 0.2281 0.3996 0.3882 0.6242 0.5823 0.75 L -0.606 0.7538 C -0.3736 0.571 -0.2593 0.3729 -0.2327 0.2168 C -0.3736 0.2396 -0.5412 0.2777 -0.7697 0.59 L -0.7736 -0.6059",
    COLOR: 8,
}
Class.radiationSymbol = {
    SHAPE: [[-0.8,-0.993],[1.015,0],[-0.805,1]],
    FACING_TYPE: ["spin", { speed: -0.15 }],
    SIZE: 0.5, 
    COLOR: "green",
}
Class.gamblerSymbol = {
    SHAPE: "M -1.025 0.7453 c 0.037 0.4168 0.3782 0.7125 0.8978 0.7508 V 1.8 h 0.2607 v -0.304 c 0.5675 -0.0447 0.9195 -0.3595 0.9195 -0.825 c 0 -0.3975 -0.2367 -0.6275 -0.739 -0.757 l -0.1805 -0.0467 V -1.0832 c 0.2805 0.0275 0.4698 0.1785 0.5175 0.404 h 0.3675 c -0.0415 -0.4 -0.385 -0.687 -0.885 -0.7188 V -1.7 H -0.1272 v 0.3083 c -0.4848 0.0575 -0.8175 0.368 -0.8175 0.789 c 0 0.3635 0.2415 0.6208 0.6653 0.7292 l 0.1525 0.0405 v 1.0077 c -0.2873 -0.0425 -0.485 -0.2 -0.5327 -0.4295 z m 0.8478 -0.959 c -0.2607 -0.0658 -0.4 -0.2062 -0.4 -0.404 c 0 -0.236 0.176 -0.4103 0.45 -0.457 v 0.8738 l -0.05 -0.0125 z m 0.3977 0.468 c 0.3217 0.0808 0.463 0.2147 0.463 0.4422 c 0 0.2742 -0.2065 0.457 -0.55 0.4848 V 0.2325 z",
    COLOR: "#19ff19",
    FACING_TYPE: ["noFacing", { angle: 0 }],
}
Class.gamblerEyeSymbol = {
    SHAPE: "M -1.025 0.7453 c 0.037 0.4168 0.3782 0.7125 0.8978 0.7508 V 1.8 h 0.2607 v -0.304 c 0.5675 -0.0447 0.9195 -0.3595 0.9195 -0.825 c 0 -0.3975 -0.2367 -0.6275 -0.739 -0.757 l -0.1805 -0.0467 V -1.0832 c 0.2805 0.0275 0.4698 0.1785 0.5175 0.404 h 0.3675 c -0.0415 -0.4 -0.385 -0.687 -0.885 -0.7188 V -1.7 H -0.1272 v 0.3083 c -0.4848 0.0575 -0.8175 0.368 -0.8175 0.789 c 0 0.3635 0.2415 0.6208 0.6653 0.7292 l 0.1525 0.0405 v 1.0077 c -0.2873 -0.0425 -0.485 -0.2 -0.5327 -0.4295 z m 0.8478 -0.959 c -0.2607 -0.0658 -0.4 -0.2062 -0.4 -0.404 c 0 -0.236 0.176 -0.4103 0.45 -0.457 v 0.8738 l -0.05 -0.0125 z m 0.3977 0.468 c 0.3217 0.0808 0.463 0.2147 0.463 0.4422 c 0 0.2742 -0.2065 0.457 -0.55 0.4848 V 0.2325 z",
    COLOR: "#19ff19",
    FACING_TYPE: ["spin", { speed: 0.1 }],
}
Class.gamblerEyeSymbol.ALPHA = 0.2
Class.gamblerPupil = {
    SHAPE: 0,
    COLOR: "#90ee90",
    TURRETS: [
        {
            POSITION: [8, 0, 0, 0, 360, 1],
            TYPE: "gamblerEyeSymbol",
        },
    ],
}
Class.gamblerEye = {
    COLOR: "#133b20",
    TURRETS: [
        {
            POSITION: [11, 4, 0, 0, 360, 1],
            TYPE: "gamblerPupil",
        },
    ],
};
Class.cardText = {
    BORDERLESS: true,
    COLOR: "black",
    SHAPE: "m 2.4053 -1.4419 c 0.0363 -0.0113 0.0737 -0.0237 0.1123 -0.0378 c 0.0384 -0.0132 0.0769 -0.0265 0.1153 -0.0397 v -0.4095 c -0.0384 -0.0132 -0.0769 -0.0265 -0.1153 -0.0405 c -0.0384 -0.0132 -0.0758 -0.0254 -0.1123 -0.0368 v -0.2457 c 0.1132 0.0397 0.218 0.0775 0.3139 0.1123 c 0.096 0.0349 0.1865 0.0699 0.2715 0.1031 c 0.0851 0.034 0.1653 0.067 0.2411 0.1002 c 0.0769 0.0332 0.1516 0.068 0.2245 0.1031 v 0.226 c -0.0729 0.0351 -0.1476 0.068 -0.2245 0.1016 c -0.0758 0.0332 -0.1562 0.0672 -0.2411 0.1002 c -0.0851 0.0351 -0.1754 0.0699 -0.2715 0.1046 c -0.096 0.0351 -0.2008 0.0729 -0.3139 0.1123 z m 0.8131 -0.2837 c -0.0151 -0.0094 -0.0359 -0.0141 -0.0622 -0.0227 c -0.0262 -0.0103 -0.0567 -0.0216 -0.0909 -0.0349 c -0.0344 -0.0132 -0.0722 -0.0284 -0.1138 -0.0443 c -0.0416 -0.0151 -0.0851 -0.0311 -0.1304 -0.0473 v 0.2988 c 0.0454 -0.0162 0.089 -0.0321 0.1304 -0.0473 c 0.0416 -0.0151 0.0794 -0.0302 0.1138 -0.0445 c 0.0344 -0.0132 0.0647 -0.0246 0.0909 -0.0351 c 0.0262 -0.0105 0.047 -0.0181 0.0622 -0.0246 z m -5.6211 3.197 c -0.0363 0.0113 -0.0737 0.0237 -0.1121 0.0378 c -0.0384 0.0132 -0.0769 0.0265 -0.1153 0.0397 l 0.0006 0.4095 c 0.0384 0.0132 0.0769 0.0265 0.1153 0.0405 c 0.0384 0.0132 0.0758 0.0254 0.1123 0.0368 l 0.0004 0.2457 c -0.1134 -0.0397 -0.218 -0.0764 -0.3142 -0.1117 c -0.0962 -0.0349 -0.1867 -0.0689 -0.2717 -0.1027 c -0.0851 -0.034 -0.1655 -0.067 -0.2413 -0.0995 c -0.0769 -0.0332 -0.1518 -0.068 -0.2247 -0.1027 l -0.0004 -0.226 c 0.0729 -0.0351 0.1474 -0.0691 0.2243 -0.1021 c 0.0758 -0.0332 0.156 -0.0672 0.2411 -0.1006 c 0.0848 -0.0351 0.1754 -0.0699 0.2713 -0.105 c 0.096 -0.0351 0.2005 -0.0729 0.3137 -0.1128 z m -0.8125 0.2852 c 0.0151 0.0094 0.0359 0.0141 0.0622 0.0227 c 0.0262 0.0103 0.0567 0.0216 0.0911 0.0349 c 0.0344 0.0132 0.0725 0.0284 0.1138 0.0443 c 0.0416 0.0151 0.0851 0.0311 0.1306 0.0473 l -0.0004 -0.2988 c -0.0454 0.0162 -0.0888 0.0321 -0.1304 0.0473 c -0.0414 0.0151 -0.0794 0.0302 -0.1136 0.0445 c -0.0344 0.0132 -0.0647 0.0246 -0.0909 0.0351 c -0.0262 0.0105 -0.047 0.0181 -0.0622 0.0246 z",
}
Class.cardStar = {
    BORDERLESS: true,
    COLOR: "red",
    SHAPE: "m 0.5052 0.0001 c 0 0 -0.2211 0.1081 -0.3153 0.1855 C 0.1172 0.2452 0.0023 0.3963 0.0023 0.3963 c 0 0 -0.1112 -0.1514 -0.1827 -0.2108 c -0.0938 -0.078 -0.3153 -0.1855 -0.3153 -0.1855 c 0 0 0.2215 -0.1075 0.3153 -0.1855 c 0.0705 -0.0587 0.1805 -0.2078 0.1805 -0.2078 c 0 0 0.117 0.1487 0.1899 0.2078 C 0.2846 -0.1086 0.5052 0.0001 0.5052 0.0001 Z",
}
Class.chipCircles1 = {
    BORDERLESS: true,
    COLOR: "#ffffff",
    SHAPE: "M -0.6914 0.6724 L -0.4874 0.5548 L -0.7251 0.1424 L -0.9291 0.26 Z m 0.4525 0.2545 l 0.4754 0.0003 l 0.0004 -0.2355 l -0.4761 -0.0002 z M -0.935 -0.2588 L -0.7307 -0.141 L -0.4926 -0.5528 L -0.6969 -0.6707 Z M 0.4792 0.5446 L 0.6832 0.6628 L 0.9213 0.251 L 0.7174 0.1328 Z M -0.2499 -0.6996 L 0.2255 -0.6993 L 0.2259 -0.9348 L -0.2502 -0.935 Z M 0.7118 -0.1506 L 0.9157 -0.2682 L 0.6778 -0.6803 L 0.4739 -0.5627 Z",
}
Class.chipCircles2 = {
    BORDERLESS: true,
    COLOR: "#ffffff",
    SHAPE: "M 0.0228 -1 L -0.266 -0.965 L -0.2489 -0.8214 L 0.0399 -0.8565 Z M 0.2518 -0.9692 L 0.1954 -0.8368 L 0.4637 -0.7223 L 0.5202 -0.8547 Z M -0.4796 -0.877 L -0.7129 -0.7027 L -0.6266 -0.5873 L -0.3933 -0.7616 Z M 0.7029 -0.7138 L 0.5876 -0.6266 L 0.7627 -0.3942 L 0.8781 -0.4805 Z M -0.8539 -0.5198 L -0.9684 -0.2515 L -0.8359 -0.1951 L -0.7217 -0.4626 Z M 0.9652 -0.2669 L 0.8225 -0.2498 L 0.8576 0.0399 L 1.0002 0.0228 Z M -0.8565 -0.0396 L -1 -0.0225 L -0.965 0.2671 L -0.8214 0.2492 Z M 0.8371 0.1945 L 0.7226 0.4628 L 0.855 0.5192 L 0.9693 0.2517 Z M -0.7616 0.3936 L -0.877 0.4808 L -0.7018 0.714 L -0.5865 0.6269 Z m 1.3893 0.1931 l -0.2333 0.1752 l 0.0863 0.1154 l 0.2333 -0.1743 z M -0.4625 0.7217 L -0.5194 0.8548 L -0.252 0.9693 L -0.195 0.8359 Z m 0.7126 0.1 l -0.2897 0.035 l 0.0171 0.1435 l 0.2897 -0.035 z",
}
Class.gamblerMainTurret = makeTurret({
   GUNS: [ {
         POSITION: [ 20, 16, 0.1, 3, 0, 0, 0, ],
         }, {
         POSITION: [ 15, 15, 1, 3, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, {speed: 1.75, damage: 1.3, health: 1.45, reload: 1.05, size: 1.5}]),
            TYPE: "gamblerMainBullet",
            STAT_CALCULATOR: "sustained"
         }, }, {
         POSITION: [ 10, 19, 0.8, 1, 0, 0, 0, ],
         }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.gamblerChipTurret = makeTurret({
   GUNS: [ {
         POSITION: [ 20, 16, 0.1, 3, 0, 0, 0, ],
         }, {
         POSITION: [ 15, 15, 1, 3, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, {speed: 2.7, damage: 0.95, health: Math.random()*(1.1 - 2.5)+2.5, reload: 0.95, size: 2}]),
            TYPE: "chipBullet",
            STAT_CALCULATOR: "sustained"
         }, }, {
         POSITION: [ 10, 19, 0.8, 1, 0, 0, 0, ],
         }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.gamblerCardTurret = makeTurret({
   GUNS: [ {
         POSITION: [ 20, 16, 0.1, 3, 0, 0, 0, ],
         }, {
         POSITION: [ 15, 15, 1, 3, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, {speed: 2.4, damage: Math.random()*(1 - 1.65)+1.65, health: Math.random()*(1 - 1.65)+1.65, reload: 0.9, size: 1.8}]),
            TYPE: "cardBullet",
            STAT_CALCULATOR: "sustained"
         }, }, {
         POSITION: [ 10, 19, 0.8, 1, 0, 0, 0, ],
         }, 
     ],
}, {canRepel: true, limitFov: true, fov: 3})
Class.piSymbol = {
    SHAPE: "M -0.5532 0.5089 C -0.6001 0.6681 -0.1927 0.9514 -0.1565 0.1772 C -0.1376 -0.0329 -0.1188 -0.2431 -0.0999 -0.4532 L 0.2069 -0.4555 C 0.1858 -0.1666 0.1502 0.219 0.1436 0.4112 C 0.1479 0.7348 0.5714 0.7779 0.6793 0.4968 C 0.7029 0.4503 0.7298 0.3742 0.7318 0.284 L 0.6806 0.2833 C 0.6899 0.4662 0.4056 0.5743 0.36 0.287 C 0.3349 0.2277 0.3915 -0.2066 0.3988 -0.451 L 0.7318 -0.4514 L 0.7295 -0.663 L -0.0134 -0.6654 C -0.2806 -0.6577 -0.458 -0.6577 -0.54 -0.5502 C -0.5932 -0.4836 -0.6243 -0.3543 -0.6664 -0.2563 L -0.6165 -0.2519 C -0.5078 -0.4471 -0.4269 -0.4659 -0.2317 -0.4537 C -0.2325 -0.2983 -0.2416 -0.1376 -0.3 0.0377 C -0.3301 0.2133 -0.5677 0.4623 -0.5521 0.5092",
    COLOR: "#fde910",
}
// Bodies
Class.smasherBody = {
    LABEL: "",
    FACING_TYPE: ["spin", { speed: 0.1 }],
    COLOR: "black",
    SHAPE: 6,
    INDEPENDENT: true
}
Class.pumpkinSmasher = {
    LABEL: "",
    FACING_TYPE: ["spin", { speed: 0.1 }],
    COLOR: "black",
    SHAPE: 7,
    INDEPENDENT: true
}
Class.missileProp = {
    LABEL: "",
    FACING_TYPE: "toTarget",
    COLOR: "black",
    SHAPE: 6,
}
Class.hurricaneBody1 = {
    LABEL: "",
    FACING_TYPE: ["spin", { speed: -0.35 }],
    ALPHA: 0.5,
    COLOR: "#616161",
    SHAPE: -8,
    INDEPENDENT: true
}
Class.hurricaneBody2 = {
    LABEL: "",
    FACING_TYPE: ["spin", { speed: 0.2 }],
    ALPHA: 0.3,
    COLOR: "#949494",
    SHAPE: -8,
    INDEPENDENT: true
}
Class.hurricaneBody17 = {
    LABEL: "",
    FACING_TYPE: ["spin", { speed: -0.35 }],
    ALPHA: 0.5,
    COLOR: "#949494",
    SHAPE: -16,
    INDEPENDENT: true
}
Class.hurricaneBody27 = {
    LABEL: "",
    FACING_TYPE: ["spin", { speed: 0.2 }],
    ALPHA: 0.3,
    COLOR: "#adadad",
    SHAPE: -16,
    INDEPENDENT: true
}
Class.hurricaneBody15 = {
    LABEL: "",
    FACING_TYPE: ["spin", { speed: -0.25 }],
    ALPHA: 0.5,
    COLOR: "#c7c7c7",
    SHAPE: -16,
    INDEPENDENT: true
}
Class.hurricaneBody25 = {
    LABEL: "",
    FACING_TYPE: ["spin", { speed: 0.1 }],
    ALPHA: 0.3,
    COLOR: "#e0e0e0",
    SHAPE: -16,
    INDEPENDENT: true
}
Class.hurricaneBody3 = {
    LABEL: "",
    FACING_TYPE: ["spin", { speed: -0.35 }],
    ALPHA: 0.5,
    COLOR: "#616161",
    SHAPE: -6,
    INDEPENDENT: true
}
Class.hurricaneBody4 = {
    LABEL: "",
    FACING_TYPE: ["spin", { speed: 0.2 }],
    ALPHA: 0.3,
    COLOR: "#949494",
    SHAPE: -6,
    INDEPENDENT: true
}
Class.toolbeltRing = {
    LABEL: "Base",
    FACING_TYPE: ["spin", { speed: 0.02 }],
    COLOR: "black",
    INDEPENDENT: true,
    SYNC_SKILLS: true,
    SHAPE: "M 0.0001 -1 A 1.0002 1.0002 0 0 0 -1 0.0001 A 1.0002 1.0002 0 0 0 0.0001 1.0002 A 1.0002 1.0002 0 0 0 1.0002 0.0001 A 1.0002 1.0002 0 0 0 0.0001 -1 Z m 0 0.0155 A 0.9849 0.9849 0 0 1 0.9854 0.0001 A 0.9849 0.9849 0 0 1 0.0001 0.9847 A 0.9849 0.9849 0 0 1 -0.9845 0.0001 A 0.9849 0.9849 0 0 1 0.0001 -0.9845 Z",
    TURRETS: [
        {
            POSITION: [4.65, 9.85, 0, 45, 120, 1],
            TYPE: "toolbeltTwin",
        },
        {
            POSITION: [4.65, 9.85, 0, 135, 220, 1],
            TYPE: "toolbeltSniper",
        },
        {
            POSITION: [4.65, 9.85, 0, 225, 220, 1],
            TYPE: "toolbeltMachine",
        },
        {
            POSITION: [4.65, 9.85, 0, 315, 220, 1],
            TYPE: "toolbeltPound",
        },
    ],
};
Class.revolutionistRing = {
    LABEL: "Base",
    FACING_TYPE: ["spin", { speed: 0.02 }],
    COLOR: "black",
    INDEPENDENT: true,
    SYNC_SKILLS: true,
    SHAPE: "M 0.0001 -1 A 1.0002 1.0002 0 0 0 -1 0.0001 A 1.0002 1.0002 0 0 0 0.0001 1.0002 A 1.0002 1.0002 0 0 0 1.0002 0.0001 A 1.0002 1.0002 0 0 0 0.0001 -1 Z m 0 0.0155 A 0.9849 0.9849 0 0 1 0.9854 0.0001 A 0.9849 0.9849 0 0 1 0.0001 0.9847 A 0.9849 0.9849 0 0 1 -0.9845 0.0001 A 0.9849 0.9849 0 0 1 0.0001 -0.9845 Z",
    TURRETS: weaponArray([
        {
            POSITION: [4.65, 9.85, 0, 0, 220, 1],
            TYPE: "autoTankGun",
        },
    ], 2)
};
Class.turretBase = {
    LABEL: "Base",
    FACING_TYPE: ["spin", { speed: 0.02 }],
    COLOR: "black",
    INDEPENDENT: true,
    SYNC_SKILLS: true,
    SHAPE: "M 0.0001 -1 A 1.0002 1.0002 0 0 0 -1 0.0001 A 1.0002 1.0002 0 0 0 0.0001 1.0002 A 1.0002 1.0002 0 0 0 1.0002 0.0001 A 1.0002 1.0002 0 0 0 0.0001 -1 Z m 0 0.0155 A 0.9849 0.9849 0 0 1 0.9854 0.0001 A 0.9849 0.9849 0 0 1 0.0001 0.9847 A 0.9849 0.9849 0 0 1 -0.9845 0.0001 A 0.9849 0.9849 0 0 1 0.0001 -0.9845 Z",
    TURRETS: weaponArray([
        {
            POSITION: [4.65, 9.85, 0, 0, 220, 1],
            TYPE: "autoTankGunHalfReload",
        },
    ], 2)
};
Class.subverterRing = {
    LABEL: "Base",
    FACING_TYPE: ["spin", { speed: 0.02 }],
    COLOR: "black",
    INDEPENDENT: true,
    SYNC_SKILLS: true,
    SHAPE: "M 0.0001 -1 A 1.0002 1.0002 0 0 0 -1 0.0001 A 1.0002 1.0002 0 0 0 0.0001 1.0002 A 1.0002 1.0002 0 0 0 1.0002 0.0001 A 1.0002 1.0002 0 0 0 0.0001 -1 Z m 0 0.0155 A 0.9849 0.9849 0 0 1 0.9854 0.0001 A 0.9849 0.9849 0 0 1 0.0001 0.9847 A 0.9849 0.9849 0 0 1 -0.9845 0.0001 A 0.9849 0.9849 0 0 1 0.0001 -0.9845 Z",
    TURRETS: weaponArray([
        {
            POSITION: [4.65, 9.85, 0, 0, 220, 1],
            TYPE: "autoTankGun",
        },
    ], 4)
};
Class.quadralRing = {
    LABEL: "Base",
    FACING_TYPE: ["spin", { speed: 0.04 }],
    COLOR: "black",
    INDEPENDENT: true,
    SYNC_SKILLS: true,
    SHAPE: "M 0.0001 -1 A 1.0002 1.0002 0 0 0 -1 0.0001 A 1.0002 1.0002 0 0 0 0.0001 1.0002 A 1.0002 1.0002 0 0 0 1.0002 0.0001 A 1.0002 1.0002 0 0 0 0.0001 -1 Z m 0 0.0155 A 0.9849 0.9849 0 0 1 0.9854 0.0001 A 0.9849 0.9849 0 0 1 0.0001 0.9847 A 0.9849 0.9849 0 0 1 -0.9845 0.0001 A 0.9849 0.9849 0 0 1 0.0001 -0.9845 Z",
    TURRETS: weaponArray([
        {
            POSITION: [4.65, 9.85, 0, 0, 220, 1],
            TYPE: "auto4gun7",
        },
    ], 5)
};
Class.eliteRing = {
    LABEL: "Base",
    FACING_TYPE: ["spin", { speed: 0.015 }],
    COLOR: "black",
    INDEPENDENT: true,
    SYNC_SKILLS: true,
    SHAPE: "M 0.0001 -1 A 1.0002 1.0002 0 0 0 -1 0.0001 A 1.0002 1.0002 0 0 0 0.0001 1.0002 A 1.0002 1.0002 0 0 0 1.0002 0.0001 A 1.0002 1.0002 0 0 0 0.0001 -1 Z m 0 0.0155 A 0.9849 0.9849 0 0 1 0.9854 0.0001 A 0.9849 0.9849 0 0 1 0.0001 0.9847 A 0.9849 0.9849 0 0 1 -0.9845 0.0001 A 0.9849 0.9849 0 0 1 0.0001 -0.9845 Z",
    TURRETS: weaponArray([
        {
            POSITION: [4.3, 9.85, 0, 0, 220, 1],
            TYPE: "bigauto4gun",
        },
    ], 3)
};
Class.orbitalBase = {
    LABEL: "Base",
    FACING_TYPE: ["spin", { speed: 0.015 }],
    COLOR: "black",
    INDEPENDENT: true,
    SYNC_SKILLS: true,
    SHAPE: "M 0.0001 -1 A 1.0002 1.0002 0 0 0 -1 0.0001 A 1.0002 1.0002 0 0 0 0.0001 1.0002 A 1.0002 1.0002 0 0 0 1.0002 0.0001 A 1.0002 1.0002 0 0 0 0.0001 -1 Z m 0 0.0155 A 0.9849 0.9849 0 0 1 0.9854 0.0001 A 0.9849 0.9849 0 0 1 0.0001 0.9847 A 0.9849 0.9849 0 0 1 -0.9845 0.0001 A 0.9849 0.9849 0 0 1 0.0001 -0.9845 Z",
    TURRETS: [
        ...weaponArray({
            POSITION: [2.65, 9.85, 0, 0, 220, 1],
            TYPE: "sniperGuard",
        }, 7),
        ...weaponArray({
            POSITION: [2.2, 9.85, 0, 25,7142857143, 220, 1],
            TYPE: ["decoTankGun", {COLOR: "#757575"}],
        }, 7)
    ],
};
Class.deuteronRing = {
    LABEL: "Base",
    FACING_TYPE: ["spin", { speed: 0.02 }],
    COLOR: "black",
    INDEPENDENT: true,
    SYNC_SKILLS: true,
    SHAPE: "M 0.0001 -1 A 1.0002 1.0002 0 0 0 -1 0.0001 A 1.0002 1.0002 0 0 0 0.0001 1.0002 A 1.0002 1.0002 0 0 0 1.0002 0.0001 A 1.0002 1.0002 0 0 0 0.0001 -1 Z m 0 0.0155 A 0.9849 0.9849 0 0 1 0.9854 0.0001 A 0.9849 0.9849 0 0 1 0.0001 0.9847 A 0.9849 0.9849 0 0 1 -0.9845 0.0001 A 0.9849 0.9849 0 0 1 0.0001 -0.9845 Z",
    TURRETS: weaponArray([
        {
            POSITION: [4.65, 9.85, 0, 0, 220, 1],
            TYPE: "autoTankGun",
        },
    ], 6)
};
Class.hs5Ring = {
    LABEL: "Base",
    FACING_TYPE: ["spin", { speed: 0.02 }],
    COLOR: "black",
    INDEPENDENT: true,
    SYNC_SKILLS: true,
    SHAPE: "M -0.058 -1 V -0.9959 A 1.0001 1.0001 0 0 0 -0.9959 -0.058 H -1 v 0.0579 v 0.0579 h 0.0041 a 1.0001 1.0001 0 0 0 0.9379 0.9384 V 1.0002 H -0.0001 H 0.0577 V 0.9961 A 1.0001 1.0001 0 0 0 0.9961 0.0577 h 0.0041 V -0.0001 V -0.058 h -0.0041 A 1.0001 1.0001 0 0 0 0.0577 -0.9959 V -1 H -0.0001 Z m 0 0.0196 v 0.9224 H -0.9804 a 0.9848 0.9849 0 0 1 0.9224 -0.9224 z m 0.1157 0 a 0.9848 0.9849 0 0 1 0.9234 0.9224 H 0.0577 Z M -0.9804 0.0577 H -0.058 V 0.9806 A 0.9848 0.9849 0 0 1 -0.9804 0.0577 Z m 1.0381 0 h 0.9234 a 0.9848 0.9849 0 0 1 -0.9234 0.9229 z",
    TURRETS: [
        ...weaponArray({
            POSITION: [1.5, 9.85, 0, 30, 220, 1],
            TYPE: "baseTrapTurret",
        }, 8),
        ...weaponArray({
            POSITION: [1.35, 7, 0, 0, 220, 1],
            TYPE: "novaTurret",
        }, 4),
    ],
};
Class.deuteronRing22 = {
    LABEL: "Base",
    FACING_TYPE: ["spin", { speed: 0.02 }],
    COLOR: "black",
    INDEPENDENT: true,
    SYNC_SKILLS: true,
    SHAPE: "M 0.0001 -1 A 1.0002 1.0002 0 0 0 -1 0.0001 A 1.0002 1.0002 0 0 0 0.0001 1.0002 A 1.0002 1.0002 0 0 0 1.0002 0.0001 A 1.0002 1.0002 0 0 0 0.0001 -1 Z m 0 0.0155 A 0.9849 0.9849 0 0 1 0.9854 0.0001 A 0.9849 0.9849 0 0 1 0.0001 0.9847 A 0.9849 0.9849 0 0 1 -0.9845 0.0001 A 0.9849 0.9849 0 0 1 0.0001 -0.9845 Z",
    TURRETS: weaponArray([
        {
            POSITION: [2.5, 15.85, 0, 0, 220, 1],
            TYPE: "rock",
            VULNERABLE: true,
        },
    ], 6)
};
Class.landmineBody = {
    LABEL: "",
    FACING_TYPE: ["spin", { speed: 0.1 }],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true
}
Class.spikeBody = {
    PARENT: "smasherBody",
    SHAPE: 3
}
Class.spikeBody1 = {
    PARENT: "smasherBody",
    FACING_TYPE: "oldSpikeSpin1",
    SHAPE: 3
}
Class.spikeBody2 = {
    PARENT: "smasherBody",
    FACING_TYPE: "oldSpikeSpin2",
    SHAPE: 3
}
Class.sharpBody = {
    PARENT: "smasherBody",
    SHAPE: "M -1.21 1.21 C -1.21 1.21 -0.9075 0.605 -1.21 0.3025 C -0.9075 0.3025 -0.9075 -0.3025 -1.21 -0.3025 C -0.9075 -0.605 -1.21 -1.21 -1.21 -1.21 C -1.21 -1.21 -0.605 -0.9075 -0.3025 -1.21 C -0.3025 -0.9075 0.3025 -0.9075 0.3025 -1.21 C 0.605 -0.9075 1.21 -1.21 1.21 -1.21 C 1.21 -1.21 0.9075 -0.605 1.21 -0.3025 C 0.9075 -0.3025 0.9075 0.3025 1.21 0.3025 C 0.9075 0.605 1.21 1.21 1.21 1.21 C 1.21 1.21 0.605 0.9075 0.3025 1.21 C 0.3025 0.9075 -0.3025 0.9075 -0.3025 1.21 C -0.605 0.9075 -1.21 1.21 -1.21 1.21",
}
Class.blackSquare = {
    SHAPE: 4,
    COLOR: "black",
    FACING_TYPE: ["spin", {speed: 0.01}],
}
Class.dominationBody = {
    LABEL: "",
    FACING_TYPE: ["noFacing", { angle: Math.PI / 2 }],
    COLOR: "black",
    SHAPE: 6,
    INDEPENDENT: true
}
