import { readFileSync } from "fs";
import { isConditionalExpression } from "typescript";

export const task6a = () => {
    let fileName = "Task06/input_day6.txt"
    //let fileName = "Task06/test_day6.txt"

    const file = readFileSync(fileName, 'utf-8');
    var fileContent = file.toString()
        .split(",")
        .map(x => parseInt(x))

    let fishState = fileContent.map(x => x)

    for(var day = 0; day < 80; day++){
        const currentFishCount = fishState.length

        // Decrement all values

        for(var index = 0; index < currentFishCount; index++){
            fishState[index] = fishState[index] - 1
            
            if (fishState[index] < 0) {
                fishState[index] = 6
                fishState.push(8)
            }

            
        }

        console.log(fishState)
    }
    
    console.log(fishState.length)
}

task6a()