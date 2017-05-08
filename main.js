window.Narwhal = {};
window.Narwhal.Make = (function( window ){
	var obj = {};

	var order_data = [{
		number: 102,
		date: "3/12/16",
		status: "placed",
		priority: "normal",
		vendor: "AndyMark",
		purchaser: "Tyler Carter",
		items:[{
			number: "B008GRTSV6",
			description: "Arduino Uno (Replacement for robot)",
			quantity: 2,
			unit_cost: 18.10,
		},{
			number: "B00009OY9U",
			description: "Replacement Joystick",
			quantity: 1,
			unit_cost: 34.99,
		},{
			number: "B0080CE5M4",
			description: "Wide-Angled camera for the drivers to be able to see the gear mechanism	",
			quantity: 1,
			unit_cost: 29.77,
		}],
	}];

	var processOrderData = function ( order_data ) {
		order_data.item_count = order_data.items.length;

		order_data.total_cost = 0;
		for ( var i = 0; i < order_data.item_count; i++ ) {
			order_data.items[i].total_cost = order_data.items[ i ].unit_cost * order_data.items[ i ].quantity;
			order_data.total_cost += order_data.items[i].total_cost;
		}
		return order_data;
	}

	console.log( processOrderData( order_data[0] ) );

	obj.init = function( viewer ){
		obj.viewer = viewer;
	};

	return obj;
})( window );
