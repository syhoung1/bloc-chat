(function () {
    function RoomCtrl(Room) {
        this.roomList = Room;
    }

    angular /* global angular */
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
