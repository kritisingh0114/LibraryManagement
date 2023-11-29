import pymysql
from pytest import console_main
#database connection
connection = pymysql.connect(host="localhost", user="root", passwd="cs520mysqlinstaller!!", database="librarymanagement")
cursor = connection.cursor()

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



# INSERTING ROUTES
# Inserts new author
def add_author_op(new_author):
    cursor.execute("INSERT INTO authors(authorName) VALUES (%s)", (new_author))
    connection.commit()
    return 1

# Inserts new book
def add_book_op(new_book_isbn, new_book_title, new_book_author, new_book_genre, new_book_pubyear, new_book_synopsis, new_book_availability):
    cursor.execute("INSERT INTO books(isbn, bookTitle, bookAuthor, bookGenre, bookPubYear, bookSynopsis, bookAvailability) VALUES (%s, %s, %s, %s, %s, %s, %s)", (new_book_isbn, new_book_title, new_book_author, new_book_genre, new_book_pubyear, new_book_synopsis, new_book_availability))
    connection.commit()
    return 1

# Inserts new librarian
def add_librarian_op(new_lib_name, new_lib_email, new_lib_phone):
    cursor.execute("INSERT INTO librarians(libName, libEmail, libPhone) VALUES (%s, %s, %s)", (new_lib_name, new_lib_email, new_lib_phone))
    connection.commit()
    return 1



#SEARCHING ROUTES
# Searches for specific author(s)
def search_author_op(search_author):
    cursor.execute("SELECT * from authors WHERE authorName LIKE '%{s}%'".format(s=search_author))
    connection.commit()
    rows = cursor.fetchall()
    return rows

# Searches for specific book(s)
def search_book_op(search_book):
    cursor.execute("SELECT * from books, authors WHERE books.bookAuthor = authors.authorID and (isbn LIKE '%{s}%' or bookTitle LIKE '%{s}%' or bookAuthor LIKE '%{s}%' or bookGenre LIKE '%{s}%' or bookPubYear LIKE '%{s}%' or  bookSynopsis LIKE '%{s}%' or authors.authorName LIKE '%{s}%')".format(s=search_book))
    connection.commit()
    rows = cursor.fetchall()
    return rows

# Searches for specific librarians(s)
def search_librarian_op(search_librarian):
    cursor.execute("SELECT * from librarians WHERE librarianID LIKE '%{s}%' or libName LIKE '%{s}%' or libPhone LIKE '%{s}%' or libEmail LIKE '%{s}%'".format(s=search_librarian))
    connection.commit()
    rows = cursor.fetchall()
    return rows

# Searches for specific user(s)
def search_user_op(search_user):
    cursor.execute("SELECT * from users WHERE userID LIKE '%{s}%' or userName LIKE '%{s}%' or userPhone LIKE '%{s}%' or userEmail LIKE '%{s}%'".format(s=search_user))
    connection.commit()
    rows = cursor.fetchall()
    return rows