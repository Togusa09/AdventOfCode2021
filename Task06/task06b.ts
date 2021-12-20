import { readFileSync } from "fs";
import { isConditionalExpression } from "typescript";

export const task6b = () => {
    let fileName = "Task06/input_day6.txt"
    //let fileName = "Task06/test_day6.txt"

    const file = readFileSync(fileName, 'utf-8');
    var fileContent = file.toString()
        .split(",")
        .map(x => parseInt(x))

    let fishState = [0,0,0,0,0,0,0,0,0]

    fileContent.forEach(fishAge => fishState[fishAge]++)
    console.log(fishState)
    for(var day = 0; day < 256; day++){
        var newArray = [
            fishState[1],
            fishState[2],
            fishState[3],
            fishState[4],
            fishState[5],
            fishState[6],
            fishState[7] + fishState[0],
            fishState[8],
            fishState[0],
        ]

        fishState = newArray;
        console.log(fishState)
    }
    var total = fishState.reduce((sum, current) => sum + current, 0);
    console.log(total)
}

task6b()