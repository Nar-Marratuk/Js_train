const Pek = {
    findTown(town){
        return fetch('https://cors-anywhere.herokuapp.com/http://www.pecom.ru/ru/calc/towns.php').then(response => {
            return response.json();
          }).then(jsonResponse => {
            let findIndex = {};
            for (let ob in jsonResponse){
                const current = jsonResponse[ob];
                let arr = Object.entries(current).find(item => {
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
    calculate(weight, size, townCode) {
        return fetch(`http://calc.pecom.ru/bitrix/components/pecom/calc/ajax.php?places[0][1,1,1,${size},${weight},0,0]&take[town]=-472&deliver[town]=${townCode}`).then(response => {
            return response.json();
        }).then(jsonResponse => {
            //['take', 'auto', 'deliver', 'ADD', 'ADD_1', 'ADD_2', 'ADD_3', 'ADD_4']
            //const totals = jsonResponse['ADD_1']['2'] + jsonResponse['auto'][3] + jsonResponse['deliver'][3] + jsonResponse['take'][3]; 
            //console.log(totals);
            return jsonResponse;
        })
    }
}

export default Pek;