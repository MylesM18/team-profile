
  
  $("#submit-btn").on("click", function(e){
    e.preventDefault()

   var first_name = $("#firstname").val().trim();
   var last_name = $("#lastname").val().trim();
   var department = $("#department").val().trim();
   var salary = $("#salary").val().trim();

    const user = {first_name,last_name,department,salary}
    save(user);

  });
           


function save(data) {
  $.ajax({
    method: "POST",
    url: "/api/profiles",
    data,
  }).then((res) => location.reload());
};

$('.delete').on('click', function(){
  $.ajax({
    method: "DELETE",
    url: "/api/profiles/"+$(this).data('id')
  }).then(data=> location.reload())
});



