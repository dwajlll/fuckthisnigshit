let { base1:  _1 , base1protected:  p1  } = require('../tiles/tdm.js'),
    { bossSpawn:   b } = require('../tiles/siege.js'),
    { wall: WALL, nest:  n , normal:   _  } = require('../tiles/misc.js'),
    { rock:   r  } = require('../tiles/decoration.js'),
    { portal:  P   } = require('../tiles/portal.js'),

room = [
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ],
    [  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,WALL,  _ ,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _1,  _1,  _1,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _1,  p1,  _1,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _1,  _1,  _1,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,WALL,WALL,  _ ,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ],
    [  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ,  _ ,  _ ,WALL,  _ ],
    [  _ ,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,WALL,  _ ,  _ ,  _ ,WALL,  _ ],
    [  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ,  _ ],
];

module.exports = room;