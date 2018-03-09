
$(document).ready(function(){

  $("#searchBtn").on("click", function(){
    console.log("searching")
  })
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  var query =
  url += '?' + $.param({
    'api-key': "4e8ab05444a446ce9597076968189154",
    'q': "elon%20musk",
    'begin_date': "2000-01-01",
    'end_date': "2010-01-01",
    'sort': "newest",
    'page': 0
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
  }).fail(function(err) {
    throw err;
  });
})
