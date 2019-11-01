import numpy as np
from flask import Flask, render_template, request, make_response, jsonify, json      
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#-----------------database--------------

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:tpd2019@localhost:5432/ABCAutoShop'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(80), unique=False)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def __repr__(self):
        return '<User $r>' % self.username

class Vehicle(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    year = db.Column(db.String(4), unique=False)
    make = db.Column(db.String(120), unique=False)
    model = db.Column(db.String(120), unique=False)
    quantity = db.Column(db.Integer, unique=False)
    
    def __init__(self, year, make, model, quantity):
        self.year = year
        self.make = make
        self.model = model
        self.quantity = quantity


#----------------Mapping-----------------

@app.route("/")
def home():
    return render_template("index.html")
    
@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/signup")
def signup():
    return render_template("signup.html")

@app.route("/prices")
def prices():
    return render_template("prices.html")

@app.route("/carLookup")
def carLookup():
    return render_template("carLookup.html")

#-------------HTTP Request---------------

@app.route('/register', methods=['POST'])
def register():

    if(request.form['password'] != request.form['passwordConfirmation']):
        return 'password is not the same'

    user = User(request.form['username'], request.form['email'], request.form['password'])

    db.session.add(user)
    db.session.commit()
    return 'it is working'


@app.route('/getCars', methods=['GET'])
def getCars():
    myVehicles = Vehicle.query.all()
    arrayVehicles = (np.asarray(myVehicles))
    data = {}
    x = 0
    while x < len(arrayVehicles):
        
        data[x]= { 'year':arrayVehicles[x].year, 'make':arrayVehicles[x].make, 'model':arrayVehicles[x].model, 'quantity':arrayVehicles[x].quantity }
        x += 1

    data = json.dumps(data)
    return data


if __name__ == "__main__":
    app.run(debug=True)
