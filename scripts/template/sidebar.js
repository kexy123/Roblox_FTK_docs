fetch("/template/sidebar.html").then(response => response.text()).then(data => {
    document.getElementById("template-sidebar").innerHTML = data;
});