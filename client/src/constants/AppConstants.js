var keyMirror = require('keymirror');

module.exports = {

    ActionTypes: keyMirror({
        RECEIVE_RAW_CREATED_FRAME: null,
        RECEIVE_RAW_FRAMES: null,
        RECEIVE_RAW_OBJECTS: null,
        RECEIVE_RAW_CREATED_OBJECT: null,
        CLICK_LAYER: null,
        CHECK_VISIBLE: null,
        CREATE_OBJECT: null,
        CREATE_LAYER: null
    })

};