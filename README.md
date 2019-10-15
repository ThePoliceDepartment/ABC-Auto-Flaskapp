# ABC-Auto-Flaskapp

virtual env:
pip install virtualenv

create virtual environment:
virtualenv env

activate environment:
cd env/scripts
activate 
(make sure you are always using the vir env)

dir back to orignial folder:
cd ..
cd ..

install Flask, Flask-SQLAlchemy, and numpy:
pip install Flask
pip install Flask-SQLAlchemy
pip install numpy

Download Postgres:
https://www.postgresql.org/

*db connection is based on your postgres info

'postgresql://(username):(password)@(host:port)/(nameOfDatabase)'

install psycopg2 in run db commands:
pip install psycopg2

Create database by:
on cmd run python shell by typing 'python'
then import the db to the server api by typing 'from server import db'
then create the database using the query 'db.create_all()'  (code for creating the user and vehicles are already made)

start the server by: 
running the python file 'py server.py'

open the browser and copy and paste your localhost in the url


