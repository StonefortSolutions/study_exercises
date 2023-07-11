class Stopwatch {
    constructor() {
        this.msElapsed = 0;
        this.interval = null;
        this.running = false;
    }

    start() {
        if (!this.running) {
            this.interval = setInterval(() => {
                this.msElapsed++;
                this.display();
            }, 10);
            this.running = true;
        }
    }

    stop() {
        clearInterval(this.interval);
        this.running = false;
    }

    reset() {
        this.msElapsed = 0;
        this.display();
    }

    display() {
        const seconds = Math.floor(this.msElapsed / 100);
        const ms = this.msElapsed % 100;
        const display = `${seconds < 10 ? "0" : ""}${seconds}:${ms < 10 ? "0" : ""}${ms}`;
        document.getElementById("stopwatch").innerHTML = display;
    }

}

const sw = new Stopwatch();

window.onload = () => {
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const resetButton = document.getElementById("reset");

    startButton.addEventListener("click", () => {
        sw.start();
    });

    stopButton.addEventListener("click", () => {
        sw.stop();
    });

    resetButton.addEventListener("click", () => {
        sw.reset();
    });
};
