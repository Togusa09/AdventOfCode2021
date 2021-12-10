import { readFileSync } from "fs";



export const task2b = () => 
{
    let fileName = "Task02/input_day2.txt"

    const file = readFileSync(fileName, 'utf-8');
    var array = file.toString().split("\n").map(val => {
        var split = val.split(' ')
        
        return { direction: split[0], distance: parseInt(split[1]) }
    });

    var increases = 0

    let x = 0, y = 0, aim = 0
    array.forEach((command) => {
        switch (command.direction){
            case 'up':
                aim -= command.distance
                break
            case 'down':
                aim += command.distance
                break
            case 'forward':
                //It increases your depth by your aim multiplied by X
                y += aim * command.distance
                x += command.distance
                break
        }
    })

    //1226
    console.log(`Distance ${x} Depth ${y} Aim ${aim}`)
    console.log(`Result ${x * y}`)
}


task2b();