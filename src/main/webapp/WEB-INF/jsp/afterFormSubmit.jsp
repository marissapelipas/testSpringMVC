<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html>
<head>
    <title>Spring MVC Form</title>
</head>
<body>

<h2>Submitted User Information</h2>
   <table>
    <tr>
        <td>User name</td>
        <td>${userName}</td>
    </tr>
    <tr>
        <td>Full Name</td>
        <td>${fullName}</td>
    </tr>
    <tr>
        <td>Age</td>
        <td>${age}</td>
    </tr>
</table>  
</body>
</html>