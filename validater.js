function validater(id)	{
	let input = document.getElementById("email");
	let mailpattern = /^[a-zA-Z0-9.! #$%&'+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:. [a-zA-Z0-9-]+)$/;
	if (mailpattern.test(input.value))	{
		alert(input.value + " is a valid email!");
	}
	else	{
		alert("invalid input...");
	}
}
