/* CAD5 Webpage JS - Yoerie Wolvekamp */
/* ---------- */

var embedPage	= null;
var navLinks	= null;

var componentRoot   = "./component/";
var componentNow	= null;

var liIndex	= {};


function setComponent( name )
{
	if( componentNow != name )
	{
		componentNow = name;

		$( "#embedpage" ).fadeOut( 100, function() {
			$( "#embedpage" ).load( componentRoot + name + ".html", null, function() {
				$( "#embedpage" ).fadeIn( 100 );
			} );
		} );
	}
}

window.onload = function() 
{
	/* Check for hash location; otherwise load index */
	if( window.location.hash.length > 1 )
	{
		setComponent( window.location.hash.substr( 1 ) );
	}
	else
	{
		window.location.hash = "#index";
	}
};

window.onhashchange = function()
{
	setComponent( window.location.hash.substr( 1 ) );
}