(function () {
    function ModalInstanceCtrl($uibModalInstance, Room) {
        var modal = this;

        modal.empty = function () {
            return !modal.name || !modal.name.length;
        };

        modal.ok = function () {
            Room.addRooms(modal.name);
            $uibModalInstance.close();
        };

        modal.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular /* global angular */
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
