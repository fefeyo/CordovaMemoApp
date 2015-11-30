// var module = ons.bootstrap('app', ['onsen']);
var module = angular.module('app', ['onsen', 'angularLocalStorage']);

module.factory('MemoData', ['storage', function(storage){
  var memodata = {};
  memodata.currentItemIndex = "";
  memodata.memos = JSON.parse(storage.get('memo'));
  if(memodata.memos === null) memodata.memos = [];
  return memodata;
}]);

module.controller('MainController',['MemoData', function(MemoData){
  this.createMemo = function(){
    app.navi.pushPage('page.html');
    MemoData.currentItemIndex = "";
  };
}]);

module.controller('ListController', ['MemoData', function(MemoData){
  this.goDetail = function(index){
    MemoData.currentItemIndex = index;
    app.navi.pushPage('page.html');
  };
  this.memos = MemoData.memos;
  console.log(this.memos);
}]);

module.controller('DetailController', ['MemoData', 'storage', function(MemoData, storage){
  var isNew = false;
  var index = MemoData.currentItemIndex;
  this.time = new Date();
  if(index === ""){
    this.title = "新規のメモ";
    this.content = "";
    isNew = true;
  }else{
    this.title = MemoData.memos[index].title;
    this.content = MemoData.memos[index].content;
    isNew = false;
  }
  this.save = function(){
    if(isNew){
      var saveItem = {
        "title": this.title,
        "content": this.content,
        "time": this.time
      };
      MemoData.memos.push(saveItem);
    }else{
      MemoData.memos[MemoData.currentItemIndex] = {
        "title": this.title,
        "content": this.content,
        "time": this.time
      };
    }
    storage.set('memo', JSON.stringify(MemoData.memos));
    app.navi.popPage('page.html');
  };
}]);
