import { readFileSync } from "fs";


export const task1b = () => 
{
    let fileName = "Task01/input_day1.txt"

    const file = readFileSync(fileName, 'utf-8');
    let array = file.toString().split("\n").map(val => parseInt(val));

    let increases = 0

    let windowArray : number[] = [];
    for(let index = 0; index < array.length - 3; index++){
        windowArray.push(array[index] + array[index + 1] + array[index + 2])
    }

    for(let index = 0; index < windowArray.length - 1; index++){
        if (windowArray[index] < windowArray[index + 1] ){
            increases++
        }
    }

    console.log(increases)
}


task1b();