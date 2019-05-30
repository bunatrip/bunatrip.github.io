/* js is only used to avoid transition on page load. Thanks to Chris Coyier for the tip. 

https://css-tricks.com/transitions-only-after-page-load/

*/

// jQuery(function($){
//     $('html').removeClass('preload');
//   })

$(document).ready(function(){
    var loading = $(".loading");
    loading.delay(loading.attr("delay-hide")).fadeOut();
  });


//   Search
