//Grocery Header
#ifndef GROCERY_H
#define GROCERY_H

class grocery{

  int aisle;
	string section;
	string item;

public:

  grocery();
  grocery(string i, int a, string s);

  void set_aisle(int a);
  void set_item(string i);
  void set_selection(string s);
  
  int get_aisle();
  string get_item();
  string get_section();
};

#endif
