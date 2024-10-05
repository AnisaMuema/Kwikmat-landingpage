from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

def create_app():
    from routes.users import users_blueprint
    app.register_blueprint(users_blueprint, url_prefix='/api/users')
    return app

if __name__ == '__main__':
    create_app().run(debug=True)