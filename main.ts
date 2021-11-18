let list_5x5LED = [
[
1,
1,
1,
1,
1
],
[
1,
0,
1,
0,
1
],
[
0,
1,
0,
1,
0
],
[
1,
0,
0,
0,
1
],
[
50,
100,
150,
200,
255
]
]
for (let b = 0; b <= 4; b++) {
    for (let a = 0; a <= 4; a++) {
        led.plotBrightness(a, b, list_5x5LED[b][a])
    }
}
basic.forever(function () {
	
})
