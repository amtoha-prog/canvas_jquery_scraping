const fs = require('fs');
const {JSDOM} = require('jsdom');

// Created a fake browser window for jquery
const html = fs.readFileSync('dom.html', 'utf-8');
const window = canvas.window;
const $ = requrie('jquery')(window);

function scrapeData() {
  // Finding the assingments
  var rows = $('.ig-row');

  // Looping through each row
  rows.each(function() {
    var row = $(this);
    // Getting the title and link of the assignment
    var title = row.find('.ig-title').text();
    var link = row.find('.ig-title').attr('href');
    
    // Getting the due date
    var dueDate = row.find('.assignment-date-due time').attr('title');

    // Getting the status 
    var status = row.find('js-score .screenreader-only').first().text().trim();
    




scrapeData(); 