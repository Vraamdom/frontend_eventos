const data = [
    {"id":1,"first_name":"Stinky","last_name":"Kuschek","email":"skuschek0@admin.ch","gender":"Male"},
    {"id":2,"first_name":"Brand","last_name":"Hatchell","email":"bhatchell1@reddit.com","gender":"Male"},
    {"id":3,"first_name":"Beatriz","last_name":"Rocco","email":"brocco2@goodreads.com","gender":"Female"},
    {"id":4,"first_name":"Mary","last_name":"Boost","email":"mboost3@wsj.com","gender":"Female"},
    {"id":5,"first_name":"Salmon","last_name":"Bernardin","email":"sbernardin4@live.com","gender":"Male"},
    {"id":6,"first_name":"Shayna","last_name":"Fidele","email":"sfidele5@ft.com","gender":"Female"},
    {"id":7,"first_name":"Duane","last_name":"Doumic","email":"ddoumic6@pagesperso-orange.fr","gender":"Male"},
    {"id":8,"first_name":"Arnoldo","last_name":"Rains","email":"arains7@delicious.com","gender":"Male"},
    {"id":9,"first_name":"Gerhardt","last_name":"Shevelin","email":"gshevelin8@hud.gov","gender":"Male"},
    {"id":10,"first_name":"Bobine","last_name":"Beeching","email":"bbeeching9@pcworld.com","gender":"Female"},
    {"id":11,"first_name":"Johann","last_name":"Tattersfield","email":"jtattersfielda@salon.com","gender":"Male"},
    {"id":12,"first_name":"Ailey","last_name":"Dick","email":"adickb@meetup.com","gender":"Female"},
    {"id":13,"first_name":"Ignatius","last_name":"Gooch","email":"igoochc@photobucket.com","gender":"Male"},
    {"id":14,"first_name":"Giavani","last_name":"Breinl","email":"gbreinld@stumbleupon.com","gender":"Male"},
    {"id":15,"first_name":"Hobie","last_name":"McCallum","email":"hmccallume@blogspot.com","gender":"Male"},
    {"id":16,"first_name":"Lonna","last_name":"Timperley","email":"ltimperleyf@oaic.gov.au","gender":"Female"},
    {"id":17,"first_name":"Editha","last_name":"Whye","email":"ewhyeg@nba.com","gender":"Female"},
    {"id":18,"first_name":"Euphemia","last_name":"Wiltshaw","email":"ewiltshawh@wikimedia.org","gender":"Female"},
    {"id":19,"first_name":"Thaine","last_name":"Syred","email":"tsyredi@aol.com","gender":"Male"},
    {"id":20,"first_name":"Fernanda","last_name":"Bilverstone","email":"fbilverstonej@unc.edu","gender":"Female"},
    {"id":21,"first_name":"Mart","last_name":"Nerval","email":"mnervalk@plala.or.jp","gender":"Male"},
    {"id":22,"first_name":"Marcille","last_name":"Hender","email":"mhenderl@netscape.com","gender":"Female"},
    {"id":23,"first_name":"Cristal","last_name":"Barkus","email":"cbarkusm@weibo.com","gender":"Female"},
    {"id":24,"first_name":"Gui","last_name":"Risdale","email":"grisdalen@ox.ac.uk","gender":"Female"},
    {"id":25,"first_name":"Sabra","last_name":"Jordison","email":"sjordisono@smugmug.com","gender":"Female"},
    {"id":26,"first_name":"Jemimah","last_name":"Gunter","email":"jgunterp@squidoo.com","gender":"Female"},
    {"id":27,"first_name":"Lanette","last_name":"Ivatt","email":"livattq@hp.com","gender":"Female"},
    {"id":28,"first_name":"Feodora","last_name":"Picken","email":"fpickenr@digg.com","gender":"Female"},
    {"id":29,"first_name":"Cammi","last_name":"Papierz","email":"cpapierzs@istockphoto.com","gender":"Female"},
    {"id":30,"first_name":"Rowney","last_name":"Kinneally","email":"rkinneallyt@odnoklassniki.ru","gender":"Male"},
    {"id":31,"first_name":"Morey","last_name":"Dooly","email":"mdoolyu@addtoany.com","gender":"Male"},
    {"id":32,"first_name":"Tallou","last_name":"Lindgren","email":"tlindgrenv@discovery.com","gender":"Polygender"},
    {"id":33,"first_name":"Faunie","last_name":"Lau","email":"flauw@berkeley.edu","gender":"Female"},
    {"id":34,"first_name":"Traver","last_name":"Trazzi","email":"ttrazzix@jiathis.com","gender":"Male"},
    {"id":35,"first_name":"Ware","last_name":"Ridhole","email":"wridholey@g.co","gender":"Male"},
    {"id":36,"first_name":"Dwain","last_name":"Cregg","email":"dcreggz@slate.com","gender":"Male"},
    {"id":37,"first_name":"Grannie","last_name":"Fuggles","email":"gfuggles10@elpais.com","gender":"Male"},
    {"id":38,"first_name":"Bogey","last_name":"Renols","email":"brenols11@dell.com","gender":"Male"},
    {"id":39,"first_name":"Reyna","last_name":"Camplin","email":"rcamplin12@gizmodo.com","gender":"Female"},
    {"id":40,"first_name":"Osbourne","last_name":"Beek","email":"obeek13@mysql.com","gender":"Male"},
    {"id":41,"first_name":"Frayda","last_name":"Handmore","email":"fhandmore14@google.co.jp","gender":"Genderqueer"},
    {"id":42,"first_name":"Karel","last_name":"Lawrance","email":"klawrance15@netvibes.com","gender":"Male"},
    {"id":43,"first_name":"Marylou","last_name":"Heminsley","email":"mheminsley16@google.it","gender":"Female"},
    {"id":44,"first_name":"Bink","last_name":"Scotchford","email":"bscotchford17@google.ca","gender":"Male"},
    {"id":45,"first_name":"Hertha","last_name":"Keavy","email":"hkeavy18@51.la","gender":"Female"},
    {"id":46,"first_name":"Darya","last_name":"Trunks","email":"dtrunks19@pinterest.com","gender":"Female"},
    {"id":47,"first_name":"Prissie","last_name":"Godly","email":"pgodly1a@odnoklassniki.ru","gender":"Female"},
    {"id":48,"first_name":"Kial","last_name":"Chansonnau","email":"kchansonnau1b@ameblo.jp","gender":"Female"},
    {"id":49,"first_name":"Winona","last_name":"Windas","email":"wwindas1c@weibo.com","gender":"Female"},
    {"id":50,"first_name":"Sherwynd","last_name":"Farrow","email":"sfarrow1d@t-online.de","gender":"Male"},
    {"id":51,"first_name":"Gerome","last_name":"Eady","email":"geady1e@sphinn.com","gender":"Male"},
    {"id":52,"first_name":"Amory","last_name":"Goldring","email":"agoldring1f@arstechnica.com","gender":"Male"},
    {"id":53,"first_name":"Miltie","last_name":"Adamini","email":"madamini1g@telegraph.co.uk","gender":"Male"},
    {"id":54,"first_name":"Linzy","last_name":"Garmanson","email":"lgarmanson1h@businessweek.com","gender":"Female"},
    {"id":55,"first_name":"Hedvig","last_name":"Medlicott","email":"hmedlicott1i@amazon.co.uk","gender":"Female"},
    {"id":56,"first_name":"Stevy","last_name":"Otton","email":"sotton1j@studiopress.com","gender":"Male"},
    {"id":57,"first_name":"Benedick","last_name":"Surpliss","email":"bsurpliss1k@seattletimes.com","gender":"Male"},
    {"id":58,"first_name":"Urbain","last_name":"Gallemore","email":"ugallemore1l@google.com.au","gender":"Male"},
    {"id":59,"first_name":"Elisa","last_name":"Twining","email":"etwining1m@google.co.jp","gender":"Female"},
    {"id":60,"first_name":"Doralin","last_name":"Brigginshaw","email":"dbrigginshaw1n@google.nl","gender":"Female"},
    {"id":61,"first_name":"Pegeen","last_name":"Pyer","email":"ppyer1o@zimbio.com","gender":"Female"},
    {"id":62,"first_name":"Barde","last_name":"Sodo","email":"bsodo1p@earthlink.net","gender":"Male"},
    {"id":63,"first_name":"Bertine","last_name":"Palleske","email":"bpalleske1q@sina.com.cn","gender":"Female"},
    {"id":64,"first_name":"Iain","last_name":"Tremblot","email":"itremblot1r@gizmodo.com","gender":"Male"},
    {"id":65,"first_name":"Philipa","last_name":"Claringbold","email":"pclaringbold1s@google.com","gender":"Female"},
    {"id":66,"first_name":"Wynnie","last_name":"Deport","email":"wdeport1t@newsvine.com","gender":"Genderqueer"},
    {"id":67,"first_name":"Bastien","last_name":"Basset","email":"bbasset1u@yahoo.co.jp","gender":"Male"},
    {"id":68,"first_name":"Annalise","last_name":"Vertey","email":"avertey1v@barnesandnoble.com","gender":"Female"},
    {"id":69,"first_name":"Cordy","last_name":"Kees","email":"ckees1w@livejournal.com","gender":"Non-binary"},
    {"id":70,"first_name":"Fredia","last_name":"Vernall","email":"fvernall1x@flavors.me","gender":"Female"},
    {"id":71,"first_name":"Archy","last_name":"Pedgrift","email":"apedgrift1y@aboutads.info","gender":"Male"},
    {"id":72,"first_name":"Fabiano","last_name":"Bettanay","email":"fbettanay1z@sogou.com","gender":"Male"},
    {"id":73,"first_name":"Ava","last_name":"Argo","email":"aargo20@nytimes.com","gender":"Genderfluid"},
    {"id":74,"first_name":"Roma","last_name":"Huby","email":"rhuby21@yelp.com","gender":"Male"},
    {"id":75,"first_name":"Harper","last_name":"Mabbott","email":"hmabbott22@mozilla.org","gender":"Male"},
    {"id":76,"first_name":"Pepi","last_name":"MacInnes","email":"pmacinnes23@com.com","gender":"Female"},
    {"id":77,"first_name":"Eunice","last_name":"Connue","email":"econnue24@cbsnews.com","gender":"Female"},
    {"id":78,"first_name":"Sharia","last_name":"Rapinett","email":"srapinett25@webeden.co.uk","gender":"Female"},
    {"id":79,"first_name":"Othelia","last_name":"Parkhouse","email":"oparkhouse26@sohu.com","gender":"Female"},
    {"id":80,"first_name":"Janaya","last_name":"Size","email":"jsize27@springer.com","gender":"Agender"},
    {"id":81,"first_name":"Carlotta","last_name":"Haslewood","email":"chaslewood28@toplist.cz","gender":"Female"},
    {"id":82,"first_name":"Rici","last_name":"Vogeler","email":"rvogeler29@amazon.co.uk","gender":"Female"},
    {"id":83,"first_name":"Dale","last_name":"Kyllford","email":"dkyllford2a@squidoo.com","gender":"Male"},
    {"id":84,"first_name":"Kelly","last_name":"Board","email":"kboard2b@ycombinator.com","gender":"Female"},
    {"id":85,"first_name":"Karalynn","last_name":"Bollard","email":"kbollard2c@cdc.gov","gender":"Female"},
    {"id":86,"first_name":"Emmi","last_name":"Dmisek","email":"edmisek2d@wordpress.com","gender":"Female"},
    {"id":87,"first_name":"Raddy","last_name":"De Courtney","email":"rdecourtney2e@house.gov","gender":"Male"},
    {"id":88,"first_name":"Eustacia","last_name":"Greatbach","email":"egreatbach2f@shareasale.com","gender":"Female"},
    {"id":89,"first_name":"Cecilla","last_name":"Allner","email":"callner2g@examiner.com","gender":"Bigender"},
    {"id":90,"first_name":"Randy","last_name":"Govini","email":"rgovini2h@cbc.ca","gender":"Female"},
    {"id":91,"first_name":"Rena","last_name":"Le Fevre","email":"rlefevre2i@i2i.jp","gender":"Female"},
    {"id":92,"first_name":"Ab","last_name":"Balser","email":"abalser2j@ehow.com","gender":"Male"},
    {"id":93,"first_name":"Deonne","last_name":"Rylett","email":"drylett2k@unesco.org","gender":"Female"},
    {"id":94,"first_name":"Weylin","last_name":"Ottley","email":"wottley2l@hhs.gov","gender":"Male"},
    {"id":95,"first_name":"Trudi","last_name":"McMinn","email":"tmcminn2m@gov.uk","gender":"Female"},
    {"id":96,"first_name":"Dianemarie","last_name":"Coogan","email":"dcoogan2n@clickbank.net","gender":"Polygender"},
    {"id":97,"first_name":"Myer","last_name":"Obell","email":"mobell2o@reddit.com","gender":"Male"},
    {"id":98,"first_name":"Barby","last_name":"Boniface","email":"bboniface2p@instagram.com","gender":"Female"},
    {"id":99,"first_name":"Broddy","last_name":"Hallick","email":"bhallick2q@elegantthemes.com","gender":"Male"},
    {"id":100,"first_name":"Corbett","last_name":"Gascoigne","email":"cgascoigne2r@disqus.com","gender":"Male"}]
  
    const table = document.getElementById('data-table');
    const pagination = document.getElementById('pagination');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');
    const currentPageSpan = document.getElementById('currentPage');
    let currentPage = 1;
    const itemsPerPage = 9; // Cambia esto para ajustar la cantidad de filas por página
  
    function showData(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = data.slice(startIndex, endIndex);
  
      table.tBodies[0].innerHTML = '';
  
      for (const item of paginatedData) {
        const row = table.tBodies[0].insertRow();
        row.insertCell(0).textContent = item.id;
        row.insertCell(1).textContent = item.first_name;
        row.insertCell(2).textContent = item.last_name;
        row.insertCell(3).textContent = item.email;
        row.insertCell(4).textContent = item.gender;
      }
  
      currentPage = page;
      currentPageSpan.textContent = currentPage;
      prevPageButton.disabled = currentPage === 1;
      nextPageButton.disabled = currentPage === Math.ceil(data.length / itemsPerPage);
    }
  
    prevPageButton.addEventListener('click', () => {
      if (currentPage > 1) {
        showData(currentPage - 1);
      }
    });
  
    nextPageButton.addEventListener('click', () => {
      if (currentPage < Math.ceil(data.length / itemsPerPage)) {
        showData(currentPage + 1);
      }
    });
  
    showData(currentPage); // Mostrar la primera página al cargar la página
  
  