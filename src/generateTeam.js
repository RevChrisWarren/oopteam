
const generateManagerData = managerList => {
    return `
    <section class="col-3" id="employee">
        <div class="flex-row justify-space-between">
        ${managerList
            .map(({ name, id, email, officeNumber }) => {
                return `
                    <div class="boxes">
                    <h3 class="employeeName">${name}</h3>    
                    <h2 class="role">&#9749 Manager</h2>
                    <div class="info">
                    <h4 class="employeeid">
                    ID number: ${id}</h4>
                    <p>Email: </p><a href="mailto:${email}">${email}</a>
                    <p>${officeNumber}</p>
                    </div>
                    </div>
                `;
            })
            .join('')}
            </div>
            `;
}
const generateEngineerData = engineerList => {
    return `
        ${engineerList
            .map(({ name, id, email, github }) => {
                return `
                    <div class="boxes engineer">
                    <h3 class="employeeName">${name}</h3>
                    <h2 class="role">&#128208 Engineer</h2>
                    <div class="info">
                    <h4 class="employeeid">
                    ID number: ${id}</h4>
                    <p>Email: </p><a href="mailto:${email}">${email}</a>
                    <p>Github: </p><a href="https://www.github.com/${github}">${github}</a>
                    </div>
                    </div>
                `;
            })
            .join('')
        }
            `;
}
const generateInternData = internList => {
    return `
        ${internList
            .map(({ name, id, email, school }) => {
                return `
                    <div class="boxes intern">
                    <h3 class="employeeName">${name}</h3>
                    <h2 class="role">&#9999 Intern</h2>  
                    <div class="info">                  
                    <h4 class="employeeid">
                    ID number: ${id}</h4>
                    <p>Email: </p><a href="mailto:${email}">${email}</a>
                    <p>${school}</p>
                    </div>
                    </div>
                `;
            })
            .join('')}
            </div>
        </section>
            `;
}
const generateTeam = (managerList, engineerList, internList) => {


    return `
                <!DOCTYPE html>
                <html lang="en">
            
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Work Team Info</title>
                    <link rel="stylesheet" href="./style.css">
                </head>
            
                <body>
                    <header>
                        <div class="container flex-row justify-space-between align-center col-6">
                            <h1 class="banner">My Work Team</h1>
                          
                        </div>
                    </header>
                    <main class="container">
                        ${generateManagerData(managerList)}
                        ${generateEngineerData(engineerList)}
                        ${generateInternData(internList)}
                      
                    </main>
                    
                </body>
                </html>
                `;
};

module.exports = generateTeam;