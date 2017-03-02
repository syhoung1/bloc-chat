(function () {
    function RoomCtrl(Room, $uibModal) {
        this.roomList = Room;

        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modalTemplate.html',
                controller: 'ModalInstanceCtrl as modal',
                keyboard: true
            });
        };
    }

    angular /* global angular */
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();
