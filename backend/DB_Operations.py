import pymysql
# from pytest import console_main
#database connection
def create_connection():
    return pymysql.connect(host="localhost", user="root", passwd="cs520mysqlinstaller!!", database="librarymanagement")

#GETTER ROUTES
# Returns all authors
def get_all_authors():
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM authors")
            rows = cursor.fetchall()    
            return rows
# Returns all books
def get_all_books():
    with create_connection() as connection: 

        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM books")
            rows = cursor.fetchall()    
            return rows

# Returns all librarians
def get_all_librarians():
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM librarians")
            rows = cursor.fetchall()    
            return rows

# Returns all users
def get_all_users():
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM users")
            rows = cursor.fetchall()    
            return rows

#UPDATING ROUTES
# updates a book to be checked out
def checkout_book_op(isbn):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("UPDATE books SET bookAvailability = 0 WHERE isbn = '{s}';".format(s=isbn))
            connection.commit()
            return 1
        
# updates a book to be checked out
def return_book_op(isbn):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("UPDATE books SET bookAvailability = 1 WHERE isbn = '{s}';".format(s=isbn))
            connection.commit()
            return 1


# INSERTING ROUTES
# Inserts new author
def add_author_op(new_author):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("INSERT INTO authors(authorName) VALUES (%s)", (new_author))
            connection.commit()
            return 1

# Inserts new book
def add_book_op(new_book_isbn, new_book_title, new_book_author, new_book_genre, new_book_pubyear, new_book_synopsis, new_book_availability):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("INSERT INTO books(isbn, bookTitle, bookAuthor, bookGenre, bookPubYear, bookSynopsis, bookAvailability) VALUES (%s, %s, %s, %s, %s, %s, %s)", (new_book_isbn, new_book_title, new_book_author, new_book_genre, new_book_pubyear, new_book_synopsis, new_book_availability))
            connection.commit()
            return 1

# Inserts new librarian
def add_librarian_op(new_lib_name, new_lib_email, new_lib_phone, new_is_lib, new_lib_password):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("INSERT INTO librarians(libName, libEmail, libPhone, isLib, libPassword) VALUES (%s, %s, %s, %s, %s)", (new_lib_name, new_lib_email, new_lib_phone, new_is_lib, new_lib_password))
            connection.commit()
            return 1

# Inserts new user
def add_user_op(new_user_name, new_user_email, new_user_phone):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("INSERT INTO users(userName, userEmail, userPhone) VALUES (%s, %s, %s)", (new_user_name, new_user_email, new_user_phone))
            connection.commit()
            return 1



#SEARCHING ROUTES
# Searches for specific author(s)
def search_author_op(search_author):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("SELECT * from authors WHERE authorName LIKE '%{s}%'".format(s=search_author))
            connection.commit()
            rows = cursor.fetchall()
            return rows

# Searches for specific book(s)
def search_book_op(search_book):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("SELECT * from books, authors WHERE books.bookAuthor = authors.authorID and (isbn LIKE '%{s}%' or bookTitle LIKE '%{s}%' or bookAuthor LIKE '%{s}%' or bookGenre LIKE '%{s}%' or bookPubYear LIKE '%{s}%' or authors.authorName LIKE '%{s}%')".format(s=search_book))

            # cursor.execute("SELECT * from books, authors WHERE books.bookAuthor = authors.authorID and (isbn LIKE '%{s}%' or bookTitle LIKE '%{s}%' or bookAuthor LIKE '%{s}%' or bookGenre LIKE '%{s}%' or bookPubYear LIKE '%{s}%' or  bookSynopsis LIKE '%{s}%' or authors.authorName LIKE '%{s}%')".format(s=search_book))
            connection.commit()
            rows = cursor.fetchall()
            return rows

# Searches for specific librarians(s)
def search_librarian_op(search_librarian):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("SELECT * from librarians WHERE librarianID LIKE '%{s}%' or libName LIKE '%{s}%' or libPhone LIKE '%{s}%' or libEmail LIKE '%{s}%'".format(s=search_librarian))
            connection.commit()
            rows = cursor.fetchall()
            return rows

# Searches for specific user(s)
def search_user_op(search_user):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("SELECT * from users WHERE userID LIKE '%{s}%' or userName LIKE '%{s}%' or userPhone LIKE '%{s}%' or userEmail LIKE '%{s}%'".format(s=search_user))
            connection.commit()
            rows = cursor.fetchall()
            return rows

# Searches for a sinlge user
def search_single_user_op(search_user):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("SELECT * from users WHERE userID = '{s}'".format(s=search_user))
            connection.commit()
            rows = cursor.fetchall()
            return rows
        
# REMOVE ROUTES
#remove an author from the table
def remove_author_op(remove_author):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("DELETE FROM authors where authorName = '{s}'".format(s=remove_author))
            connection.commit()
            rows = cursor.fetchall()
            return rows
        
#remove a book from the table
def remove_book_op(remove_book):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("DELETE FROM books where isbn = '{s}'".format(s=remove_book))
            connection.commit()
            rows = cursor.fetchall()
            return rows
        
#remove a librarian from the table
def remove_librarian_op(remove_lib):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("DELETE FROM librarians where libEmail = '{s}'".format(s=remove_lib))
            connection.commit()
            rows = cursor.fetchall()
            return rows

#remove a user from the table
def remove_user_op(remove_user):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("DELETE FROM users where userEmail = '{s}'".format(s=remove_user))
            connection.commit()
            rows = cursor.fetchall()
            return rows

        
# DATABASE INFO ROUTES
# size of the authors table
def size_authors_op():
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("SELECT count(*) from authors")
            connection.commit()
            size = cursor.fetchall()
            return size
        
# size of the books table
def size_books_op():
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("SELECT count(*) from books")
            connection.commit()
            size = cursor.fetchall()
            return size
        
# size of the librarians table
def size_librarians_op():
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("SELECT count(*) from librarians")
            connection.commit()
            size = cursor.fetchall()
            return size
        
# size of the users table
def size_users_op():
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("SELECT count(*) from users")
            connection.commit()
            size = cursor.fetchall()
            return size
        
# LOGIN ROUTES
# Verify Login for Librarians
def check_librarian_info(username, password):
    with create_connection() as connection: 
        with connection.cursor() as cursor:
            cursor.execute("SELECT librarianID, isLib FROM librarians WHERE libEmail = '{u}'".format(u=username, p=password))
            connection.commit()
            rows = cursor.fetchall()
            return rows