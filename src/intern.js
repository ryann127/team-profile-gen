function renderIntern(intern){
    return `<div class="card text-center col-4 mx-3 shadow p-3 mb-5 bg-white rounded">
    <div class="card-header text-info">
        <h2>${intern.name}</h2>
        <h3> ${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <p><span class="font-weight-bold"> ID: </span> ${intern.id}</p>
        <p><span class="font-weight-bold">Email: </span><a id="link"
                name="email" href="mailto:${intern.email}"> ${intern.email}</a></p>
        <p><span class="font-weight-bold">School: </span>${intern.school}</p>
    </div>
</div>
    `
}

module.exports = {renderIntern};