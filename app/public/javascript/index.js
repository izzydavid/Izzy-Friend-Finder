//On survey submit button click
$("#submit").click(event => {
    event.preventDefault();
  
    //Make Userinput object
    const userInput = {
      name: $("#userName").val().trim(),
      image: $("#userPhoto").val().trim(),
      scores: [
        //fix the repeition here later
        $("#question1").val().trim(),
        $("#question2").val().trim(),
        $("#question3").val().trim(),
        $("#question4").val().trim(),
        $("#question5").val().trim(),
        $("#question6").val().trim(),
        $("#question7").val().trim(),
        $("#question8").val().trim(),
        $("#question9").val().trim(),
        $("#question10").val().trim()
      ]
    }
  
    //POST request to the /api/friends route
    $.post("/api/friends", userInput).done(res => {
      //add match name and image to the modal
      $("#match").text(res.matchName);
      $("#matchImage").attr("src", res.matchImage);
  
      //show modal
      $("#myModal").modal("toggle");
    })
  
  })