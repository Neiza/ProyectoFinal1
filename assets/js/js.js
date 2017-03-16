
      var record      = document.getElementById("records");
      var add         = document.getElementById("agregar");
      var printAll    = document.getElementById("printAll");
      var update      = document.getElementById("update");
      var employable  = document.getElementById("employable");
      var allStudents = [];


      function StudentsRecords (name, techP, lifeP,status){
            this.name   = name;
            this.techP  = techP;
            this.lifeP  = lifeP;
            this.status = status;
            this.show   = function (){
            return this.name.toUpperCase() + "<br>" + "Tech Points: " + this.techP + "<br>" + "Life Points"+ this.lifeP + "<br>" + "Status: " + this.status;
            }
       }

  window.addEventListener("load", function(){
        add.addEventListener("click",function(event){
              event.preventDefault();
              var name= prompt("Input your name");
              var techP = prompt("Input TP");
              var lifeP = prompt("Input LP");

              var student = new StudentsRecords(name,techP,lifeP," active");
              allStudents.push(student);
              record.innerHTML= student.show();
        });


        printAll.addEventListener("click", function(){
              record.innerHTML="";
              var imprimir = "";
              allStudents.forEach(function(e){
                  imprimir= e.show();
                  record.innerHTML+= "<p>" +imprimir;
              });

        });


        update.addEventListener("click", function(){
              record.innerHTML="";
              var nameChangeStatus   = prompt("Input the name");
              var objectChangeStatus = allStudents.filter(function(e){
                  return e.name==nameChangeStatus;
              });

              objectChangeStatus[0].status = "inactive";
              record.innerHTML = objectChangeStatus[0].show();
        });


        employable.addEventListener("click", function(){
              record.innerHTML="";
              var addEmployability = allStudents.forEach(function(e){
                  e.employability = "";
                  if (e.lifeP<70 || e.techP<50){
                      e.employability = "No recommended";
                  }
                  if (e.techP>70){
                    e.employability = "Front-end Developer";
                  }
                  if (e.techP>50){
                    e.employability = "Prototyper";
                  }
                  e.show = function (){
                  return this.name.toUpperCase() + "<br>" + "Tech Points: " + this.techP + "<br>" + "Life Points"+ this.lifeP + "<br>" + "Status: " + this.status +
                         "<br> Empleabilidad: " +this.employability;
                  }
                  record.innerHTML += "<br>" + e.show();

              });
        });



});
