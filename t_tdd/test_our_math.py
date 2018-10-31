# Begin tdd
import my_math
import unittest


class TestDates(unittest.TestCase):

	def test_one(self):
		print("i'm in test_one")

	def test_two(self):
		print("I'm in test two")

	def test_three(self):
		a = 2
		b = 3
		print("test two random numbers")
		self.assertEqual(my_math.multiple(a, b), 6)
