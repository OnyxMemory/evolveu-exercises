from flask import Flask

app = Flask(__name__)

#POST - used to recieve data
#GET - used to send data back only

#POST /store data: {name: }
@app.route('/store', methods=['POST'])
def create_store():
    pass
#GET /store/<string:name>
#GET /store
#POST /store/<string:name>/item {name:, price:}
#GET /store/<string:name>/item