const fs = require('fs');
const {
jsdom
} = require('jsdom');
const $ = require('jquery/factory')(new jsdom.JSDOM().window);

function scrapeData() {
// Implementation for scraping data
const dom = fs.readFileSync('dom.html', 'utf-8');
const children = $(dom).children(".ig-title").all();

for (const child of children) {
const title = child.text();
const link = child.attr("href");
console.log(Title: ${title}, Link: ${link});
}
}

scrapeData(); 