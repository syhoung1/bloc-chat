(function () {
    function Cookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: 'templates/cookieModalTemplate.html',
                controller: 'CookiesModalInstanceCtrl as cookies',
                keyboard: false,
                backdrop: 'static'
            });
        }
    }

    angular /* global angular */
        .module('blocChat')
        .run(['$cookies', '$uibModal', Cookies]);
})();
