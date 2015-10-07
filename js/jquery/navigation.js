$(document).ready(function () {
    $(".project-link").click(function () {
        var currentProject = $(this).attr("id");
        $("#current-project:nth-child(1)").remove();
        $("#current-project").load(currentProject + ".html");
    });
});