var prefabProjectile:Transform;
var shootForce:float;
var firingCube : Transform;
var firingArm : Transform;
var cylinder : Transform;


function Update() 
{	
	if(Input.GetButtonDown("RotateArm")
	{
		cylinder.transform.Rotate(Vector3(0,0,Mathf.Clamp(1,0,85.0))*Time.deltaTime*50);
		if ( cylinder.transform.EulerAngles.z > 85 )
		{
			cylinder.transform.Rotate(Vector3(0,0,Mathf.Clamp(-1,0,85.0))*Time.deltaTime*50);
		}
		
		if (cylinder.transform.EulerAngles.z < -50)
		{
			cylinder.transform.Rotate(Vector3(0,0,Mathf.Clamp(1,0,85.0))*Time.deltaTime*50);
		}
		
		
	if(Input.GetButtonDown("Jump"))
	{
		//if ( firingArm.transform.EulerAngles.z > 85.0 )
		
		var instanceProjectile = Instantiate(prefabProjectile, firingCube.transform.position, Quaternion.identity);
																							 //
		
		}
		instanceProjectile.rigidbody.AddForce(Vector3(0,0,firingCube.EulerAngles.z) * shootForce);
											//transform.forward
											//firingCube.transform.rotation
		
	}
}

}