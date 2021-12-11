import { readFileSync } from "fs";

function parseCoords(coordString: string) {
    var split = coordString.split(',')
    return { 
        x : parseInt(split[0]),
        y : parseInt(split[1])
    }
}

function isHorizontal(start: { x: number, y : number}, end: { x: number, y : number}){
    return start.y == end.y
}

function isVertical(start: { x: number, y : number}, end: { x: number, y : number}){
    return start.x == end.x
}

export const task5a = () => 
{
    let fileName = "Task05/input_day5.txt"
    //let fileName = "Task05/test_day5.txt"

    const file = readFileSync(fileName, 'utf-8');
    var fileContent = file.toString().split("\n");

    const coords = fileContent.filter(line => line != '').map(line => {
        var splitCoords = line.split("->")
        return {
            start: parseCoords(splitCoords[0]),
            end: parseCoords(splitCoords[1])
        }
    })//.filter(line => isHorizontal(line.start, line.end) || isVertical(line.start, line.end))

    var pointTracking : Map<string, number> = new Map<string, number>()
    coords.forEach(coord => {

        var diffX = coord.end.x - coord.start.x;
        var diffY = coord.end.y - coord.start.y;

        var targetDistance = diffX == 0 ? Math.abs(diffY) : Math.abs(diffX)

        for(var distance = 0; distance <=  targetDistance; distance++){
                var posX = coord.start.x + ( Math.sign(diffX) * distance)
                var posY = coord.start.y + ( Math.sign(diffY) * distance)

                if (!pointTracking.has(`${posX}_${posY}`)){
                    pointTracking.set(`${posX}_${posY}`, 0)
                }

                let val = (pointTracking.get(`${posX}_${posY}`) ?? 0) + 1
                pointTracking.set(`${posX}_${posY}`, val)
        }
    })

    var count = 0;
    pointTracking.forEach((value, key) => {
        if (value > 1){
            count++;
        }
    });

    console.log(count)
}

task5a()