from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Register the blueprint after initializing the app
from routes.users import users_blueprint
app.register_blueprint(users_blueprint, url_prefix='/users')

# Only run the app if this script is executed directly
if __name__ == '__main__':
    app.run(debug=True)
