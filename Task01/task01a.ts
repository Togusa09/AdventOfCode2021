import { readFileSync } from "fs";


export const task1a = () => 
{
    let fileName = "Task01/input_day1.txt"

    const file = readFileSync(fileName, 'utf-8');
    var array = file.toString().split("\n").map(val => parseInt(val));

    var increases = 0

    for(var index = 0; index < array.length - 1; index++){
        if (array[index] < array[index + 1] ){
            increases++
        }
    }

    //1226
    console.log(increases)
}


task1a();