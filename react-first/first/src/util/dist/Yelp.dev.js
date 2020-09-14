"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var apiKey = 'e_R4Ia_P0HdjGkrLXRycqoho_4x8zpl10KEa8lV91sz7wvxYdiUPTb3DIeuLFWdzEVyTjzk5bTqPoQwQwiKlhjIsg5pYVF5K4VPk0oTYF0GYuS49R1UBGjJkTLNfX3Yx';
var Yelp = {
  search: function search(term, location, sortBy) {
    return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(term, "&location=").concat(location, "&sort_by=").concat(sortBy), {
      headers: {
        Authorization: "Bearer ".concat(apiKey)
      }
    }).then(function (response) {
      return response.json();
    }).then(function (jsonResponse) {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(function (business) {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    });
  }
};
var _default = Yelp;
exports["default"] = _default;