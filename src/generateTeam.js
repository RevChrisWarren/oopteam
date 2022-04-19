
const generateManagerData = managerList => {
    return `
    <section class="col-3" id="employee">
        <div class="flex-row justify-space-between">
        ${managerList
            .map(({ name, id, email, officeNumber }) => {
                return `
                <div class="boxes">
                    <h2 class="role">Manager</h2>
                    <h3 class="employeeName">${name}</h3>
                    <h3 class="employeeid">
                    ID number: ${id}</h3>
                    <p>Email: </p><a href="mailto:${email}">${email}</a>
                    <p>${officeNumber}</p>
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
                <div class="boxes">
                    <h2 class="role">Engineer</h2>
                    <h3 class="employeeName">${name}</h3>
                    <h3 class="employeeid">
                    ID number: ${id}</h3>
                    <p>Email: </p><a href="mailto:${email}">${email}</a>
                    <p>Github: </p><a href="github.com/${github}">${github}</a>
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
                <div class="boxes">
                    <h2 class="role">Intern</h2>
                    <h3 class="employeeName">${name}</h3>
                    <h3 class="employeeid">
                    ID number: ${id}</h3>
                    <p>Email: </p><a href="mailto:${email}">${email}</a>
                    <p>${school}</p>
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
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
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