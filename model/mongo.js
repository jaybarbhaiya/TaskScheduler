var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/task_scheduler');

var mongoSchema =   mongoose.Schema;
var userSchema  = {
    "username" : String,
    "firstName" : String,
    "lastName" : String,
    "email" : String
    "technology" : String,
    "password" : String
};
mongoose.model('user',userSchema);