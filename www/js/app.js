// var module = ons.bootstrap('app', ['onsen']);
var module = angular.module('app', ['onsen']);

module.factory('MemoData', function(){
  var memodata = {};
  memodata.currentItem = {};
  memodata.memos = [
  {"title": "タイトル１", "memo": "メモ１", "time": "00:00:00"},
  {"title": "タイトル２", "memo": "メモ２", "time": "00:00:00"},
  {"title": "タイトル３", "memo": "メモ３", "time": "00:00:00"}
  ];
  return memodata;
});

module.controller('MainController',['MemoData', function(MemoData){
  this.createMemo = function(){
    app.navi.pushPage('page.html');
    MemoData.currentItem = "";
  };
}]);

module.controller('ListController', ['MemoData', function(MemoData){
  this.goDetail = function(index){
    MemoData.currentItem = this.memos[index];
    app.navi.pushPage('page.html');
  };
  this.memos = MemoData.memos;
}]);

module.controller('DetailController', ['MemoData', function(MemoData){
  if(!MemoData.currentItem){
    this.title = "";
    this.content = "";
    this.time = "";
  }else{
    this.title = MemoData.currentItem.title;
    this.content = MemoData.currentItem.content;
    this.time = MemoData.currentItem.time;
  }
  this.save = function(){
    this.saveItem = {
      "title": this.title,
      "content": this.content,
      "time": this.time
    };
  };
}]);
