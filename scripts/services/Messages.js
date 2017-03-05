(function () {
    function Messages($firebaseArray, $cookies) {
        /* global firebase */
        var ref = firebase.database().ref().child('message');
        var messages = $firebaseArray(ref);

        return {
            getByRoomId: function (id) {
                return $firebaseArray(ref.orderByChild('roomId').equalTo(id));
            },
            messages: messages,
            send: function (newMessage, room) {
                messages.$add({content: newMessage, userName: $cookies.get('blocChatCurrentUser'), roomId: room});
            }
        };
    }

    angular /* global angular */
        .module('blocChat')
        .factory('Messages', ['$firebaseArray', '$cookies', Messages]);
})();
