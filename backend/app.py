#test
from flask import *
from DB_Operations import *
app = Flask(__name__)
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

@app.route('/search_authors', methods=['GET', 'POST'])  
def search_author():
    if request.method == "POST":
        all_authors_data = get_all_authors()
        all_books_data = get_all_books()
        all_librarians_data = get_all_librarians()
        all_users_data = get_all_users()
        text_search_author = request.form["text_search_author"]
        author_search_data = search_author_op(text_search_author)
    return render_template('index.html', authors_data = all_authors_data, 
                           books_data = all_books_data, 
                           librarians_data = all_librarians_data, 
                           users_data = all_users_data,
                           author_search_data = author_search_data)

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
    
@app.route('/search_books', methods=['GET', 'POST'])  
def search_book():
    if request.method == "POST":
        all_authors_data = get_all_authors()
        all_books_data = get_all_books()
        all_librarians_data = get_all_librarians()
        all_users_data = get_all_users()
        text_search_book = request.form["text_search_book"]
        book_search_data = search_book_op(text_search_book)
    return render_template('index.html', authors_data = all_authors_data, 
                           books_data = all_books_data, 
                           librarians_data = all_librarians_data, 
                           users_data = all_users_data,
                           book_search_data = book_search_data)
    
    
# @app.route("/add_text", methods=["POST", "GET"])
# def AddText():
#     if request.method == "POST":
#         text_value = request.form["textv"]
#         #saving all the values to db
#         add_new = add_text(text_value)
#         return redirect(url_for('display_data'))
#     else:
#         return render_template('index.html')
    
# @app.route("/remove_text", methods=["POST", "GET"])
# def RemoveText():
#     if request.method == "POST":
#         remove_text_value = request.form["textv"]
#         #saving all the values to db
#         remove_new = remove_text(remove_text_value)
#         return redirect(url_for('display_data'))
#     else:
#         return render_template('index.html')
    
if __name__ == "__main__":
    app.run(debug=True)