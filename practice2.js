function alert_paragraph_color() {
    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;
    var border_width = document.getElementById("border_width").value;
    var bg_R = document.getElementById("bg_R").value;
    var bg_G = document.getElementById("bg_G").value;
    var bg_B = document.getElementById("bg_B").value;

    border_R = clampRbgValue(border_R);
    border_G = clampRbgValue(border_G);
    border_B = clampRbgValue(border_B);
    bg_R = clampRbgValue(bg_R);
    bg_G = clampRbgValue(bg_G);
    bg_B = clampRbgValue(bg_B);

    var tag = document.getElementById("paragraph");

    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    tag.style.borderWidth = border_width + "px";
    tag.style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;
}

function clampRbgValue(value) {
    return Math.max(0, Math.min(255, parseInt(value)));
}
