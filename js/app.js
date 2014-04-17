$(document).foundation();
var loginForm = $("#login-form").html();
Handlebars.registerPartial("login", loginForm);
var loginTemplate = Handlebars.compile(loginForm);