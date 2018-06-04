var cubeRenderer:Renderer;

var buttonWidth:int = 200;
var buttonHeight:int = 50;
var spacing:int = 100;

function OnGUI () 
{
	/*
	var buttonName:String = "Trebuchet";
	if (cubeRenderer.material.color == Color.red)
		buttonName += " ";
	else 
		buttonName += " - Here Comes The Madness!";
		
	if (GUI.Button(Rect(0,0, 300, 100), buttonName))
	{
	if(cubeRenderer.material.color == Color.red)
		cubeRenderer.material.color = Color.white;
	else
		cubeRenderer.material.color = Color.red;
	}
	*/
	
	
	/*
	if(GUI.Button(Rect(Screen.width/2 - buttonWidth/2, Screen.height - buttonHeight/2 - spacing, buttonWidth, buttonHeight),"New Game"))
		{
			Application.LoadLevel("SceneTrebuchet2");
		}
	*/
	
	GUILayout.BeginArea(Rect(Screen.width/2 - buttonWidth/2, Screen.height/2 + 200, buttonWidth, 400));
		if(GUILayout.Button("Deploy the Trebuchet!", GUILayout.Height(buttonHeight)))
		{
			Application.LoadLevel("SceneTrebuchet2");
		}
		/*
		GUILayout.Space(spacing);
		if(GUILayout.Button("Continue", GUILayout.Height(buttonHeight)))
		{
		
		}
		GUILayout.Space(spacing);
		if(GUILayout.Button("Exit", GUILayout.Height(buttonHeight)))
		{
		
		}
		*/
	
	GUILayout.EndArea();
}