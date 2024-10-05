from flask import Blueprint, request, jsonify

users_blueprint = Blueprint('users', __name__)

@users_blueprint.route('/join', methods=['POST'])
def join():
    from app import db  # Import db here to avoid circular import
    from model import User  # Import User inside the function to avoid circular import

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
