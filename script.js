let employee = document.getElementById('employee');
let e=document.getElementById('prof');

const userData = [
    {id:1, name:"John",age:"18",profession:"developer"},
    {id:2, name:"Jack",age:"20", profession:"developer"},
    {id:3, name:"Karen", age:"19",profession:"admin"}
]

let strProf='';
function selectProf(){
    // strProf=e.options[e.selectedIndex].text;
    strProf=e.options[e.selectedIndex].value;;
    console.log(strProf);
}
// prof = prof.map(item => ({...item,age:parseInt(item.age,10)}))
prof = userData.map(function(item,index){
    return ({
        id:item.id,
        name:item.name,
        age: parseInt(item.age,10),
        profession:item.profession
    })
})

prof.forEach(item => {
    // result.push({...item,age:item.name =='john' ? 19 : item.age})
    if(item.name =='john'){
        item.age=19;
    }
})

const list=[...userData];

function render(item){
    employee.innerHTML = item.reduce((htmlString, item) => {
        return htmlString + `
            <div class="employeeItem">
                <span>
                    ${item.id}.
                </span>
                <span>
                    name: ${item.name}
                </span>
                <span>
                    age: ${item.age}
                </span>
                <span>
                    profession: ${item.profession}
                </span>
                
            </div>
        `;
    }, "");

}
render(list);
function filter(){
    console.log(strProf)
    if(strProf=='') 
    return alert('Please select Profession!')
    result=list.filter(item => item.profession==strProf);
    render(result);
    console.log(result)

}

let addName = document.getElementById("name");
let addProfession = document.getElementById("profession");
let addAge = document.getElementById("age");

let aadBtn = document.getElementById("button");


function addUser() {
    let Uname = addName.value;
    let age = addAge.value;
    let prf = addProfession.value;

    let newAdd = userData.length;
    ++newAdd;

    let newLists = { 
        id: newAdd, 
        name: `${Uname}`, 
        age: `${age}`,
        profession: `${prf}`
     }

    if(Uname !== "" && 
       age !== "" && 
       prf !== "")

    {
        userData.push(newLists);
    }

    else
    {
        alert("Please insert all the Details!")
    }

    console.log(userData);

    addName.value = "";
    addAge.value = "";
    addProfession.value = "";

}

aadBtn.addEventListener("click", addUser);
