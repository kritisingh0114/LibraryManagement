from flask import Flask, request, render_template, redirect, url_for
from DB_Operations import add_text, remove_text, get_data
app = Flask(__name__)
@app.route("/")
def helloworld():
    all_text = get_data()
    return render_template('index.html', all_text = all_text)

@app.route("/add_text", methods=["POST", "GET"])
def AddText():
    if request.method == "POST":
        text_value = request.form["textv"]
        #saving all the values to db
        add_new = add_text(text_value)
        return redirect(url_for('helloworld'))
    else:
        return render_template('index.html')
    
@app.route("/remove_text", methods=["POST", "GET"])
def RemoveText():
    if request.method == "POST":
        remove_text_value = request.form["textv"]
        #saving all the values to db
        remove_new = remove_text(remove_text_value)
        return redirect(url_for('helloworld'))
    else:
        return render_template('index.html')
if __name__ == "__main__":
    app.run(debug=True)