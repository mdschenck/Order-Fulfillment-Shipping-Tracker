let dateInput = document.getElementById('date-input');
let runQueryBtn = document.getElementById('run-query-btn');

// if (window.location.pathname === '/') {
//     dateInput = document.getElementById('date-input');
//     runQueryBtn = document.getElementById('run-query-btn');
// }

const renderQuery = () => {
    console.log("run query button clicked")
    console.log(document.getElementById('date-input').value)
    console.log("hi")
window.location.replace(`api/shipments/${document.getElementById('date-input').value}`)
}

console.log(runQueryBtn)
runQueryBtn.addEventListener("click", renderQuery);