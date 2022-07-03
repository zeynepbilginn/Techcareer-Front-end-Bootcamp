let ClassList = ["1A", "1B", "1C", "2A", "2B", "2C"];
let StudentList = [{}];
let LessonsList = ["Matematik", "Biyoloji", "Fizik", "Türkçe", "Ýngilizce"];




function GenerateStudent() {

    var Student = {
        Number: 0,
        Name: "",
        Class: {
            ClassId: 0,
            ClassName: ""
        },
        Lastname: "",
        MotherName: "",
        FatherName: "",
        Lessons: []
    };

    Student.Number = document.getElementById("TxtStudentNumber").value;
    Student.Name = document.getElementById("TxtStudentName").value;
    Student.Class.ClassId = document.getElementById("CmbClass").value;
    Student.Class.ClassName = FindClassNameByIndex(Student.Class.ClassId);
    Student.Lastname = document.getElementById("TxtStudentLastName").value;
    Student.MotherName = document.getElementById("TxtMotherName").value;
    Student.FatherName = document.getElementById("TxtFatherName").value;
    AddStudent(Student);


}

function DisplayLessonsList() {
    var CmbLessons = document.getElementById("CmbLessons");
    LessonsList.forEach((ALesson, AIndex) => {
        var opt = document.createElement("option");
        opt.value = AIndex;
        opt.text = ALesson;
        CmbLessons.add(opt);
    });

}

function SetLessonToStudent() {
    var StudentNumber = document.getElementById("CmbStudentList").value;
    var Lesson = document.getElementById("CmbLessons").value;

    StudentList.forEach((AStudent) => {
        if (AStudent.Number === StudentNumber) {
            AStudent.Lessons.push(Lesson);
        }
    });

}


function AddStudent(IStudent) {
    StudentList.push(IStudent);
}


function DisplayStudentList() {

    var CmbStudentList = document.getElementById('CmbStudentList');
    

    if (StudentList.length > 0) {
        StudentList.forEach((AStudent, AIndex) => {
            if (AStudent !== undefined) {
                if (AStudent.Name !== undefined) {
                    //DvStudentList.innerHTML += AStudent.Name + " " + AStudent.Lastname + " " + AStudent.Number + "<br>";
                    var Opt = document.createElement("option");
                    Opt.value = AStudent.Number;
                    Opt.text = AStudent.Name + " " + AStudent.Lastname;
                    CmbStudentList.add(Opt);
                }
            }
            
        });
    }

}

function FindClassNameByIndex(Iindex) {
    var result = "";
    var Obj = ClassList.find((AValue, AIndex) => {
        if (AIndex === Iindex) {
            result = AValue;
        }
    });
    return result;
}


function GenerateClassList() {
    var CmbClass = document.getElementById('CmbClass');

    if (CmbClass === undefined) {
        alert("Tanýmlý Deðil.");
        return;
    }

    //Arrow function
    ClassList.forEach((IValue, Iindex) => {
        let ClassOption = document.createElement("option");
        ClassOption.value = Iindex;
        ClassOption.text = IValue;
        CmbClass.add(ClassOption);
    });



   

    //For döngüsü
    //for (var i = 0; i < ClassList.length; i++) {
    //    let ClassOption = document.createElement("option");
    //    ClassOption.value = i + 1;
    //    ClassOption.text = ClassList[i];
    //    CmbClass.add(ClassOption);
    //}

    //callback function
    //ClassList.forEach(OnReturnMyArray);

}

//function OnReturnMyArray(IValue, Iindex) {
//    alert(IValue + " " + Iindex);
//}

//for (var i in ClassList) {
//    alert(i);
//}