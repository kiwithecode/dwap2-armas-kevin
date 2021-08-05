const hbs = require('hbs');

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./data/datas.json', 'utf8'));

hbs.registerHelper('getProduct',function(){
    var pro = "";
    obj.forEach(Object => {
        pro += '<div class="produc" class="col">';
        pro += '<img src="'+ Object.img +'" /><br /><br /><br />';
        pro += '<figcaption>$'+Object.p+ ' </figcaption><br /><br />';
        pro += '<h4>'+Object.nombre+'</h4>';
        pro += '</div>';
        
    });
    return new hbs.SafeString(pro);
});