#pragma strict

var notAllowed = false;

function Start () {

}

function Update () {
	if(notAllowed == false)
	{
		if(Input.GetKeyDown(KeyCode.A))
		{
			moveMe('left');
		}
		if(Input.GetKeyDown(KeyCode.D))
		{
			moveMe('right');
		}
		if(Input.GetKeyDown(KeyCode.W))
		{
			moveMe('up');
		}
		if(Input.GetKeyDown(KeyCode.S))
		{
			moveMe('down');
		}
		
	}
}

function moveMe( whereTo )
{
	notAllowed = true;
	
	var i:int = 0;
	
	var step = 10;
	for(i = 1; i <= 9; i+=1)
	{
		yield new WaitForSeconds(0.001);
		switch(whereTo)
		{
			case 'left':
				transform.eulerAngles.z += step;
				break;
			case 'right':
				transform.eulerAngles.z -= step;
				break;
			case 'up':
				transform.eulerAngles.x += step;
				break;
			case 'down':
				transform.eulerAngles.x -= step;
				break;
		}
	}
	
	notAllowed = false;
}