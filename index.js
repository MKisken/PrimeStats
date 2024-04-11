const api_key = '2d980b1e-ae9c-49c2-8ba1-7a34b3d925a7';
const pps_key_url = 'http://api.ppsapi.com/';
const api_url = 'http://192.168.1.145:44333/api/';
const url = "";
const ping = 20000;

const requestOptions = {
  mode: 'no-cors',
  headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, Content- Type, X-Auth - Token"
    }
};

//'x-access-token'

window.onload = function() {
    console.log("This is called!");
}

/*
var myInterval = window.setInterval(function(){
    getOrders();
    getShipped();
    getRemainder();
}, 20000);
*/

async function test(){
    try{
        const response = await fetch(api_url, requestOptions);
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        const operator = await response.json;
        console.log(operator);
    } catch (error) {
        console.error("There has been a problem with your fetch operation: ", error);
    }
}


//get the order calling the orders api and setting the value
async function getOrders(){

    const orders = document.getElementById("ordered");

    url = api_url + "mailorder/orders";

    try{

        const response = await fetch(url, requestOptions);
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }

        const output = await response.json;

        console.log(output);
        orders.textContent = output;

        return output;

    } catch (error) {
        console.error("There has been a problem with your fetch operation: ", error);
    }
}

//get the order calling the orders api and setting the value
async function getShipped(){

    const orders = document.getElementById("shipped");

    url = api_url + "mailorder/orders/shipped";

    try{

        const response = await fetch(url, requestOptions);
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }

        const shipped = await response.json;
        console.log(shipped);

        return shipped;

    } catch (error) {
        console.error("There has been a problem with your fetch operation: ", error);
    }
}

//get the remainder of ordered and shipped
function getRemainder() {

    const orders = document.getElementById("remaining");

    orders.textContent = (getOrders() - getShipped());
}