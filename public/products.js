$(document).ready(function () {

    $('#products, h6').hide();

    var URL = 'https://api.gilt.com/v1/sales/women/active.json?apikey=b532e00d16c37e95789918cce9df4cdf';

    $.ajax({
        url: URL,
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            console.log("Gilt API successful");

            var arr = [];

            for (var i = 0; i < 10; i++) {
                var saleName = response.sales[i].name;
                var saleUrl = response.sales[i].sale_url;

                for (var key in response.sales[i].image_urls) {
                    var imageObject = response.sales[i].image_urls[key];
                }

                for (var key2 in imageObject) {
                    var image = imageObject[key2].url;
                }

                $('#products').append("<li><a href='" + saleUrl + "'target='_blank'><div class='sale_info' style='background-image:url(\"" + image + "\"); background-size:cover'><h1>" + saleName + "</h1></div></a></li>");            
                $('#products, h6').fadeIn(3000);
            }



            // random message on hover 
            $('li').mouseenter(function () {
                var affirmationArray = ['You know you want these.', 'Treat yourself.', 
                    'Buy yourself a present.', 'You deserve it.', 'Indulge a little.', 
                    'Just a click away.', 'These were meant for you.', 'Pamper yourself.'];
                var rand = affirmationArray[Math.floor(Math.random() * affirmationArray.length)];
                $(this).closest('li').find('h1').append("<h2>" + rand + "</h2>");
                $('li').mouseleave(function () {
                    $('h2').remove();
                });
            });

        },
        error: function (response) {
            console.log("Gilt API request failed");
        }

    })

});