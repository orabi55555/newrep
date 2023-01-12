<html>

<head>


<title>

    Second WebPage
</title>

<link rel="stylesheet" 
href="style.css">


</head>
<body>


<div class="main">

</div>


<script>








while(true){
var age =prompt("please enter your age");
if (age==null) break
if(parseInt(age)<=0){
    alert('please enter positive number greater than zero');
}

if(age >=1&&age<=10) alert('child');
if(age >=11&&age<=18) alert('Teenager ');
if(age >=19&&age<=50) alert('Grown up ');
if(age>50)alert('Old');




}

</script>


</body>
</html>