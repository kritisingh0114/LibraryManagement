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
        cur_size = size_authors_op()
        rows = add_author_op(new_author)
        json_data_new_size = json.dumps(size_authors_op())
        assert json_data_new_size == '[[27]]'

    def test_remove_author_op(self):
        remove_author = "Test Add Author Op"
        prev_size = size_authors_op()
        rows = remove_author_op(remove_author)
        new_size = size_authors_op()
        json_data_prev_size = json.dumps(prev_size)
        json_data_new_size = json.dumps(new_size)
        assert json_data_prev_size == '[[27]]'
        assert json_data_new_size == '[[26]]'






if __name__ == "__main__":
    unittest.main()