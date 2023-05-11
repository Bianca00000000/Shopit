const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    shippingInfo:{ // information about transport ( full address of the recipient)
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
    },
    user: { // the account from which the order will be made => user id
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [ // the products selected in the shopping cart => information about each one
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            product: { // product id
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product'
            }
        }
    ],
    paymentInfo: {
        id : { // id of transaction
            type: String
        },
        status : { // status of the transaction
            type: String
        }
    },
    paidAt: { // on this date, the user has paid the amount
        tyoe: Date
    },
    itemsPrice : { // total price of the items only
        type: Number,
        required: true,
        default: 0.0
    },
    taxPrice : { // the tax price
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice : { // here it will depend on how much the selected products cost, depending on the amount a certain discount will be applied to the shipping price
    // if the price of the products is less than 100 dollars, then the shipping price will be 25 dollars, else will be 0 dollars(< 100)
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice : { // total price including shipping price and tax and items price
        type: Number,
        required: true,
        default: 0.0
    },
    orderStatus : { // the current status of the order
        type: String,
        required: true,
        default: 'Processing'
    },
    deliveredAt: { // the date on which the order will be delivered
        type: Date
    },
    createdAt: { // the date the order was launched
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Order', orderSchema);