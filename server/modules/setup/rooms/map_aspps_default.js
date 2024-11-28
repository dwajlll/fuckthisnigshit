let { rock, roid } = require('../tiles/decoration.js'),
    { normal: ____, nest } = require('../tiles/misc.js'),

room = [
    [____,____,____,____,____,____,roid,nest,roid,____,____,____,____,____,____],
    [____,____,____,____,____,____,roid,roid,roid,____,____,____,____,____,____],
    [____,____,rock,rock,____,____,nest,nest,nest,____,____,rock,rock,____,____],
    [____,____,rock,rock,____,____,nest,nest,nest,____,____,rock,rock,____,____],
    [____,____,____,____,____,____,nest,nest,nest,____,____,____,____,____,____],
    [____,____,____,____,____,nest,nest,nest,nest,nest,____,____,____,____,____],
    [roid,roid,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,roid,roid],
    [nest,roid,nest,____,nest,nest,nest,nest,nest,nest,nest,____,nest,roid,nest],
    [roid,roid,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,nest,roid,roid],
    [____,____,____,____,____,nest,nest,nest,nest,nest,____,____,____,____,____],
    [____,____,____,____,____,____,nest,nest,nest,____,____,____,____,____,____],
    [____,____,rock,rock,____,____,nest,nest,nest,____,____,rock,rock,____,____],
    [____,____,rock,rock,____,____,nest,nest,nest,____,____,rock,rock,____,____],
    [____,____,____,____,____,____,roid,roid,roid,____,____,____,____,____,____],
    [____,____,____,____,____,____,roid,nest,roid,____,____,____,____,____,____]
];

module.exports = room;