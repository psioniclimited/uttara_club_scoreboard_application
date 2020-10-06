
    var pages = 90;
    var pageButtons = $('#buttons');
    var count = 0;
    var v = 0;

    for (var i = 1; i <= pages; i++) {
      if (count < 10) {
        pageButtons.append('<span style="padding:5px;"><input type="button" class="btn btn-default btn-circle btn-xl" onclick="storeValue(this.value)" id="button'+i+'" value="'+i+'"/></span>');
        count = count + 1;
      }
      else{
        pageButtons.append('<br><br>');
        pageButtons.append('<span style="padding:5px;"><input type="button" class="btn btn-default btn-circle btn-xl" id="button'+i+'" value="'+i+'"/></span>');
        count = 1;
      }  

    };
    var val = [];
    function storeValue($v){
      val.push($v);
      alert(val);
    }

    // function callCount(){
      
    //   v = v + 1;
    //   alert(v);
    // }

     // For the ticker tape
     $('.simple-marquee-container').SimpleMarquee();
