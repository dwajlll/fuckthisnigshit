const { combineStats, addAura, makeAuto, weaponArray, dereference } = require('../facilitators.js');
const { smshskl, base } = require('../constants.js');
const g = require('../gunvals.js');

Class.normalRotorÀÉÑ = {
	PARENT: "genericTank",
	CONTROLLERS: [["spin2", {speed: 0.5}]],
	GUNS: weaponArray([
		{
			POSITION: [80, 5, 1, 0, 0, 0, 0],
		},
	], 4)
}
Class.tailRotorÀÉÑ = {
	PARENT: "genericTank",
	CONTROLLERS: [["spin2", {speed: -0.5}]],
	GUNS: weaponArray([
		{
			POSITION: [80, 5, 1, 0, 0, 45, 0],
		},
	], 4)
}
Class.hitbox = {
	PARENT: ["genericTank"],
	VULNERABLE: true,
	SHAPE: 0,
}
const ÀÉÑchoppers = ["chopperÀÉÑ", "chopperÀÉÑchaingun", "chopperÀÉÑshellgun", "chopperÀÉÑautocannon"]
const ÀÉÑchopperUpgrades = ["chopperÀÉÑchaingun", "chopperÀÉÑshellgun", "chopperÀÉÑautocannon"]
Class.genericHelicopterÀÉÑ = {
	PARENT: ["genericTank"],
	SHAPE: "M -0.28 -0.98 L 1.54 -0.98 C 1.96 -0.882 2.436 -0.616 2.8 -0.28 L 2.8 0.28 C 2.436 0.616 1.96 0.882 1.54 0.98 L -0.28 0.98 C -0.7 0.84 -0.98 0.7 -1.19 0.42 L -1.19 -0.42 C -0.98 -0.7 -0.7 -0.84 -0.28 -0.98",
	LABEL: "Chopper",
	SIZE: 10,
	BODY: {
		HEALTH: base.HEALTH * 0.7,
		SHIELD: base.SHIELD * 0.7,
		DAMAGE: base.DAMAGE * 0.7,
		ACCEL: base.ACCEL * 0.3,
	},
	LEVEL: 75,
	UPGRADES_TIER_0: [],
	UPGRADE_TOOLTIP: "Turn into a tactical helicopter",
	GUNS: [
		{
			POSITION: [10, 15, 0.0000001, -39, 0, 0, 0]
		},
		{
			POSITION: [40, 9, 0.5, 0, 0, 180, 0]
		},
	],
	TURRETS: [
		{
			POSITION: [10, 10, 0, 0, 360, 1],
			TYPE: "normalRotorÀÉÑ",
		},
		{
			POSITION: [5, -40, 0, 0, 360, 1],
			TYPE: ["tailRotorÀÉÑ", {COLOR: "grey"}],
		},
	]
}
Class.genericHelicopterÀÉÑ.TURRETS.push(
	{
		POSITION: [20, 20, 0, 0, 0, 1],
		TYPE: "hitbox",
	},
)
Class.chopperÀÉÑ = {
	PARENT: ["genericHelicopterÀÉÑ"],
	SHAPE: "M -0.28 -0.98 L 1.54 -0.98 C 1.96 -0.882 2.436 -0.616 2.8 -0.28 L 2.8 0.28 C 2.436 0.616 1.96 0.882 1.54 0.98 L -0.28 0.98 C -0.7 0.84 -0.98 0.7 -1.19 0.42 L -1.19 -0.42 C -0.98 -0.7 -0.7 -0.84 -0.28 -0.98",
	LABEL: "Chopper",
	UPGRADES_TIER_0: [],
	GUNS: [
		{
			POSITION: [10, 15, 0.0000001, -39, 0, 0, 0]
		},
		{
			POSITION: [40, 9, 0.5, 0, 0, 180, 0]
		},
	],
	TURRETS: [
		{
			POSITION: [10, 10, 0, 0, 360, 1],
			TYPE: "normalRotorÀÉÑ",
		},
		{
			POSITION: [5, -40, 0, 0, 360, 1],
			TYPE: ["tailRotorÀÉÑ", {COLOR: "grey"}],
		},
	]
}
Class.chopperÀÉÑchaingun = {
	PARENT: ["genericHelicopterÀÉÑ"],
	SHAPE: "M -0.28 -0.98 L 1.54 -0.98 C 1.96 -0.882 2.436 -0.616 2.8 -0.28 L 2.8 0.28 C 2.436 0.616 1.96 0.882 1.54 0.98 L -0.28 0.98 C -0.7 0.84 -0.98 0.7 -1.19 0.42 L -1.19 -0.42 C -0.98 -0.7 -0.7 -0.84 -0.28 -0.98",
	LABEL: "Chopper",
	UPGRADE_LABEL: "Chaingun",
	UPGRADE_TOOLTIP: "Get a powerful chaingun that can penetrate through firepower",
	GUNS: [
		{
			POSITION: [10, 15, 0.0000001, -39, 0, 0, 0]
		},
		{
			POSITION: [40, 9, 0.5, 0, 0, 180, 0]
		},
	],
	TURRETS: [
		{
			POSITION: [10, 10, 0, 0, 360, 1],
			TYPE: "normalRotorÀÉÑ",
		},
		{
			POSITION: [5, -40, 0, 0, 360, 1],
			TYPE: ["tailRotorÀÉÑ", {COLOR: "grey"}],
		},
	]
}
Class.chopperÀÉÑchaingun.GUNS.push(
    {
        POSITION: [20, 2, 1, 20, -3, 0, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, {damage: 0.1, health: 5, speed: 2, maxspeed: 4, reload: 0.4}]),
            TYPE: "bullet",
        },
    },
    {
        POSITION: [20, 2, 1, 20, 3, 0, 0.75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, {damage: 0.1, health: 5, speed: 2, maxspeed: 4, reload: 0.4}]),
            TYPE: "bullet",
        },
    },
    {
        POSITION: [20, 2, 1, 20, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, g.twin, g.nailgun, {damage: 0.1, health: 5, speed: 2, maxspeed: 4, reload: 0.4}]),
            TYPE: "bullet",
        },
    },
    {
        POSITION: [10, 12, 1, 20, 0, 0, 0],
    },
)
Class.chopperÀÉÑshellgun = {
	PARENT: ["genericHelicopterÀÉÑ"],
	SHAPE: "M -0.28 -0.98 L 1.54 -0.98 C 1.96 -0.882 2.436 -0.616 2.8 -0.28 L 2.8 0.28 C 2.436 0.616 1.96 0.882 1.54 0.98 L -0.28 0.98 C -0.7 0.84 -0.98 0.7 -1.19 0.42 L -1.19 -0.42 C -0.98 -0.7 -0.7 -0.84 -0.28 -0.98",
	LABEL: "Chopper",
	GUNS: [
		{
			POSITION: [10, 15, 0.0000001, -39, 0, 0, 0]
		},
		{
			POSITION: [40, 9, 0.5, 0, 0, 180, 0]
		},
	],
	TURRETS: [
		{
			POSITION: [10, 10, 0, 0, 360, 1],
			TYPE: "normalRotorÀÉÑ",
		},
		{
			POSITION: [5, -40, 0, 0, 360, 1],
			TYPE: ["tailRotorÀÉÑ", {COLOR: "grey"}],
		},
	]
}
Class.chopperÀÉÑautocannon = {
	PARENT: ["genericHelicopterÀÉÑ"],
	SHAPE: "M -0.28 -0.98 L 1.54 -0.98 C 1.96 -0.882 2.436 -0.616 2.8 -0.28 L 2.8 0.28 C 2.436 0.616 1.96 0.882 1.54 0.98 L -0.28 0.98 C -0.7 0.84 -0.98 0.7 -1.19 0.42 L -1.19 -0.42 C -0.98 -0.7 -0.7 -0.84 -0.28 -0.98",
	LABEL: "Chopper",
	GUNS: [
		{
			POSITION: [10, 15, 0.0000001, -39, 0, 0, 0]
		},
		{
			POSITION: [40, 9, 0.5, 0, 0, 180, 0]
		},
	],
	TURRETS: [
		{
			POSITION: [10, 10, 0, 0, 360, 1],
			TYPE: "normalRotorÀÉÑ",
		},
		{
			POSITION: [5, -40, 0, 0, 360, 1],
			TYPE: ["tailRotorÀÉÑ", {COLOR: "grey"}],
		},
	]
}
Class.chopperÀÉÑshellgun.GUNS.push(
)
Class.chopperÀÉÑautocannon.GUNS.push(
)
Class.addons.UPGRADES_TIER_0.push("chopperÀÉÑ", "genericHelicopterÀÉÑ")
for (let i of ÀÉÑchopperUpgrades) {
	Class.chopperÀÉÑ.UPGRADES_TIER_0.push(i)}
