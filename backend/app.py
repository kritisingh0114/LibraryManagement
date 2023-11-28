#test
from flask import *
from DB_Operations import *
app = Flask(__name__)
@app.route("/")
def display_data():
    all_authors_data = get_all_authors()
    all_books_data = get_all_books()
    all_librarians_data = get_all_librarians()
    all_users_data = get_all_users()
    return render_template('index.html', 
                           authors_data = all_authors_data, 
                           books_data = all_books_data, 
                           librarians_data = all_librarians_data, 
                           users_data = all_users_data)

@app.route("/add_text", methods=["POST", "GET"])
def AddText():
    if request.method == "POST":
        text_value = request.form["textv"]
        #saving all the values to db
        add_new = add_text(text_value)
        return redirect(url_for('display_data'))
    else:
        return render_template('index.html')
    
@app.route("/remove_text", methods=["POST", "GET"])
def RemoveText():
    if request.method == "POST":
        remove_text_value = request.form["textv"]
        #saving all the values to db
        remove_new = remove_text(remove_text_value)
        return redirect(url_for('display_data'))
    else:
        return render_template('index.html')
    
if __name__ == "__main__":
    app.run(debug=True)