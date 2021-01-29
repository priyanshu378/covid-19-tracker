const APIURL = "https://corona.lmao.ninja/v2/countries/india";

async function getRecords(url) {
    const response = await fetch(url);
    const resData = await response.json();
    //console.log(resData);
    showRecords(resData);
}
getRecords(APIURL);

function showRecords(Records) {
    console.log(Records)
    document.getElementById("main").innerHTML =
        `
    <h1>INDIA</h>
    <h2 class = "cases" >CASES</h2>
    <div>
    <h3 class = "cases" >TOTAL CASES<h/3>
    <div class = "run" >${Records.cases}</div>
    </div> <div>
    <h3 class = "cases">CASE-PER-MILLION</h3>
    <div class = "run" >${Records.casesPerOneMillion}</div>
    </div>
    <div>
    <h3 class = "cases">TODAY-CASES<h/3>
    <div class = "run" >${Records.todayCases}</div>
    </div>
    <h2 class = "cases">RECORDS</h2>
    <div>
    <h3 class = "cases">TOTAL RECOVERED<h/3>
    <div class = "run" >${Records.recovered}</div>
    </div> <div>
    <h3 class = "cases">RECORDS-PER-MILLION</h3>
    <div class = "run" >${Records.recoveredPerOneMillion}</div>
    </div>
    <div>
    <h3 class = "cases">TODAY-RECORDS<h/3>
    <div class = "run" >${Records.todayRecovered}</div>
    </div>
    <h2 class = "cases">DEATHS</h2>
    <div>
    <h3 class = "cases">TOTAL DEATHS<h/3>
    <div class = "run" >${Records.deaths}</div>
    </div> <div>
    <h3 class = "cases">DEATHS-PER-MILLION</h3>
    <div class = "run" >${Records.deathsPerOneMillion}</div>
    </div>
    <div>
    <h3class = "cases">TODAY-DEATHS<h/3>
    <div class = "run" >${Records.todayDeaths}</div>
    </div>
    <h2 class = "cases">TEST</h2>
    <div>
    <h3 class = "cases">TOTAL TESTS<h/3>
    <div class = "run" >${Records.tests}</div>
    </div> 
    <div>
    <h3 class = "cases">ONE-CASE-PER-PEOPPLE</h3>
    <div class = "run" >${Records.oneCasePerPeople}</div>
    </div>
    <div>
    <h3 class = "cases">ONE-TEST-PER-PEOPLE</h3>
    <div class = "run" >${Records.oneTestPerPeople}</div>
    </div>
    <div>
    <h3 class = "cases">ONE-DEATH-PER-PEOPLE</h3>
    <div class = "run" >${Records.oneDeathPerPeople}</div>
    </div>
    `
}