cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        setTimeout(this.d,3500);
    },

    d:function(){
        cc.director.loadScene('GameOne');
    },



    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
