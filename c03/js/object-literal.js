var hotel = {
	name: 'Park',
	rooms: 120,
	booked: 77,
	checkAvailability: function() {
		return this.rooms = this.booked;
	}
};

var elName = document.getElementId('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementId('rooms');
elRooms.textContent = hotel.checkAvailability();