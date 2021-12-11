import { readFileSync } from "fs";

function parseCoords(coordString: string) {
    var split = coordString.split(',')
    return { 
        x : parseInt(split[0]),
        y : parseInt(split[1])
    }
}

export const task5a = () => 
{
    //let fileName = "Task05/input_day5.txt"
    let fileName = "Task05/test_day5.txt"

    const file = readFileSync(fileName, 'utf-8');
    var fileContent = file.toString().split("\n");

    const coords = fileContent.filter(line => line != '').map(line => {
        var splitCoords = line.split("->")
        return {
            start: parseCoords(splitCoords[0]),
            end: parseCoords(splitCoords[1])
        }
    })

    var pointTracking : Map<string, number> = new Map<string, number>()
    coords.forEach(coord => {

        var startXCoord = 0, endXCoord = 0
        if (coord.start.x <= coord.end.x){
            startXCoord = coord.start.x
            endXCoord = coord.end.x
        } else {
            startXCoord = coord.end.x
            endXCoord = coord.start.x
        }

        var startYCoord = 0, endYCoord = 0
        if (coord.start.y <= coord.end.y){
            startYCoord = coord.start.y
            endYCoord = coord.end.y
        } else {
            startYCoord = coord.end.y
            endYCoord = coord.start.y
        }

        for(var x = startXCoord; x <= endXCoord; x++){
            for(var y = startYCoord; y <= endYCoord; y++){
                if (!pointTracking.has(`${x}_${y}`)){
                    pointTracking.set(`${x}_${y}`, 0)
                }

                let val = (pointTracking.get(`${x}_${y}`) ?? 0) + 1
                pointTracking.set(`${x}_${y}`, val)
            }
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