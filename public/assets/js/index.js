let dateInput;
let runQueryBtn;

if (window.location.pathname === '/') {
    dateInput = document.querySelector('#date-input');
    runQueryBtn = document.querySelector('#run-query-btn');
}

const renderQuery = () => {
location.assign=`/shipments/${dateInput.innerHtml}`
}

runQueryBtn.addEventListener(click, renderQuery) {
console.log("run query button clicked")
}
