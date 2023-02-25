/*
- HMR - Hot Module Replacement
- FIle Watcher Algorithm(written in C++)
- Bundling
- Minify
- Cleaning our code
- Dev & Production build
- Super Fast Build Algorithm
- Image optimization
- Caching while development
- Compression
- Compatible with older version of browsers
- HTTPS on Dev
- Port Number
- Consistent Hashing Algorithm
- Zero Config
- Tree Shaking - Removing unwanted codes

- Transitive Dependency
*/

import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";

const heading = React.createElement(
    "h1", 
    {
        id: "title",
        className: "class",
        key: "h1"
    }, 
    "Namaste Everyone!"
);

console.log(heading);

//React.createElement => Object => HTML DOM

const Title = () => (
    <a href="/">
        <img 
            className="logo"
            src="data:image/png;base64,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"
            alt="logo"
        />
    </a>
);

const Header = () => {
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

//Config Driven UI

/*const config = [
    {
        type: "carousel",
        cards: [
            {
                offerName: "50% off",
            },
            {
                offerName: "No Delivery charge",
            }
        ],
    },
    {
        type: "resutaurants",
        cards: [
            {
                name: "Burger King",
                image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
                cusines: ["Burgers", "American"],
                rating: "4.2"
            },
            {
                name: "KFC",
                image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
                cusines: ["Burgers", "American"],
                rating: "4.2"
            }
        ],
    }
]*/

const restrautList =  [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "195656",
        "name": "Anand food corner",
        "uuid": "1618a26f-e07c-4b10-aae2-4dd4fa901856",
        "city": "7",
        "area": "Lake Town",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "oshcwpjbcx3rix2qytz3",
        "cuisines": [
          "Indian",
          "Snacks",
          "North Indian"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 2.299999952316284,
        "slugs": {
          "restaurant": "anand-food-corner-lake-town-lake-town",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "135, Jessore Road, Lake Town, Kolkata, West Bengal, India",
        "locality": "Jessore Road",
        "parentId": 32757,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "10% off",
          "shortDescriptionList": [
            {
              "meta": "10% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 3200,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5955184~p=1~eid=00000186-7f9a-3d63-2aec-9aff00c60127",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "195656",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 2.299999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "208641",
        "name": "Rajdhani Food Express",
        "uuid": "25eebe28-1b1f-4eed-bcc2-4e81fc7ac399",
        "city": "7",
        "area": "Dum Dum Park",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "y5nxmki4st1cwp1fndmq",
        "cuisines": [
          "Chinese",
          "Continental",
          "Indian"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 0.8999999761581421,
        "slugs": {
          "restaurant": "rajdhani-food-express-lake-town-lake-town",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "50 Shyamnagar Road, Santilaya Appartment Shop No-3, P.S- DumDum Kol-700055, District - North Twenty Four Parganas, STATE, West Bengal",
        "locality": "Lake Town",
        "parentId": 165477,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            },
            {
              "meta": "Free Veg Soup on orders above ₹352",
              "discountType": "Freebie",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            },
            {
              "meta": "Free Veg Soup on orders above ₹352",
              "discountType": "Freebie",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            },
            {
              "meta": "Free Veg Soup on orders above ₹352",
              "discountType": "Freebie",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "208641",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 0.8999999761581421,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "242966",
        "name": "La Pino'z Pizza",
        "uuid": "590e7dd7-4dd1-4961-92f1-63a18a88e9ee",
        "city": "7",
        "area": "Bidhannagar",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "vipohbpqczfrv6jnycwa",
        "cuisines": [
          "Italian",
          "Snacks"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 6.400000095367432,
        "slugs": {
          "restaurant": "la-pino'z-sector-v-salt-lake-sector-v-salt-lake",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "SHOP NO 3 GROUND FLOOR  NETGURU BUILDING  E2 4 BLOCK GP SECTOR V  SALT LAKE  BIDHANNAGAR  KOLKATA   700091",
        "locality": "Sector V Salt Lake",
        "parentId": 4961,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 6100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 6100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "6100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5976611~p=25~eid=00000186-7f9a-3d63-2aec-9b0700c61977",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "lastMileTravelString": "6.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "242966",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 6.400000095367432,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "423589",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "uuid": "501b9997-adb1-43ff-b21a-684d4a92502c",
        "city": "7",
        "area": "Deshbandhu Nagar",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "zkvw5xxee1xijqsz7itb",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 11,
        "minDeliveryTime": 11,
        "maxDeliveryTime": 11,
        "slaString": "11 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-rajarhat-rajarhat",
          "city": "kolkata"
        },
        "cityState": "7",
        "address": "AKHENE KHABO: DIBYEDU SRIMANY, 2 NEW ROAD, BAGUIATI, DESHBANDHU NAGAR, RAJARHAT GOPALPUR, WARD NO-10, NORTH 24 PARGANAS, WEST BENGAL-700059",
        "locality": "Rajarhat",
        "parentId": 582,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code SWIGGYIT",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5958025~p=4~eid=00000186-7f9a-3d63-2aec-9b0000c6040f",
        "badges": {
          "imageBased": [],
          "textBased": [],
          "textExtendedBadges": []
        },
        "hasSurge": false,
        "sla": {
          "restaurantId": "423589",
          "deliveryTime": 11,
          "minDeliveryTime": 11,
          "maxDeliveryTime": 11,
          "lastMileTravel": 0,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    }
];

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, lastMileTravelString }) => {
    //const { cloudinaryImageId, name, cuisines, lastMileTravelString } = restaurant.data;
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="" />
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
};

// no key(not acceptable) <<< index key(use only if you don't have anything) << unique key(best practice)
const Body = () => {
    return (
        <div className="restaurant-list">
            {restrautList.map((restaurant) => {
                    return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
            })}
            {/* <RestrauntCard {...restrautList[0].data} />
            <RestrauntCard {...restrautList[1].data} />
            <RestrauntCard {...restrautList[2].data} />
            <RestrauntCard {...restrautList[3].data} /> */}
        </div>
    )
};

const Footer = () => {
    return <h4>Footer</h4>
};

const Applayout = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

//passing a react component inside root
root.render(<Applayout />);