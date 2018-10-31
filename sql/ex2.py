import psycopg2
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    result = sqlq('SELECT * FROM CLIENTS')
    return render_template('table.html', result=result)

@app.route('/request')
def monthly_credits():
    result = []
    month = request.args.get('month')
    cred = request.args.get('cred')
    clients = request.args.get('clients')
    if month:
        result = sqlq(f"SELECT * FROM CLIENTS C JOIN CREDITS D ON c.client_id = d.client_id AND d.month = '{month}'")
    if cred == '0':
        result = sqlq(f"SELECT c.*, d.month, d.credits FROM CLIENTS C LEFT JOIN CREDITS D ON c.client_id = d.client_id where credits is NULL")
    if clients == '0':
        result = sqlq(f"SELECT c.*, d.* FROM CLIENTS C RIGHT JOIN CREDITS D ON c.client_id = d.client_id where name is NULL")
    return render_template('table.html',result=result)
    



def sqlq(arg):
    conn = psycopg2.connect("dbname=evolveu")
    cur = conn.cursor()
    
    cur.execute (arg)
    result = cur.fetchall()
    cur.close()
    conn.close()

    return result

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)