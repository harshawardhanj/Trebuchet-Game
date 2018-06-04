var cylinder: Transform;
var startPos : Vector3;
var startRot : Quaternion;

function Start() {
    startPos = cylinder.transform.position;
    startRot = cylinder.transform.rotation;
}

function OnGUI () {
    if (GUI.Button (Rect (0,0,300,100), "Reset")) {
        transform.position = startPos;
        transform.rotation = startRot;
    }
}