(function(window, document){
  'use strict';
  
  var DEBUG = window.DEBUG;
  
  var uncurryThis = function(f) {
    var call = Function.call;
    return function() {
      return call.apply(f, arguments);
    };
  };
  var document = document.getElementsByTagName('iframe')[0].contentDocument;
  var slice = uncurryThis(Array.prototype.slice);
  
  var list = slice(document.getElementsByTagName('td')).filter(function(td, i) { return i % 16 === 7; });
  // 删除掉表格的头行
  list.shift();
  
  var credit = 0;
  
  list.forEach(function(tr) {
    credit += parseFloat(tr.innerText) || 0;
  });
  
  DEBUG && console.log(credit);
  
  alert(
    '计算完毕！\n' +
    '您此学期的学分总共为 ' + credit + ' 分'
  );
})(window, document);
