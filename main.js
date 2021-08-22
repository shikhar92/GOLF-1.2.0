
// Create canvas variable
canvas=new fabric.Canvas("myCanvas");


//Set initial positions for ball and hole images.
ballx=0;
bally=0;
holex=500;
holey=300;
block_image_width = 25;
block_image_height = 25;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png",function (Img)
	{
hobject=Img;
hobject.scaleToWidth(50);
hobject.scaleToHeight(50);
hobject.set({
top:holey,left:holex	
});
canvas.add(hobject);
	}
	);
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function (Img)
	{
bobject=Img;
bobject.scaleToHeight(block_image_height);
bobject.scaleToWidth(block_image_width);
bobject.set({
top:bally,left:ballx
});
canvas.add(bobject);
}
	);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ballx==holex)&&(bally==holey)){
	canvas.remove(bobject);
	document.getElementById("hd3").innerHTML="YOU HIT THE GOAL";
	document.getElementById("myCanvas").style.borderColor="red";	
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(bally>=5)
		{
bally=bally-10;
canvas.remove(bobject);
new_image();
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(bally<=450)
		 {
			 bally=bally+10;
			 canvas.remove(bobject);
			 new_image();
		 }
	}

	function left()
	{
		if(ballx >5)
		{
			// Write a code to move ball left side.
			ballx=ballx-10;
			canvas.remove(bobject);
			new_image();
		}
	}

	function right()
	{
		if(ballx <=1050)
		{
			// Write a code to move ball right side.
			ballx=ballx+10;
			canvas.remove(bobject);
			new_image();
		}
	}
	
}

