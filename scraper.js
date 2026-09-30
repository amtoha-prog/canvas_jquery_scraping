const fs = require('fs');
const {JSDOM} = require('jsdom');

// Reading the saved Canvas page
const html = fs.readFileSync('canvas.html', 'utf-8');

// Created a fake browser window for jquery
const dom = new JSDOM(html);
const window = dom.window;
const $ = require('jquery')(window);

function scrapeData() {
  // Finding the assingments
  const rows = $('.ig-row');

  // Looping through each row
  rows.each(function() {
    const row = $(this);
    // Getting the title and link of the assignment
    const title = row.find('.ig-title').text().trim();
    const link = row.find('.ig-title').attr('href');
    
    // Getting the due date
    let dueDate = row.find('.assignment-date-due time').attr('title');

    if (!dueDate) {
      dueDate = 'No due date';
    }

    // Getting the status 
     let status = row.find('.score-display').attr('title');
    
    if (status === 'No Submission') {
      status = 'Not Submitted'; }
      else if (status) {
      status = 'Submitted'; }
      else {
      status = 'Unknown';
    }

    

   // Printing the assignments results
   console.log(`Title: ${title}`);
   console.log(`Link: ${link}`);
   console.log(`Due Date: ${dueDate}`);
   console.log(`Status: ${status}`);
   console.log('----');

  });
}
// Calling the function
scrapeData(); 