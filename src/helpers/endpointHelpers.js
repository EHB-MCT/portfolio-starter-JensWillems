/**
table.uuid('UUID');
table.string('name');
table.integer('age');
table.string('classgroup');
table.double('grade');
 */

function CheckStudentName(name){
if(name == null || 
    name.length <= 1 || 
    typeof(name) != "string" || 
    name.length > 20
    ){
    return false
 }
 return true
}

module.exports = {
    CheckStudentName
}