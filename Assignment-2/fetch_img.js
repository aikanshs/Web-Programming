
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: 'js/data.json',
        dataType: 'json',
        mimeType: "application/json",
        success: function(images) {
            $.each(images, function(i, images) {
                var id = images.id
                var path = "images/square/" + images.path;
                var desc = images.city + ', ' + images.country + ' [' + images.taken + ']'
                var title = images.title;
                var info = `<li> <img src= "  ${path} " alt= " ${title} " id= " ${desc}"/></li>`
                $(".gallery").append(info)
            });
            $("ul.gallery").on("mouseenter", "img", function() {
                var title = $(this).attr("alt")
                var desc = $(this).attr("id")
                var old_url = $(this).attr("src")
                var new_url = old_url.replace("square", "medium")
               
                $("body").append('<div id = preview ></div>')
                $("#preview").attr('style', 'z-index:1;')
                $("#preview").append('<img src= ' + new_url + ' alt= ' + title + ' id= ' + desc + '/><p>' + title + '<br/><i>' + desc + '</i></p>')
                $("#preview").fadeIn(1000)
                
                $(this).addClass('gray');

                
                $(document).mousemove(function(event) {
                    var x = event.pageX + 10;
                    var y = event.pageY + 10;
                    $("#preview").css({ top: y, left: x });
                });

                $(this).mouseleave(function() {
                    $(this).removeClass('gray');
                    $("#preview").remove()
                });


            });

        },
        error: function() { alert("error loading file"); }
    });


});
