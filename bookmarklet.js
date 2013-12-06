var nodes = document.getElementsByClassName('notif'), i, halt = false, sub_apps = [];

for (var i=0; i<nodes.length; i++) {
	var node = nodes[i];  	
	if (node.querySelector("[type=checkbox]").checked == true) {
    	sub_apps.push(node);
    }
}

var j = sub_apps.length;

var Div = document.createElement('div');
Div.innerHTML = '<div id=\'happy\' style=\'background-color:#ddd;font-size:16px;text-align:center;position:fixed;top:40px;right:40px;width:200px;height:100px;border:4px solid black;z-index:9999;padding-top:15px;\'><span id=\'count_apps\'>0</span> of ' + sub_apps.length + ' apps unsubscribed.<div id=\'happyStatus\' style=\'margin-top:30px;\'><a onclick=\'haltFn()\' id=\'happyButton\' href=\'#\' style=\'display:block;\'>Stop it.</a></div></div>';
document.getElementsByTagName('body')[0].appendChild(Div);

function unsubscriber(sub_apps) {
    if (halt || !sub_apps || !sub_apps.length) {
        document.getElementById('happyStatus').innerHTML = 'Done!';
        return;
    }
    sub_apps[0].querySelector("[type=checkbox]").click();
    document.getElementById('count_apps').innerHTML = j - sub_apps.length + 1;
    
    window.setTimeout(function() {
        unsubscriber(sub_apps.splice(1));
    }, 1000);
}

function haltFn() {
    halt = true;
    return false; // prevent default event
}

unsubscriber(sub_apps);
