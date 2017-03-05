(function () {
    function RoomCtrl(Room, $uibModal, Messages) {
        this.roomList = Room;
        this.messageList = Messages.messages;
        this.currentRoom = null;
        this.currentRoomId = null;

        this.findRoom = function (id) {
            this.list = Messages.getByRoomId(id);
        };

        this.getCurrentRoom = function (currentRoomName) {
            this.currentRoom = currentRoomName;
        };

        this.getCurrentRoomId = function (roomId) {
            this.currentRoomId = roomId;
        };

        this.open = function () {
            $uibModal.open({
                templateUrl: '/templates/modalTemplate.html',
                controller: 'ModalInstanceCtrl as modal',
                keyboard: true
            });
        };

        this.sendMessage = function () {
            Messages.send(this.messageToSend, this.currentRoomId);
        };
    }

    angular /* global angular */
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', 'Messages', RoomCtrl]);
})();
