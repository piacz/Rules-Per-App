var axios = require("axios").default;

const express = require("express");
const { checkJwt } = require("../authz/check-jwt");

const { domain, apiId, apiSecret } = require("../config/env.dev");


const listsRouter = express.Router();

var tokenRequest = {
    method: 'POST',
    url: `https://${domain}/oauth/token`,
    headers: {'content-type': 'application/json'},
    data: {
      grant_type: 'client_credentials',
      client_id: apiId,
      client_secret: apiSecret,
      audience: `https://${domain}/api/v2/`,
    }
  };

// GET lists/

listsRouter.get("/rules-lists", checkJwt, async (req, res) => {
    try {
        let managementToken = (await axios.request(tokenRequest)).data.access_token;

        var clientsRequest = {
            method: 'GET',
            url: `https://${domain}/api/v2/clients`,
            headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${managementToken}`
            },
        };

        var rulesRequest = {
            method: 'GET',
            url: `https://${domain}/api/v2/rules`,
            headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${managementToken}`
            }
        };

        const tenantClients = (await axios.request(clientsRequest)).data;
        const tenantRules = (await axios.request(rulesRequest)).data;
        console.log(tenantRules)


        let clients = {};
        tenantClients.map( (client) => {clients[client.name] = []});
        
        for ( i = 0 ; i < tenantRules.length ; i++ ) {
            let allApps =  true;
            for ( j = 0 ; j < tenantClients.length ; j++ ) {
                
                if ( tenantRules[i].script.includes(tenantClients[j].name )){
                    allApps = false;   
                    clients[tenantClients[j].name].push({
                        name: tenantRules[i].name,
                        enabled: tenantRules[i].enabled,
                    });                
                };    
            };
            if ( allApps === true ) {
                for ( let app in clients ) {
                    clients[app].push({
                        name:tenantRules[i].name,
                        enabled: tenantRules[i].enabled,
                    })
                };
            };
        };       
        res.status(200).json(clients);
    } catch (error) {
        res.send(error);
    }
});

module.exports = {
    listsRouter,
};