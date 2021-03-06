/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */

/**
 * Author: Shawn Hymel
 * Copyright (c) 2016 SparkFun Electronics
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var ili9341 = require('jsupm_ili9341');
// spawn is the addition for communicating with the python library serially
var spawn = require('child_process').spawn,
    ls    = spawn('python',['example.py']);  //change the example file to whatever name of the python file you want

// Pins (Edison)
// CS_LCD   GP44 (MRAA 31)
// CS_SD    GP43 (MRAA 38) unused
// DC       GP12 (MRAA 20)
// RESEST   GP13 (MRAA 14)
var lcd = new ili9341.ILI9341(31, 38, 20, 14);

// Fill the screen with a solid color
lcd.fillScreen(lcd.color565(0, 40, 16));


//This if for speaking with the python program 
ls.stdout.on('data', function (data) {
    console.log('hello friend you data is stdout: ' + data);
    lcd.setCursor(0,10); 
    lcd.setTextColor(ili9341.ILI9341_LIGHTGREY); 
    lcd.setTextWrap(true); 
    lcd.setTextSize(4); 
    lcd.print(String(data)+ '\n');

});

ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});
~


// Test screen rotation
//function rotateScreen(r) {
//    lcd.setRotation(r);
//    lcd.fillRect(0, 0, 5, 5, ili9341.ILI9341_WHITE);
//    if (r < 4) {
//        r++;
//        setTimeout(function() { rotateScreen(r); }, 1000);
//    }
//}
//rotateScreen(0);

// Invert colors, wait, then revert back
setTimeout(function() { lcd.invertDisplay(true); }, 4000);
setTimeout(function() { lcd.invertDisplay(false); }, 6000);