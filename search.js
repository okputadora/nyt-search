
$(document).ready(function(){

  $("#searchBtn").on("click", function(){
    var searchTerm =  $("#searchTerm").val()
    var numRecords = $("#numRecords").val()
    var startYear = $("#startYear").val()
    var endYear = $("#endYear").val()
    console.log(endYear)
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "4e8ab05444a446ce9597076968189154",
      'q': searchTerm,
      'begin_date': startYear + "-01-01",
      'end_date': endYear + "-01-01",
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
})
