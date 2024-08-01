let startTime, updatedTime, difference, tInterval, savedTime;
    let running = false;
    let lapNumber = 1;

    function startTimer(){
      if(!running){
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
      }
    }

    function stopTimer(){
      if (running) {
        clearInterval(tInterval);
        savedTime = difference;
        running = false;
      }
    }

    function resetTimer(){
      clearInterval(tInterval);
      savedTime = 0;
      difference = 0;
      running = false;
      document.getElementById('display').innerHTML = "00:00:00";
      document.getElementById('laps').innerHTML = '';
      lapNumber = 1;
    }

    function recordLap(){
      if(running){
        let lapTime = document.createElement('div');
        lapTime.innerHTML = "Lap " + lapNumber + ": " + document.getElementById('display').textContent;
        document.getElementById('laps').appendChild(lapTime);
        lapNumber++;
      }
    }

    function getShowTime(){
      updatedTime = new Date().getTime();
      if (savedTime){
        difference = (updatedTime - startTime) + savedTime;
      } else {
        difference =  updatedTime - startTime;
      }
      let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);
      let milliseconds = Math.floor((difference % (1000 * 60)) / 10);
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
      milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
      document.getElementById('display').innerHTML = hours + ':' + minutes + ':' + seconds;
    }