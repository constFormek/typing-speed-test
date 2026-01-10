
interface GameSessionConfig {
    time: number,
    targetText: string,
}

export class GameSession {
    private config: GameSessionConfig;

    public userInput: string = "";
    public wpm: number = 0;
    public accuracy: number = 0;
    public hasGameStarted: boolean = false;
    public startTime: number | null = null;

    constructor (config: GameSessionConfig) {
        this.config = config;
    }

    private calculateStats = () => {
       if (!this.startTime) return;

       const { targetText } = this.config;

       const timeEllapsed = (Date.now() - this.startTime) / 60000;
       if (timeEllapsed > 0) {
            this.wpm = this.userInput.length / 5 / timeEllapsed;
       }

       let errorsCount = 0;

       if (this.userInput.length > 0) {
        for (let i = 0; i < this.userInput.length; i++) {
            if (this.userInput[i] != targetText[i]) {
                errorsCount++;
            }
        }
        const errorAccuracy = errorsCount / this.userInput.length * 100;

        this.accuracy = 100 - errorAccuracy;
       }
    }

    public handleInput = (input: string) => {
        if (this.hasGameStarted == false) {
            this.startTime = Date.now();
            this.hasGameStarted = true;
        }
        
        this.userInput = input;
        this.calculateStats();

        const event = new CustomEvent('game-stats-update', {
            detail: {
                wpm: this.wpm,
                accuracy: this.accuracy,
            }
        })

        window.dispatchEvent(event);
    }

}