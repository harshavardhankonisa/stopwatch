class Timer {
     // Constructor method that initializes the timer object
    constructor() {
      // Initialized instance variables
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.count = 0;
      this.isRunning = false;
      this.interval = null;
      this.audio = new Audio();
      this.audio.src = "data:audio/mpeg;base64,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";
      
      // Assigned HTML elements to properties of the Timer object
      this.appendHr = document.getElementById("hr");
      this.appendMin = document.getElementById("min");
      this.appendSec = document.getElementById("sec");
      this.appendCount = document.getElementById("count");
      this.buttonStartStop = document.getElementById("startStop");
      this.buttonReset = document.getElementById("reset");
      
      // Binded event handlers to this object
      this.buttonStartStop.onclick = this.toggleTimer.bind(this);
      this.buttonReset.onclick = this.resetTimer.bind(this);
    }
    
    // Method that starts the timer
    start() {
      this.isRunning = true;
      this.buttonStartStop.textContent = "STOP";
      this.buttonStartStop.style.backgroundColor = "red";
      clearInterval(this.interval);
      this.interval = setInterval(this.startTimer.bind(this), 10);
    }
    
    // Method that stops the timer
    stop() {
      this.isRunning = false;
      this.buttonStartStop.textContent = "START";
      this.buttonStartStop.style.backgroundColor = "green";
      clearInterval(this.interval);
    }
    
    // Method that updates the timer display
    startTimer() {
      this.count++;
      if (this.minutes == 59) {
        this.hours++;
        this.minutes = 0;
        this.seconds = 0;
        this.count = 0;
      }
      if (this.seconds == 59) {
        this.minutes++;
        this.seconds = 0;
        this.count = 0;
      }
      if (this.count == 99) {
        this.seconds++;
        this.count = 0;
      }
      this.appendCount.innerHTML = this.count <= 9 ? "0" + this.count : this.count;
      this.appendSec.innerHTML = this.seconds <= 9 ? "0" + this.seconds : this.seconds;
      this.appendMin.innerHTML = this.minutes <= 9 ? "0" + this.minutes : this.minutes;
      this.appendHr.innerHTML = this.hours <= 9 ? "0" + this.hours : this.hours;
    }
    
    // Method that toggles the timer between start and stop
    toggleTimer() {
      if (this.isRunning) {
        this.audio.play();
        this.stop();
      } else {
        this.audio.play();
        this.start();
      }
    }
  
    // Method that resets the timer
    resetTimer() {
      this.audio.play();
      this.stop();
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.count = 0;
      this.appendHr.innerHTML = "00";
      this.appendMin.innerHTML = "00";
      this.appendSec.innerHTML = "00";
      this.appendCount.innerHTML = "00";
    }
  }
  
  // creates a new instance of the Timer class and assigns it to the variable timer
  window.onload = function() {
    const timer = new Timer();
  };
  