from flask import Flask, json
from bson import json_util
from processdata import return_food_list

app = Flask(__name__)

@app.route('/api/<location>/<date>/<meal>')
def food_api(location, date, meal):
    r = return_food_list(location, date, meal)
    return json.loads(json_util.dumps(r))

if __name__=="__main__":
    app.run(debug=True)