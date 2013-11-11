// Page information that we will build on
var context = {
  "body": []
};

// Here's the Tabletop feed
// First we'll initialize Tabletop with our spreadsheet
var jquery_no_conflict = jQuery;

jquery_no_conflict(document).ready(function(){
  initializeTabletopObject('0As3JvOeYDO50dHJITmhNWXRUc3FYMFI4emZhWTU0SlE');
});

// Pull data from Google spreadsheet
// And push to our pullDataFromTabletop function
var initializeTabletopObject = function (dataSpreadsheet){
  Tabletop.init({
    key: dataSpreadsheet,
    callback: pullDataFromTabletop,
    orderBy: "race",
    debug: false
  });
}

// This function gets our data from our spreadsheet
var pullDataFromTabletop = function (tabletopData, tabletop) {
  // Go through our Google spreadsheet
  // Stored in tabletopData variable
  // tabletopData = Worksheet
  
  for (num in tabletopData) {
    // Global-ish variables
    var races_uniq = [];
    var elements = tabletopData[num].elements;
    var city = tabletopData[num].name;

    // Variable we will build on
    var tabletopinfo = {
      "city": city,
      "races": [
        {
        race: "",
        candidates: []
        }
      ]
    };

    // Find all unique races in our data
    // And add to our tabletopinfo variable
    for (num_elems in elements) {
      races_uniq.push(elements[num_elems].race);
    }
    races_uniq = _.uniq(races_uniq);

    // Add appropriate candidates to races field
    // This first goes through our unique races
    for (num_uniq in races_uniq) {
      // This keeps track of what race we are on
      var race_current = races_uniq[num_uniq];
      // Create empty array
      tabletopinfo["races"][num_uniq] = {};
      // Push race info to tabeltopinfo
      tabletopinfo["races"][num_uniq]["race"] = race_current;

      // Creat empty array
      tabletopinfo["races"][num_uniq]["candidates"] = [];
      // This loops through our candidates
      for (num_elems_two in elements) {
        // This keeps track of what candidate we are on
        var element_current = elements[num_elems_two]
        
        // This first finds our unique race
        // Then finds all the candidates that are in that race
        if (race_current === element_current.race) {
          // Push to tabletopinfo
          tabletopinfo["races"][num_uniq]["candidates"].push(element_current);
        }
      }
    }

    context["body"].push(tabletopinfo);
    context["body"].sort()

    // console.log(context);
  }
  // Load templates
  loadTemplates();
};