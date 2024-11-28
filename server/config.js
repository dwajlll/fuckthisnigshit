module.exports = {
    // Server

    // Game server domain.
    // If the host is 'localhost:NUMBER', the NUMBER must be the port setting.
    host: "dwajlll.github.io",

    // Which port to run the web server on.
    port: 8080,

    // How often to update the list of the entities that players can see.
    // Has effects of when entities are activated.
    visibleListInterval: 250,

    // How long (in ms) a socket can be disconnected without their player dying.
    maxHeartbeatInterval: 300000,

    // Flatten entity definition, which gets rid of PARENT attributes and applies the parents' attributes to the entity definition, if they're not set in the entity already.
    flattenDefintions: false,

    // Log speed loop warnings
    LOGS: true,

    // The \modules\setup\gamemodeconfigs\ files to load.
    // To change specific things about specific gamemodes (such as team count for tdm), edit their config file in \modules\setup\gamemodeconfigs\.
    GAME_MODES: ['tdm'],

    // The room files to load in the setup/rooms folder.
    // NOTE: If a /gamemodeconfig/ file "replaces" the value of ROOM_SETUP, it just adds its own ROOM_SETUP's content to this array.
    // NOTE: Files starting with `map_` are maps. files starting with `overlay_` are overlays that get added on.
    // NOTE: These prefixes are only for categorisation, a room file would work the same regardless of its prefix. APS++ does nothing based on file name prefixes.
    ROOM_SETUP: ['map_apspp_default'],

    // The dimensions of a single tile on the map.
    TILE_WIDTH: 400,
    TILE_HEIGHT: 400,



    // Miscellaneous

    // How long a chat message lasts in milliseconds.
    // Includes the fade-out period.
    CHAT_MESSAGE_DURATION: 30_000,

    // If you don't want your players to color their messages.
    // They get sanitized after addons interpret them, but before they're added to the chat message dictionary.
    SANITIZE_CHAT_MESSAGE_COLORS: true,

    // If someone tries to get a file that does not exist, send them this instead.
    DEFAULT_FILE: 'index.html',

    // Window name of the server terminal.
    WINDOW_NAME: 'OSA Game Server Instance',

    // Allows you to type and run javascript code in the terminal.
    REPL_WINDOW: false,

    // Welcome message once a player spawns.
    WELCOME_MESSAGE: "You have spawned! Welcome to the game.\n"
                    +"You will be invulnerable until you move or shoot.\n"
                    +"Please report any bugs you encounter!",
    
    // How long a popup message lasts before fading out in milliseconds.
    MESSAGE_DISPLAY_TIME: 10_000,

    // How long you have to wait to respawn in seconds.
    RESPAWN_TIMEOUT: 0,
    


    // Physics

    // General multiplier for acceleration and max speeds.
    runSpeed: 1.5,

    // Where the bullet spawns, where 1 is fully outside the barrel and -1 is fully inside the barrel, and 0 is halfway between.
    bulletSpawnOffset: -1,

    // General damage multiplier everytime damage is dealt.
    DAMAGE_CONSTANT: 0.5,

    // General knockback multiplier everytime knockback is applied.
    KNOCKBACK_CONSTANT: 1.5,

    // TODO: Figure out how the math behind this works.
    GLASS_HEALTH_FACTOR: 2,

    // How strong the force is that confines entities to the map and portals apply to entities.
    ROOM_BOUND_FORCE: 0.01,



    // Gameplay

    // When an entity reaches a level, this function is called and returns how many points that entity gets for reaching that level.
    LEVEL_SKILL_POINT_FUNCTION: level => {
        if (level < 2) return 0;
        if (level <= 40) return 1;
        if (level <= 45 && level & 1 == 1) return 1;
        return 0;
    },
    // Show the health bar text or not.
    SHOW_HEALTHBAR_TEXT: false,

    // Default skill caps.
    MAX_SKILL: 9,

    // Amount of tank tiers.
    MAX_UPGRADE_TIER: 9,

    // Level difference between each tier.
    TIER_MULTIPLIER: 15,

    // Maximum normally achievable level.
    LEVEL_CAP: 60,

    // Maximum level via the level-up key and auto-level-up.
    LEVEL_CHEAT_CAP: 60,

    // Amount of player-bots to spawn.
    BOTS: 0,

    // How much XP player-bots get per second until they reach LEVEL_CAP.
    BOT_XP: 0,

    // How much XP player-bots will receive when first created.
    BOT_START_XP: 63319,

    // The chances of a player-bot upgrading a specific skill when skill upgrades are available.
    BOT_SKILL_UPGRADE_CHANCES: [ 1, 1, 3, 4, 4, 4, 4, 2, 1, 1],

    // The chances of a player-bot upgrading a specific amount of times before it stops upgrading.
    BOT_CLASS_UPGRADE_CHANCES: [ 1, 5, 20, 37, 37],

    // The prefix of the player-bots' names.
    BOT_NAME_PREFIX: '§evening§[AI]§reset§ ',

    // The class that players and player-bots spawn as.
    SPAWN_CLASS: 'basic',

    // How every entity regenerates their health.
    REGENERATE_TICK: 200,

    // How many members a team can have in comparison to an unweighed team.
    // Example: Lets say we have team A and B. If the weigh of A is 2 and B is 1, then the game will try to give A twice as many members as B.
    TEAM_WEIGHTS: {},



    // Natural Spawns

    // Allow foods to be spawned or not.
    // NOTE: Disabling it decreases lagness, also very useful if you don't need foods to be spawned.
    ENABLE_FOOD: true,

    FOOD_CAP: 0, // 3, // Max normal food per normal tile.
    FOOD_SPAWN_CHANCE: 0.875, // Likeliness of normal food spawn attempts succeeding.
    FOOD_SPAWN_COOLDOWN: 30, // Cooldown (in game ticks) of food spawn attempts being made.

    FOOD_CAP_NEST: 0, // 3, // Max nest food per nest tile.
    FOOD_SPAWN_CHANCE_NEST: 0, // 0.25, // Likeliness of nest food spawn attempts succeeding.
    FOOD_SPAWN_COOLDOWN_NEST: 0, // 45, // Cooldown (in game ticks) of nest food spawn attempts being made.

    ENEMY_CAP_NEST: 0, // 1, // Max nest enemies per nest tile.
    ENEMY_SPAWN_CHANCE_NEST: 0, // 0.9, // Likeliness of nest enemies spawn attempts succeeding.
    ENEMY_SPAWN_COOLDOWN_NEST: 0, // 60, // Cooldown (in game ticks) of nest enemies spawn attempts being made.

    ENEMY_CAP_PUMPKIN_NEST: 0, // 3, // Max nest enemies per nest tile.
    ENEMY_SPAWN_CHANCE_PUMPKIN_NEST: 0, // 0.9, // Likeliness of nest enemies spawn attempts succeeding.
    ENEMY_SPAWN_COOLDOWN_PUMPKIN_NEST: 0, // 30, // Cooldown (in game ticks) of nest enemies spawn attempts being made.

    // Cooldown (in seconds) of boss spawns being announced.
    BOSS_SPAWN_COOLDOWN: 9999999999999999999, // 25,
    // The delay (in seconds) between the boss spawns being announced and the bosses actually spawning.
    // NOTE: The spawn message (ex. "A strange trembling...") takes half as long to appear than the boss.
    BOSS_SPAWN_DURATION: 5,

    // The possible food types that can spawn.
    FOOD_TYPES: [
        [2000, [
            [1024, 'egg'], [526, 'slime'], [256, 'square'], [64, 'triangle'], [16, 'pentagon'], [4, 'betaPentagon'], [1, 'alphaPentagon']
        ]],
        [1, [
            [3125, 'gem'], [1315, 'shinySlime'], [625, 'shinySquare'], [125, 'shinyTriangle'], [25, 'shinyPentagon'], [5, 'shinyBetaPentagon'], [1, 'shinyAlphaPentagon']
        ]],
        [0.1, [
            [6836, 'jewel'], [1972, 'legendarySlime'], [1296, 'legendarySquare'], [216, 'legendaryTriangle'], [36, 'legendaryPentagon'], [6, 'legendaryBetaPentagon'], [1, 'legendaryAlphaPentagon']
        ]],
        [0.005, [
            /*[16807, 'egg'], [2958, 'shadowSlime'], */[2401, 'shadowSquare'], [343, 'shadowTriangle'], [49, 'shadowPentagon'], [7, 'shadowBetaPentagon'], [1, 'shadowAlphaPentagon']
        ]],
        [0.001, [
            /*[65536, 'egg'], [5916, 'rainbowSlime'], */[8192, 'rainbowSquare'], [1024, 'rainbowTriangle'], [64, 'rainbowPentagon'], [8, 'rainbowBetaPentagon'], [1, 'rainbowAlphaPentagon']
        ]],
        [0.0005, [
            [59549, 'egg'], [8874, 'transSlime'], [6561, 'transSquare'], [729, 'transTriangle'], [81, 'transPentagon'], [9, 'transBetaPentagon'], [1, 'transAlphaPentagon']
        ]],
        [0.00025, [
            [65549, 'egg'], [13874, 'unknown0Slime'], [8561, 'unknown0Square'], [529, 'unknown0Triangle'], [61, 'unknown0Pentagon'], [7, 'unknown0BetaPentagon'], [1, 'unknown0AlphaPentagon']
        ]],
        [0.0001, [
            [100000, 'sphere'], [10000, 'cube'], [1000, 'tetrahedron'], [100, 'octahedron'], [10, 'dodecahedron'], [1, 'icosahedron']
        ]]
    ],

    // The possible nest food types that can spawn.
    FOOD_TYPES_NEST: [
        [1, [
            [16, 'pentagon'], [ 4, 'betaPentagon'], [ 1, 'alphaPentagon']
        ]]
    ],

    // The possible nest enemy types that can spawn.
    ENEMY_TYPES_NEST: [
        [19, [
            [1, 'crasher'] //, [0.5, 'healthySquare'], [0.85, 'beta23Crasher'], [0.65, 'alpha23Crasher'], [0.3, 'omega23Crasher'], [0.03, 'missile23Crasher']
        ]],
        [1, [
            [1, 'sentryGun'], [1, 'sentryBruiser'], [1, 'sentryTwin'], [1, 'quadralsquare'], [0.8, 'quadralsquare2'], [0.55, 'quadralsquare3'], [0.25, 'quadralsquare4'], [0.05, 'quadralsquare5'], [1, 'sentryRifle'], [1, 'sentrySingle'], [1, 'sentrySniper'], [1, 'sentrySwarm'], [1.2, 'sentryLeaf'], [1.2, 'sentryLeaf3'], [1.2, 'sentryLeaf2'], [1, 'sentryLeafCap'], [1, 'sentryTrap'], [1, 'sentryMech']
        ]]
    ],

    // The possible pumpkin nest enemy types that can spawn.
    ENEMY_TYPES_PUMPKIN_NEST: [
        [19, [
            [1, 'pumpkinSentinel'], [1, 'pumpkinSentinelMach'], [1, 'pumpkinSentinelSmash'], [0.3, 'pumpkinSentinel2'], [0.3, 'pumpkinSentinelMach2'], [0.3, 'pumpkinSentinelSmash2']
        ]]
    ],

    // The possible boss types that can spawn.
    BOSS_TYPES: [{
        bosses: ["eliteDestroyer", "eliteGunner", "eliteSprayer", "eliteBattleship", "eliteSpawner", "omegaSpawner", "elitePelleter", "eliteFallenRing"],
        amount: [5, 5, 4, 2, 1, 0.8], chance: 2, nameType: "a",
    },{
        bosses: ["roguePalisade"],
        amount: [4, 1, 3], chance: 1, nameType: "castle",
        message: "A strange trembling...",
    },{
        bosses: ["rewrj", "eiwos"],
        amount: [2, 1], chance: 1, nameType: "castle",
        message: "Mysterious wind is getting stronger as the tornado appears!",
    },{
        bosses: ["fireiewos"],
        amount: [1], chance: 0.75, nameType: "castle",
        message: "Powerful wind and fire forces have been combined!",
    },{
        bosses: ["summoner", "eliteSkimmer", "nestKeeper", "metalSummoner", "deltaEntomologist", "deltaSteampunk"],
        amount: [2, 2, 1, 1, 1, 2], chance: 1, nameType: "a",
        message: "A strange trembling...",
    },{
        bosses: ["fallenFighter", "fallenBooster", "fallenOverlord", "fallenCluster"],
        amount: [2, 2, 1, 1, 1, 2], chance: 1, nameType: "a",
        message: "A Fallen Tank has spawned!",
    },{
        bosses: ["eliteBrusher", "gustav", "katrina"],
        amount: [2, 1], chance: 0.5, nameType: "a",
        message: "A hurricane shows up in the fog...",
    },{
        bosses: ["provoker", "aggressor", "instigator", "troublemaker"],
        amount: [2, 1, 3, 4], chance: 0.2, nameType: "a",
    },{
        bosses: ["miltonElite", "gustavElite", "rewrjElite", "eiwosElite", "fireiewosElite", "fortressBoss"],
        amount: [1, 3, 2], chance: 0.01,
        message: "...",
    }],



    // Default values for gamemode related things.
    // Do not change these, you'll likely break stuff!
    // Change GAME_MODES instead.
    GAMEMODE_NAME_PREFIXES: [],
    SPECIAL_BOSS_SPAWNS: false,
    MOTHERSHIP_LOOP: false,
    RANDOM_COLORS: false,
    SPACE_PHYSICS: false,
    ARENA_TYPE: "rect",
    SPACE_MODE: false,
    GROUPS: false,
    TRAIN: false,
    MAZE: false,
    HUNT: false,
    MODE: "ffa",
    TAG: false,
    SPAWN_CONFINEMENT: {},
}
