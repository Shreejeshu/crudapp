var selectedRow = null;


function displayAlert(message, className)
{
    const div = document.createElement("div");
    div.className=`alert alert-${className}`;

    div.appendChild(document.createTextNode(message))
    const container = document.querySelector(".container") 
    const main=document.querySelector(".main")
    container.insertBefore(div, main);
    setTimeout(()=> document.querySelector(".alert").remove(),3000)
}

//clear all 

function clearFields()
{
   document.querySelector("#id").value ="";
   document.querySelector("#name").value ="";
   document.querySelector("#description").value ="";
   document.querySelector("#salary").value ="";
}

//add data
document.querySelector("#employee-form").addEventListener("submit", (e)=>{
    e.preventDefault();

    const id=document.querySelector("#id").value;
    const name=document.querySelector("#name").value;
    const description=document.querySelector("#description").value;
    const salary=document.querySelector("#salary").value;
    if(id ==""|| name =="" || description ==""|| salary=="")
    {
       displayAlert("Please fill all the fields", "danger")

     
    }
    
    else{
        if(selectedRow==null)
        {
        const list=document.querySelector("#Employee-list");
    const row=document.createElement("tr");

    row.innerHTML=`

    <td>${id}</td>
    <td>${name}</td>
    <td>${description}</td>
    <td>${salary}</td>
    <td>
    <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
     `;

    list.appendChild(row);
    selectedRow=null;
    displayAlert("employee Added sucessfully", "success");
    
        }else{
            selectedRow.children[0].textContent= id;
            selectedRow.children[1].textContent= name;
            selectedRow.children[2].textContent= description;
            selectedRow.children[3].textContent= salary;
            selectedRow=null
             displayAlert("edited sucessfully" ,"info")
        }

        clearFields();
    }


})


//edit
document.querySelector("#Employee-list").addEventListener("click",(e)=>{
    target=e.target;
    if(target.classList.contains("edit")){
        selectedRow=target.parentElement.parentElement;
        document.querySelector("#id").value=selectedRow.children[0].textContent
        document.querySelector("#name").value=selectedRow.children[1].textContent
        document.querySelector("#description").value=selectedRow.children[2].textContent
        document.querySelector("#salary").value=selectedRow.children[3].textContent
    }
})

//delete data

document.querySelector("#Employee-list").addEventListener("click",(e)=>{
    target=e.target;
    if (target.classList.contains("delete")){
    target.parentElement.parentElement.remove();
displayAlert("Employee data deleted", "danger");
    }
})