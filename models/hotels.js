import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    url: {type:String, require:true},
    code:  {type:Number, require:true, unique: true, default: 0},
    title:  {type:String, require:true},
    rating:  {type:String, require:true},
    rate:  {type:Number, require:true, default: 0},
    currency:  {type:String, require:true},
    perks:  {type:String,'value':["String"], require:true},
},{
    timestamps: true
});

const address = new mongoose.Schema({

    content: {type:String, require:true},
    number: {type:String, require:true},
    street: {type:String, require:true},
})

const city = new mongoose.Schema({
    content: {type:String, require:true},
})

const coordinates = new mongoose.Schema({
    latitude: {type:Number, require:true},
    longitude: {type:Number, require:true},
})

const description = new mongoose.Schema({
    content: {type:String, require:true},
})

const facilities = new mongoose.Schema({
    facilityCode: {type:Number, require:true},
    facilityGroupCode: {type:Number, require:true},
    indYesOrNo: {type:Boolean, require:true},
    number: {type:Number, require:true},
    order:  {type:Number, require:true},
    voucher: {type:Boolean, require:true},
})

const images = new mongoose.Schema({
    imageTypeCode: {type:String, require:true}, 
    order:  {type:Number, require:true},
    path: {type:String, require:true},
    visualOrder: {type:Number, require:true},
})

const singleHotel = new mongoose.Schema({

    S2C: {type:String, require:true},
    accommodationTypeCode: {type:String, require:true},
    address: [address],
    boardCodes: {type:Array,'value':["String"],require:true},
    categoryCode: {type:String, require:true},
    categoryGroupCode: {type:String, require:true},
    chainCode: {type:String, require:true},
    city: [city],
    code:  {type:Number, require:true, default: 0},
    coordinates: [coordinates],
    countryCode: {type:String, require:true},
    description: [description],
    destinationCode: {type:String, require:true},
    email: {type:String, require:true},
    facilities: [facilities],
    images: [images],
    interestPoints: {type:Array, require:true}, //expand
    issues: {type:Array, require:true}, //expand
    lastUpdate: {type:String, require:true},
    license: {type:String, require:true},
    name: {type:Array, require:true}, //expand
    phones: {type:Array, require:true}, //expand
    postalCode: {type:String, require:true},
    ranking: {type:Number, require:true, default: 0},
    rooms: {type:Array, require:true}, //expand
    segmentCodes: {type:Number, require:true, default: 0},
    stateCode: {type:String, require:true},
    terminals: {type:Array, require:true}, //expand
    web: {type:String, require:true},
    wildcards:  {type:Array, require:true}, //expand
    zoneCode: {type:Number, require:true, default: 0},


})




const Hotel = mongoose.models.Hotel || mongoose.model('Hotel', hotelSchema);
export default Hotel;
