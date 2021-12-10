import { readFileSync } from "fs"

class BingoBoard {
    board: number[][] = []
    tracking: number[][] = []
    lastNumber: number = 0

    constructor(boardContent: string[]) {
        boardContent.forEach((boardLine, index) => {
            var splitRow = boardLine.split(' ').filter(x => x != '')
            this.board[index] = splitRow.map(cell => parseInt(cell))
            this.tracking[index] = splitRow.map(cell => parseInt(cell))
        })
    }

    markCalledNumber(calledNumber: number): void{
        this.lastNumber = calledNumber

        for(let x = 0; x < this.board.length; x++){
            for(let y = 0; y < this.board[x].length; y++){
                if (this.board[x][y] == calledNumber){
                    this.tracking[x][y] = -1
                }
            }
        }

        // this.board.forEach((line, lineIndex) => {
        //     line.forEach((cell, cellIndex) => {
        //         if (cell == calledNumber){
        //             this.tracking[lineIndex][cellIndex] = -1     
        //         }
        //     })
        // })
    }

    calculateScore() : number {
        //.reduce((sum, current) => sum + current.total, 0);
        let boardTotal = 0
        this.tracking.forEach((line, lineIndex) => {
                line.forEach((cell, cellIndex) => {
                    if (cell != -1){
                        boardTotal += cell
                    }
                })
            })

        const score = boardTotal * this.lastNumber
        return score
    }

    hasBoardWon() : boolean {
        // Verticals
        for(var x = 0; x < this.tracking.length; x++){
            var calledNumberCount = this.tracking[x].filter(x => x == -1).length
            if (calledNumberCount == this.tracking.length) return true;
        }

        // horizontals
        for(var y = 0; y< this.board.length; y++){
            let calledNumberCount = 0
            for(var x = 0; x < this.tracking.length; x++){
                if (this.tracking[x][y] == -1){
                    calledNumberCount++;
                }
            }
            if (calledNumberCount == this.tracking.length) return true;
        }

        // // diagnals
        // let leftDiagnalCalledCount = 0;
        // let rightDiagnalCalledCount = 0;
        // for(var x = 0; x < this.tracking.length; x++){
        //     if (this.tracking[x][x] == -1)
        //     {
        //         leftDiagnalCalledCount++;
        //     }

        //     if (this.tracking[this.tracking.length - x - 1][x] == -1)
        //     {
        //         rightDiagnalCalledCount++;
        //     }
        // }

        // if (leftDiagnalCalledCount == this.tracking.length) return true;
        // if (rightDiagnalCalledCount == this.tracking.length) return true;

        return false
    }
}

export const task4a = () => 
{
    const fileName = "Task04/input_day4.txt"
    //let fileName = "Task04/test_day4.txt"

    const file = readFileSync(fileName, 'utf-8');
    let fileContent = file.toString().split("\n");

    let randomNumbers = fileContent[0].split(',').map(x => parseInt(x))

    let boards : BingoBoard[] = []

    for(let index = 2; index < fileContent.length; index += 6) {
        const boardContent = fileContent.slice(index, index + 5)
        const board = new BingoBoard(boardContent)
        boards.push(board)
    }

    let winningBoard: BingoBoard | null = null
    for(let index = 0; index < randomNumbers.length; index++){
        const randomNumber = randomNumbers[index]

        boards.forEach(board => board.markCalledNumber(randomNumber))

        var completedBoard = boards.filter(board => board.hasBoardWon())
        if (completedBoard.length >= 1) {
            winningBoard = completedBoard[0]
            break
        }
    }

    console.log(winningBoard)
    console.log(winningBoard?.calculateScore())
}

task4a()