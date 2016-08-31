<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html>
<head>
    <title>Spring MVC Samples</title>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> 
</head>
<body>
<h3>Spring MVC using Form-backing object</h3>
<form:form id="mvcForm1" method="POST" action="/testSpringMVC/submitUserForm">
   <table>
    <tr>
        <td><form:label path="username">User name</form:label></td>
        <td><form:input path="username" /></td>
    </tr>
    <tr>
        <td><form:label path="fullname">Full name</form:label></td>
        <td><form:input path="fullname" /></td>
    </tr>    
    <tr>
        <td><form:label path="age">Age</form:label></td>
        <td><form:input path="age" /></td>
    </tr>
    <tr>
        <td colspan="2">
            <input type="submit" value="Submit"/>
        </td>
    </tr>
</table>  
</form:form>
<hr>
<h3>Spring MVC using Old Rest MVC Annotion</h3>
<form id="mvcForm2" method="POST" action="/testSpringMVC/OldStyleRest">
   <table>
    <tr>
        <td>User name</td>
        <td><input type="text" id="username" name="username" /></td>
    </tr>
    <tr>
        <td>Full name</td>
        <td><input type="text" id="fullname" name="fullname" /></td>
    </tr>    
    <tr>
        <td>Age</td>
        <td><input type="text" id="age" name="age" /></td>
    </tr>
    <tr>
        <td colspan="2">
            <input id="submitAsAjax1" type="button" value="Submit as JSON over AJAX"/>
        </td>
    </tr>
</table>
<br>
<p id="mvcForm2ServerResponse">
</p>  
</form>
</body>
<script>
	
	$(function() {
		
		$('#submitAsAjax1').on('click', function() {
			var btn = $(this);
			
			btn.prop( "disabled", true );
			
			var frm = $("#mvcForm2");
			var formData = frm.serializeArray();
			var formFieldsAsJson = {};
            jQuery.each(formData, function (i, obj) {
            	console.log('key: ' + obj.name + ' and value: ' + obj.value);
                formFieldsAsJson[obj.name] = obj.value;
            });			
			
			
		    $.ajax({
		        url: $("#mvcForm2").attr( "action") + "/submitUserForm/" ,
		        data: JSON.stringify(formFieldsAsJson),
		        type: "POST",
                dataType: "json",
                contentType: 'application/json',
                
		        beforeSend: function(xhr) {
		            xhr.setRequestHeader("Accept", "application/json");
		            xhr.setRequestHeader("Content-Type", "application/json");
		        },
		        success: function(respData, textStatus, jqXhr) {
		        	
		        	console.log(respData);
		        	
		            $("#mvcForm2ServerResponse").text( JSON.stringify(respData, undefined, 4) );
		            btn.prop( "disabled", false);
		        },
		        error: function (jqXhr, textStatus, error) {
		        	console.log('Error (' + textStatus + '): ' + error);
		        	btn.prop( "disabled", false);
		        }
		    });			
			
		})
		
		
	});
	
	
</script>
</html>