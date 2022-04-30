function renderEngineer(engineer) {
    return  `
    <div class="card text-center col-4 mx-3 shadow p-3 mb-5 bg-white rounded">
                    <div class="card-header text-info">
                        <h2>${engineer.name}</h2>
                        <h3> ${engineer.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <p><span class="font-weight-bold">ID: </span> ${engineer.id}</p>
                        <p><span class="font-weight-bold">Email: </span><a id="link"
                                name="email" href="mailto:${engineer.email}"> ${engineer.email}</a></p>
                        <p><span class="font-weight-bold">GitHub: </span><a id="link"
                                name="github" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                    </div>
                </div>
    `
}

module.exports = {renderEngineer};