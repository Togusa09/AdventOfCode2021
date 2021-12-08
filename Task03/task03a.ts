import { readFileSync } from "fs";
import { stringify } from "querystring";



export const task3a = () => 
{
    let fileName = "Task03/input_day3.txt"

    const file = readFileSync(fileName, 'utf-8');
    var fileContent = file.toString().split("\n");

    var bitCount = fileContent[0].length

    let arrayLength = fileContent.length
    let halfArrayLength = arrayLength / 2

    let gammaRate = ''
    let epsilonRate = ''

    for(var index = 0; index < bitCount; index++){
        var count = fileContent.map(line => line[index]).filter(char => char == '0').length

        if (count > halfArrayLength)
        {
            gammaRate += '0'
            epsilonRate += '1'
        }
        else{
            gammaRate += '1'
            epsilonRate += '0'
        }
    }

    console.log(`Gamma Rate ${gammaRate} Epsilon Rate ${epsilonRate}`)
   
    console.log(`Result ${parseInt(gammaRate, 2) * parseInt(epsilonRate, 2) }`)
}


task3a()