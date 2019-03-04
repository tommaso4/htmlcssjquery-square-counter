function general (){
  var box1 = $(".box1");
  var box2 = $(".box2");
  var box3 = $(".box3");

  var elem = Number($(".box2 p").text());

  box1.click(function (){
    elem -= 1;
    box2.text(elem);
  });

  box3.click(function (){
    elem += 1;
    box2.text(elem);
  });

};

general();
