from flask import Blueprint, request, jsonify
from model import User
from app import db  # Import db here to avoid circular import

users_blueprint = Blueprint('users', __name__)


# Route to get all users
@users_blueprint.route('/', methods=['GET'])
def get_users():
    users = User.query.all()  # Fetch all users from the database
    users_list = []

    for user in users:
        users_list.append({
            'id': user.id,
            'full_name': user.full_name,
            'id_number': user.id_number,
            'phone_number': user.phone_number,
            'email': user.email,
            'stage': user.stage,
            'route': user.route,
            'registration_number': user.registration_number,
            'license_number': user.license_number,
            'experience_years': user.experience_years,
            'sacco_name': user.sacco_name,
            'capacity': user.capacity,
            'operating_days': user.operating_days,
            'operating_hours': user.operating_hours,
            'additional_info': user.additional_info,
            'confirm_details': user.confirm_details,
            'agree_to_terms': user.agree_to_terms
        })

    return jsonify(users_list), 200




@users_blueprint.route('/join', methods=['POST'])
def join():
  # Import User inside the function to avoid circular import

    data = request.get_json()
    new_user = User(
        full_name=data['fullName'],
        id_number=data['idNumber'],
        phone_number=data['phoneNumber'],
        email=data['email'],
        stage=data['stage'],
        route=data['route'],
        registration_number=data['registrationNumber'],
        license_number=data['licenseNumber'],
        experience_years=data['experienceYears'],
        sacco_name=data['saccoName'],
        capacity=data['capacity'],
        operating_days=data['operatingDays'],
        operating_hours=data['operatingHours'],
        additional_info=data['additionalInfo'],
        confirm_details=data['confirmDetails'],
        agree_to_terms=data['agreeToTerms']
    )

    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully!'}), 201
