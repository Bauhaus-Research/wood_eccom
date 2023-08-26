
<script>
const currentTimeUTC = new Date().getUTCHours(); // Get current UTC time
const currentTime = (currentTimeUTC-4); // Apply the offset

    const currentDay = new Date(currentTimeUTC - 4).getDay();
    let notSunday = currentDay != 0;
    let notSaturday = currentDay != 6;
    let openMessage = '';

    if ((currentTime >= 9 && currentTime <= 17) && (notSunday || notSaturday)) {
        openMessage = 'Open until 6pm';
    } else if ((currentTime > 17 || currentTime < 9) && (notSunday || notSaturday)) {
        openMessage = 'Opens at 9am';
    } else if ((currentTime >= 9 && currentTime <= 16) && (currentDay === 6)) {
        openMessage = 'Open until 5pm';
    } else if (currentTime < 9 && currentDay === 6) {
        openMessage = 'Opens at 9am';
    } else if (currentDay === 6) {
        openMessage = 'Opens on Monday';
    } else {
        openMessage = 'Open Again on Monday';
    }
</script>


<div class="flex-col flex group text-end">
    
    <a href="/about#locations" class="text-xs font-light "><strong class="font-bold group-hover:underline">Palmdale</strong> | Old Fort Bay</a>
    <h1 class="text-sm font-light">{openMessage}</h1>
</div>