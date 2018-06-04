function Start()
{
	while(true)
	{
	OnSelected(true);
	yield new WaitForSeconds(1.0);
	OnSelected(false);
	yield new WaitForSeconds(1.0);
	}
}

function OnSelected(on:boolean)
{
	if(on)
	{
	iTween.moveTo(gameObject,{"z":-1, "time":0.5});
	}
	else
	{
	iTween.moveTo(gameObject,{"z":0, "time":0.5});
	}
}