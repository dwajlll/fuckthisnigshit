const { combineStats, skillSet, makeAuto, weaponArray } = require('../facilitators.js')
const { base, statnames, dfltskl, smshskl } = require('../constants.js')
require('./generics.js')
require('./tanks.js')
const g = require('../gunvals.js')

// OBSTACLES
Class.rock = {
    TYPE: "wall",
    DAMAGE_CLASS: 1,
    LABEL: "Rock",
    FACING_TYPE: "turnWithSpeed",
    SHAPE: -9,
    CAN_GO_OUTSIDE_ROOM: true,
    BODY: {
        PUSHABILITY: 0,
        HEALTH: 10000,
        SHIELD: 10000,
        REGEN: 1000,
        DAMAGE: 1,
        RESIST: 100,
        STEALTH: 1,
    },
    VALUE: 0,
    SIZE: 60,
    COLOR: "lightGray",
    VARIES_IN_SIZE: true,
    ACCEPTS_SCORE: false
}
Class.stone = {
    PARENT: "rock",
    LABEL: "Stone",
    SIZE: 32,
    SHAPE: -7
}
Class.pumpkinLine = {
    LABEL: "Line",
    SHAPE: -1,
    COLOR: "#ff9000",
}
Class.pumpkinCircle = {
    LABEL: "Circle",
    SHAPE: 0,
    COLOR: "#654320",
}
Class.pumpkinStar = {
    LABEL: "Star",
    SHAPE: -6,
    COLOR: "#267524"
}
Class.bigPumpkin = {
    PARENT: "stone",
    LABEL: "Pumpkin",
    SHAPE: 9,
    COLOR: "#ff9000",
    GUNS: [],
    SIZE: 63,
    PROPS: [
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
    ],
};
Class.smallPumpkin = {
    PARENT: "stone",
    LABEL: "Pumpkin",
    SHAPE: 9,
    COLOR: "#ff9000",
    GUNS: [],
    SIZE: 58.5,
    PROPS: [
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
    ],
};
Class.backShieldTurret = {
    PARENT: "obstacleTurret",
    LABEL: "Back Shield",
    COLOR: "tangerine",
    HITS_OWN_TYPE: "push",
    SHAPE: "M -0.7988 -0.9216 C -0.4589 -0.3615 -0.3122 0.2275 -0.7988 0.911 C -0.2746 0.7272 0.2518 0.486 0.7883 -0.0053 C 0.2281 -0.5054 -0.2875 -0.7268 -0.7988 -0.9216",
}
Class.gravel = {
    PARENT: "rock",
    LABEL: "Gravel",
    SIZE: 16,
    SHAPE: -7
}
Class.obstacleTurret = {
    LABEL: 'Shield',
    DAMAGE_CLASS: 1,
    SHAPE: 0,
    BODY: {
        PUSHABILITY: 0,
        HEALTH: 1e4,
        REGEN: 1000,
        DAMAGE: 1,
        RESIST: 10000,
        STEALTH: 1,
        DENSITY: 10000
    },
    VALUE: 0,
    SYNC_SKILLS: true,
    HITS_OWN_TYPE: "push"
};
Class.wall = {
    PARENT: "rock",
    LABEL: "Wall",
    SIZE: 25,
    SHAPE: 4,
    VARIES_IN_SIZE: false
}
Class.moon = {
    PARENT: "rock",
    LABEL: "Moon",
    SIZE: 60,
    SHAPE: 0,
    VARIES_IN_SIZE: false
}

// DOMINATORS
Class.dominator = {
    PARENT: "genericTank",
    LABEL: "Dominator",
    UPGRADE_LABEL: 'Unknown',
    ON_MINIMAP: false,
    DANGER: 7,
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        str: 1,
        spd: 1,
    }),
    LEVEL: 45,
    LEVEL_CAP: 45,
    SIZE: 50,
    SYNC_WITH_TANK: true,
    BODY: {
        RESIST: 100,
        SPEED: 1.32,
        ACCELERATION: 0.8,
        HEALTH: 590,
        DAMAGE: 6,
        PENETRATION: 0.25,
        FOV: 0.5,
        PUSHABILITY: 0,
        HETERO: 0,
        SHIELD: base.SHIELD * 1.4
    },
    CONTROLLERS: ["nearestDifferentMaster", ["spin", { onlyWhenIdle: true }]],
    DISPLAY_NAME: true,
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "dominationBody"
        }
    ],
    CAN_BE_ON_LEADERBOARD: false,
    GIVE_KILL_MESSAGE: false,
    ACCEPTS_SCORE: false,
    HITS_OWN_TYPE: "pushOnlyTeam"
}
Class.destroyerDominator = {
    PARENT: "dominator",
    UPGRADE_LABEL: 'Destroyer',
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
Class.rocketeerDominator = {
    PARENT: "dominator",
    UPGRADE_LABEL: 'Rocketeer',
    GUNS: [
        {
         POSITION: [ 25, 8, 1.5, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 21, 13, -1.3, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.heavyRocketeerDominator]),
            TYPE: "heavyRocket",
            STAT_CALCULATOR: "sustained",
         }, }, {
         POSITION: [ 12, 15, -1.3, 0, 0, 0, 0, ],
        }
    ]
}
Class.shotgunDominator = {
    PARENT: "dominator",
    UPGRADE_LABEL: 'Shotgun',
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgunDominator]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgunDominator]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgunDominator]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgunDominator]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgunDominator]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgunDominator]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgunDominator]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgunDominator]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgunDominator]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [11.5, 10, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgunDominator, g.fake]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [8, 10, -1.3, 4, 0, 0, 0],
        },
    ],
}
Class.gunnerDominator = {
    PARENT: "dominator",
    UPGRADE_LABEL: 'Gunner',
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
Class.trapperDominator = {
    PARENT: "dominator",
    UPGRADE_LABEL: 'Trapper',
    FACING_TYPE: ["spin", {speed: 0.02}],
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
Class.penDominator = {
    PARENT: "dominator",
    UPGRADE_LABEL: 'Pen',
    FACING_TYPE: ["spin", {speed: 0.06}],
    GUNS: weaponArray([
        {
         POSITION: [ 15, 3.75, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.weaker]),
            TYPE: "bullet",
            AUTOFIRE: true,
         }, }, {
         POSITION: [ 1.25, 3.75, 1.7, 12, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
            TYPE: "trap",
            STAT_CALCULATOR: "trap",
            AUTOFIRE: true,
            }
        }
    ], 8)
}
Class.mechDominator = {
    PARENT: "dominator",
    UPGRADE_LABEL: 'Mech',
    FACING_TYPE: ["spin", {speed: 0.06}],
    GUNS: weaponArray([
        {
         POSITION: [ 13, 4, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 11, 5.35, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 1.5, 4, 1.5, 13, 0, 0, 0, ],
         PROPERTIES: {
            MAX_CHILDREN: 6,
            SHOOT_SETTINGS: combineStats([g.trap, g.mechDominator]),
            TYPE: "weakestPillbox",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            DESTROY_OLDEST_CHILD: true,
            STAT_CALCULATOR: "block"
            }
        }
    ], 6)
}

// SANCTUARIES
let sancTiers =       [3, 6, 8, 9, 10, 12]
let sancHealerTiers = [2, 3, 4]
for (let tier of sancHealerTiers) {
    Class['sanctuaryHealerTier' + (sancHealerTiers.indexOf(tier) + 1)] = {
        PARENT: "sanctuaryHealer",
        GUNS: weaponArray([
            {
                POSITION: { LENGTH: 8, WIDTH: 9, ASPECT: -0.5, X: 12.5 },
            }, {
                POSITION: { LENGTH: 8, WIDTH: 10, X: 10 },
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, { range: 0.5 }, g.healer]),
                    TYPE: "healerBullet",
                    AUTOFIRE: true,
                }
            }
        ], tier)
    }
}

Class.sanctuary = {
    PARENT: "dominator",
    LABEL: "Sanctuary",
    LEVEL: 45,
    SIZE: 20,
    FACING_TYPE: ["spin", {speed: 0.02}],
    SKILL: skillSet({
        rld: 1.25,
        dam: 1.25,
        str: 1.25,
    }),
    BODY: {
        HEALTH: 750,
        DAMAGE: 7.5,
        SHIELD: base.SHIELD * 1.5,
    },
    TURRETS: [{
        POSITION: { SIZE: 22 },
        TYPE: "dominationBody",
    }]
};

for (let tier of sancTiers) {
    let sancIndex = sancTiers.indexOf(tier)
    Class['sanctuaryTier' + (sancIndex + 1)] = {
        PARENT: "sanctuary",
        TURRETS: [],
        UPGRADE_LABEL: 'Tier ' + (sancIndex + 1),
        GUNS: weaponArray([
            {
                POSITION: {LENGTH: 12, WIDTH: 4}
            }, {
                POSITION: {LENGTH: 1.5, WIDTH: 4, ASPECT: 1.7, X: 12},
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, {shudder: 0.15, speed: 0.8, health: 3, reload: 1.5}]),
                    TYPE: "trap",
                    STAT_CALCULATOR: "trap",
                    AUTOFIRE: true,
                },
            }
        ], tier)
    }
    Class['sanctuaryTier' + (sancIndex + 1)].TURRETS.push({
        POSITION: { SIZE: 22 },
        TYPE: "dominationBody",
    }, {
        POSITION: { SIZE: 8.5, LAYER: 1 },
        TYPE: "sanctuaryHealerTier" + (sancIndex < 2 ? 1 : sancIndex < 4 ? 2 : sancIndex < 6 ? 3 : 3),
    })
}

// CRASHERS
Class.crasher = {
    TYPE: "crasher",
    LABEL: "Crasher",
    COLOR: "pink",
    SHAPE: 3,
    SIZE: 5,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        SPEED: 5,
        ACCELERATION: 1.4,
        HEALTH: 0.5,
        DAMAGE: 5,
        PENETRATION: 2,
        PUSHABILITY: 0.5,
        DENSITY: 10,
        RESIST: 2,
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothWithMotion",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
}
Class.madSquare = {
    PARENT: "crasher",
    LABEL: "Angry Square",
    VALUE: 30,
    SHAPE: "M -1.5 1 L -0.5 0 L -1.5 -1 L 0.5 -1 L 1.5 0 L 0.5 1 L -1.5 1",
    SIZE: 14,
    COLOR: "gold",
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
Class.healthySquare = {
    PARENT: "crasher",
    LABEL: "Metal Square",
    SHAPE: "M -1.0125 0.6075 L -1.0125 -0.6075 C -1.0125 -1.0125 -0.6075 -1.0125 -0.6075 -1.0125 L 0.6075 -1.0125 C 1.0125 -1.0125 1.0125 -0.6075 1.0125 -0.6075 L 1.0125 0.6075 C 1.0125 1.0125 0.6075 1.0125 0.6075 1.0125 L -0.6075 1.0125 C -0.6075 1.0125 -1.0125 1.0125 -1.0125 0.6075",
    COLOR: "lightGreen",
    SIZE: 10.5,
    BODY: {
        SPEED: 3.5,
        ACCELERATION: 1.4,
        HEALTH: 5.5,
        DAMAGE: 2.5,
        PENETRATION: 2,
        PUSHABILITY: 0.15,
        DENSITY: 10,
        RESIST: 4.5,
    },
}
Class.missile23Crasher = {
    TYPE: "crasher",
    LABEL: "Missile",
    COLOR: "evening",
    SHAPE: "M -0.504 0.504 C 0 1.008 0 2 0.504 0.504 L 3 0 L 0.504 -0.504 C 0 -2 0 -1 -0.504 -0.504 L -0.504 -1.008 C -1.008 -1.008 -1.008 -0.504 -1.512 -0.504 C -2.016 0 -2 -1 -2 0 C -2 1 -2.016 0 -1.512 0.504 C -1.008 0.504 -1.008 1.008 -0.504 1.008 L -0.504 0.504",
    SIZE: 9,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        SPEED: 15,
        ACCELERATION: 1.4,
        HEALTH: 0.7,
        DAMAGE: 14.5,
        PENETRATION: 4,
        PUSHABILITY: 0.9,
        DENSITY: 5,
        RESIST: 3.5,
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothWithMotion",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
}

// SENTRIES
Class.sentry = {
    PARENT: "genericTank",
    TYPE: "crasher",
    LABEL: "Sentry",
    DANGER: 3,
    COLOR: "pink",
    UPGRADE_COLOR: "pink",
    SHAPE: 3,
    SIZE: 10,
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0.7,
        mob: 0,
    }),
    VALUE: 1500,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        FOV: 0.5,
        ACCELERATION: 0.75,
        DAMAGE: base.DAMAGE,
        SPEED: 0.5 * base.SPEED,
        HEALTH: 0.3 * base.HEALTH,
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothToTarget",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
Class.sentry4square = {
    PARENT: "genericTank",
    LABEL: "Square Sentry",
    FACING_TYPE: "spin",
    DANGER: 3,
    SIZE: 11,
    VALUE: 30,
    TEAM: -101,
    SHAPE: 4,
    COLOR: "gold",
    MOTION_TYPE: "motor",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    AI: {
        NO_LEAD: true,
    },
    BODY: {
        FOV: 0.5,
        ACCELERATION: 0.75,
        DAMAGE: base.DAMAGE,
        SPEED: 0.5 * base.SPEED,
        HEALTH: 0.3 * base.HEALTH,
    },
    SKILL: skillSet({
        rld: 0.5,
        dam: 0.8,
        pen: 0.8,
        str: 0.1,
        spd: 1,
        atk: 0.5,
        hlt: 0,
        shi: 0,
        rgn: 0.7,
        mob: 0,
    }),
    GUNS: [],
    TURRETS: [
        {
          POSITION: [10.5, 8.5, 0, 0, 0, 0],
          TYPE: ["autoTankGun", {CONTROLLERS: ["canRepel", "mapAltToFire", "onlyAcceptInArc", "nearestDifferentMaster"], INDEPENDENT: false, hasAI: true}],
        },
    ],
};
Class.minigunCrasher = {
   PARENT: 'crasher',
   LABEL: 'Minigun Crasher',
   TYPE: 'crasher',
   SHAPE: 3,
   DAMAGE_CLASS: 2,
   DANGER: 10,
   MOTION_TYPE: 'motor',
   FACING_TYPE: 'smoothToTarget',
   SIZE: 23,
   MAX_CHILDREN: 0,
   DAMAGE_EFFECTS: false,
   COLOR: 5,
   GUNS: [ {
         POSITION: [ 23, 6, 1, 0, 0, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 23, 6, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 6, 1, 0, 0, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 6, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 6, 1, 0, 0, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 6, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 6, 1, 0, 0, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 6, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 6, 1, 0, 0, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 6, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 13, 6, 1, 0, 0, -37.5, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 13, 6, 1, 0, 0, 45, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 23, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 21, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 19, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 13, 9, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 12, 5, 1, 2, -4, 180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 12, 5, 1, 2, 4, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 16, 7, 1, 0, 0, -180, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.streamliner]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.sentrySwarm = {
    PARENT: "sentry",
    UPGRADE_LABEL: "Swarm Sentry",
    UPGRADE_COLOR: "pink",
    GUNS: [
        {
            POSITION: [7, 14, 0.6, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, { recoil: 1.15, range: 0.9 }]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
};
Class.sentryLeaf = {
   PARENT: 'sentry',
   LABEL: 'Leaf Sentry',
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
Class.sentryLeafCap = {
   PARENT: 'sentry',
   LABEL: 'Cap Leaf Sentry',
   SIZE: 11.5,
   SKILL: skillSet({
       rld: 0.5,
       dam: 0.8,
       pen: 0.8,
       str: 0.1,
       spd: 1,
       atk: 0.5,
       hlt: 5,
       shi: 5,
       rgn: 0.7,
       mob: 0,
   }),
   SHAPE: "M -0.35 0 L 1.05 0 C 1.05 -0.7 0.7 -1.05 0 -1.05 C -0.35 -1.05 -0.7 -0.7 -1.4 0 C -0.7 0.7 -0.35 1.05 0 1.05 C 0.7 1.05 1.05 0.7 1.05 0",
   COLOR: "#228b22",
   TURRETS: [
       {
           POSITION: [12, 0, 0, -2, 360, 2],
           TYPE: ['capSymbol', { FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }] }],
       },
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
Class.sentryLeaf2 = {
   PARENT: 'sentry',
   LABEL: 'Leaf Sentry',
   SIZE: 12,
   SHAPE: "M -0.35 0 L 1.05 0 C 1.05 -0.7 0.7 -1.05 0 -1.05 C -0.35 -1.05 -0.7 -0.7 -1.4 0 C -0.7 0.7 -0.35 1.05 0 1.05 C 0.7 1.05 1.05 0.7 1.05 0",
   COLOR: "#228b22",
   TURRETS: [
       {
           POSITION: [13, 2, 0, 0, 360, 1],
           TYPE: "leafSymbol",
       },
   ],
   GUNS: [ {
         POSITION: [ 15, 7, 1, 0, -6, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.leaf, g.twin]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 7, 1, 0, 6, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.leaf, g.twin]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.sentryLeaf3 = {
   PARENT: 'sentry',
   LABEL: 'Leaf Sentry',
   SIZE: 12,
   SHAPE: "M -0.35 0 L 1.05 0 C 1.05 -0.7 0.7 -1.05 0 -1.05 C -0.35 -1.05 -0.7 -0.7 -1.4 0 C -0.7 0.7 -0.35 1.05 0 1.05 C 0.7 1.05 1.05 0.7 1.05 0",
   COLOR: "#228b22",
   TURRETS: [
       {
           POSITION: [13, 2, 0, 0, 360, 1],
           TYPE: "leafSymbol",
       },
   ],
   GUNS: [ {
         POSITION: [ 15, 7, 1, 0, -5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.leaf, g.twin, g.triplet]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 15, 7, 1, 0, 5, 0, 0.5, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.leaf, g.twin, g.triplet]),
            TYPE: "bullet",
         }, }, {
         POSITION: [ 17, 7, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.leaf, g.twin, g.triplet]),
            TYPE: "bullet",
         }, }, 
     ],
};
Class.sentryGun = makeAuto("sentry", "Sentry", {
    type: "megaAutoTankGun",
    size: 12,
});
Class.sentryTwin = makeAuto("sentry", "Twin Sentry", {
    type: "twinTurret",
    size: 12,
});
Class.sentryBruiser = makeAuto("sentry", "Bruiser Sentry", {
    type: "bruiserTurret",
    size: 12,
});
Class.sentryCarrier = makeAuto("drone", "Carrier Sentry", {
    type: "carrierTurret",
    size: 12,
});
Class.sentryBruiser1 = makeAuto("drone", "Bruiser Sentry", {
    type: "bruiserTurret",
    size: 12,
});
Class.sentryRifle = makeAuto("sentry", "Rifle Sentry", {
    type: "rifleTurret",
    size: 12,
});
Class.sentrySingle = makeAuto("sentry", "Single Sentry", {
    type: "singleTurret",
    size: 12,
});
Class.sentrySniper = makeAuto("sentry", "Sniper Sentry", {
    type: "sniperTurret",
    size: 12,
});
Class.sentryGun.UPGRADE_LABEL = "Gun Sentry";
Class.sentryTrap = makeAuto("sentry", "Sentry", {
    type: "trapTurret",
    size: 12,
});
Class.sentryMech = makeAuto("sentry", "Mech Sentry", {
    type: "mechTurret",
    size: 12,
});
Class.sentryMech1 = makeAuto("drone", "Mech Sentry", {
    type: "mechTurret",
    size: 12,
});
Class.sentryTrap.UPGRADE_LABEL = "Trap Sentry";
Class.shinySentry = {
    PARENT: "sentry",
    COLOR: "lightGreen",
    UPGRADE_COLOR: "lightGreen",
    DANGER: 4,
    SIZE: 12,
    VALUE: 50000,
    SHAPE: 3,
    BODY: {
        HEALTH: 0.6 * base.HEALTH
    },
};
Class.shinySentrySwarm = {
    PARENT: "shinySentry",
    UPGRADE_LABEL: "Shiny Swarm Sentry",
    UPGRADE_COLOR: "lightGreen",
    GUNS: [
        {
            POSITION: [6, 11, 1.3, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, { recoil: 1.15 }, g.machineGun, { reload: 0.25 }]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
    ],
};
Class.shinySentryGun = makeAuto("shinySentry", "Sentry", {
    type: "artilleryTurret",
    size: 12,
});
Class.shinySentryGun.UPGRADE_LABEL = "Shiny Gun Sentry";
Class.shinySentryTrap = makeAuto("shinySentry", "Sentry", {
    type: "barricadeTurret",
    size: 12,
});
Class.shinySentryTrap.UPGRADE_LABEL = "Shiny Trap Sentry";

// SENTINELS (by ranar)
Class.sentinel = {
    PARENT: "genericTank",
    TYPE: "crasher",
    LABEL: "Sentinel",
    DANGER: 7,
    COLOR: "purple",
    SHAPE: 5,
    SIZE: 13,
    SKILL: skillSet({
        rld: 0.7, //reload
        dam: 0.45, //bullet damage
        pen: 0.6, //bullet penetration
        str: 0.6, //bullet health
        atk: 0.5, //bullet speed
        spd: 0.6, //body damage
        hlt: 0.85, //max health
        shi: 0.45, //shield capacity
        rgn: 0.35, //shield regeneration
        mob: 0, //movement speed
    }),
    VALUE: 26668,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal", "minion"],
    AI: { NO_LEAD: true },
    BODY: {
        FOV: 0.8,
        ACCEL: 0.003,
        DAMAGE: base.DAMAGE * 2.1,
        SPEED: base.SPEED * 0.4,
        HEALTH: base.HEALTH * 2.1,
        SHIELD: base.SHIELD * 2.1,
        REGEN: base.REGEN * 0.15,
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothToTarget",
    HAS_NO_MASTER: true,
    HITS_OWN_TYPE: "hard",
};
Class.sentinelLauncher = {
    PARENT: "sentinel",
    UPGRADE_LABEL: "Missile Sentinel",
    UPGRADE_COLOR: "purple",
    GUNS: [
        {
            POSITION: [3, 12.45, -1.35, 17.2, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher]),
                TYPE: "sentinelMissile",
            },
        }, {
            POSITION: [17.5, 13, 1.25, 0, 0, 0, 0],
        }, {
            POSITION: [18.55, 20.25, 0.25, 1, 0, 0, 0],
        },
    ],
};
Class.sentinelCrossbow = {
    PARENT: "sentinel",
    UPGRADE_LABEL: "Crossbow Sentinel",
    UPGRADE_COLOR: "purple",
    GUNS: [
        {
            POSITION: [15, 2.5, 1, 0, 3.5, 35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, { speed: 0.7, maxSpeed: 0.7 }, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [15, 2.5, 1, 0, -3.5, -35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, { speed: 0.7, maxSpeed: 0.7 }, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 3.5, 1, 0, 4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, { speed: 0.7, maxSpeed: 0.7 }, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 3.5, 1, 0, -4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, { speed: 0.7, maxSpeed: 0.7 }, g.crossbow, { recoil: 0.5 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, { speed: 0.7, maxSpeed: 0.7, reload: 2, recoil: 0.5 }]),
                TYPE: "bullet",
            },
        },
    ],
};
Class.sentinelMinigun = {
    PARENT: "sentinel",
    UPGRADE_LABEL: "Minigun Sentinel",
    UPGRADE_COLOR: "purple",
    GUNS: [
        {
            POSITION: [16, 7.5, 1, 0, 4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.twin, g.spam, g.spam]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [11.5, 7.5, -1.33, 1, 4.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.twin, g.spam, g.spam]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [16, 7.5, 1, 0, -4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.twin, g.spam, g.spam]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [11.5, 7.5, -1.33, 1, -4.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.twin, g.spam, g.spam]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [22.5, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.twin, g.spam, g.spam]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [20.4, 9, 1, 0, 0, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.twin, g.spam, g.spam]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [18.3, 9, 1, 0, 0, 0, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minigun, g.twin, g.spam, g.spam]),
                TYPE: "bullet",
            },
        },
    ],
};
Class.pumpkinSentinel = {
    PARENT: "sentinel",
    LABEL: "Pounder",
    SHAPE: 7,
    COLOR: "#ff9000",
    GUNS: [ {
         POSITION: [ 15.5, 10, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.less_damage, g.less_damage, g.less_health, g.less_reload]),
            TYPE: "bullet",
            COLOR: "#7c664f",
         }, }, 
    ],
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
            POSITION: [6.5, 0, 0, 0, 360, 3],
            TYPE: "pumpkinStar",
        },
    ],
};
Class.pumpkinSentinelMach = {
    PARENT: "sentinel",
    LABEL: "Machine Gun",
    SHAPE: 7,
    COLOR: "#ff9000",
    GUNS: [ {
         POSITION: [ 16, 8, 1.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.half_damage, g.less_health, g.more_reload, g.more_reload]),
            TYPE: "bullet",
            COLOR: "#7c664f",
         }, }, 
    ],
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
            POSITION: [6.5, 0, 0, 0, 360, 3],
            TYPE: "pumpkinStar",
        },
    ],
};
Class.pumpkinSentinelSmash = {
    PARENT: "sentinel",
    LABEL: "Smasher",
    SHAPE: 7,
    COLOR: "#ff9000",
    GUNS: [],
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "canRepel",
        "mapTargetToGoal",
        "hangOutNearMaster",
    ],
    AI: {
        BLIND: true,
    },
    SKILL: skillSet({
        spd: 0.8, //body damage
        hlt: 0.9, //max health
        shi: 0.55, //shield capacity
        rgn: 0.45, //shield regeneration
        mob: 0.85, //movement speed
    }),
    BODY: {
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY,
        DAMAGE: 1.5 * base.DAMAGE,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "pumpkinSmasher"
        },
    ],
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
            POSITION: [6.5, 0, 0, 0, 360, 3],
            TYPE: "pumpkinStar",
        },
    ],
};
Class.pumpkinSentinel2 = {
    PARENT: "sentinel",
    LABEL: "Destroyer",
    SHAPE: 7,
    COLOR: "#ff9000",
    SIZE: 17,
    GUNS: [ {
         POSITION: [ 15.5, 13.5, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.less_damage, g.less_damage, g.less_health, g.less_reload, {damage: 1.2, health: 1.3, speed: 1.05, reload: 1.2}]),
            TYPE: "bullet",
            COLOR: "#7c664f",
         }, }, 
    ],
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
            POSITION: [6.5, 0, 0, 0, 360, 3],
            TYPE: "pumpkinStar",
        },
    ],
};
Class.pumpkinSentinelMach2 = {
    PARENT: "sentinel",
    LABEL: "Machine Gun",
    SHAPE: 7,
    COLOR: "#ff9000",
    SIZE: 17,
    GUNS: [ {
         POSITION: [ 17.4, 10, 1.5, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.half_damage, g.less_health, g.more_reload, g.more_reload, {reload: 0.7, speed: 1.15, damage: 0.85, size: 0.8}]),
            TYPE: "bullet",
            COLOR: "#7c664f",
         }, }, 
    ],
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
            POSITION: [6.5, 0, 0, 0, 360, 3],
            TYPE: "pumpkinStar",
        },
    ],
};
Class.pumpkinSentinelSmash2 = {
    PARENT: "sentinel",
    LABEL: "Smasher",
    SHAPE: 7,
    SIZE: 17,
    COLOR: "#ff9000",
    GUNS: [],
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "canRepel",
        "mapTargetToGoal",
        "hangOutNearMaster",
    ],
    AI: {
        BLIND: true,
    },
    SKILL: skillSet({
        spd: 0.8, //body damage
        hlt: 0.9, //max health
        shi: 0.55, //shield capacity
        rgn: 0.45, //shield regeneration
        mob: 0.85, //movement speed
    }),
    BODY: {
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY,
        DAMAGE: 3 * base.DAMAGE,
    },
    TURRETS: [
        {
            POSITION: [23, 0, 0, 0, 360, 0],
            TYPE: "pumpkinSmasher"
        },
    ],
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
            POSITION: [6.5, 0, 0, 0, 360, 3],
            TYPE: "pumpkinStar",
        },
    ],
};

// MISCELLANEOUS TANKS
Class.baseProtector = {
    PARENT: "genericTank",
    LABEL: "Base",
    UPGRADE_LABEL: "Base Protector",
    ON_MINIMAP: false,
    SIZE: 64,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    IGNORED_BY_AI: true,
    HITS_OWN_TYPE: "pushOnlyTeam",
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: {
        SPEED: 0,
        HEALTH: 1e4,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1e3,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        RESIST: 10000,
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
Class.corruptProtector = {
    PARENT: "genericTank",
    LABEL: "Corrupt X",
    UPGRADE_LABEL: "Corrupt X",
    ON_MINIMAP: false,
    SIZE: 64,
    COLOR: 19,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: false,
    CAN_BE_ON_LEADERBOARD: false,
    IGNORED_BY_AI: true,
    HITS_OWN_TYPE: "pushOnlyTeam",
    SKILL: skillSet({
        rld: 1,
        dam: 1,
        pen: 1,
        spd: 1,
        str: 1,
    }),
    BODY: {
        SPEED: 0,
        HEALTH: 1e4,
        DAMAGE: 10,
        PENETRATION: 0.25,
        SHIELD: 1e3,
        REGEN: 100,
        FOV: 1,
        PUSHABILITY: 0,
        RESIST: 10000,
        HETERO: 0,
    },
    FACING_TYPE: ["spin", {speed: 0.02}],
    TURRETS: [
        {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: ['corruptx', { FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }] }]
        },
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: "dominationBody",
        },
        ...weaponArray({
            POSITION: [12, 7, 0, 45, 100, 0],
            TYPE: "baseSwarmTurretCorrupt",
            COLOR: 19,
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

Class.mothership = {
    PARENT: "genericTank",
    LABEL: "Mothership",
    DANGER: 10,
    SIZE: Class.genericTank.SIZE * (7 / 3),
    SHAPE: 16,
    STAT_NAMES: statnames.drone,
    VALUE: 5e5,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    BODY: {
        REGEN: 0,
        FOV: 1,
        SHIELD: 0,
        ACCEL: 0.2,
        SPEED: 0.3,
        HEALTH: 2000,
        PUSHABILITY: 0.15,
        DENSITY: 0.2,
        DAMAGE: 1.5,
    },
    HITS_OWN_TYPE: "pushOnlyTeam",
    GUNS: 
    weaponArray([
        {
            POSITION: [4.3, 3.1, 1.2, 8, 0, 22.5, 0],
            PROPERTIES: {
                MAX_CHILDREN: 2,
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer, g.mothership]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
            }
        }, {
            POSITION: [4.3, 3.1, 1.2, 8, 0, 45, 1/32],
            PROPERTIES: {
                MAX_CHILDREN: 2,
                SHOOT_SETTINGS: combineStats([g.drone, g.overseer, g.mothership]),
                TYPE: ["drone", {
                        AI: {skynet: true},
                        INDEPENDENT: true,
                        BODY: {FOV: 2},
                    }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
            }
        }
    ], 8, 1/16)
}
Class.arenaCloser = {
    PARENT: "genericTank",
    LABEL: "Arena Closer",
    NAME: "Arena Closer",
    DANGER: 10,
    SIZE: 34,
    COLOR: "yellow",
    UPGRADE_COLOR: "yellow",
    LAYER: 13,
    BODY: {
        REGEN: 1e5,
        HEALTH: 1e6,
        DENSITY: 30,
        DAMAGE: 1e5,
        FOV: 10,
        SPEED: 16,
    },
    SKILL: skillSet({ rld: 1, dam: 1, pen: 1, str: 1, spd: 1, atk: 1, hlt: 1, shi: 1, rgn: 1, mob: 1 }),
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    IS_IMMUNE_TO_TILES: true,
    GUNS: [{
        POSITION: [14, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.arenaCloser]),
            TYPE: [ "bullet", { LAYER: 12 } ]
        }
    }]
};
Class.streamCloser = {
   PARENT: 'arenaCloser',
   LABEL: 'Streamliner Closer',
   NAME: "Streamliner Closer",
   GUNS: [ {
         POSITION: [ 22, 10, 1, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.arenaCloser, g.minigun, g.streamliner]),
            TYPE: [ "bullet", { LAYER: 12 } ]
         }, }, {
         POSITION: [ 20, 10, 1, 0, 0, 0, 0.2, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.arenaCloser, g.minigun, g.streamliner]),
            TYPE: [ "bullet", { LAYER: 12 } ]
         }, }, {
         POSITION: [ 18, 10, 1, 0, 0, 0, 0.4, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.arenaCloser, g.minigun, g.streamliner]),
            TYPE: [ "bullet", { LAYER: 12 } ]
         }, }, {
         POSITION: [ 16, 10, 1, 0, 0, 0, 0.6, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.arenaCloser, g.minigun, g.streamliner]),
            TYPE: [ "bullet", { LAYER: 12 } ]
         }, }, {
         POSITION: [ 14, 10, 1, 0, 0, 0, 0.8, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.arenaCloser, g.minigun, g.streamliner]),
            TYPE: [ "bullet", { LAYER: 12 } ]
         }, }, 
     ],
};
Class.trapperCloser = {
   PARENT: 'arenaCloser',
   LABEL: 'Trapper Closer',
   NAME: "Trapper Closer",
   GUNS: [ {
         POSITION: [ 12.5, 10, 1, 0, 0, 0, 0, ],
         }, {
         POSITION: [ 4, 10, 1.7, 12.5, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.arenaCloser]),
            TYPE: "trap",
         }, }, 
     ],
};
Class.pentragonBullet = {
    PARENT: "bullet",
    COLOR: "evening",
    SHAPE: -5,
    FACING_TYPE: ["spin", {speed: 0.1}],
}
Class.pentragon = {
   PARENT: 'genericTank',
   NAME: '§rainbow§[2K SUBSCRIBERS]§reset§ Pentragon',
   LABEL: 'Pentragon',
   DANGER: 10,
   SIZE: 34,
   UPGRADE_COLOR: "evening",
   LAYER: 13,
   SHAPE: '/pentragon.png',
   SKILL: skillSet({ rld: 1, dam: 1, pen: 1, str: 1, spd: 1, atk: 1, hlt: 1, shi: 1, rgn: 1, mob: 1 }),
   DRAW_HEALTH: false,
   HITS_OWN_TYPE: "never",
   ARENA_CLOSER: true,
   IS_IMMUNE_TO_TILES: true,
   BODY: {
        REGEN: 1e5,
        HEALTH: 1e6,
        DENSITY: 30,
        DAMAGE: 1e5,
        FOV: 1.5,
        SPEED: 8,
   },
   GUNS: [ {
         POSITION: [ 18, 14, 0.8, 0, 0, 0, 0, ],
         PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.op, g.arenaCloser]),
            TYPE: ["pentragonBullet", {COLOR: "evening"}],
         }, }, {
         POSITION: [ 13, 3, 0.05, 3, -6, 0, 0, ],
         PROPERTIES: {
            COLOR: "explosive"
         }, }, {
         POSITION: [ 13, 3, 0.05, 3, 6, 0, 0, ],
         PROPERTIES: {
            COLOR: "explosive"
         }, },
     ],
};

Class.antiTankMachineGun = {
    PARENT: "dominator",
    LABEL: "Anti-Tank Machine Gun",
    UPGRADE_LABEL: "A.T.M.G.",
    CONTROLLERS: [['spin', {onlyWhenIdle: true}], 'nearestDifferentMaster'],
    LEVEL: 45,
    SIZE: 12,
    BODY: {
        RESIST: 100,
        SPEED: 1.32,
        ACCELERATION: 0.8,
        HEALTH: 1e99,
        DAMAGE: 6,
        PENETRATION: 0.25,
        FOV: 0.35,
        PUSHABILITY: 0,
        HETERO: 0,
        SHIELD: base.SHIELD * 1.4,
    },
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
    GUNS: [
        {
            POSITION: [18, 12, 0.8, 0, 0, 90, 0],
        },
        {
            POSITION: [18, 12, 0.8, 0, 0, 270, 0],
        },
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
    TURRETS: [{
        POSITION: [20, 0, 25, 0, 180, 1],
        TYPE: ["antiTankMachineGunArm"]
    }, {
        POSITION: [20, 0, -25, 0, 180, 1],
        TYPE: ["antiTankMachineGunArm"]
    }, {
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: ["dominationBody"]
    }]
}
Class.antiTankCorruptX = {
    PARENT: "dominator",
    LABEL: "Anti-Tank Machine Gun",
    UPGRADE_LABEL: "A.T.C.X.",
    CONTROLLERS: [['spin', {onlyWhenIdle: true}], 'nearestDifferentMaster'],
    COLOR: 19,
    LEVEL: 45,
    SIZE: 16,
    BODY: {
        RESIST: 100,
        SPEED: 1.32,
        ACCELERATION: 0.8,
        HEALTH: 1e99,
        DAMAGE: 6,
        PENETRATION: 0.25,
        FOV: 1.3,
        PUSHABILITY: 0,
        HETERO: 0,
        SHIELD: base.SHIELD * 1.4,
    },
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
    GUNS: [
        {
            POSITION: [18, 12, 0.8, 0, 0, 90, 0],
        },
        {
            POSITION: [18, 12, 0.8, 0, 0, 270, 0],
        },
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
    TURRETS: [{
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: ['corruptx', { FACING_TYPE: ["noFacing", { angle: Math.PI / 0 }] }]
    }, {
        POSITION: [20, 0, 25, 0, 180, 1],
        TYPE: ["antiTankCorruptXArm"]
    }, {
        POSITION: [20, 0, -25, 0, 180, 1],
        TYPE: ["antiTankCorruptXArm"]
    }, {
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: ["dominationBody"]
    }]
}
Class.antiTankMachineGun = {
    PARENT: "dominator",
    LABEL: "Anti-Tank Machine Gun",
    UPGRADE_LABEL: "A.T.M.G.",
    CONTROLLERS: [['spin', {onlyWhenIdle: true}], 'nearestDifferentMaster'],
    LEVEL: 45,
    SIZE: 12,
    BODY: {
        RESIST: 100,
        SPEED: 1.32,
        ACCELERATION: 0.8,
        HEALTH: 1e99,
        DAMAGE: 6,
        PENETRATION: 0.25,
        FOV: 0.35,
        PUSHABILITY: 0,
        HETERO: 0,
        SHIELD: base.SHIELD * 1.4,
    },
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
    GUNS: [
        {
            POSITION: [18, 12, 0.8, 0, 0, 90, 0],
        },
        {
            POSITION: [18, 12, 0.8, 0, 0, 270, 0],
        },
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
    TURRETS: [{
        POSITION: [20, 0, 25, 0, 180, 1],
        TYPE: ["antiTankMachineGunArm"]
    }, {
        POSITION: [20, 0, -25, 0, 180, 1],
        TYPE: ["antiTankMachineGunArm"]
    }, {
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: ["dominationBody"]
    }]
}
Class.niggergun = {
    PARENT: "dominator",
    LABEL: "Anti-Nigger Machine Gun",
    UPGRADE_LABEL: "A.N.M.G.",
    LEVEL: 45,
    SIZE: 17.5,
    BODY: {
        RESIST: 100,
        SPEED: 1.32,
        ACCELERATION: 0.8,
        HEALTH: 1e99,
        DAMAGE: 6,
        PENETRATION: 0.25,
        FOV: 2,
        PUSHABILITY: 0,
        HETERO: 0,
        SHIELD: base.SHIELD * 1.4,
    },
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
    GUNS: [
        {
            POSITION: [18, 12, 0.8, 0, 0, 90, 0],
        },
        {
            POSITION: [18, 12, 0.8, 0, 0, 270, 0],
        },
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
            },
        },
        {
            POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0],
        },
    ],
    TURRETS: [{
        POSITION: [20, 0, 25, 0, 180, 1],
        TYPE: ["niggergunArm"]
    }, {
        POSITION: [20, 0, -25, 0, 180, 1],
        TYPE: ["niggergunArm"]
    }, {
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: ["dominationBody"]
    }]
}

// TRACKER-3
Class.tracker3 = {
  PARENT: "genericTank",
  LABEL: "Tracker-3",
  FACING_TYPE: ["spin", {speed: 0.02}],
  SKILL_CAP: [0, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  TURRETS: weaponArray({
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: ["tracker3gun", { INDEPENDENT: true, COLOR: "#19ff19" }],
    }, 3)
};
// ALL-SEEING
Class.seer3 = {
  PARENT: "genericTank",
  BODY: {
     FOV: base.FOV * 2.5,
     SPEED: base.SPEED * 2,
  },
  LABEL: "High FOV",
  CONTROLLERS: [["zoom", { distance: 1000 }]],
  FACING_TYPE: ["spin", {speed: 0.02}],
  SKILL_CAP: [0, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  CAN_BE_ON_LEADERBOARD: false,
  TURRETS: weaponArray({
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: ["seer3gun", { INDEPENDENT: true, COLOR: "#8b800c" }],
    }, 3)
};

// BOTS
Class.bot = {
    FACING_TYPE: "looseToTarget",
    CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "minion", "fleeAtLowHealth", ["mapFireToAlt", { onlyIfHasAltFireGun: true }], ["wanderAroundMap", { immitatePlayerMovement: true, lookAtGoal: true }]],
};

// SCORE KEEPING
Class.tagMode = {
    PARENT: "bullet",
    LABEL: "Players",
    SHAPE: ""
};
