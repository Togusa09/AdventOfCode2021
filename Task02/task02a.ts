import { readFileSync } from "fs";



export const task2a = () => 
{
    let fileName = "Task02/input_day2.txt"

    const file = readFileSync(fileName, 'utf-8');
    var array = file.toString().split("\n").map(val => {
        var split = val.split(' ')
        
        return { direction: split[0], distance: parseInt(split[1]) }
    });

    var increases = 0

    let x = 0, y = 0
    array.forEach((command) => {
        switch (command.direction){
            case 'up':
                y -= command.distance
                break
            case 'down':
                y += command.distance
                break
            case 'forward':
                x += command.distance
                break
        }
    })

    //1226
    console.log(`Depth ${x} Distance ${y}`)
    console.log(`Result ${x * y}`)
}


task2a();