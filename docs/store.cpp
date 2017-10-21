#include<iostream>
#include <vector>
#include <stirng>

using namespace std;

class grocery{
	int aisle;
	string section;
	string item;
public:
	grocery() {
		aisle = 0;
		section = "";
		item = "";
	}
	grocery(stirng i, int a, string s) {
		aisle = a;
		section = s;
		item = i;
	}
	void set_aisle(int a){
		aisle = a;
	}
	void set_item(string i){
		item = i;
	}
	void set_section(string s){
		section = s;
	}
	int get_aisle(){
		return aisle;
	}
	string get_item(){
		return item;
	}
	string get_section(){
		return section;
	}
};

class store{
	int max_aisles;
	string name;
public:
	store(int i, string n){
		max_aisles = i;
		name = n;
	}
	void set_name(string n){
		name = n;
	}
	void set_max_aisles(int i){
		max_aisles = i;
	}
	string get_name(){
		return name;
	}
	int get_max_aisles(){
		return max_aisles;
	}
}
