import unittest
from DB_Operations import *
from app import app
import json

class AppTestCase(unittest.TestCase):
    def setUp(self):
        self.ctx = app.app_context()
        self.ctx.push()
        self.client = app.test_client()

    def tearDown(self):
        self.ctx.pop()

    def test_home(self):
        response = self.client.post("/test_route", data={"content": "hello world"})
        assert response.status_code == 200
        expected = {'hello': 'world'}
        assert expected == json.loads(response.get_data(as_text=True))

    def test_add_author_op(self):
        new_author = "Test Add Author Op"
        data = json.loads(json.dumps(search_author_op(new_author)))
        assert data == []
        cur_size = json.loads(json.dumps(size_authors_op()))[0][0]
        rows = add_author_op(new_author)
        new_size = json.loads(json.dumps(size_authors_op()))[0][0]
        data = json.loads(json.dumps(search_author_op(new_author)))[0][1]
        assert data == 'Test Add Author Op'
        assert new_size == cur_size + 1

    def test_remove_author_op(self):
        remove_author = "Test Add Author Op"
        data = json.loads(json.dumps(search_author_op(remove_author)))[0][1]
        assert data == 'Test Add Author Op'
        prev_size = json.loads(json.dumps(size_authors_op()))[0][0]
        rows = remove_author_op(remove_author)
        data = json.loads(json.dumps(search_author_op(remove_author)))
        assert data == []
        new_size = json.loads(json.dumps(size_authors_op()))[0][0]
        assert new_size == prev_size - 1

    def test_add_book_op(self):
        new_book_isbn = "123456789101112"
        new_book_title = "Test Book"
        new_book_author = "1"
        new_book_genre = "Horror"
        new_book_pubyear = "1999"
        new_book_synopsis = "Book written in 1999 and is a horror"
        new_book_availability = "1"
        data = json.loads(json.dumps(search_book_op(new_book_isbn)))
        assert data == []
        cur_size = json.loads(json.dumps(size_books_op()))[0][0]
        add_new = add_book_op(new_book_isbn, new_book_title, new_book_author, new_book_genre, new_book_pubyear, new_book_synopsis, new_book_availability)
        new_size = json.loads(json.dumps(size_books_op()))[0][0]
        data = json.loads(json.dumps(search_book_op(new_book_isbn)))[0]
        assert data == ['123456789101112', "Test Book", 1, "Horror", 1999, "Book written in 1999 and is a horror", 1, 1, "Stephen King"]
        assert new_size == cur_size + 1

    def test_remove_book_op(self):
        remove_book = "123456789101112"
        data = json.loads(json.dumps(search_book_op(remove_book)))[0]
        assert data == ['123456789101112', "Test Book", 1, "Horror", 1999, "Book written in 1999 and is a horror", 1, 1, "Stephen King"]
        prev_size = json.loads(json.dumps(size_books_op()))[0][0]
        rows = remove_book_op(remove_book)
        data = json.loads(json.dumps(search_book_op(remove_book)))
        assert data == []
        new_size = json.loads(json.dumps(size_books_op()))[0][0]
        assert new_size == prev_size - 1

    def test_add_librarian_op(self):
        new_lib_name = 'Test Librarian'
        new_lib_email = 'testlibrarian@gmail.com'
        new_lib_phone = '111-111-1111'
        new_is_lib = '1'
        new_lib_password = 'password'
        cur_size = json.loads(json.dumps(size_librarians_op()))[0][0]
        add_new = add_librarian_op(new_lib_name, new_lib_email, new_lib_phone, new_is_lib, new_lib_password)
        new_size = json.loads(json.dumps(size_librarians_op()))[0][0]
        assert new_size == cur_size + 1

    def test_remove_librarian_op(self):
        remove_lib = "testlibrarian@gmail.com"
        prev_size = json.loads(json.dumps(size_librarians_op()))[0][0]
        rows = remove_librarian_op(remove_lib)
        new_size = json.loads(json.dumps(size_librarians_op()))[0][0]
        assert new_size == prev_size - 1

    def test_add_user_op(self):
        new_user_name = "Test User"
        new_user_email = "testuser@gmail.com"
        new_user_phone = "222-222-2222"
        cur_size = json.loads(json.dumps(size_users_op()))[0][0]
        add_new = add_user_op(new_user_name, new_user_email, new_user_phone)
        new_size = json.loads(json.dumps(size_users_op()))[0][0]
        assert new_size == cur_size + 1

    def test_remove_user_op(self):
        remove_lib = "testuser@gmail.com"
        prev_size = json.loads(json.dumps(size_users_op()))[0][0]
        rows = remove_user_op(remove_lib)
        new_size = json.loads(json.dumps(size_users_op()))[0][0]
        assert new_size == prev_size - 1

    def test_search_exact_author_op(self):
        author = json.loads(json.dumps(search_author_op("Stephen King")))[0]
        assert author == [1, 'Stephen King']

    def test_add_unique_book_op(self):
        new_book_isbn = "111111111111112"
        new_book_title = "Unique Books"
        new_book_author = "3"
        new_book_genre = "Humor"
        new_book_pubyear = "1999"
        new_book_synopsis = "Book written in 1999 and is a humor"
        new_book_availability = "1"
        # cur_size = json.loads(json.dumps(size_books_op()))[0][0]
        # add_new = add_book_op(new_book_isbn, new_book_title, new_book_author, new_book_genre, new_book_pubyear, new_book_synopsis, new_book_availability)
        # new_size = json.loads(json.dumps(size_books_op()))[0][0]
        # assert new_size == cur_size + 1
    
    def test_search_exact_book_op(self):
        books = json.loads(json.dumps(search_book_op("Unique Books")))[0]
        assert books == ['111111111111112', "Unique Books", 3, "Humor", 1999, "Book written in 1999 and is a humor", 1, 3, "Emily Bronte"]

    def test_search_book_op(self):
        book_1 = json.loads(json.dumps(search_book_op("Unique Book")))[0]
        assert book_1 == ['111111111111111', "Unique Book", 3, "Humor", 1999, "Book written in 1999 and is a humor", 1, 3, "Emily Bronte"]
        book_2 = json.loads(json.dumps(search_book_op("Unique Books")))[0]
        assert book_2 == ['111111111111112', "Unique Books", 3, "Humor", 1999, "Book written in 1999 and is a humor", 1, 3, "Emily Bronte"]



if __name__ == "__main__":
    unittest.main()