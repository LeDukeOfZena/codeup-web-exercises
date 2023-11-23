import {keys} from "../../keys.js";
const getUserEvents = (username) =>{
    const url = `https://api.github.com/users/${username}/events`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${keys.github}`,
        },
    };
    return fetch(url, options)
        .then(response=>response.json());
        .catch
}

    //Main
(async ()=>{
    getUserEvents("LeDukeOfZena").then(events =>{



        console.log(events[0])
        // events.filter()
    })

})();