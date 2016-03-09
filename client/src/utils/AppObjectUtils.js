var AppUtils = require('./AppUtils');

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var idIncrement = 0;

module.exports = {

    newID: function() {
        idIncrement++;
        return Date.now() + idIncrement;
    },

    convertRawObject: function(rawObject) {
        var type = capitalize(rawObject.type);
        return (new fabric[type](rawObject));
    },

    castRawObject: function(rawObject) {
        var type = capitalize(rawObject.type);
        return (new fabric[type](rawObject));
    },

    getCreatedObjectData: function(object, currentAnimationID, currentLayerID, currentFrameID) {
        object.id = this.newID();
        object.animationId = currentAnimationID;
        object.layerID = currentLayerID;
        object.frameID = currentFrameID;
        object.layerLock = false;
        object.layerVisible =true;
        return object;
    },

    getCreatedAssetData: function(asset, currentAnimationID) {
        asset.id = this.newID();
        asset.animationID = currentAnimationID;
        return asset;
    },

    clone: function(obj) {
        var copy;

        console.log('object to copy', obj);
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;


        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.clone(obj[i]);
            }
            return copy;
        }

        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
            }
            return copy;
        }

        throw new Error("Unable to copy obj! Its type isn't supported.");
    }

};