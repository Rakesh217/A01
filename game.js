function zodiac(day, month)
{
    var zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn']; 
    var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19]; 
    return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month]; 
 } 
document.getElementById('zodiac').onclick = function()
{ 
    document.getElementById('post').innerHTML = zodiac(document.getElementById('date').value, document.getElementById('month').value);
 }