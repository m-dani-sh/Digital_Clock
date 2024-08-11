
function clock() {
    const days: string[] = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const months: string[] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // Get DOM elements
    const hrs: HTMLElement = document.getElementById("hours")!;
    const min: HTMLElement = document.getElementById("minutes")!;
    const sec: HTMLElement = document.getElementById("seconds")!;
    const period: HTMLElement = document.getElementById("ampm")!;
    const date: HTMLElement = document.getElementById("ddmmyy")!;
    const day: HTMLElement = document.getElementById("dd")!;

    // Create a new Date object
    const time = new Date();

    // Extract hours, minutes, seconds, day of the week, date, month, and year
    let h: number | string = time.getHours();
    let m: number | string = time.getMinutes();
    let s: number | string = time.getSeconds();
    const d: number = time.getDay();
    const dd: number = time.getDate();
    const mm: number = time.getMonth();
    const yy: number = time.getFullYear();

    // Convert hours to 12-hour format and determine AM/PM
    const ampm: string = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12; // Convert midnight (0) to 12

    // Add leading zeros to single-digit minutes and seconds
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Update HTML content with the current time and date
    hrs.textContent = h.toString();
    min.textContent = m.toString();
    sec.textContent = s.toString();
    period.textContent = ampm;
    day.textContent = days[d];
    date.textContent = `${months[mm]} ${dd}, ${yy}`;

    // Update the clock every second
    setTimeout(clock, 1000);
}

// Initial call to start the clock
clock();
