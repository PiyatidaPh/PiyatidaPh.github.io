function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // เพิ่มเลข 0 นำหน้าเวลาถ้ามีเพียงหลักเดียว
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds;

    // แสดงเวลาบนหน้า HTML
    document.getElementById('digital-clock').innerHTML = timeString;
}

// เรียกใช้ฟังก์ชั่น updateClock ทุกๆ 1 วินาที
setInterval(updateClock, 1000);
