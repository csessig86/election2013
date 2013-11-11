// Template sources and what DIVs they will appear in
var templates = [
  {
    "templatesource": "#main-page-template",
    "templatehtml": "#main-page-box"
  },
  {
    "templatesource": "#second-page-template",
    "templatehtml": "#second-page-box"
  }
];

// Removes whitespace. Ex: Cedar Falls > CedarFalls
Handlebars.registerHelper('whitespaceRemove', function(object) {
  object = object + "";
  var new_object = object.replace(/\s+/g, '');
  return new Handlebars.SafeString(new_object);
});

// Removes whitespace. Ex: Cedar Falls > CedarFalls
Handlebars.registerHelper('firstnameRemove', function(object) {
  object = object + "";
  var new_object = object.substr(object.indexOf(" ") + 1);
  return new Handlebars.SafeString(new_object);
});


Handlebars.registerHelper("foreach",function(arr,options) {
    if(options.inverse && !arr.length)
        return options.inverse(this);

    return arr.map(function(item,index) {
        item.$index = index;
        item.$first = index === 0;
        item.$last  = index === arr.length-1;
        return options.fn(item);
    }).join('');
});

// Load up our templates
var loadTemplates = function () {
  // This loop will spit out all the template
  for (num = 0; num < templates.length; ++num) {
    var source = $(templates[num]["templatesource"] + "").html();
    var handlebars_compile = Handlebars.compile(source);
  
    // Determine if we are rendering the template at the beginning
    // Or the end of the DIV
    $(templates[num]["templatehtml"] + "").append(handlebars_compile(context));
  }

  // Dynamically add Twitter button
  setTwitter();
  // Set hash
  hashChange();
};

// Fade in versus button
$(window).load(function(){
  $('.versus-mark').css('visibility','visible').hide().fadeIn(2500);
});