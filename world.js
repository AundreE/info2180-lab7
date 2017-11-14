$(document).ready(function()
 {
     var myButtn = $("#search");
     var url = "https://lab7-riddimboss.c9users.io/world.php?country=";
     
     
     myButtn.on('click', myQuery);
     
     
     function myQuery(event)
     {
         event.preventDefault();
         
         var termEntered = $("#country").val();
         
         $.ajax({
           url: url + termEntered,
         })
         .done(function(data) 
         {
            $("#result").html("");
            alert(data); 
            $("#result").append(data);
         }).fail(function()
         {
             alert("ERROR!");
         });
         
     }
     
     
 });
 
 function searchAll(){
     var url = 'https://lab7-riddimboss.c9users.io/world.php?all=true';
     
     $.ajax(url,{
         method: 'GET',
     }).done(function(res){
         $("#result").html(res);
     }).fail(function(fail){
         $("#result").html('<b>AJAX ERROR</b>');
     });
  }