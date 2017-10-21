//Store Class

#include<iostream>
#include <vector>
#include <stirng>
#include <store.h>

using namespace std;

store::store(int i, string n){
	max_aisles = i;
	name = n;
}
void store::set_name(string n){
	name = n;
}
void store:set_max_aisles(int i){
	max_aisles = i;
}
string store::get_name(){
	return name;
}
int store::get_max_aisles(){
	return max_aisles;
}
