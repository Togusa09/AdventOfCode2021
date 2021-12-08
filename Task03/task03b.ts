import { readFileSync } from "fs";

export const task3b = () => 
{
    let fileName = "Task03/input_day3.txt"

    const file = readFileSync(fileName, 'utf-8');
    var fileContent = file.toString().split("\n");

    var bitCount = fileContent[0].length

    let oxygenArray = fileContent
    let co2Array = fileContent

    for(var index = 0; index < bitCount; index++){
        if (oxygenArray.length > 1) {
            var oxygenZeroCount = oxygenArray.map(line => line[index]).filter(char => char == '0').length;
            var oxygenOneCount = oxygenArray.map(line => line[index]).filter(char => char == '1').length;

            if (oxygenZeroCount > oxygenOneCount)
            {
                oxygenArray = oxygenArray.filter(val => val[index] == '0')
            } else {
                oxygenArray = oxygenArray.filter(val => val[index] == '1')
            }
        }

        if (co2Array.length > 1){
            var co2ZeroCount = co2Array.map(line => line[index]).filter(char => char == '0').length;
            var co2OneCount = co2Array.map(line => line[index]).filter(char => char == '1').length;

            if (co2ZeroCount <= co2OneCount)
            {
                co2Array = co2Array.filter(val => val[index] == '0')
            } else {
                co2Array = co2Array.filter(val => val[index] == '1')
            }
        }
    }

    console.log(`Oxygen ${parseInt(oxygenArray[0], 2)} C02 ${parseInt(co2Array[0], 2)}`)


    console.log(`Result ${parseInt(oxygenArray[0], 2) * parseInt(co2Array[0], 2) }`)
}

task3b()