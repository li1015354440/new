angular.module('new').controller('homeCtrl', function ($http) {
  $http.post(
    "http//:10.115.19.223:8091/api/account/login",
    {"user_name": "lilei", "password": 123456}
  ).then(
    function (data) {
      console.log(data)
    },
    function (err) {
      console.log(err)
    }
  )
})
