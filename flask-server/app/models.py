import datetime
from . import db

class ParkingLots(db.Model):
    __tablename__ = 'parking_lot_information'


    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    location = db.Column(db.String(100))
    coordinates = db.Column(db.String(40))
    current_capacity = db.Column(db.Integer)
    max_capacity = db.Column(db.Integer)
    opening_time = db.Column(db.Time)
    closing_time = db.Column(db.Time)
    amenities = db.Column(db.String(200))


    def __init__(self, id, name, location,coordinates, free_spaces, max_capacity, opening_time, closing_time, amenities):
        self.id = id
        self.name = name
        self.location = location
        self.coordinates = coordinates
        self.free_spaces = free_spaces
        self.max_capacity = max_capacity
        self.opening_time = opening_time
        self.closing_time = closing_time
        self.amenities = amenities


    def __repr__(self):
        return f'<ParkingLot {self.name}>'

    def is_open(self):
        """Check if the parking lot is currently open."""
        current_time = datetime.datetime.now().time()
        # Check if the current time is between opening and closing time
        return self.opening_time <= current_time <= self.closing_time

    def available_spaces(self):
        """Calculate the number of available parking spaces."""
        return self.max_capacity - self.current_capacity
    


    def update_capacity(self, new_capacity):
        """Update the current capacity of the parking lot."""
        self.current_capacity = new_capacity
        db.session.commit()