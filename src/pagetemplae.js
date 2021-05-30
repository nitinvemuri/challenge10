const teamMembers = require('../index')

const generateManagerCard = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.number}</p>
            </div>
        </div>
    </div>
    `;}
    const generateEngineerCard = function (engineer) {
        return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${engineer.name}</h3>
                    <h4>Engineer</h4>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${engineer.id}</p>
                    <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="office"> Github: ${engineer.github}</p>
                </div>
            </div>
        </div>
        `;}
        const generateInternCard = function (Intern) {
            return `
            <div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h3>${Intern.name}</h3>
                        <h4>Intern</h4>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${Intern.id}</p>
                        <p class="email">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></p>
                        <p class="office"> School: ${Intern.school}</p>
                    </div>
                </div>
            </div>
            `;}


const generateHTML = (data) => {

    htmlArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManagerCard(employee);

            htmlArray.push(managerCard);
        } else if (role === 'Engineer') {
            const engineerCard = generateEngineerCard(employee);
            htmlArray.push(engineerCard);
        } else if (role === "Intern") {
            const internCard = generateInternCard(employee);
            htmlArray.push(internCard);
        }
    }
    const employeeCards = htmlArray.join('')
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

};



// generate html page 
const generateTeamPage = function (writtenCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="./src/style.css">
  </head>
  <style>
body {
    background: url(https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/Hunter-x-Hunter-Gon-Killua-.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5) center;
    background-size: 100% 100%;
    position: relative;
    margin: 0%;
    height: 150vh;
}
.header {
    color:gold;
}

.card-body {
    margin: 1%
}

.card-header {
    font-weight: bold;
}

main {
    color:firebrick;
}

h3 {
    text-align: center;
}

h4 {
    text-align: center;
}
</style>
  <body>
      <header class="header">
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" style="font-size: 50px;" style="color: gold;" colorid="navbar-text">My Team</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${writtenCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

module.exports = generateHTML;
