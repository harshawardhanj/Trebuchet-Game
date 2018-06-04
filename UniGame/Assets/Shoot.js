var prefabProjectile:GameObject;
var shootForce:float = 5000.0 ;
var firingCube:GameObject;
var firingArm: GameObject;
var cylinder: GameObject;
var theTrebuchet: GameObject;
var targetCube: GameObject;
var moveUp: boolean = false;
var moveDown: boolean = false;

function Start(){
	moveUp = true;
}

function Update() 
{

if (Input.GetButtonDown("RotateArm"))
	{
		cylinder.transform.Rotate(Vector3(0,0,Mathf.Clamp(1,0,140))* Time.deltaTime*1000 );
		if (cylinder.transform.EulerAngles.z != null)
		{
			if (cylinder.transform.EulerAngles.z > 85 )
			{
				cylinder.transform.Rotate(Vector3(0,0,Mathf.Clamp(1,0,140))* Time.deltaTime*1000);
			}
			if (cylinder.transform.EulerAngles.z < 20)
			{
				cylinder.transform.Rotate(Vector3(0,0,Mathf.Clamp(1,0,140))* Time.deltaTime*1000);
			}
		} 
	}
	
			
if(Input.GetButtonDown("Jump"))
	{
	
		var instanceProjectile : GameObject = Instantiate(prefabProjectile, firingCube.transform.position,  firingCube.transform.rotation );
		firingCube.transform.LookAt(targetCube.transform);																					 //
		instanceProjectile.rigidbody.AddForce(-transform.right * 100000);
		
		//(firingCube.transform.rotation * shootForce); - non-consistant types
		//(Vector3(0,0,firingCube.EulerAngles.x) * shootForce);
		//(transform.Vector3(0, 1, 0) * shootForce);
		
											//transform.forward
											//firingCube.transform.rotation
		Destroy(instanceProjectile, 30);
	}	
				
}







		
			
