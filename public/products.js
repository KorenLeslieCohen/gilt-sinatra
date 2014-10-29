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
                var saleNameData = response.sales[i].name;
                var saleUrlData = response.sales[i].sale_url;

                for (var key in response.sales[i].image_urls) {
                    var imageObject = response.sales[i].image_urls[key];
                }

                for (var key2 in imageObject) {
                    var imageData = imageObject[key2].url;
                }

                // handlebars
                var urlData = {saleUrl: saleUrlData};
                var imgData = {image: imageData};
                var nameData = {saleName: saleNameData};

                var templateOne = Handlebars.compile($('#one-product-template').html());
                var templateTwo = Handlebars.compile($('#two-product-template').html());
                var templateThree = Handlebars.compile($('#three-product-template').html());
                
                arr.push(templateOne(urlData), templateTwo(imgData), templateThree(nameData));
                joinedArr = arr.join("");
            }

            $('#products').append(joinedArr);
            $('#products, h6').fadeIn(3000);

            // random message on hover 
            $('li').mouseenter(function () {
                var affirmationArray = ['You know you want these.', 'Treat yourself.', 
                    'Buy yourself a present.', 'You deserve it.', 'Indulge a little.', 
                    'Just a click away.', 'These were meant for you.', 'Pamper yourself.'];
                var random = affirmationArray[Math.floor(Math.random() * affirmationArray.length)];

                // handlebars
                var dataRand = {rand: random};
                var templateRand = Handlebars.compile($('#random-template').html());
                
                $(this).closest('li').find('h1').append(templateRand(dataRand));
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