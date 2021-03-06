#Election 2013 app

This is the code that ran the WCFCourier's election 2013 app. It uses:
- [Bootstrap](http://getbootstrap.com/2.3.2/)
- [Reset](https://code.google.com/p/reset5/)
- [jQuery](http://jquery.com/)
- [Tabletop.js](https://github.com/jsoma/tabletop)
- [Handelbars.js](http://handlebarsjs.com/)
- [Swag](https://github.com/elving/swag)
- [Underscore.js](http://underscorejs.org/)


To view the bare bones version of the app without any content, [click here](https://github.com/csessig86/tabletop-handlebars-clean-slate).

Note: Before and after the eleciton night, we did not use [Tabletop](https://github.com/jsoma/tabletop). Instead we exported the data from our Google spreadsheet into JSON and then templated it with Handlebars.js. The code for this is in index.html and js/notabletop.js.

The night of the election, we used Tabletop, which allowed us to enter the election results into our Google spreadsheet and update our in real-time. The code for this in index_tabletop.html and js/loadpagetabletop.js.

For instructions on exporting Google spreadsheet data into JSON, [click here](https://github.com/csessig86/tabletop-handlebars-clean-slate/blob/master/static.md).

To see our Google spreadsheet that powered our app, [click here](https://docs.google.com/spreadsheet/ccc?key=0As3JvOeYDO50dHJITmhNWXRUc3FYMFI4emZhWTU0SlE&usp=drive_web#gid=1).

More information on our workflow for this app is [available here](http://csessig.wordpress.com/2013/11/10/how-we-used-a-google-spreadsheet-to-power-our-election-app/).