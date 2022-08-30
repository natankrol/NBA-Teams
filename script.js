const allBtn = document.querySelector('.all-btn');
const westBtn = document.querySelector('.west-btn');
const eastBtn = document.querySelector('.east-btn');
const listOfTeams = document.querySelector('.teams-list');
const searchInput = document.querySelector('#search');
const searchBtn = document.querySelector('.search-btn');
const alertText = document.querySelector('.alert-text');

let teamsList = [
    {
        id: 'boston',
        name: "Boston Celtics",
        conference: "East"
    },
    {
        id: 'brooklyn',
        name: "Brooklyn Nets",
        conference: "East"
    },
    {
        id: 'newyork',
        name: "New York Knicks",
        conference: "East"
    },
    {
        id: 'philadephia',
        name: "Philadelphia 76ers",
        conference: "East"
    },
    {
        id: 'toronto',
        name: "Toronto Raptors",
        conference: "East"
    },
    {
        id: 'chicago',
        name: "Chicago Bulls",
        conference: "East"
    },
    {
        id: 'cleveland',
        name: "Cleveland Cavaleries",
        conference: "East"
    },
    {
        id: 'detroit',
        name: "Detroit Pistons",
        conference: "East"
    },
    {
        id: 'indiana',
        name: "Indiana Pacers",
        conference: "East"
    },
    {
        id: 'milwaukee',
        name: "Milwaukee Bucks",
        conference: "East"
    },
    {
        id: 'atlanta',
        name: "Atlanta Hawks",
        conference: "East"
    },
    {
        id: 'charlotte',
        name: "Charlotte Hornets",
        conference: "East"
    },
    {
        id: 'miami',
        name: "Miami Heat",
        conference: "East"
    },
    {
        id: 'orlando',
        name: "Orlando Magic",
        conference: "East"
    },
    {
        id: 'washington',
        name: "Washington Wizards",
        conference: "East"
    },
    {
        id: 'denver',
        name: "Denver Nuggets",
        conference: "West"
    },
    {
        id: 'minnesota',
        name: "Minnesota Timberwolves",
        conference: "West"
    },
    {
        id: 'oklahoma',
        name: "Oklahoma City Thunder",
        conference: "West"
    },
    {
        id: 'portland',
        name: "Portland Trail Blazers",
        conference: "West"
    },
    {
        id: 'utah',
        name: "Utah Jazz",
        conference: "West"
    },
    {
        id: 'golden',
        name: "Golden State Warriors",
        conference: "West"
    },
    {
        id: 'losangelesclippers',
        name: "Los Angeles Clippers",
        conference: "West"
    },
    {
        id: 'losangeleslakers',
        name: "Los Angeles Lakers",
        conference: "West"
    },
    {
        id: 'phoenix',
        name: "Phoenix Suns",
        conference: "West"
    },
    {
        id: 'sacramento',
        name: "Sacramento Kings",
        conference: "West"
    },
    {
        id: 'dallas',
        name: "Dallas Mavericks",
        conference: "West"
    },
    {
        id: 'houston',
        name: "Houston Rockets",
        conference: "West"
    },
    {
        id: 'memphis',
        name: "Memphis Grizzlies",
        conference: "West"
    },
    {
        id: 'neworlean',
        name: "New Orleans Pelicans",
        conference: "West"
    },
    {
        id: 'sanantonio',
        name: "San Antonio Spurs",
        conference: "West"
    },
]

function displayTeams(teams){
    let displayTeamsList = teams.map(function(item){
        return `<div class="single-club">
        <div class="club-tile">
            <h1 class="club-name">${item.name}</h1>
            <p class="conference-name">${item.conference}</p>
        </div>
    </div>`
    });
    displayTeamsList = displayTeamsList.join("")
    listOfTeams.innerHTML = displayTeamsList;
}



function displayWestTeams(){
    const westTeams = teamsList.filter(team => team.conference == "West");
    const teamsValues = Object.values(westTeams)
    displayTeams(teamsValues)
};

function displayEastTeams(){
    const eastTeams = teamsList.filter(team => team.conference == "East");
    const teamsValues = Object.values(eastTeams)
    displayTeams(teamsValues)
};

function searchTeam(){
    if (searchInput.value == ""){
        alertText.classList.add('alert-text-visible');
        setTimeout(function(){
            alertText.classList.remove('alert-text-visible')
        }, 2000);
    } else {
    let typedTeam = searchInput.value;
    const userTypedTeam = teamsList.filter(team => team.name == typedTeam);
    const teamsValues = Object.values(userTypedTeam);
    displayTeams(teamsValues);
    }
}


displayTeams(teamsList)

westBtn.addEventListener('click', () => displayWestTeams());

eastBtn.addEventListener('click', () => displayEastTeams());

allBtn.addEventListener('click', () => displayTeams(teamsList))


searchBtn.addEventListener('click', () => searchTeam());
