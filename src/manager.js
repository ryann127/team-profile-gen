function renderManager(manager){
    return `
    <div class="card text-center col-4 mx-3 shadow p-3 mb-5 bg-white rounded">
                    <div class="card-header text-info">
                        <h2>${manager.name}</h2>
                        <h3> ${manager.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <p><span class="font-weight-bold">ID: </span> ${manager.id}</p>
                        <p><span class="font-weight-bold">Email: </span><a id="link"
                                name="email" href="mailto:${manager.email}"> ${manager.email}</a></p>
                        <p><span class="font-weight-bold">Office Number: </span> ${manager.officeNumber}</p>
                    </div>
                </div>
    `
}

module.exports = {renderManager};