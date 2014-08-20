$(document).ready(function(){ 

    $('#products').hide();

    var URL = 'https://api.gilt.com/v1/sales/women/active.json?apikey=b532e00d16c37e95789918cce9df4cdf';

    $.ajax({
        url: URL,
        type: 'GET',
        dataType: 'json',
        success: function (response) {

            console.log("Gilt API successful");
            // console.log(response.sales);
            // console.log("Response length: " + response.sales.length);
            // for (var i = 0; i < response.sales.length; i++) {

            for (var i = 0; i < 10; i++) {
              var sale_name = response.sales[i].name;
              var sale_description = response.sales[i].description;
              var sale_url = response.sales[i].sale_url;
  
              // console.log(sale_name);
              // console.log(sale_url);

              for (var key in response.sales[i].image_urls) {
                  var image_object = response.sales[i].image_urls[key];
                }
                
               for (var key2 in image_object) {
                  var image = image_object[key2].url;
               }   

            $('#products').append("<li><a href='" + sale_url + "'target='_blank'><div class='sale_info' style='background-image:url(\"" + image + "\"); background-size:cover'><h1>" + sale_name + "</h1><br><p>" + sale_description + "</p>" + "</div></a></li>");
            $('#products').fadeIn(3000);


          }

          $('li').mouseenter(function(){
            $(this).closest('li').find('h1').append("<h2>You know you want these.</h2>");
              $('li').mouseleave(function(){
                $('h2').remove();
            });
          });
        },
        error: function (response) {
            console.log("Gilt API request failed");
        }


    })



});