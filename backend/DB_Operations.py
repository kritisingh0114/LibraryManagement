import pymysql
from pytest import console_main
#database connection
connection = pymysql.connect(host="localhost", user="root", passwd="cs520mysqlinstaller!!", database="librarymanagement")
cursor = connection.cursor()
#inserting data to db
def add_text(text_value):
    cursor.execute("INSERT INTO mytable(ID, text_value) VALUES (DEFAULT, %s)", (text_value))
    connection.commit()
    return 1

def get_data():
    cursor.execute("SELECT * FROM mytable")
    rows = cursor.fetchall()    
    return rows

def remove_text(text):
    cursor.execute("DELETE FROM mytable where text_value = %s", (text))
    rows = cursor.fetchall()    
    return rows

#GETTER ROUTES
# Returns all authors
def get_all_authors():
    cursor.execute("SELECT * FROM authors")
    rows = cursor.fetchall()    
    return rows
# Returns all books
def get_all_books():
    cursor.execute("SELECT * FROM books")
    rows = cursor.fetchall()    
    return rows

# Returns all librarians
def get_all_librarians():
    cursor.execute("SELECT * FROM librarians")
    rows = cursor.fetchall()    
    return rows

# Returns all users
def get_all_users():
    cursor.execute("SELECT * FROM users")
    rows = cursor.fetchall()    
    return rows

# inserting sql
def add_author_op(new_author):
    cursor.execute("INSERT INTO authors(authorName) VALUES (%s)", (new_author))
    connection.commit()
    return 1

def add_book_op(new_book_isbn, new_book_title, new_book_author, new_book_genre, new_book_pubyear, new_book_synopsis, new_book_availability):
    cursor.execute("INSERT INTO books(isbn, bookTitle, bookAuthor, bookGenre, bookPubYear, bookSynopsis, bookAvailability) VALUES (%s, %s, %s, %s, %s, %s, %s)", (new_book_isbn, new_book_title, new_book_author, new_book_genre, new_book_pubyear, new_book_synopsis, new_book_availability))
    connection.commit()
    return 1

#searching sql
def search_author_op(search_author):
    cursor.execute("SELECT * from authors WHERE authorName LIKE '%{s}%'".format(s=search_author))
    connection.commit()
    rows = cursor.fetchall()
    return rows