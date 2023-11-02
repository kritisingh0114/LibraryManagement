from flask import Flask

app = Flask(__name__)

# testing API route 
@app.route("/testing")
def testing():
    return {"testing": ["Testing", "testing", "123"]}

if __name__ == "__main__":
    app.run(debug=True)
