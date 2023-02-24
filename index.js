const loadData = () => {
    fetch('raju.json').then(res => res.json()).then(data => displayData(data))


}

const displayData = (user) => {
    document.getElementById('person-1-name').innerText = user.result[0].name.common;
    document.getElementById('age-1').innerText = user.result[0].age;
    document.getElementById('street-1').innerText = user.result[0].address.street;
    document.getElementById('name-2').innerText = user.result[1].name.common;
    document.getElementById('age-2').innerText = user.result[1].age;
    document.getElementById('street-2').innerText = user.result[1].address.street;

}
loadData();