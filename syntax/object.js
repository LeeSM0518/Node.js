var member = ['egoing', 'k8805', 'hoya'];
console.log(member[1]);     // k8805
var i = 0;
while(i < member.length) {
    console.log('array loop', member[i]);
    i = i + 1;
}

var roles = {
    'programer': 'egoing',
    'designer': 'k8805',
    'manager': 'hoya'
}
console.log(roles.designer);    // k8805
console.log(roles['designer']);    // k8805

for(var name in roles) {
    console.log('object => ', name, ', value => ', roles[name]);
}