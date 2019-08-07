var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10
});


c.queue([{
    uri: 'https://pt.wikihow.com/wikiHowTo?search=como+transar+melhor',

    callback: function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            let firstLink = $("a.result_link").attr('href');
            if(firstLink) {
              c.queue([{
                  uri: firstLink,

                  callback: function (error, res, done) {
                      if(error){
                          console.log(error);
                      }else{
                          var $ = res.$;
                          console.log($('.step').text())

                      }

                  }
              }])
            }
        }

    }
}])

// Queue just one URL, with default callback
//c.queue('https://pt.wikihow.com/wikiHowTo?search=como+transar+melhor').;
