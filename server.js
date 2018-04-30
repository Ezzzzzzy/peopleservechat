var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var app = express();
var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');
app.use(bodyParser.json());
var doc = new GoogleSpreadsheet('1rdDiUasw1IasMa3-hOgj0hvVur-mqunjq4U79VJthws');
var Chatfuel = require("chatfuel-node-api");

app.use(bodyParser.urlencoded({ extended: false }));

async.series([
    setAuth = (step) => {
        // see notes below for authentication instructions!
        var creds = {
            "type": "service_account",
            "project_id": "fresh-effort-200709",
            "private_key_id": "82c302ed12ebdc2bbc4c93a588c99fb9c317a656",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfnuiDo8tEhjrx\nQqrQ0lDT0PVT9v8Pd2vyqmDF57Pdk0KF0Rstcwlq+TAhmV9FvB/XC/0ci6uFltrQ\nOrZgxpnuhaMvDjXPnSUWweyIsQ6Y+lBsCdb4g7DtmtUn62zBH+Y4Ie0mSMcK2II4\n8uU1/Zkd4kaRS+ae3Z8z99go4dN+oybRvmNyV4E7njlzmtI2yIZWYDNpJFuSePQL\nJprIivHlhkqvG+suOJjKkcvfJqsSd6WW527os78elxE0uKB7amojHV/f/vMmoLpF\ntaRBpcFH0p5foOyPta3Dj/TBYgjprNB5/y1JDd8TC8IhIxuEq+aiAjv5wQlKFcco\n7HTb1+4lAgMBAAECggEACXdfIA94Cpml/TuQQyTLQ69CHWH/QRI6sKrcul/svC3z\nkAQVXIip/PzHl0vak+7S5JStb3fztXnQ2EXjHbIpht/Itw2yBfIH37r4etLP+XqU\nMmloT6y1CCJalIIoclD1/PY7c5MgBXX5oxmkm6MX5ZHPJZF0HTp/f+bURvhoQTuh\nICAOp/qkdA5B+qJBLJush+7gvu00rzhNNOMAYJeQA3yeeuHvMxpqZHEg3c+0Jilg\n/54NmCoOGGdIKGmu/XoD1Chz0ernDeD1CUKKclpmQuhjK3Bk2KGhCfQ8VcMZQjMr\ncdF1R2k6HzXUcmLTeffLFycC/yHLYnJFx/pArci3MQKBgQDRIOFEirroFfd4e0b1\nHygbKr0BhlL3WrT7T5EtXmQ0zAEc4D+XejP7A4oYrVCAs9MmXDs4vOOVANaZd1A9\nDLievqBqcK39zQsO9xlOb1t2CNjvN3V0B9T5XOcIOXub5LyVO+KC+K3wfslTkD0p\n7UjaW6y1ShbHv96oplRY37zm2wKBgQDDZW9WDed7SSDeEW3fGWo+2K9be3++NPpk\nllVo9mgJviTifWw3nqioCj7ECdcXGgqDYQaADwfex2uYV4BQsaLd3ho/qeO7bI2p\nOp1/CenTSIyPjXT1bvLzC5e8XGC88HKgQp6GbO1mQE4if46ztm+f4m4md9iivhi3\nyUnRKIoO/wKBgQCKLteqmqB1yk4C5jI0tamiidLptwALQXxksmaTO9Oqr0Hs+qAK\nT00Zh3UwaRTQdgIHTtoy21zlj/A854G1VTqIah1FN78//MRZ1xx5n0sn6yCssFCD\noskvHBvsa08p6zJQyYkaUYddaelNtfk0Qv3oirrL73Ct/DH77iu9rdj8EQKBgQCh\ny41siWjjKkOf/ninIwlZ7t0NeG7nlkC8J8ujdV3iq2MpdEe2qpbnRkyA0dEcHQEV\nlrLmOQwAScrrQ5FJwD2nT/EWRFwBZzrKJXIirpfCzzEs8SomzO85l6DWZPvpl4Si\n9WcE0o+lepv4bv1ADFHT54/kJJrq71PSY0fPfK0NCwKBgGwG/6BirUGU++GnplBy\n2sEfo/i1NTwKefKUDZAPTD6GeZ1nIl3/nKpcgadpTE1N7ugh6hCCG6CUA5r8vimV\nKNm2tpWSpSDtB/OKWjU8iwpIRz63oIySzVsCa1H0OFHnHyvTMk6ixlohkP73qzNk\nXosrL9uUMQk5OZ06TBMuKYZO\n-----END PRIVATE KEY-----\n",
            "client_email": "peopleserve@fresh-effort-200709.iam.gserviceaccount.com",
            "client_id": "109023989379681204479",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://accounts.google.com/o/oauth2/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/peopleserve%40fresh-effort-200709.iam.gserviceaccount.com"
          }
          
        doc.useServiceAccountAuth(creds, step);
      }
    
    ])

// app.use(bodyParser.urlencoded({ extended: true }));

var creds = {
    "type": "service_account",
    "project_id": "fresh-effort-200709",
    "private_key_id": "82c302ed12ebdc2bbc4c93a588c99fb9c317a656",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfnuiDo8tEhjrx\nQqrQ0lDT0PVT9v8Pd2vyqmDF57Pdk0KF0Rstcwlq+TAhmV9FvB/XC/0ci6uFltrQ\nOrZgxpnuhaMvDjXPnSUWweyIsQ6Y+lBsCdb4g7DtmtUn62zBH+Y4Ie0mSMcK2II4\n8uU1/Zkd4kaRS+ae3Z8z99go4dN+oybRvmNyV4E7njlzmtI2yIZWYDNpJFuSePQL\nJprIivHlhkqvG+suOJjKkcvfJqsSd6WW527os78elxE0uKB7amojHV/f/vMmoLpF\ntaRBpcFH0p5foOyPta3Dj/TBYgjprNB5/y1JDd8TC8IhIxuEq+aiAjv5wQlKFcco\n7HTb1+4lAgMBAAECggEACXdfIA94Cpml/TuQQyTLQ69CHWH/QRI6sKrcul/svC3z\nkAQVXIip/PzHl0vak+7S5JStb3fztXnQ2EXjHbIpht/Itw2yBfIH37r4etLP+XqU\nMmloT6y1CCJalIIoclD1/PY7c5MgBXX5oxmkm6MX5ZHPJZF0HTp/f+bURvhoQTuh\nICAOp/qkdA5B+qJBLJush+7gvu00rzhNNOMAYJeQA3yeeuHvMxpqZHEg3c+0Jilg\n/54NmCoOGGdIKGmu/XoD1Chz0ernDeD1CUKKclpmQuhjK3Bk2KGhCfQ8VcMZQjMr\ncdF1R2k6HzXUcmLTeffLFycC/yHLYnJFx/pArci3MQKBgQDRIOFEirroFfd4e0b1\nHygbKr0BhlL3WrT7T5EtXmQ0zAEc4D+XejP7A4oYrVCAs9MmXDs4vOOVANaZd1A9\nDLievqBqcK39zQsO9xlOb1t2CNjvN3V0B9T5XOcIOXub5LyVO+KC+K3wfslTkD0p\n7UjaW6y1ShbHv96oplRY37zm2wKBgQDDZW9WDed7SSDeEW3fGWo+2K9be3++NPpk\nllVo9mgJviTifWw3nqioCj7ECdcXGgqDYQaADwfex2uYV4BQsaLd3ho/qeO7bI2p\nOp1/CenTSIyPjXT1bvLzC5e8XGC88HKgQp6GbO1mQE4if46ztm+f4m4md9iivhi3\nyUnRKIoO/wKBgQCKLteqmqB1yk4C5jI0tamiidLptwALQXxksmaTO9Oqr0Hs+qAK\nT00Zh3UwaRTQdgIHTtoy21zlj/A854G1VTqIah1FN78//MRZ1xx5n0sn6yCssFCD\noskvHBvsa08p6zJQyYkaUYddaelNtfk0Qv3oirrL73Ct/DH77iu9rdj8EQKBgQCh\ny41siWjjKkOf/ninIwlZ7t0NeG7nlkC8J8ujdV3iq2MpdEe2qpbnRkyA0dEcHQEV\nlrLmOQwAScrrQ5FJwD2nT/EWRFwBZzrKJXIirpfCzzEs8SomzO85l6DWZPvpl4Si\n9WcE0o+lepv4bv1ADFHT54/kJJrq71PSY0fPfK0NCwKBgGwG/6BirUGU++GnplBy\n2sEfo/i1NTwKefKUDZAPTD6GeZ1nIl3/nKpcgadpTE1N7ugh6hCCG6CUA5r8vimV\nKNm2tpWSpSDtB/OKWjU8iwpIRz63oIySzVsCa1H0OFHnHyvTMk6ixlohkP73qzNk\nXosrL9uUMQk5OZ06TBMuKYZO\n-----END PRIVATE KEY-----\n",
    "client_email": "peopleserve@fresh-effort-200709.iam.gserviceaccount.com",
    "client_id": "109023989379681204479",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/peopleserve%40fresh-effort-200709.iam.gserviceaccount.com"
  }

function findById(id, rows){
    for(var i = 0; i < rows.length; i++)
    {
      if(rows[i].id == id)
      {
        return i;
      }
    }
}

app.get('/results',(req,res)=>{
    doc.addRow(2,{
        "id": "1234",
        "message": "Testing",
        "date": Date.now()
      },(result)=>{
        
        res.send(result)
    },(err)=>{
        res.send(err)
    })
})

// app.post('/', function (req, res) {
//     console.log("sample")
//     doc.useServiceAccountAuth(creds, err=>{
//         if(err) {
//             console.log(err) 
//             res.send(err)
//         }
//         else{
//             doc.addRow(2,{
//                 "name": "muming",
//                 "message": "Testing",   
//                 "date": Date.now()
//             },(result)=>{
//                 res.send(result)
//             });
//         }
//     });
// });



app.get('/', (req, res) => {
    const HTML = renderView({
      title: 'My Webtask View',
      body: '<h1>Simple webtask view</h1>'
    });
  
    res.set('Content-Type', 'text/html');
    res.status(200).send(HTML);
  });
  
  app.get('/Skilled', (req, res) => {
      const HTML = renderView({
        title: 'My Webtask View',
        body: `<h1>Simple webtask view ${req.query.category}</h1>`
      });
    
      res.set('Content-Type', 'text/html');
      res.status(200).send(HTML);
  });
  
  app.get('/Retail', (req, res) => {
      const HTML = renderView({
          title: 'My Webtask View',
          body: '<h1>Simple webtask view</h1>'
      });
  
      res.set('Content-Type', 'text/html');
      res.status(200).send(HTML);
  });
  
  app.get('/BackOffice', (req, res) => {
      const HTML = renderView({
          title: 'My Webtask View',
          body: '<h1>Simple webtask view</h1>'
      });
  
      res.set('Content-Type', 'text/html');
      res.status(200).send(HTML);
  });
  

app.get('/Webview', (req, res) => {
    var choices = "";
    var positions = [];
    var opt;

    doc.getRows(2,
        {
        offset: 1,
        },(err,row)=>{
        console.log(row[findById(req.query.id,row)])
        row[findById(req.query.id,row)].category = req.query.category;
        row[findById(req.query.id,row)].save();
    })

    if(req.query.category == "Skilled"){
    positions = [
        {position:"Driver"},
        {position:"Warehouseman"},
        {position:"Forklift Operator"},
        {position:"CAD Operator"},
        {position:"Housekeeping Staff"},
        {position:"Therapist"},
        {position:"Electrician"},
        {position:"Driver"},
        ];
        opt = "Skilled"
    }
    if(req.query.category == "Retail"){
        positions = [
            {position:"Cashier"},
            {position:" Sales Clerk"},
            {position:"Customer Service Associate"},
            {position:"Service Crew"},
            {position:"Bagger"},
            {position:"Barista"},
            {position:"Bartender"},
            {position:"Receiving Clerk"},
            {position:"Bad Order Custodian"},
            ];
            opt = "Retail"
    }
    else if(req.query.category == "BackOffice"){
        positions = [
            {position:"HR Staff"},
            {position:"Area Coordinator"},
            {position:"Accouting Staff"},
            {position:"Payroll Staff"},
            {position:"Encoder,"},
            {position:"Documentations Clerk"},
            {position:"Airline Ticketing Agent"},
            {position:"Admin Staff"},
            ];
            opt = "BackOffice"
    }

    positions.forEach((position,index) => {
        console.log(position);
        choices = choices + `
                            <li>
                            <input type="radio" id="option${index}" name="WorkPosition" value="${position.position}" required>
                            <label for="option${index}">${position.position}</label>
                            
                            <div class="check"></div>
                            </li>
                            `
    });
    choices = choices + `<input type="hidden" name="fbID" value="${req.query.id}">`;
    
    const HTML = renderView({
        title: `${req.query.category} Positions`,
        body: choices

    });

    res.set('Content-Type', 'text/html');
    res.status(200).send(HTML);
});

app.get('/Onboard', (req,res)=>{
    doc.getRows(2,
        {
        offset: 1,
        },(err,row)=>{
        // row[0].id = "something";
        // row[0].save();
        console.log(row[0]);
        res.send(findById("something",row));
    })
})

app.get('/Start', (req,res)=>{
    doc.addRow(2,{
        "Id": req.query["messenger user id"],
        "Firstname": req.query["first name"],
        "Lastname": req.query["last name"],
        "Education": "",
        "Category":"" ,
        "Position": "",
      },(result)=>{
        res.send(result)
    },(err)=>{
        res.send(err)
    })
})

app.get('/Education', (req,res)=>{
    doc.getRows(2,
        {
        offset: 1,
        },(err,row)=>{
        console.log(row[findById(req.query["messenger user id"],row)])
        row[findById(req.query["messenger user id"],row)].education = req.query.education;
        row[0].save();
        res.send(row);
    })

})

app.get('/Category', (req,res)=>{
    doc.getRows(2,
        {
        offset: 1,
        },(err,row)=>{
        console.log(row[findById(req.query["messenger user id"],row)])
        row[findById(req.query["messenger user id"],row)].category = req.query.category;
        row[0].save();
        res.send(row);
    })

})

app.post('/Position',(req,res)=>{
    console.log(req.body)
    doc.getRows(2,
        {
        offset: 1,
        },(err,row)=>{
        console.log(row[findById(req.body.fbID,row)])
        row[findById(req.body.fbID,row)].position = req.body.WorkPosition;
        row[findById(req.body.fbID,row)].save();
        console.log(row[findById(req.body.fbID,row)])

    })

    
    
})

app.get('/sample2',(req,res)=>{
    var cf = new Chatfuel(
      "qwYLsCSz8hk4ytd6CPKP4C0oalstMnGdpDjF8YFHPHCieKNc0AfrnjVs91fGuH74",
      "5acc3391e4b075d7ce12ddd4");
    cf.broadcast({
      user_id: "1765206183558978",
      block_id: "5acc6ffde4b075d7ce8202a6",
      attributes: {var1: true, var2: false, var3: "message"},
      function(body) {
        console.log(body)
        res.send("body")
      }
    }); 
})

app.get('/Webview2', (req, res) => {
    var choices = "";
    var locations = [];
    var opt;

    doc.getRows(2,
        {
        offset: 1,
        },(err,row)=>{
        console.log(row[findById(req.query.id,row)])
        row[findById(req.query.id,row)].location = req.query.location;
        row[findById(req.query.id,row)].save();
    })

    if(req.query.category == "Skilled"){
    locations = [
        {location:"Driver"},
        {location:"Warehouseman"},
        {location:"Forklift Operator"},
        {location:"CAD Operator"},
        {location:"Housekeeping Staff"},
        {location:"Therapist"},
        {location:"Electrician"},
        {location:"Driver"},
        ];
        opt = "Skilled"
    }
    if(req.query.category == "Retail"){
        locations = [
            {location:"Cashier"},
            {location:" Sales Clerk"},
            {location:"Customer Service Associate"},
            {location:"Service Crew"},
            {location:"Bagger"},
            {location:"Barista"},
            {location:"Bartender"},
            {location:"Receiving Clerk"},
            {location:"Bad Order Custodian"},
            ];
            opt = "Retail"
    }
    else if(req.query.category == "BackOffice"){
        locations = [
            {location:"HR Staff"},
            {location:"Area Coordinator"},
            {location:"Accouting Staff"},
            {location:"Payroll Staff"},
            {location:"Encoder,"},
            {location:"Documentations Clerk"},
            {location:"Airline Ticketing Agent"},
            {location:"Admin Staff"},
            ];
            opt = "BackOffice"
    }

    locations.forEach((location,index) => {
        console.log(location);
        choices = choices + `
                            <li>
                            <input type="radio" id="option${index}" name="WorkLocation" value="${locations.location}" required>
                            <label for="option${index}">${locations.location}</label>
                            
                            <div class="check"></div>
                            </li>
                            `
    });
    choices = choices + `<input type="hidden" name="fbID" value="${req.query.id}">`;
    
    const HTML = renderView({
        title: `${req.query.category} Positions`,
        body: choices

    });

    res.set('Content-Type', 'text/html');
    res.status(200).send(HTML);
});

function renderView(locals) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${locals.title}</title>
        <style>
            
    body, html{
        height: 100%;
        background: #222222;
            font-family: 'Lato', sans-serif;
        }
        
        .container{
        display: block;
        position: relative;
        margin: 40px auto;
        height: auto;
        width: 500px;
        padding: 20px;
        }
        
        h2 {
            color: #AAAAAA;
        }
        
        .container ul{
        list-style: none;
        margin: 0;
        padding: 0;
            overflow: auto;
        }
        
        ul li{
        color: #AAAAAA;
        display: block;
        position: relative;
        float: left;
        width: 100%;
        height: 100px;
            border-bottom: 1px solid #333;
        }
        
        ul li input[type=radio]{
        position: absolute;
        visibility: hidden;
        }
        
        ul li label{
        display: block;
        position: relative;
        font-weight: 300;
        font-size: 1.35em;
        padding: 25px 25px 25px 80px;
        margin: 10px auto;
        height: 30px;
        z-index: 9;
        cursor: pointer;
        -webkit-transition: all 0.25s linear;
        }
        
        ul li:hover label{
            color: #FFFFFF;
        }
        
        ul li .check{
        display: block;
        position: absolute;
        border: 5px solid #AAAAAA;
        border-radius: 100%;
        height: 25px;
        width: 25px;
        top: 30px;
        left: 20px;
            z-index: 5;
            transition: border .25s linear;
            -webkit-transition: border .25s linear;
        }
        
        ul li:hover .check {
        border: 5px solid #FFFFFF;
        }
        
        ul li .check::before {
        display: block;
        position: absolute;
            content: '';
        border-radius: 100%;
        height: 15px;
        width: 15px;
        top: 5px;
            left: 5px;
        margin: auto;
            transition: background 0.25s linear;
            -webkit-transition: background 0.25s linear;
        }
        
        input[type=radio]:checked ~ .check {
        border: 5px solid #0DFF92;
        }
        
        input[type=radio]:checked ~ .check::before{
        background: #0DFF92;
        }
        
        input[type=radio]:checked ~ label{
        color: #0DFF92;
        }
        
        .signature {
            margin: 10px auto;
            padding: 10px 0;
            width: 100%;
        }
        
        .signature p{
            text-align: center;
            font-family: Helvetica, Arial, Sans-Serif;
            font-size: 0.85em;
            color: #AAAAAA;
        }
        
        .signature .much-heart{
            display: inline-block;
            position: relative;
            margin: 0 4px;
            height: 10px;
            width: 10px;
            background: #AC1D3F;
            border-radius: 4px;
            -ms-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
        }
        
        .signature .much-heart::before, 
        .signature .much-heart::after {
            display: block;
        content: '';
        position: absolute;
        margin: auto;
        height: 10px;
        width: 10px;
        border-radius: 5px;
        background: #AC1D3F;
        top: -4px;
        }
        
        .signature .much-heart::after {
            bottom: 0;
            top: auto;
            left: -4px;
        }
        
        .signature a {
            color: #AAAAAA;
            text-decoration: none;
            font-weight: bold;
        }
        
        
        /* Styles for alert... 
        by the way it is so weird when you look at your code a couple of years after you wrote it XD */
        
        .alert {
            box-sizing: border-box;
            background-color: #0DFF92;
            width: 100%;
            position: relative; 
            top: 0;
            left: 0;
            z-index: 300;
            padding: 20px 40px;
            color: #333;
        }
        
        .alert h2 {
            font-size: 22px;    
            color: #232323;
            margin-top: 0;
        }
        
        .alert p {
            line-height: 1.6em;
            font-size:18px;
        }
        
        .alert a {
            color: #232323;
            font-weight: bold;
        }
        .button {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }
        </style>
      </head>
    <script>
        // Code copied from Facebook to load and initialise Messenger extensions
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.com/en_US/messenger.Extensions.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'Messenger'));
    </script>
  
      <body>
        <div class="container">
        <form id="preferencesForm">
        <h2>${locals.title}</h2>
        
        <ul>
        ${locals.body}
        </ul>
        <br>
        <div align="center">
        <button type="submit" class="button">Submit</button>
        </div>

        </form>
        </div>

        <script src="https://code.jquery.com/jquery-2.2.1.min.js"
        integrity="sha256-gvQgAFzTH6trSrAWoH1iPo9Xc96QxSZ3feW6kem+O00="
        crossorigin="anonymous"></script>

        <script>
        window.extAsyncInit = function() {
          console.log('Messenger extensions are ready');
          
          // Handle button click
          $('#preferencesForm').submit(function(event) {
            console.log('Submit pressed');
            window.location.replace('https://www.messenger.com/closeWindow/?image_url="asdfasdf"&display_text="asdfasdfasdf');
            event.preventDefault();
            
            const formData = $('#preferencesForm').serialize();
            
            $.post('/Position', formData, function (data) {
                
            });
          });
          
        }
      </script>    
      </body>
      </html>
    `;
  }

// mySheet.useServiceAccountAuth(creds)
// .then(mySheet.getInfo.bind(mySheet))
// .then(function(sheet_info ) {
//     console.log( sheet_info.title + ' is loaded' );
 
//     var sheet1 = sheet_info.worksheets[0];
 
//     sheet1.addRow({'Col1': 'Val1', Col2: 'Val2', Col3:'Val3', Col4: 'Val4', Col5: 'Val5', Col6: 'Val6', Col7: 'Val7'})
//         .then(sheet1.getRows.bind(sheet1, null))
//         .then(function(rows) {
//             return [rows, rows[0].del()];
//         })
//         .spread(function(rows) {
//             console.log('Done deleteing');
//             rows[1].Col7 = 'new val2';
//             return rows[1].save();
//         })
//         .then(console.log.bind(console, 'Done saving'))
//         .catch(function(e) {
//             console.error(e);
//         });
// });

// module.exports = Webtask.fromExpress(app);
app.listen(3000, () => console.log('Example app listening on port 3000!'))