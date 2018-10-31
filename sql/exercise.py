import psycopg2

class Client():
	
	def __init__(self, list):
		self.id, self.name, self.email, self.birthplace, self.birthyear=list


conn = psycopg2.connect("dbname=evolveu")
cur = conn.cursor()
cur.execute ('SELECT * FROM CLIENTS')
clientlist = cur.fetchall()

client_objects = []

for client in clientlist:
	client_objects.append(Client(client))

for clients in client_objects:
	print(clients.id, clients.name)	
cur.close()
conn.close()