#include <iostream>
#include <vectors>
#include <string>
#include <store.h>
#include <grocery.h>

using namespace std;

int main(){
  cout<<"Grocery Store:"<<endl;
  store hyve = store(5,"HyVee");
  grocery test = grocery();

  hyve.print();
  test.print();
  return 0;
}
