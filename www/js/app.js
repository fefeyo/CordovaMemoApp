var module = ons.bootstrap('app', ['onsen']);
module.controller('AppController', function($scope){
  $scope.goDetail = function(){
    app.navi.pushPage('page.html');
  };
});
module.controller('PageController', function($scope){
  ons.ready(function(){

  });
});
module.controller('listCtrl', function($scope){
  $scope.memos = [
  // {"title": "タイトル１", "memo": "メモ１"},
  // {"title": "タイトル２", "memo": "メモ２"},
  // {"title": "タイトル３", "memo": "メモ３"}
  ];
});