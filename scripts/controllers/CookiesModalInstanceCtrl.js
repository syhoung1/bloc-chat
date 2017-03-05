(function () {
    function CookiesModalInstanceCtrl($uibModalInstance, $cookies) {
        var cookies = this;

        cookies.isEmpty = function () {
            return !cookies.name || !cookies.name.length;
        };

        cookies.ok = function () {
            $cookies.put('blocChatCurrentUser', cookies.name);
            $uibModalInstance.close();
        };
    }

    angular /* global angular */
        .module('blocChat')
        .controller('CookiesModalInstanceCtrl', ['$uibModalInstance', '$cookies', CookiesModalInstanceCtrl]);
})();
