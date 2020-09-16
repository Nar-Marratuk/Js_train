"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Pek = {
  findTown: function findTown(town) {
    return fetch('https://cors-anywhere.herokuapp.com/http://www.pecom.ru/ru/calc/towns.php').then(function (response) {
      return response.json();
    }).then(function (jsonResponse) {
      var findIndex = {};

      for (var ob in jsonResponse) {
        var current = jsonResponse[ob];
        var arr = Object.entries(current).find(function (item) {
          return item[1] == town || item[1].includes(town);
        });

        if (arr) {
          findIndex = arr[0];
          break;
        }
      }

      return findIndex;
    });
  },
  calculate: function calculate(weight, size, townCode) {
    return fetch("http://calc.pecom.ru/bitrix/components/pecom/calc/ajax.php?places[0][1,1,1,".concat(size, ",").concat(weight, ",0,0]&take[town]=-472&deliver[town]=").concat(townCode)).then(function (response) {
      return response.json();
    }).then(function (jsonResponse) {
      //['take', 'auto', 'deliver', 'ADD', 'ADD_1', 'ADD_2', 'ADD_3', 'ADD_4']
      //const totals = jsonResponse['ADD_1']['2'] + jsonResponse['auto'][3] + jsonResponse['deliver'][3] + jsonResponse['take'][3]; 
      //console.log(totals);
      return jsonResponse;
    });
  }
};
var _default = Pek;
exports["default"] = _default;