var base32 = require('thirty-two');
var speakeasy = require('speakeasy');

var sites = new Array();

sites.push({
    "name": '***',
    "secret": base32.decode('t7jicux44dha34hd')
});
sites.push({
    "name": 'NZ Admin',
    "secret": base32.decode('j32x5cc652z74iw2')
});
sites.push({
    "name": 'AU Admin',
    "secret": base32.decode('nfuliqrllrnk3gj6')
});
sites.push({
    "name": 'Google',
    "secret": base32.decode('55ndmeb2lnykkg6cwk375v2r4t2ajene')
});
sites.push({
    "name": 'Dropbox',
    "secret": base32.decode('gpp2arrnbohqilbwf6mm6sdwie')
});
sites.push({
    "name": 'Youtube',
    "secret": base32.decode('jx7tjxuol2lpyhuq4aawghlr2oshrtan')
});
sites.push({
    "name": 'Backupify',
    "secret": base32.decode('b7kn5fdzcaar5b64fkhieuclxfbhlmws')
});
sites.push({
    "name": 'Microsoft',
    "secret": base32.decode('3p3az6u46kehg6cb')
});

var my_http = require("http");
my_http.createServer(function(request,response){
    var stepTime = new Date();
    response.writeHeader(200, {"Content-Type": "text/html"});

    response.write(stepTime.getSeconds() % 30 + "/30<br>\n");
    sites.forEach(function(site, index, sites){
    response.write(site.name + ": " + speakeasy.totp({"key": site.secret, "time": stepTime.getTime()/1000}) + "<br>\n");
    
});
response.end();
}).listen(process.env.PORT || 8080);
console.log("Server Running on " + process.env.IP + ":" + process.env.PORT);
