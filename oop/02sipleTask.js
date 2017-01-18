function checkName (name) {
    if (/^[a-zA-Z][a-zA-Z0-9]{5,15}$/.test(name)) {
        console.log(`Check Name ok.`)
    } else {
        console.log('Name invalid.')
    }
}

function checkEmail (email) {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/.test(email)) {
        console.log(`Check email ${email}`)
    }
    else {
        console.log("email invalid.")
    }
}

checkName('fanlie');
checkEmail("fanlilong@huawei.com");
