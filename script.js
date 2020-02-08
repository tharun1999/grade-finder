function gotAll() {
    let sub1 = document.getElementById("sub1")
    let sub2 = document.getElementById("sub2")
    let sub3 = document.getElementById("sub3")
    let sub4 = document.getElementById("sub4")
    let sub5 = document.getElementById("sub5")
    let sub6 = document.getElementById("sub6")
    let sub7 = document.getElementById("sub7")
    let sub8 = document.getElementById("sub8")
    let sub9 = document.getElementById("sub9")

    if (sub1.value != -1 && sub2.value != -1 && sub3.value != -1 && sub4.value != -1 && sub5.value != -1 && sub6.value != -1 && sub7.value != -1 && sub8.value != -1 && sub9.value != -1) {
        document.getElementById("grade").disabled = false
    } else {
        document.getElementById("grade").disabled = true
    }
}

function calculateGrade() {
    let sub1 = document.getElementById("sub1")
    let sub2 = document.getElementById("sub2")
    let sub3 = document.getElementById("sub3")
    let sub4 = document.getElementById("sub4")
    let sub5 = document.getElementById("sub5")
    let sub6 = document.getElementById("sub6")
    let sub7 = document.getElementById("sub7")
    let sub8 = document.getElementById("sub8")
    let sub9 = document.getElementById("sub9")

    let cum_sum = (sub1.value*2 + sub2.value*2 + sub3.value*2 + sub4.value*1 + sub5.value*4 + sub6.value*4 + sub7.value*3 + sub8.value*3 + sub9.value*3)
    let credits = 24
    let result_grade = cum_sum / credits
    document.getElementById("result").innerHTML = result_grade.toFixed(2)
}
