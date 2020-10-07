//  app.js server file handling endpoint requests
const chalk=require('chalk');
const path=require('path');
const auth=require('./middleware/auth');
const config = require('./config/index');
const url = require('url');
var express=require('express');
// const swaggerJsDoc=require('swagger-jsdoc');
const swaggerUiExpress=require('swagger-ui-express');
const swaggerDoc1= require('./swagger.json');
// const swaggerOptions={
//   swaggerDefinition:{
//     info:{
//       tiltle:"Whipp api",
//       description:"Whipp  API information",
//       contact:{
//         name:"Israr ul Haq"
//       },
//       servers:"http://localhost:8000"
      
//     }
//   },
//   // [.routes/*.js]
//  // apis:["app.js"]
//  apis:['./Routes/*.js']
// };
// const swaggerDoc=swaggerJsDoc(swaggerOptions);

var app=express();
var cors=require('cors');

app.use(cors({credentials: true, origin: true}));

// //const logger = require('morgan');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
//let localConnection="mongodb://127.0.0.1:27017/?compressors=zlib&gssapiServiceName=mongodb/local";
let localConnection="mongodb://127.0.0.1:27017/whipp_db";
let remoteConnection="mongodb+srv://israrulhaq:Computer2020@clusto0.mut68.azure.mongodb.net/whipp_db?retryWrites=true&w=majority";
mongoose.connect(localConnection, {
  useNewUrlParser: "true",
});

//
var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;
mongoose.connection.on("error", err => {
  console.log(error("err occured in connect to db"));
});
mongoose.connection.on("connected", (err, res) => {
  console.log(connected("mongoose is connected"));
});

//catch(error => {console.log("error")});
  
// var db=mongoose.connect("mongodb+srv://israr2:Computer2020@cluster0-akuxt.mongodb.net/whip_db?retryWrites=true&w=majority",(err)=>{
// if(err)
// throw err;
// else{
//     console.log("Connected to DB");
// }
// });

// mongoose.connect('mongodb+srv://israr2:Computer2020@cluster0-akuxt.mongodb.net/whip_db?retryWrites=true&w=majority",{poolSize: 20}', {poolSize: 20});
// var db = mongoose.connection;
// db.once('open', function() { console.log('Successfully connected');});
// db.on('error', console.error.bind(console, 'conn error:'));
// models
 var  UserModel=require('./models/UserModel');
 var  languageStrings=require('./models/LanguageStrings');
 const languages=require('./models/Languages');
 const referenceModule=require('./models/ReferenceModule');
 const referenceType=require('./models/ReferenceType');
 const references=require('./models/References');

const { schema } = require('./models/Languages');
const { needsAuth } = require('./middleware/auth');
const jwt = require('./utils/jwt');
 
app.use('/uploads',express.static('uploads'));
app.use('/public',express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.set("views",'whipp_backend/views');
// app.set("views",__dirname+'/views');
// app.set("view engine",'ejs');
const viewPath=path.join(__dirname,'views');
console.log("viewPath",viewPath);
app.set('views',viewPath);
app.set('view engine', 'ejs');

//Routes
const stripeCouponsRoutes=require('./Routes/strapi_couponsRoutes')();
var authRoutes=require('./Routes/authRoute')();
var languagesRoutes=require('./Routes/LanguagesRoutes')();
var languageStringsRoutes=require('./Routes/LanguageStringsRoutes')(languageStrings);

const refereneceModuleRoutes=require('./Routes/ReferenceModuleRoutes')(referenceModule);
const refereneceTypeRoutes=require('./Routes/ReferenceTypeRoutes')(referenceType);
const referencesRoutes=require('./Routes/ReferencesRoutes')(references);
const testRoutes=require('./Routes/testRoute')(UserModel);
// app.get('/',function(req,res){
// res.render('login');
// });
//,mw.needsAuth

app.use('/api-docs',swaggerUiExpress.serve,swaggerUiExpress.setup(swaggerDoc1));
// app.post("/login",function(req,res){
//   if(true){
//     const user={
//       name:"israr",
//       role:'admin'
//     }
//     jwt.sign(user,"test").then((token)=>{
//       console.log("token",token);
//       res.setHeader('authorization',token);
//       //req.setHeader('authorization',token);
//       res.redirect("/api-docs");
//     })
    
//   }
  
// })
app.use("/api/stripe/coupons",stripeCouponsRoutes);
app.use("/api/user",authRoutes);
app.use("/api/language_strings",languageStringsRoutes);
app.use("/api/languages",auth.needsAuth,languagesRoutes);
app.use("/api/reference_module",refereneceModuleRoutes);
app.use("/api/reference_type",refereneceTypeRoutes);
app.use("/api/references",referencesRoutes);
app.use("/api/test",testRoutes);

const port=process.env.PORT||8080;

app.get('/',function(req,res) {
    res.send("Welcome to the Whip Restfull  Web Services ");
});
app.listen(port,function () {
    console.log("Whip restfull api are running on port:"+port);

});