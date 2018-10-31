 # Begin tdd
import words ,grade
#import grade
import unittest

class TestDates(unittest.TestCase):

	def test_one(self):
		print("i'm in test_one")

	def test_two(self):
		print("I'm in test two")

	def hello(self):
		print("Hello World")

	def test_words(self):
		self.assertEqual('Larry.Shumlich@mail.com', words.email('Larry', 'Shumlich'))
		self.assertEqual('Jack.Ross@mail.com', words.email('Jack', 'Ross'))
		self.assertEqual('Dale.James@mail.com', words.email('Dale', 'James'))
		self.assertEqual('Last.First@mail.com', words.email('Last', 'First'))
	def test_grade(self):
		self.assertEqual('A',grade.gradeTranslate(100))
		self.assertEqual('A',grade.gradeTranslate(80))
		self.assertEqual('A',grade.gradeTranslate(90))

		self.assertEqual('B',grade.gradeTranslate(79))
		self.assertEqual('B',grade.gradeTranslate(60))
		self.assertEqual('B',grade.gradeTranslate(65))

		self.assertEqual('C',grade.gradeTranslate(59))
		self.assertEqual('C',grade.gradeTranslate(55))
		self.assertEqual('C',grade.gradeTranslate(50))

		self.assertEqual('F',grade.gradeTranslate(49))
		self.assertEqual('F',grade.gradeTranslate(0))
		self.assertEqual('F',grade.gradeTranslate(20))

