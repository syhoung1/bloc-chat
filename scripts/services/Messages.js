(function () {
    function Messages($firebaseArray) {
        /* global firebase */
        var ref = firebase.database().ref().child('message');
        var messages = $firebaseArray(ref);

        return {
            getByRoomId: function (id) {
                return $firebaseArray(ref.orderByChild('roomId').equalTo(id));
            },
            messages: messages
        };
    }

    angular /* global angular */
        .module('blocChat')
        .factory('Messages', ['$firebaseArray', Messages]);
})();
