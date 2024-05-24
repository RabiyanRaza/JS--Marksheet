function FinalResul() {
  var mth = +document.getElementById("math-num").value;
  var phy = +document.getElementById("phy-num").value;
  var che = +document.getElementById("che-num").value;
  var eng = +document.getElementById("eng-num").value;
  var pst = +document.getElementById("pst-num").value;

  var obtmarks = mth + phy + che + eng + pst;

  document.getElementById("obt-marks").value = obtmarks;

  var per = (obtmarks * 100) / 500;

  document.getElementById("per").value = per;

  if (per > 90) {
    var grade = "A+";
  } else if (per > 80) {
    var grade = "A+";
  } else if (per >= 70) {
    var grade = "A";
  } else if (per > 60) {
    var grade = "B";
  } else if (per > 50) {
    var grade = "C";
  } else if (per > 40) {
    var grade = "D";
  } else {
    var grade = "FAIL";
  }

  document.getElementById("grade").value = grade;
}
