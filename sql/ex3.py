import psycopg2
import json
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
	return "hello world"

@app.route('/client/<id>')
def get_client(id):
	result = sqlq(f'SELECT * FROM CLIENTS WHERE client_id={id}')
	x=json.dumps({
		'client_id':result[0],
		'name': result[1],
		'email': result[2],
		'city': result[3],
		'birth_year': result[4]
		})
	return x

def sqlq(arg):
    conn = psycopg2.connect("dbname=evolveu")
    cur = conn.cursor()
    
    cur.execute (arg)
    result = cur.fetchone()
    cur.close()
    conn.close()

    return result

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)