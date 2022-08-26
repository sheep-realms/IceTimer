let testDate = new Date();
testDate.setMinutes(testDate.getMinutes() + 1)

let exampleTimer = [
    {
        title: "此项目的诞生之日",
        summary: "这个项目在这一刻诞生了",
        time: "2022/8/24 14:00",
        timeStamp: 1661320800000,
        format: "dhms"
    }, {
        title: "一分钟后",
        summary: "摆烂一分钟",
        time: testDate.toLocaleString(),
        timeStamp: testDate.getTime(),
        format: "dhms"
    }, {
        title: "刀剑神域MMORPG公测",
        summary: "Link Start!",
        time: "2022/10/31 12:00",
        timeStamp: 1667188800000,
        format: "dhms"
    }, {
        title: "2023年春节",
        summary: "着急放假",
        time: "2023/1/22",
        timeStamp: 1674316800000,
        format: "d"
    }, {
        title: "2023年愚人节",
        summary: "计划在愚人节搞点事情",
        time: "2023/4/1",
        timeStamp: 1680278400000,
        format: "d"
    }, {
        title: "哆啦A梦的诞生",
        summary: "日本当地时间",
        time: "2112/9/3",
        timeStamp: 4502275200000,
        format: "d"
    }
]

$('#spr-timer-list').html('');

exampleTimer.forEach(e => {
    let date = new Date(e.timeStamp);
    let y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate(), h = date.getHours(), min = date.getMinutes(), s = date.getSeconds();
    let dateTxt = y + ' 年 ' + m + ' 月 ' + d + ' 日';
    if (h + min + s != 0) dateTxt += ' ' + timeZero(h) + ':' + timeZero(min) + ':' + timeZero(s)

    $('#spr-timer-list').append(`
        <div class="spr-timer-box">
            <div class="spr-timer-content">
                <span class="spr-timer-info">
                    <span class="spr-timer-title">` + e.title + `</span>
                    <span class="spr-timer-summary">` + e.summary + `</span>
                </span>
                <span class="spr-timer-time">
                    <span class="salt-time-diff real-time">` + e.time + `||` + e.format + `</span>
                    <span class="spr-timer-start-time">` + dateTxt + `</span>
                </span>
            </div>
        </div>
    `)
});

function timeZero(value) {
    if (value < 10 && value >= 0) {
        return '0' + value;
    } else {
        return value;
    }
}