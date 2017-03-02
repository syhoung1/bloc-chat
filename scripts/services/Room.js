(function () {
    function Room($firebaseArray) {
        /* global firebase */
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);

        return {
            all: rooms,
            addRooms: function (roomName) {
                rooms.$add(roomName);
            }
        };
    }

    /* global angular */
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
