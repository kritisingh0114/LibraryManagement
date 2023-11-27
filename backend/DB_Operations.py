import pymysql
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