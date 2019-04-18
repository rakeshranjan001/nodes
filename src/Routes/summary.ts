var request = require('request')
var express = require('express')
var summary = express.Router()

summary.post('/',(req,res)=>{
    
    res.send({
        message:"summary"
    })
    // var req_key = '9000f0cc7803a7dfad0160208fc8e835'
    // var req_txt = req.body.txt
    // var req_url = req.body.url
    // var req_doc = req.body.doc
    // var req_sentences = req.body.sentences || '5'
    // var sum = ''
    // var options = {
    //     method: 'POST',
    //     url: 'https://api.meaningcloud.com/summarization-1.0',
    //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //     form: { 
    //         key: req_key,
    //         txt: req_txt,
    //         url: req_url,
    //         doc: req_doc,
    //         sentences: req_sentences 
    //     } 
    // };

    // request(options, function (error, response, body) {
    //     if (error) {
    //         res.status(400).json('Unable to generate Summary')
    //     }
    //     sum = JSON.parse(body)
    //     res.send({
    //         "summary" :sum.summary
    //     });
    // })

    //res.json('Not able to generate summary due to high number of requests')
})

module.exports = summary