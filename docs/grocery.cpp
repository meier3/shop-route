//Grocery Class

#include<iostream>
#include <vector>
#include <stirng>
#include <grocery.h>

using namespace std;

grocery::grocery() {
	aisle = 0;
	section = "";
	item = "";
}
grocery::grocery(string i, int a, string s) {
	aisle = a;
	section = s;
	item = i;
}
void grocery::set_aisle(int a){
	aisle = a;
}
void grocery::set_item(string i){
	item = i;
}
void grocery::set_section(string s){
	section = s;
}
int grocery::get_aisle(){
	return aisle;
}
string grocery::get_item(){
	return item;
}
string grocery::get_section(){
	return section;
}

void grocery::print(){
  cout<<"Aisle: "<<aisle<<endl;
  cout<<"Section: "<<section<<endl;
  cout<<"Item: "<<item<<endl;
}
