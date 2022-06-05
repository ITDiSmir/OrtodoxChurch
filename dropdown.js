function dropdown() {
    var dropdown = document.getElementsByClassName("submenu")[0];
    dropdown.classList.toggle("active");

    var sidebar = document.getElementsByClassName("sidebar")[0];
    sidebar.classList.toggle("dropdown");
}
// there is written dropdown function(is used a toggle method)