function updateClock() {
    const now = new Date(); // Abhi ka date aur time
    let hours = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();
    let ampm = "AM"; // Default value
  
    // 12-hour format me convert karte hain:
    if (hours >= 12) {
      ampm = "PM";
      if (hours > 12) {
        hours = hours - 12; // 13-24 ko 1-12 me convert karo
      }
    } else if (hours === 0) {
      hours = 12; // 0 ko 12 bana do (12 AM)
    }
  
    // Agar koi value 10 se chhoti hai, to leading zero add karo
    hours = hours < 10 ? "0" + hours : hours;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
  
    // Time string bana rahe hain
    const timeString = `${hours}:${mins}:${secs}`;
    // DOM me update kar rahe hain:
    document.getElementById("clock").textContent = timeString;
    document.getElementById("ampm").textContent = ampm;
  
    // Date ko readable format me convert karna
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    document.getElementById("date").textContent = dateString;
  }
  
  // Har second me update karne ke liye setInterval
  setInterval(updateClock, 1000);
  // Page load hote hi ek initial call
  updateClock();
  