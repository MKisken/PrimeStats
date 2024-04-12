const api_url = 'http://192.168.1.12:1921/api/';
const ping = 20000;
var numShipped = 0;
var numOrdered = 0;

const requestOptions = {
    method: 'GET'
};

var myInterval = window.setInterval(function(){
    getOrders();
    getShipped();
    getRemainder();
}, ping);

//get the order calling the orders api and setting the value
async function getOrders(){

    const orders_count = document.getElementById("ordered");

    try{

        const response = await fetch(api_url + "mailorder/orders", requestOptions);
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }

        const output = await response.json();

        console.log(output);
        orders_count.textContent = JSON.stringify(output);
        numOrdered = parseInt(JSON.stringify(output));

    } catch (error) {
        console.error("There has been a problem with your fetch operation: ", error);
    }
}

//get the order calling the orders api and setting the value
async function getShipped(){

    const shipped_count = document.getElementById("shipped");

    try{

        const response = await fetch(api_url + "mailorder/orders/shipped", requestOptions);
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }

        const output = await response.json();
        console.log(output);
        shipped_count.textContent = JSON.stringify(output);

        numShipped = parseInt(JSON.stringify(output));

    } catch (error) {
        console.error("There has been a problem with your fetch operation: ", error);
    }
}

//get the remainder of ordered and shipped
function getRemainder() {

    const remining_count = document.getElementById("remaining");

    remining_count.textContent = (numOrdered - numShipped);
}