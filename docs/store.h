//Store Header
#ifndef STORE_H
#define STORE_H

class store{

  int max_aisles;
  string name;

public:

  store(int i, string n);

  void set_name(string n);
  void set_max_aisles(int i);

  int get_name();

  void print();
};

#endif
