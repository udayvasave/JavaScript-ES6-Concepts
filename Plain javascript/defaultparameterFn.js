// 'use strict';

const bookingsArray =[];

const createBookings = function (flightnum,numPassenger,price) {

const booking = {
    flightnum: flightnum,
    numPassenger: numPassenger,
    price:price,
};
console.log(booking);
bookingsArray.push(booking)
}

createBookings('BS168',undefined,'$25');