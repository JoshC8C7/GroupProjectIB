const middleware_path = '../backend/middleware/';

function sendXmlHttpRequest(request, callback) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(this.responseText));
        }
    }
    xmlhttp.open("GET", middleware_path + "util.php?q=" + JSON.stringify(request), true);
    xmlhttp.send();
}

function getAllTables(callbackFunction) {
    let request = {
        method: 'getAllTables',
        params: {
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}

function getWishesWithinTimeframe(startTime, endTime, callbackFunction) {
    let request = {
        method: 'getWishesWithinTimeframe',
        params: {
            startTime : startTime,
            endTime : endTime
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}

function getTravelWithinTimeframe(startTime, endTime, callbackFunction) {
    let request = {
        method: 'getTravelWithinTimeframe',
        params: {
            startTime : startTime,
            endTime : endTime
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}

function getUnepPresencesWithinTimeframe(startTime, endTime, callbackFunction) {
    let request = {
        method: 'getUnepPresencesWithinTimeframe',
        params: {
            startTime : startTime,
            endTime : endTime
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}

function getOrganisationFromId(org_id, callbackFunction) {
    let request = {
        method: 'getOrganisationFromId',
        params: {
            org_id: org_id
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}

function getLocationFromId(loc_id, callbackFunction) {
    let request = {
        method: 'getLocationFromId',
        params: {
            loc_id: loc_id
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}

function getUnepRepFromId(rep_id, callbackFunction) {
    let request = {
        method: 'getUnepRepFromId',
        params: {
            rep_id: rep_id
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}

function getTravelFromId(travel_id, callbackFunction) {
    let request = {
        method: 'getTravelFromId',
        params: {
            travel_id: travel_id
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}

function getAllTravelFromUser(email, callbackFunction) {
    let request = {
        method: 'getAllTravelFromUser',
        params: {
            email: email
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}

function getAllWishesFromUser(email, callbackFunction) {
    let request = {
        method: 'getAllWishesFromUser',
        params: {
            email: email
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}

// function getAllSuggestionsForTravel(trip_id, callbackFunction) {
//     let request = {
//         method: 'getAllSuggestionsForTravel',
//         params: {
//             trip_id: trip_id
//         }
//     };
//     sendXmlHttpRequest(request,callbackFunction);
// }

function getAllSuggestionsFromWish(wish_id, callbackFunction) {
    let request = {
        method: 'getAllSuggestionsFromWish',
        params: {
            wish_id: wish_id
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}

function createNewTravel(city, country, lat, lon, startTime, endTime, unep_rep, org, callbackFunction) {
    let request = {
        method: 'createNewTravel',
        params: {
            city: city,
            country: country,
            lat: lat,
            lon: lon,
            startTime: startTime,
            endTime: endTime,
            unep_rep: unep_rep,
            org: org
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}

function deleteTravelFromId(id, callbackFunction) {
    let request = {
        method: 'deleteTravelFromId',
        params: {
            id: id
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}

/*
params:
- rep_id : number,  the id of the unep person expressing the wish
- timeConstraints : array of Objects with fields startTime,endTime (unix timestamp format)
- orgConstraint : array of Objects with field org_id
- locConstraint : array of positions
*/
function createNewWish(email, timeConstraints, orgConstraints, locConstraints, callbackFunction) {
    let request = {
        method: 'createNewWish',
        params: {
            email: email,
            timeConstraints: timeConstraints,
            orgConstraints: orgConstraints,
            locConstraints: locConstraints
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}


function deleteWishFromId(id, callbackFunction) {
    let request = {
        method: 'deleteWishFromId',
        params: {
            id: id
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}



function getOrganisationPresencesWithinTimeframe(startTime, endTime, callbackFunction) {
    let request = {
        method: 'getOrganisationPresencesWithinTimeframe',
        params: {
            startTime: startTime,
            endTime: endTime
        }
    };
    sendXmlHttpRequest(request,callbackFunction);
}
