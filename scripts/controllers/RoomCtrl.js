(function () {
    function RoomCtrl(Room, $uibModal, Messages) {
        this.roomList = Room;
        this.messageList = Messages.messages;
        this.currentRoom = null;

        this.findRoom = function (id) {
            this.list = Messages.getByRoomId(id);
        };

        this.getCurrentRoom = function (currentRoomName) {
            this.currentRoom = currentRoomName;
        };

        this.open = function () {
            $uibModal.open({
                templateUrl: '/templates/modalTemplate.html',
                controller: 'ModalInstanceCtrl as modal',
                keyboard: true
            });
        };
    }

    angular /* global angular */
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', 'Messages', RoomCtrl]);
})();
