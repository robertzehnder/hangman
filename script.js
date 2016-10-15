$( document ).ready(function() {
    console.log( "ready!" );
    var word = "robert";
    var submission = "";
    var userDisplay = [];

    for (i=0;i<word.length;i++) {
      userDisplay.push("_");
    }

    // console.log(userDisplay) -- works
    function newBoard () {
      $('.board').text(userDisplay.join(" "));
    }

    newBoard();

    $('#submit').on('click', function() {
      submission = $('#letter').val();
      var match = false;
      for (i=0;i<word.length;i++) {
        if (word[i]===submission) {
          userDisplay[i] = submission;
          match = true;
        }
      }
      if (match === false) {
        alert('You Wrong Bitch!')
      }
      newBoard();

    })
});
