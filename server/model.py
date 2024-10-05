from app import db
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine('sqlite:///user.db')

Base = declarative_base()

class User(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    id_number = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    stage = db.Column(db.String(100), nullable=False)
    route = db.Column(db.String(100), nullable=False)
    registration_number = db.Column(db.String(100), nullable=False)
    license_number = db.Column(db.String(100), nullable=False)
    experience_years = db.Column(db.Integer, nullable=False)
    sacco_name = db.Column(db.String(100), nullable=True)
    capacity = db.Column(db.Integer, nullable=False)
    operating_days = db.Column(db.String(100), nullable=False)
    operating_hours = db.Column(db.String(100), nullable=False)
    additional_info = db.Column(db.String(100), nullable=True)
    confirm_details = db.Column(db.Boolean, nullable=False)
    agree_to_terms = db.Column(db.Boolean, nullable=False)

    def __init__(self, full_name, id_number, phone_number, email, stage, route, registration_number, license_number, experience_years, sacco_name, capacity, operating_days, operating_hours, additional_info, confirm_details, agree_to_terms):
        self.full_name = full_name
        self.id_number = id_number
        self.phone_number = phone_number
        self.email = email
        self.stage = stage
        self.route = route
        self.registration_number = registration_number
        self.license_number = license_number
        self.experience_years = experience_years
        self.sacco_name = sacco_name
        self.capacity = capacity
        self.operating_days = operating_days
        self.operating_hours = operating_hours
        self.additional_info = additional_info
        self.confirm_details = confirm_details
        self.agree_to_terms = agree_to_terms

    def __repr__(self):
        return f"User('{self.full_name}', '{self.id_number}', '{self.phone_number}', '{self.email}', '{self.stage}', '{self.route}', '{self.registration_number}', '{self.license_number}', '{self.experience_years}', '{self.sacco_name}', '{self.capacity}', '{self.operating_days}', '{self.operating_hours}', '{self.additional_info}', '{self.confirm_details}', '{self.agree_to_terms}')"