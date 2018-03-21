const request = require('request')

class Connection {

    constructor() {
        this.reset()
    }

    reset() {
        const headers = { 'content-type' : 'application/json' }
        this.header = headers
        this.baseRequest = request.defaults({ headers })
    }
    
    updateHeader(headers) {
        console.log(headers)
        this.header = headers
        this.baseRequest = request.defaults({ headers })
    }

    connect(method, body = "", url, response) {

        switch (method) {
            case "GET":
              return baseRequest.get(url).on('response', response);
            break
            case "POST":
            var reqoptions = {                 
                method: method,             
                uri: url,
                body: JSON.stringify(body),
                headers: this.header
              };   
              
              return request(reqoptions, response)
            break
        }
    }
}

module.exports = { Connection }
