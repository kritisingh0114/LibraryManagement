import json
import pytest
from backend.DB_Operations import (
    add_author_op,
    add_book_op,
    add_librarian_op,
    add_user_op,
    search_author_op,
    search_book_op,
)

def test_add_author(new_author):
    result = add_author_op(new_author)
    assert result == 1