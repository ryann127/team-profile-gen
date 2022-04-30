function renderHTML (teamMembers) {
    return ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    </head>
    <body> 
        <header class="container-fluid text-light">
        <div class="jumbotron text-center bg-info">
            <h1>Welcome to Our Team!</h1>
        </div>
    </header>
    <div class="container">
     <div class="row">
        <div class="team-card row col-12 d-flex justify-content-center">
             ${teamMembers}
        </div>
     </div>
    </div>
    </body>
    </html> 
    `
}



module.exports = {renderHTML};