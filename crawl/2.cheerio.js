/**
 * Created by 96004 on 2017/7/30.
 */
let cheerio = require('cheerio');
let html=`<ul class="messages">
<li class="message">1</li>
<li class="message">2</li>
</ul>`;
let $ = cheerio.load(html);
$('ul li.message').each(function (index,item) {
    console.log(index, $(item).text());
})