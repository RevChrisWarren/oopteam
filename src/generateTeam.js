const generateTeamData = employeeList => {
    return `
    <section class="my-3" id="employee">
        <div class="flex-row justify-space-between">
        ${employeeList
            .map(({ name, id, email, officeNumber, github, school }) => {
                return `
                <div class="col-12 mb-2 bg-dark text-light p-3">
                    <h2 class="role">${this.role}</h2>
                    <h3 class="employeeName">${name}</h3>
                    <h5 class="employeeid">
                    ID number: ${id}</h5>
                    <p>Email: </p><a href="mailto:${email}">${email}</a>
                    <p>${officeNumber}</p>
                    <a href="${github}">${github}</a>
                    <p>${school}</p>
                    </div>
                `;
            })
            .join('')}
            </div>
        </section>
            `;
}
        const generateTeam = employeeList => {
            
            
                return `
                <!DOCTYPE html>
                <html lang="en">
            
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Work Team Info</title>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                    <link rel="stylesheet" href="style.css">
                </head>
            
                <body>
                    <header>
                        <div class="container flex-row justify-space-between align-center col-6">
                            <h1 class="banner">My Work Team</h1>
                          
                        </div>
                    </header>
                    <main class="container col-4">
                        ${generateTeamData(employeeList)}
                    </main>
                    
                </body>
                </html>
                `;
            };
        
          module.exports = generateTeam;