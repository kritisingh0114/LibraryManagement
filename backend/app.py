#test
from flask import *
from DB_Operations import *
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route("/")
def display_all_data():
    all_authors_data = get_all_authors()
    all_books_data = get_all_books()
    all_librarians_data = get_all_librarians()
    all_users_data = get_all_users()
    return render_template('index.html', 
                           authors_data = all_authors_data, 
                           books_data = all_books_data, 
                           librarians_data = all_librarians_data, 
                           users_data = all_users_data)

@app.route("/add_author", methods=["POST", "GET"])
def add_author():
    if request.method == "POST":
        add_new_author = request.form["text_add_author"]
        add_new = add_author_op(add_new_author)
        return redirect(url_for('display_all_data'))
    else:
        return render_template('index.html')
    
@app.route("/add_book", methods=["POST", "GET"])
def add_book():
    if request.method == "POST":
        new_book_isbn = request.form["new_book_isbn"]
        new_book_title = request.form["new_book_title"]
        new_book_author = request.form["new_book_author"]
        new_book_genre = request.form["new_book_genre"]
        new_book_pubyear = request.form["new_book_pubyear"]
        new_book_synopsis = request.form["new_book_synopsis"]
        new_book_availability = request.form["new_book_availability"]
        add_new = add_book_op(new_book_isbn, new_book_title, new_book_author, new_book_genre, new_book_pubyear, new_book_synopsis, new_book_availability)
        return redirect(url_for('display_all_data'))
    else:
        return render_template('index.html')
    
@app.route("/add_librarian", methods=["POST", "GET"])
def add_librarian():
    if request.method == "POST":
        new_lib_name = request.form["new_lib_name"]
        new_lib_email = request.form["new_lib_email"]
        new_lib_phone = request.form["new_lib_phone"]
        add_new = add_librarian_op(new_lib_name, new_lib_email, new_lib_phone)
        return redirect(url_for('display_all_data'))
    else:
        return render_template('index.html')
    
@app.route("/add_user", methods=["POST", "GET"])
def add_user():
    if request.method == "POST":
        new_user_name = request.form["new_user_name"]
        new_user_email = request.form["new_user_email"]
        new_user_phone = request.form["new_user_phone"]
        add_new = add_librarian_op(new_user_name, new_user_email, new_user_phone)
        return redirect(url_for('display_all_data'))
    else:
        return render_template('index.html')

@app.route('/search_authors', methods=['GET', 'POST'])  
def search_author():
    if request.method == "POST":
        # all_authors_data = get_all_authors()
        # all_books_data = get_all_books()
        # all_librarians_data = get_all_librarians()
        # all_users_data = get_all_users()
        text_search_author = request.form["text_search_author"]
        author_search_data = search_author_op(text_search_author)
        json_author_search_data = json.dumps(author_search_data)
    if request.method == "GET":
        text_search_author = request.args.get("text_search_author")
        author_search_data = search_author_op(text_search_author)
        json_author_search_data = json.dumps(author_search_data)
    return json_author_search_data

    
@app.route('/search_books', methods=['GET', 'POST'])  
def search_book():
    
    if request.method == "POST":
        # all_authors_data = get_all_authors()
        # all_books_data = get_all_books()
        # all_librarians_data = get_all_librarians()
        # all_users_data = get_all_users()
        text_search_book = request.form["text_search_book"]
        book_search_data = search_book_op(text_search_book)
        json_book_search_data = json.dumps(book_search_data)
    if request.method == "GET":
        text_search_book = request.args.get("text_search_book")
        book_search_data = search_book_op(text_search_book)
        json_book_search_data = json.dumps(book_search_data)
    return json_book_search_data

@app.route('/search_librarians', methods=['GET', 'POST'])  
def search_librarians():
    if request.method == "POST":
        # all_authors_data = get_all_authors()
        # all_books_data = get_all_books()
        # all_librarians_data = get_all_librarians()
        # all_users_data = get_all_users()
        text_search_librarain = request.form["text_search_librarain"]
        librarian_search_data = search_librarian_op(text_search_librarain)
        json_librarian_search_data = json.dumps(librarian_search_data)
    if request.method == "GET":
        text_search_librarain = request.args.get("text_search_librarain")
        librarian_search_data = search_librarian_op(text_search_librarain)
        json_librarian_search_data = json.dumps(librarian_search_data)
    return json_librarian_search_data

@app.route('/search_users', methods=['GET', 'POST'])  
def search_users():
    if request.method == "POST":
        # all_authors_data = get_all_authors()
        # all_books_data = get_all_books()
        # all_librarians_data = get_all_librarians()
        # all_users_data = get_all_users()
        text_search_user = request.form["text_search_user"]
        user_search_data = search_librarian_op(text_search_user)
        json_search_data = json.dumps(user_search_data)
    if request.method == "GET":
        text_search_user = request.args.get("text_search_user")
        user_search_data = search_librarian_op(text_search_user)
        json_search_data = json.dumps(user_search_data)
    return json_search_data

@app.route('/search_single_user', methods=['GET', 'POST'])  
def search_single_users():
    if request.method == "POST":
        text_search_single_user = request.form["text_search_single_user"]
        single_user_search_data = search_single_user_op(text_search_single_user)
        json_single_user_search_data = json.dumps(single_user_search_data)
    if request.method == "GET":
        text_search_single_user = request.args.get("text_search_single_user")
        single_user_search_data = search_single_user_op(text_search_single_user)
        json_single_user_search_data = json.dumps(single_user_search_data)
    return json_single_user_search_data
    
    
if __name__ == "__main__":
    app.run(debug=True)