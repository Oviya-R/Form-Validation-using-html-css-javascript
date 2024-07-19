function validationform(){
    var firstname=document.validateform.firstname.value;
    var lastname= document.validateform.lastname.value;
    var city= document.validateform.city.value;
    var number= document.validateform.number.value;
    var address= document.validateform.address.value;
    if(firstname==null || firstname==""){
        alert("Firstname should not be blank");
        return false;
    }
    else if(lastname==null || lastname==""){
         alert("Lastname should not be blank")
    }
    else if(city==null || city==""){
        alert("City name should not be blank");
        return false;
    }
    else if(number==null || number=="" ){
        alert("Number should not be blank");
        return false;
    }
    else if(address==null || address==""){
        alert("Address should not be blank");
        return false;
    }
        
}